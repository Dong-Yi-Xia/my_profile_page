import React from 'react'
import '../Component_css/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'

function Contact (){
    return(
        <div className="contactSection">
            <a href="https://github.com/Dong-Yi-Xia" target="_blank" class="fa fa-github"></a>
            <a href="https://www.linkedin.com/in/dong-xia-tennis-4040/"  target="_blank" class="fa fa-linkedin"></a>
            <a href="https://dong-xia.medium.com/" target="_blank" class="fa fa-medium"></a>
            <a href="" class="fa fa-youtube-play"></a>
            <a href="" class="fa fa-file-pdf-o"></a>

            <a href="#home">
                <button className="returnButton"> <FontAwesomeIcon icon={faAngleDoubleUp} /></button>
            </a>

        </div>
    )
}

export default Contact