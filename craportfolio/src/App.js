import logo from './logo.svg';
import './App.css';
import DigiNav from './components/DigiNav';
import About from './components/About';
import Acads from './components/Acads';
import TechSkills from './components/TechSkills';
import Projects from './components/Projects';
import Achieves from './components/Achieves';
import Contact from './components/ContactMe';




function App() {

  
  return (<>
    <div className="App">
      <DigiNav/>
      <div className='container-fluid'>
         {/* get each component and add it here */}
         <About/>
         <Acads/>
         <TechSkills/>
         <Projects/>
         <Achieves/>
         <Contact/>
      </div>
    </div>
    </>
  );
}

export default App;
