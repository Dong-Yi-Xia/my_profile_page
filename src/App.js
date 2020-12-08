// import logo from './logo.svg';
import './App.css';
import Footer from './Component/Footer'
import SectionLinks from './Component/SectionLinks'
import About from './Component/About'
import Skills from './Component/Skills'
import Contact from './Component/Contact'


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
               <img src='https://res.cloudinary.com/dfqzcsl8x/image/upload/v1606943031/Project4/profilePic_ayevjz.png' className="profilePic" alt="profilePic" />
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
        <div className="testing"></div>

        <div className="sectionimg3" id="skills"> 
          <h1 className="sectiontitle"> Skills </h1> 
        </div>
        <Skills/>

        <div className="sectionimg3" id="contact"> 
          <h1 className="sectiontitle"> Skills </h1> 
        </div>
        <Contact/>
      

      </div>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
