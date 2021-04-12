import React from 'react'
import '../Component_css/About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'

function About (){
    
   return(
        <div className="aboutSection">
            <h2>Who Is Dong Xia?</h2>
            <p>Dong is someone who can always be relied upon. He is trusted by everyone he knows. Knowing that he will always keep his promise. Any expectations will be met or exceeded. He is well liked, his personality includes being friendly, smart, funny, hard working, easy to talk to and open mindedness. He is also a clean freak. Will hate it when things are a mess and everything is in disarray. However, he isn’t afraid to get dirty when the job/adventure calls for it.       </p>

            <h2>Why Software Development?</h2>
            <p>I got interested in software development back in high school when my friend introduced me to an online game called MapleStory. It was then when I learned how to hack. It made me feel special that I was able to do something that wasn't available through normal gameplay. I spent long hours reading forums and researching how to work the hack engines and toolkits.</p>

            <p>That dream didn’t last long since my parents banned me from continuing that path. I ended up working in the accounting industry as what my parents wished for. I noticed that my parents were getting older and experiencing health issues. I wish to help them, so I studied massage therapy and worked in the health industry. During their time off, I gave them private in house massage treatments.</p>

            <p>About three or four months before the COVID-19 pandemic. I got a message from my cousin about how he was working as a software engineer for Amazon, which got me thinking about what I really wanted in life. I did some research and took some short courses in software development. I found it quite enjoyable.</p>

            <p>Then the pandemic hit and I was laid off. I took this golden opportunity and invested all of my time to learn how to code. I graduated from Flatiron School Bootcamp at the end of 2020. </p>

            <h2>The Future </h2>
            <p>Having been exposed to only a tiny portion of the software industry. My end goal is to be a full stack developer in all the languages. “Aim big and set small goals.” Knowing the impossible challenges that are ahead, is what makes solving them fun. </p>
            
            <p>Currently I’m interested in learning more about the future of AR and VR technology. 
            </p>


            <h2>Other Facts</h2>
            <ul>
                <li>I love playing tennis. My current National Tennis Rating is about a 4.0-4.5. </li>
                <li>I really enjoy watching anime and reading manga.</li>
                <li>I love watching and doing martial arts.</li>
                <li>I am happy to take on any challengers in Super Smash Bros Unlimited.</li>
            </ul>

            <a href="#home">
                <button className="returnButton"> <FontAwesomeIcon icon={faAngleDoubleUp} /></button>
            </a>
        

        </div>
   )
}

export default About