import React from 'react'
import '../Component_css/Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'


function Skills (){
    return(
        <div className="skillsSection">

            <h2>Software Skills: </h2>
            <p>  
            ● Ruby		● Rails		● SQL		● PostgreSQL       ● React	   ● Redux	   ● Agile
            ● JavaScript	● NodeJS	● Express	● MongoDB	    ● Mongoose	   ● REST API	   ● MVC
            ● HTML	● CSS		● BootStrap 	● SemanticUI	    ● GitHub	   ● Heroku	   ● Firebase
            ● OOP		● Debugging	● Algorithm	● Management 
            </p>

            <h2>Healthcare Skills: </h2>
            <p>Consultation, Client Assessment, Empathy, Confidence, Communication, Reporting, Physical Stamina, Detail Oriented </p>

            <h2>General Skills: </h2>
            <p>Team Player, Multitasking, Positive Attitude, Flexible, Growth Mindset, Leadership, Critical Thinking, Friendly, Time Management, Creative, Integrity    </p>

            <a href="#home">
                <button className="returnButton"> <FontAwesomeIcon icon={faAngleDoubleUp} /></button>
            </a>

        </div>
    )
}

export default Skills