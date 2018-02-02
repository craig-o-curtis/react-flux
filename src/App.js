import React, { Component } from 'react';

import Forum from './components/Forum';
import ForumHeader from './components/ForumHeader/ForumHeader';

import ForumDispatcher from './Flux/ForumDispatcher';
import EventEmitter from './Flux/eventEmitter';

import './App.css';

class App extends Component {
  // constructor() {
  //   super();
  //   state : {};
  // }

  componentWillMount() {
    let event = new EventEmitter();
    event.on('WILL_MOUNT', () => {
      console.log('will mount event emiiter app');
    });
    event.emit('WILL_MOUNT');
    

    event.removeListener('WILL_MOUNT', ()=> {console.log('will mount app')});
  }
  componentDidMount() {
    let event = new EventEmitter();
    event.on('DID_MOUNT', ()=> {console.log('did mount event emitter app')});
    event.emit('DID_MOUNT');
  }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <div className="clearfix">
          <ForumHeader className=""/>
        
          <Forum />
        </div>
        
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}
console.log(-1)
console.log('runs in App.js first, calls ForumDispatcher.register method')
ForumDispatcher.register((action) => {
  console.log(3)
  console.log('App.js calls registered action in App.js')
  console.log(3)
  console.log(`recieved action ${action}`);
  console.log(action)
});
console.log(-1)

export default App;
