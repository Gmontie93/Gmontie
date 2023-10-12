//import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './Navbar.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
