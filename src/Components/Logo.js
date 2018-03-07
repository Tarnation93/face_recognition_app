import React from 'react' ;
import Tilt from 'react-tilt';
import './Logo.css'
import Krang from './krang.png'
const Logo = () => {
	return(
		<div className = 'tarot '>
			<Tilt className="Tilt br4 shadow-2" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner"><img style={{paddingTop: '10px'}} alt="srederu" src={Krang}/> </div>
			</Tilt>
		</div>
	)
}

export default Logo;