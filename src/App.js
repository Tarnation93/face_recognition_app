import React, { Component } from 'react';
import Navigation from "./Components/Navigation.js"
import './App.css';
import Logo from './Components/Logo';
import ImageLinkForm from './Components/ImageLinkForm'
import Ranks from './Components/Ranks';
import Particles from 'react-particles-js';
import FaceRec from './Components/FaceRec';
import Clarifai from 'clarifai';
import particlesOptions from './Components/particlesOptions' ;
import SignInForm from './Components/SignInForm'
import Register from './Components/Register'



  
const app = new Clarifai.App({
 apiKey: 'aabda0a6836d4cc29fc4bd112515e845'
});

class App extends Component {
  constructor()
  {
    super();
    this.state = {
      input : '',
      imageurl : '', 
      box : {} ,
      route: 'SignIn',
      isSignedIn: false,
    }
  }

  faceLocation = (data) => {
    const pictureSize = document.getElementById('picc');
    const clarifaiPicture = data.outputs[0].data.regions[0].region_info.bounding_box;
    const width = Number(pictureSize.width);
    const height = Number(pictureSize.height);
    return {
      leftCol : width * clarifaiPicture.left_col,
      topRow : height * clarifaiPicture.top_row,
      rightCol : width - (clarifaiPicture.right_col * width),
      bottomRow : height - (clarifaiPicture.bottom_row * height)
    }
  }
OnRouteChange = (route) => {
    if (route === 'signout'){
      this.setState({isSignedIn: false})
  		this.setState({route:'SignIn'})}
    else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
	
    this.setState({route: route});
  }
  faceBox = (box) =>
  {
    
    this.setState({box: box});
  }
  OnInputChange = (event) =>
  {
    this.setState({input: event.target.value });
  }
  OnClickChange = () =>
  {
    this.setState({imageurl: this.state.input});
    app.models
    .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)		
    .then (response => this.faceBox(this.faceLocation(response)))
    .catch (err => console.log(err))
  }

  render() {
 const {isSignedIn,route,box,imageurl} = this.state

    return (
      <div className="App">
        <Particles className = 'particles'
              params = {particlesOptions()} 
        />
          <Navigation isSignedIn = {isSignedIn} OnRouteChange = {this.OnRouteChange}/>

          {this.state.route === 'SignIn'?
           <SignInForm OnRouteChange = {this.OnRouteChange}/>
     : route === 'register' ?
     <Register OnRouteChange = {this.OnRouteChange}/>
     :route === 'signout' ?
     <SignInForm OnRouteChange = {this.OnRouteChange}/>
         :<div>
  	         <Logo/>
	        <Ranks/>
	        <ImageLinkForm 
	          OnClickChange = {this.OnClickChange} 
	          OnInputChange = {this.OnInputChange} 
	        />
	        <FaceRec box={box} imageurl = {imageurl}/>
        </div>
    	}
      </div>
    );
  }
}
export default App;
