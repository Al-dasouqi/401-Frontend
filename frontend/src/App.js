import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Favorite from './components/Favorite';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends React.Component{
  render() {
    return(
      <>
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/fav"><Favorite/></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;

