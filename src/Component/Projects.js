import React from 'react'
import '../Component_css/Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-bootstrap/Carousel'


function Projects (){

    return(
        <>
        <div className="sectionimg5" id="projects"> 
            <h1 className="sectiontitle"> PROJECTS </h1> 
        </div>

        <div className="projectsSection">

            <div className="slides project5">
                <h4>UnderCover Restaurant Inspector App</h4>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1606335986/Project4/p5-01_x568jc.png"
                        alt="01 slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1606335983/Project4/p5-02_ual4on.png"
                        alt="02 slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1606335985/Project4/p5-03_eojxxc.png"
                        alt="03 slide"
                         />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1606335981/Project4/p5-04_xmqfja.png"
                        alt="04 slide"
                         />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1606335980/Project4/p5-05_deolf8.png"
                        alt="05 slide"
                         />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1606335973/Project4/p5-06_hv1hvk.png"
                        alt="06 slide"
                         />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1606335976/Project4/p5-07_tv6v1c.png"
                        alt="07 slide"
                         />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1606335982/Project4/p5-08_h1gv5p.png"
                        alt="08 slide"
                         />
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="slides project4">
                <h4>My Waifu and Husbando Dating App</h4>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1603460028/Project4/01_n595ve.png"
                        alt="01 slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1603460037/Project4/02_fpuwqw.png"
                        alt="02 slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1603460042/Project4/03_spy8ia.png"
                        alt="03 slide"
                         />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1603460017/Project4/04_uvgsxy.png"
                        alt="04 slide"
                         />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1603460032/Project4/06_if4t8t.png"
                        alt="05 slide"
                         />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1603460025/Project4/07_s13pww.png"
                        alt="06 slide"
                         />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1603460040/Project4/08_kkrzh3.png"
                        alt="07 slide"
                         />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1603460041/Project4/09_htwlg5.png"
                        alt="08 slide"
                         />
                    </Carousel.Item>
                </Carousel>
            </div>


  
        </div>
        </>
    )
}

export default Projects