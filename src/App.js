import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import Navbar from './Navbar';
import Common from './Common';
import {Switch, Route, Redirect} from "react-router-dom";
import Footer from './Footer';

const App = () => {
  return(
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/"        component={Home}/>
      <Route exact path="/about"   component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/service" component={Service}/>
      <Redirect to="/"/>
    </Switch>
    
    <Footer/>
    </>
  )
}

export default App;

