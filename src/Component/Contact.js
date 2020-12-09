import React from 'react'
import '../Component_css/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'

function Contact (){
    return(
        <div className="contactSection">
            <div>
                <a href="https://github.com/Dong-Yi-Xia" target="_blank" class="fa fa-github"></a>
                <p>Github</p>
            </div>

            <div>
               <a href="https://www.linkedin.com/in/dong-xia-tennis-4040/"  target="_blank" class="fa fa-linkedin"></a>
               <p>Linkedin</p>
            </div>

            <div>
                 <a href="https://dong-xia.medium.com/" target="_blank" class="fa fa-medium"></a>
                 <p>Medium</p>
            </div>

            <div>
                 <a href="https://www.youtube.com/channel/UCa890fNFidDb2UZGzpAmDCw?view_as=subscriber" target="_blank" class="fa fa-youtube-play"></a>
                 <p>Youtube</p>
            </div>

            <div>
                <a href="https://drive.google.com/file/d/1b43eTSd8mV8UzoJp26_3xiicC50FhB9y/view?usp=sharing" target="_blank" class="fa fa-file-pdf-o"></a>
                <p>Resume</p>
            </div>

            <div>
                <a href="mailto:dong7777xia@gmail.com"  class="fa fa-envelope-o"></a>
                <p>E-Mail</p>
            </div>

            <a href="#home">
                <button className="returnButton"> <FontAwesomeIcon icon={faAngleDoubleUp}/></button>
            </a>

        </div>
    )
}

export default Contact