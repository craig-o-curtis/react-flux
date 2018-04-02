


class EventEmitter {

    constructor() {
        this._events = {}
    }
    // methods

    // pushes functions into an array, called by emit
    on = (type, listener) => {
        this._events[type] = this._events[type] || [];
        this._events[type].push(listener);
    }

    // locates that type array on _events object, calls each item/fn in array
    emit = (type) => {
         if (this._events[type]) {
             this._events[type].forEach( (listener) => {
                listener();
             });
         }
    }

    removeListener = (type, listener) => {
        if (this._events[type]) {
            this._events[type].splice(this._events[type].indexOf(listener),1); 
        }
    }

}

export default EventEmitter;