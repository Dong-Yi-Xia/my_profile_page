import React from 'react'   
import About from './About'
// import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'


function MainHome (){
    return(
        <div>
            <div className="sectionimg1" id="about"> 
              <h1 className="sectiontitle"> ABOUT </h1> 
            </div>
            <About/>
        
            {/* <div className="sectionimg2" id="projects"> 
             <h1 className="sectiontitle"> PROJECTS </h1> 
            </div>
            <Projects/> */}

            <div className="sectionimg3" id="skills"> 
              <h1 className="sectiontitle"> Skills </h1> 
            </div>
            <Skills/>

            <div className="sectionimg4" id="contact"> 
              <h1 className="sectiontitle"> Contact </h1> 
            </div>
            <Contact/>
        </div>
    )
}

export default MainHome