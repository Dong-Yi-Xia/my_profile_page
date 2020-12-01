import React from 'react'



function addResponse() {
    let x = document.querySelector(".topnav");
    x.classList.toggle("responsive")
  }


function SectionLinks () {
    return (
        <div id="SectionLinks"> 

            <div class="topnav">
                <a href="#" class="active">Home</a>
                <a href="#">Bio</a>
                <a href="#">Projects</a>
                <a href="#">Experiences</a>
                <a href="#">Education</a>
                <a href="javascript:void(0);" class="icon" onClick={addResponse}>
                    <i class="fa fa-bars"></i>
                </a>
            </div>

        </div>
    )
}

export default SectionLinks