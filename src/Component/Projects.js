import React from 'react'
import '../Component_css/Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-bootstrap/Carousel'


function Projects (){
    return(
        <div className="projectsSection">

            <div className="slides project5">
                <h4>Project5</h4>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1602968679/sample.jpg"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1602968679/sample.jpg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1602968679/sample.jpg"
                        alt="Third slide"
                         />
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="slides project4">
                <h4>Project4</h4>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1602885275/samples/cloudinary-group.jpg"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1602885275/samples/cloudinary-group.jpg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1602885275/samples/cloudinary-group.jpg"
                        alt="Third slide"
                         />
                    </Carousel.Item>
                </Carousel>
            </div>


            <a href="#home">
                <button className="returnButton"> <FontAwesomeIcon icon={faAngleDoubleUp} /></button>
            </a>
  
        </div>
    )
}

export default Projects