import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
// import logo from './logo.svg';
import  Cart  from './app/containers/cart';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { AboutPage } from './app/containers/About/about';
import { HomePage } from './app/containers/Hompage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ContactPage } from './app/containers/Register/contact';
import { RentalsPage } from './app/containers/Rentals/rentals';
import { LoginPage } from './app/containers/Login/login';
// import Admin from './app/containers/admin';
// import Dashboard from './app/admin/pages/Dashboard';
import Panel from './app/containers/panel';
import Settings from './app/admin/pages/Settings';
import Tables from  './app/admin/pages/Tables';
import Maps from './app/admin/pages/Maps';
import Dashboard from './app/admin/pages/Dashboard';
import Sidebar from './app/admin/components/Sidebar';
import AddCarForm from './app/admin/components/addCarForm';





const AppContainer = styled.div`
${tw`flex flex-col w-full h-full `};

`

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2500/api/car")
    .then(res => setCars(res.data))
    .catch(err => console.log(err))
  }, [])

  return (
  <Router>
    <Switch>
  <AppContainer>
    <Route path="/" exact component={HomePage} />
    {/* <Route path="/admin" exact component={Admin} /> */}
    <Route  path="/about"  component={ AboutPage} />
    <Route path="/contact" component={ContactPage  } />
    <Route path="/rentals" exact>
        <  RentalsPage  />
      </Route> 
    <Route path="/login" component={LoginPage} />
    <Route path="/cart" exact component={Cart} />
    <Route path="/panel" exact component={Panel} />
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="sidebar" component={Sidebar} />
    <Route exact path="/settings" component={Settings} />
    <Route exact path="/tables" component={Tables} />
    <Route exact path="/maps" component={Maps} />
    <Route path="/AddCarForm" component={AddCarForm} />
  </AppContainer>
  
  </Switch>
  </Router>
  
    
  )
}

export default App;
