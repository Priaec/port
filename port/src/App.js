import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import './App.css'

class App extends React.Component{
  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <TransitionGroup className="transition-group">
              <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={300}>
                <Switch location={location}>
                  <Route exact path="/" component={LandingPage} />
                  <Route exact path="/main" component={Home} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    );
  }
}

export default App;
