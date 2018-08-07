// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  let db = client.db('TodoApp');
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b68fb56ec5b278506b6e5fb')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then(result => console.log(result))

  db.collection('User').findOneAndUpdate({
      _id: new ObjectID('5b68f02baed56d0f55e54257')
  }, {
    $set: {
      name: 'Desmond'
    },
    $inc: {
      age: -10
    }
  }, {
      returnOriginal: false
    }).then(result => console.log(result));

  // client.close();
})
