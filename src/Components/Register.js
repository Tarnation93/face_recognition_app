import React from 'react' ;


const Register = ({OnRouteChange,	}) => {
	return(
    <article className=" idemo br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
		<main className="pa4 black-80 ">
		  <div className="measure ">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f4 fw6 ph0 mh0">Register</legend>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="email-address"  id="name"/>
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
		        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
		      </div>

		    </fieldset>
		    <div className="lh-copy mt3">
		    <p   onClick = {() => OnRouteChange('SignIn')} className=" pointer f6 link dim black db">SignUp</p>
		    </div>
		  </div>
		</main>
</article>
)
}

export default Register; 