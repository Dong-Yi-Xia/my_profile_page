// import logo from './logo.svg';
import './App.css';
import Footer from './Component/Footer'
import SectionLinks from './Component/SectionLinks'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <SectionLinks/>
      </header>

      

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
