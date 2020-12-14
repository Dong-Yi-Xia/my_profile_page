import React, {useState, useEffect} from 'react'
import '../Component_css/SectionLinks.css'
import {NavLink} from 'react-router-dom'




function addResponse() {
    let x = document.querySelector(".topnav");
    x.classList.toggle("responsive")
}

function SectionLinks (props) {
    let [navigate, setNavigate] = useState("54")



    console.log(props)
    return (
        <div id="SectionLinks"> 
            <div className="topnav" onClick={addResponse}>     
                <NavLink to="/" className="active myName">  Dong Xia </NavLink>

                <div class="dropdown">  
                    <a href="/" class="dropbtn"> HOME </a>
                    <div class="dropdown-content">
                        <a href="/" > Home </a>
                        <a href="/#about"> About </a>
                        <a href="/#skills"> Skills </a>
                        <a href="/#videos"> Videos </a>
                        <a href="/#contact"> Contact </a>
                    </div>    
                </div>

                <NavLink to="/Projects"> Projects </NavLink>
                <NavLink to="/GameProjects"> Games </NavLink>
                <a className="icon" >
                    <i className="fa fa-bars"></i>
                </a>
            
            </div>

        </div>
    )
}

export default SectionLinks