class Dispatcher {
    constructor() {
        this._lastId = 0; // every function gets own unique id
        this._callbacks = {}; // functions
    }

    register(callback) {
        console.log(0)
        console.log('Dispatcher.js grabs callback fn from App.js, doesnt call it')
        console.log(0)
        let id = `CID_${this._lastId++}`;
        this._callbacks[id] = callback;
        console.log('makes inner _callbacks[CID_1] method')
        console.log(this._callbacks)
        return id;
    }

    dispatch(action) {
        console.log(2)
        console.log('Dispatcher.js dispatch calls the registerd callback')
        console.log(2)
        // invoke every function attached to _callbacks
        for (var id in this._callbacks) {
            // pass dispatched action
            this._callbacks[id](action); 
        }
        console.log(4)
        console.log('Dispatcher.js dispatch done calling')
        console.log(4)
    }

    waitFor(ids) {
        // TODO - certain callbacks wait for others to run
    }

}

export default Dispatcher;