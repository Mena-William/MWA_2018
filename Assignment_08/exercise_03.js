var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient;

// to read form data in case(post requests)
app.use(express.urlencoded());


function read(res) {
    MongoClient.connect("mongodb://127.0.0.1:27017", function (error, client) {
        const db = client.db("testDB");
        var cursor = db.collection("homework8db").find({});
        var result = [];
        cursor.forEach((doc, err) => {
            result.push(doc);
        }, function () {
            client.close();
            res.end(JSON.stringify(result));
            //console.log(result.length);
        });
    });
}

function findNearest(res) {
    MongoClient.connect("mongodb://127.0.0.1:27017", function (error, client) {
        const db = client.db("testDB");
        // create index
        // db.collection("homework8db").createIndex({'location':'2d'},()=>{
        //     console.log("created");
        // });

        var cursor = db.collection("homework8db").find({location:{$near:[-91.9665342,41.017654]}}).limit(2);
        
        var result = [];
        cursor.forEach((doc, err) => {
            result.push(doc);
        }, function () {
            console.log(result.length);
            client.close();
            res.end(JSON.stringify(result));
            //console.log(result.length);
        });
        
    });
}

// get requests (retrive entry)
app.get('/api/', (req, res, next) => {
    console.log("get request");
    read(res);
});

app.get('/api/nearest', (req, res, next) => {
    console.log("get request");
    findNearest(res);
});


function insert(name, category, longitude, latitude) {
    console.log(name, category, longitude, latitude);
    MongoClient.connect("mongodb://127.0.0.1:27017", function (error, client) {
        const db = client.db("testDB");
        var query = {
            'name': name,
            'category': category,
            'location': [{
                'longitude': longitude,
                'latitude': latitude
            }]
        };
        //console.log(query);
        db.collection("homework8db").insert(query, (err, doc) => {
            if (err) {
                throw err;
            }
            console.log(JSON.stringify(doc));
            client.close();
        });
    });
}

// post requests (insert entry)
// /api/:id/:name/:course/:grade
app.post('/api/', (req, res, next) => {
    //res.setHeader('content-type', 'application/json');

    var name = req.body.name;
    var category = req.body.category;
    var longitude = req.body.longitude;
    var latitude = req.body.latitude;

    // insert
    insert(name, category, longitude, latitude);
    res.end("Inserted Successfully");
});

// put requests (update an entry)
app.put('/api/', (req, res, next) => {
    // update and show result
    // console.log("put requests");

    var id = req.body.id;
    var name = req.body.name;
    var course = req.body.course;
    var grade = req.body.grade;

    // update
    grades.update(id, name, course, grade);
    res.end("Put request done");

});

// delete requests (delete existing entry)
app.delete('/api/', (req, res, next) => {
    // delete and show result
    var id = req.body.id;
    grades.delete(id);
    res.end("delete request done");

});



////////////////////////////////////////////////// app configuration
app.listen(8080, () => {
    console.log("Listening to 8080");
});