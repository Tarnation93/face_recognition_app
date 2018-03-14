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

const initialState = {
      input : '',
      imageurl : '', 
      box : {} ,
      route: 'SignIn',
      isSignedIn: false,
      
      user:{
          id: '',
         name: '',
         email: '',
         entries: " ",
         joined: " ",
        }
      }

  
const app = new Clarifai.App({
 apiKey: 'f030ba687e9c42d6baec8d7d3a12dda9'
});

class App extends Component {
  constructor()
  {
    super();
    this.state = initialState
    }
  
  loadUser = (data) => {
    this.setState({user:{
          id: data.id,
         name: data.name,
         email: data.email,
        entries: data.entries,
         joined: data.joined
    }})
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
      
  		this.setState(initialState)}
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
    this.setState({imageurl: this.state.input})   ;
    app.models
    .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)		
    .then (response => {
      if (response) {
    
      fetch('https://cryptic-springs-95105.herokuapp.com/image',{
        'method':'put',
        "headers":{'Content-Type': 'application/json'},
        "body": JSON.stringify({
         id: this.state.user.id
       })
      
  
      
    })
    .then (response=>response.json()
    .then(count=> {
      this.setState(Object.assign(this.state.user, {entries:count}))
      //vratiti se :D
        
      
    })
      )
  }
     this.faceBox(this.faceLocation(response))
})

    .catch (err => console.log(err,''))
  }

  render() {
 const {isSignedIn,route,box,imageurl} = this.state

    return (
      <div className="App">
        <Particles className = 'particles'
              params = {particlesOptions()} 
        />
          <Navigation isSignedIn = {isSignedIn} OnRouteChange = {this.OnRouteChange}/>

          {route === 'SignIn'?
           <SignInForm loadUser = {this.loadUser} OnRouteChange = {this.OnRouteChange}/>
     : route === 'register' ?
     <Register loadUser = {this.loadUser} OnRouteChange = {this.OnRouteChange}/>
     :route === 'signout' ?
     <SignInForm loadUser = {this.loadUser} OnRouteChange = {this.OnRouteChange}/>
         :<div>
  	         <Logo/>
	         <Ranks name = {this.state.user.name} entries= {this.state.user.entries}/> 
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
