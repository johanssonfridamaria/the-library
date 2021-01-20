import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Navigation/Footer';


function App() {
  return (
    <BrowserRouter >
    <Navbar />


    <Footer />
    </BrowserRouter>
  );
}

export default App;
