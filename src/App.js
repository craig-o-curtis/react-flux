import React, { Component } from 'react';

import Forum from './components/Forum';
import ForumHeader from './components/ForumHeader/ForumHeader';

import './App.css';

class App extends Component {
  // constructor() {
  //   super();
  //   state : {};
  // }

  // componentWillMount() {
  // }
  // componentDidMount() {
  // }
  render() {
    return (
      <div className="App">

        <div className="clearfix">
          <ForumHeader className=""/>
          <Forum />
        </div>
        
      </div>
    );
  }
}
// console.log('runs in App.js first, calls ForumDispatcher.register method')

// ForumDispatcher.register((action) => {
//   console.log('App.js calls registered action in App.js')
//   console.log(`recieved action ${action}`);
//   console.log(action)
// });

export default App;
