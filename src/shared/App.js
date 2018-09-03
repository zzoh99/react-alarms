import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TodoView, StopWatchView, TimerView } from '../pages';
import Header from '../components/Header';

class App extends Component {
  render() {
      return (
          <div>
            <Header/>
            <Route exact path="/" component={TodoView}/>
            <Switch>
              <Route path="/todo" component={TodoView}/>
              <Route path="/stopwatch" component={StopWatchView}/>
              <Route path="/timer" component={TimerView}/>
            </Switch>

          </div>
      );
  }
}

export default App;