var http = require('http');
var fs = require('fs');

http.createServer((request, response) => {

    // 1st way to display image
    //const src = fs.createReadStream("./image_small.jpg");
    const src = fs.createReadStream("./image_big.jpg");
    src.pipe(response);

    //////////////////////////////////////////////////////////
    // 2nd way to display image
    
    // fs.readFile("./image_big.jpg", (error, data) => {
    //     response.end();
    // });


    //response.write("hello");
    //response.end();

}).listen(8888, () => {
    console.log("Done");
});