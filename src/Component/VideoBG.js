import React from 'react'
import '../Component_css/VideoBG.css'

function VideoBG(){
    return(
        <div>
            <video src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/blurry-trees.mov" autoplay loop playsinline muted> </video> 
        </div>
    )
}

export default VideoBG