import React from 'react' ;
import './facerec.css'

const FaceRec = ({imageurl, box}) => {
    return(
        <div className=' center ma2'>
            <div className = 'facerec absolute mt3'>
                <img id = 'picc' alt="pickolazljiva" src = {imageurl} width = '500px' height = 'auto'/>
                <div className='bounding-box' style = {{top:box.topRow, right:box.rightCol, bottom:box.bottomRow, left:box.leftCol }}></div>
            </div>
        </div>
    )
}

export default FaceRec; 