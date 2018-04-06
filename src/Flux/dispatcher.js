// basic example dispatcher, using Flux package for more robust dispatcher
// class Dispatcher {
// 	constructor() {
// 		this._lastId = 0; // every function gets own unique id
// 		this._callbacks = {}; // functions
// 	}

// 	// used as a listener that calls cb's
// 	register(callback) {
// 		let id = `CID_${this._lastId++}`;
// 		this._callbacks[id] = callback;

// 		return id;
// 	}

// 	// announces to registers/listeners
// 	dispatch(action) {
// 		// invoke every function attached to _callbacks
// 		for (var id in this._callbacks) {
// 			// pass dispatched action
// 			this._callbacks[id](action);
// 		}
// 	}

// 	waitFor(ids) {
// 		// TODO - certain callbacks wait for others to run
// 	}

// }

// export default Dispatcher;