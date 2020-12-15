import React from 'react'
import '../Component_css/VideoBG.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import ReactPlayer from 'react-player'

function VideoBG(props){
 

    return(
        <div className="videoSection">
          
            <div className="videoContainer">
                <ReactPlayer className="singleVideo"
                url={'https://youtu.be/2wb75JG1C4A'} 
                width={"100"}
                muted={true}
                volume={.2}
                controls={true} />

            
            </div>
            {/* <iframe width="560" height="315" src="https://youtu.be/2wb75JG1C4A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe> */}

            <a href="#home">
                <button className="returnButton"> <FontAwesomeIcon icon={faAngleDoubleUp} /></button>
            </a>
        </div>
    )
}

export default VideoBG