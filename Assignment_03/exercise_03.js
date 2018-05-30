//import
const EventEmitter = require('events');

// extend
class Clock extends EventEmitter {
    constructor() {
        super();
        console.log("new instance");
    }
}

// init
const watch = new Clock();

// addListner
watch.on("tick", () => {
    console.log("Woohoo");
});

// emit
setTimeout(() => {
    watch.emit("tick");
}, 1000);