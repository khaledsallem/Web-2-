import React from "react";
// import UsersMap from './UsersMap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./Components/Home";
import About from './Components/About';
import NotFound from './Components/NotFound';


const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/a-propos" exact component={About} />
        <Route component={NotFound} />
      </Switch>

    </BrowserRouter>
  )
}


export default App;