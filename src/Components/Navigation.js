import React from "react";

const Navigation = ({OnRouteChange,isSignedIn}) => {

	if (isSignedIn){
return (
	<nav>
		<p   onClick = {() => OnRouteChange('signout')}  
		className = '  f3 i dark-blue tl pointer link dim '>Sign Out</p>
	</nav>
)
	}else  
		return(
		<nav>
		<p   onClick = {() => OnRouteChange('SignIn')}  
		className = '  f3 i dark-blue tl pointer link dim '>Sign In</p>
		<p   onClick = {() => OnRouteChange('register')}  
		className = '  f3 i dark-blue tl pointer link dim '>Register</p>
		</nav>	
		) 

}

export default Navigation;