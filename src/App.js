import React, { useEffect,useState } from 'react';
import Navbar from './components/Navbar';
import Mainbody from './components/Mainbody';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Services from "./components/Services";
function App() {

 
  return (
    <>
    <BrowserRouter>
     <Navbar />
    
     <Switch>
     <Route path="/" exact component={Mainbody}></Route>
     <Route path="/heart-attack" component={Services}></Route> 
     </Switch>
     <Footer/>
     </BrowserRouter>
    </>
    
    
  );
}

export default App;
