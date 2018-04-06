// import Dispatcher from './dispatcher'; // sample dispatcher
const Dispatcher = require('flux').Dispatcher;
// import Dispatcher from 'flux'; // errors out

const ForumDispatcher = new Dispatcher();

export default ForumDispatcher;