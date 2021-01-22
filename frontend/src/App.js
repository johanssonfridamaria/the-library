import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from './routes/ProtectedRoute'
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Navigation/Footer';
import Login from './views/Admin/Login';
import Books from './views/Books';
import Categories from './views/Categories';
import LandingPage from './views/LandingPage';
import Mangage from './views/Manage';


function App() {
  return (
    <BrowserRouter >
      <Navbar />

      <div className="container">
        <Switch >
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/categories" component={Categories} />
          <ProtectedRoute exact path="/manage" component={Mangage} />
        </Switch>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
