import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Navigation/Footer';
import SignIn from './views/Admin/SignIn';
import LandingPage from './views/LandingPage';
import Mangage from './views/Manage';
import { ProtectedRoute } from './routes/ProtectedRoute'


function App() {
  return (
    <BrowserRouter >
      <Navbar />


      <Switch >
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signin" component={SignIn} />
        <ProtectedRoute exact path="/manage" component={Mangage} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
