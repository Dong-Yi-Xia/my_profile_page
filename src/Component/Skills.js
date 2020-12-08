import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'


function Skills (){
    return(
        <div className="skillsSection">

            <h2>Software Skills: </h2>
            <p>HTML, CSS, JavaScript, Ruby, Rails, React, Redux, SQL, PostgreSQL, BootStrap, Semantic UI, Git, REST API</p>

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