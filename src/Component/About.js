import React from 'react'
import '../Component_css/About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'

function About (){
    
   return(
        <div className="aboutSection">
            <h2>Who Is Dong Xia?</h2>
            <p>To summarize Dong. He is like a flowing water ever changing to suit his environment. He can be calm and gentle or he can be fierce and powerful removing all obstacles in his path. Dong loves to explore the unknown territories to enrich his knowledge. Balance is the key, a full circle of perfection, limiting any extreme points. He brings life and energy to his surroundings, creating happiness and laughter. </p>

            <h2>Past Experiences</h2>
            <p>Dong has been in the finance and accounting industry. Micromanaging financial reports had prevented reporting errors, saving the company time and effort in finding discrepancies. He also has been in the hospitality industry. Managing customers’ satisfaction and coordinating with team members to optimize the flow of information. He had educated many clients in the healthcare industry. Demonstrating competency and translating industry’s jargon into common speech that ordinary people could comprehend. In all industries that he had been to he always exercised the utmost due diligence and earned the trust of his clients and further raised the companies’ reputation.</p>

            <h2>Current Path</h2>
            <p>Currently, Dong has transitioned into the software industry. He had completed a 5 month intensive bootcamp program at Flatiron School and developed the core essential for a software engineer. Demonstrated the understanding of new materials and grasping the conceptions within a short time frame. Performed critical thinking and logically explaining how he reached his conclusion. He had built 5 functional applications, 3 with a partner and 2 on his own. He plans to build applications that will bring joy and make people’s life easier.  </p>

            <h2>Favorite Sport</h2>
            <p>Dong’s loves playing tennis. He has been playing tennis since high school. His current National Tennis Rating is about a 4.0-4.5. He made a lot of rivals and friends on the court. You can find him at the National Tennis Center on the outdoor courts during the weekends. </p>

            <h2>Other Facts</h2>
            <p>A method he used to destress or for just fun, is enjoy watching some anime and letting his imagination go wild. His favorite genre of film is fantasy, comedy and martial arts. He has some martial experiences, mostly at that of the beginner level. He is more than happy to accept a DUEL in a video game (Super Smash Bros Ultimate). </p>

            <a href="#home">
                <button className="returnButton"> <FontAwesomeIcon icon={faAngleDoubleUp} /></button>
            </a>
        

        </div>
   )
}

export default About