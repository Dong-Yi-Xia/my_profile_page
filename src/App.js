// import logo from './logo.svg';
import './App.css';
import Footer from './Component/Footer'
import SectionLinks from './Component/SectionLinks'
import MainHome from './Component/MainHome'
import Projects from './Component/Projects'
import GameProjects from './Component/GameProjects'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { Route, Switch } from 'react-router-dom'

import Calculator from './Component/Games/Calculator'

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
        <Switch>
           <Route path="/" exact component={MainHome} />
           <Route path="/Projects" exact component={Projects} />
           <Route path="/GameProjects" component={GameProjects} />
        </Switch>  

        {/* <Calculator/> */}
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
