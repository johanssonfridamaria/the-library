import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Navigation/Footer';
import SignIn from './components/Navigation/Admin/SignIn';


function App() {
  return (
    <BrowserRouter >
    <Navbar />


    <Switch >
      <Route exact path="/" component={}/>
      <Route exact path="/signin" component={SignIn}/>
    </Switch>

    <Footer />
    </BrowserRouter>
  );
}

export default App;
