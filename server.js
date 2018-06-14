var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var viewRoutes = require('./routes/view_routes');
var port = process.env.PORT || 5000;
var config = require('./config');


var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017';
var url = `mongodb://JD:${config.db_pass}@ds259210.mlab.com:59210/test2`;

var dbName = 'test2';


// new Instance - Object
var app = express(); // Self executing constructor


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true })); // allows you to send arrays and objects
app.use(bodyParser.json());



MongoClient.connect(url, function (err, client) {
  if ( err ) return console.log(err);

  const db = client.db(dbName);
  
  viewRoutes(app, db.collection('notes'));

  app.listen(port, function() {
    console.log('Listening on port 5000');
  });

});















// var arr = ['apple', 'orange', 'grape', {name: 'JD'}];

// arr.forEach(function(val) {
//   console.log(val);
// });





























 





  // if (client) {
  //   console.log("Connected successfully to server");
  // }



// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }


// var jd = new Person('JD', 38);

// console.log(jd);