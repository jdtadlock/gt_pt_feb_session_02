var MongoClient = require('mongodb').MongoClient;
var config = require('./config');
var url = `mongodb://JD:${config.db_pass}@ds259210.mlab.com:59210/test2`;

var dbName = 'test2';

function seed(db) {
   db.collection('notes').insertMany([
    {
      title: 'Some note',
      details: 'Details about note 1'
    },
    {
      title: 'Some note 2',
      details: 'Details about note 2'
    }
  ]).then(function() {
    console.log('success!');
  });
}



MongoClient.connect(url, function (err, client) {

  const db = client.db(dbName);


  seed(db);

  client.close();
});
