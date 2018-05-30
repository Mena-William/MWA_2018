var dns = require('dns');

// var result = dns.lookup("www.mum.edu", (error, address, family) => {
//     console.log(error + ",,," + address + ",,," + family);
// });




var result = dns.resolve4("www.mum.edu", (error, addresses) => {
    console.log(error + ",,," + addresses[0]);
});