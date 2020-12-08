import React from 'react'
import '../Component_css/SectionLinks.css'



function addResponse() {
    let x = document.querySelector(".topnav");
    x.classList.toggle("responsive")
  }


function SectionLinks () {
    return (
        <div id="SectionLinks"> 
        
            <div className="topnav" onClick={addResponse}>     
                <a  href="#home"  className="active myName"> Dong Xia </a>
                <a  href="#home"> Home </a>
                <a  href="#about"> About </a>
                <a  href="#projects"> Projects </a>
                <a  href="#skills"> Skills </a>
                <a  href="#"> Education </a>
                <a className="icon" >
                    <i className="fa fa-bars"></i>
                </a>
            </div>

        </div>
    )
}

export default SectionLinks