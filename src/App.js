// import logo from './logo.svg';
import './App.css';
import Footer from './Component/Footer'
import SectionLinks from './Component/SectionLinks'
import About from './Component/About'


function removeResponse() {
  let x = document.querySelector(".topnav");
  x.classList.remove("responsive")
}

function App() {
  return (
    <div className="App" >

      <header>
        <SectionLinks/>
        <div className="App-header" onClick={removeResponse}>
            <div className="imageContainer">
               <img src='https://res.cloudinary.com/dfqzcsl8x/image/upload/v1606943031/Project4/profilePic_ayevjz.png' className="profilePic" alt="profilePic" />
            </div>
        </div>
      </header>
      

      <div className="mainbody" onClick={removeResponse}>
        <div className="bgimg1" id="about"> 
          <h1 className="bgtitle"> ABOUT </h1> 
        </div>
        <About/>
        <div className="testing" > </div>

        <div className="bgimg2" id="projects"> 
          <h1 className="bgtitle"> PROJECTS </h1> 
        </div>

        <div className="testing" > </div>

      </div>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
