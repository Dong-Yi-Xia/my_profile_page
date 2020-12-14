import React from 'react'
import '../Component_css/VideoBG.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'

function VideoBG(){
    return(
        <div className="videoSection">
            <h1> Some Video</h1>
            <a href="#home">
                <button className="returnButton"> <FontAwesomeIcon icon={faAngleDoubleUp} /></button>
            </a>
        </div>
    )
}

export default VideoBG