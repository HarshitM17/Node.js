const EventEmitter = require("events");
class MyEmitter extends EventEmitter{}
const myEmitter = new MyEmitter;

myEmitter.on("Waterfull",()=>{
    console.log("Please turn off the motor.");
    setTimeout(()=>{
        console.log("please turn off motor reminder");

    },5000);


})
myEmitter.emit("Waterfull")