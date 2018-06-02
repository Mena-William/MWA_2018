var checkSystem = function () {
    return new Promise((resolve, reject) => {
        var os = require('os');

        console.log("Checking your system...");
        // check system memory
        var totalMemory = os.totalmem() / (1024 * 1024);
        var message1 = "This app needs at least 4 GB of RAM";
        var message2 = "Processor is not supported";

        if (totalMemory < 4000) {
            reject(message1);
        }

        // check cores
        var corsNum = os.cpus().length;
        if (corsNum < 2) {
            reject(message2);
        }

        resolve("System is checked successfully...");
    });
}

// call from promises
checkSystem().then((data) => {
    console.log(data);
}).catch((data) => {
    console.log(data);
});

// 2nd part using observables
const {from} = require("rxjs"); // (npm i rxjs) install if not installed

from(checkSystem()).subscribe((e) => {
    console.log(e);
});