var fs  = require("fs");
var zlip = require('zlib');

var gzip = zlip.createGzip();
var gunzip = zlip.createGunzip();

var compressedFile = "./compressed.txt.zip";
var unCompressedFile = "./this file will be zipped.txt";


// compress here
// var readFile = fs.createReadStream(unCompressedFile);
// var writeCompressedFile = fs.createWriteStream(compressedFile);
// readFile.pipe(gzip).pipe(writeCompressedFile);


//uncompress here
var readFileUnzip = fs.createReadStream(compressedFile);
var writeCompressedFileUnzip = fs.createWriteStream("./NewFileAfterCompression.txt");
readFileUnzip.pipe(gunzip).pipe(writeCompressedFileUnzip);













