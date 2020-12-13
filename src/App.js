// import logo from './logo.svg';
import './App.css';
import Footer from './Component/Footer'
import SectionLinks from './Component/SectionLinks'
import About from './Component/About'
import Projects from './Component/Projects'
import Skills from './Component/Skills'
import Contact from './Component/Contact'
// import VideoBG from './Component/VideoBG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'


function removeResponse() {
  let x = document.querySelector(".topnav");
  x.classList.remove("responsive")
}

function App() {
  return (
    <div className="App" >
   
      <header id="home">
        <SectionLinks/>
        <div className="App-header" onClick={removeResponse}>
            <div className="imageContainer">
               <img src='https://res.cloudinary.com/dfqzcsl8x/image/upload/v1606943031/ProfileProject/profilePic_ayevjz.png' className="profilePic" alt="profilePic" />
            </div>
        </div>
      </header>
      

      <div className="mainbody" onClick={removeResponse}>

        <div className="sectionimg1" id="about"> 
          <h1 className="sectiontitle"> ABOUT </h1> 
        </div>
        <About/>
    
        <div className="sectionimg2" id="projects"> 
          <h1 className="sectiontitle"> PROJECTS </h1> 
        </div>
        <Projects/>

        <div className="sectionimg3" id="skills"> 
          <h1 className="sectiontitle"> Skills </h1> 
        </div>
        <Skills/>

        <div className="sectionimg4" id="contact"> 
          <h1 className="sectiontitle"> Contact </h1> 
        </div>
        <Contact/>
      

      </div>

      <footer>
        <a href="#home">
            <button className="returnButtonMain"> <FontAwesomeIcon icon={faAngleDoubleUp} /></button>
        </a>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
