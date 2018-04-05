class Dispatcher {
	constructor() {
		this._lastId = 0; // every function gets own unique id
		this._callbacks = {}; // functions
	}

	register(callback) {

		let id = `CID_${this._lastId++}`;
		this._callbacks[id] = callback;

		return id;
	}

	dispatch(action) {
		// invoke every function attached to _callbacks
		for (var id in this._callbacks) {
			// pass dispatched action
			this._callbacks[id](action);
		}
	}

	waitFor(ids) {
		// TODO - certain callbacks wait for others to run
	}

}

export default Dispatcher;