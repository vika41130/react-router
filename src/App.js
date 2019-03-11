import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Contacts from './components/Contacts';
import About from './components/About';
import Errors from './components/Errors';
import Navigation from './components/Navigation';




class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/contacts" component={Contacts} />
              <Route path="/about" component={About} />
              <Route component={Errors} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
