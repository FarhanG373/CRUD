import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch,  Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Error from './components/pages/Error';
import NavBar from './components/layout/NavBar';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import ViewUser from './components/users/ViewUser';
function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/add_user" component={AddUser}/>
        <Route exact path="/edit_user/:id" component={EditUser}/>
        <Route exact path="/user/:id" component={ViewUser}/>
        <Error></Error>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
