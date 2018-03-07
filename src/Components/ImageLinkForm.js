import React from 'react' ;
import './ImageLinkForm.css'

const ImageLinkForm = ({OnClickChange, OnInputChange}) => {
    return(
        <div>
            <p className='f3 white'> FACEHUNTER</p>
            <div className = 'center'>
            	<div className = 'form pa4 br3 shadow-5'>
                	<input 
                        onChange = {OnInputChange} 
                        type = "text" 
                        className= 'f4 pa2 w-70 center'
                    />
                	<button 
                        onClick = {OnClickChange} 
                        className=' w-30 pa2 grow f4 link ph3 pv2 dib white bg-blue'>
                    Hunt</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;