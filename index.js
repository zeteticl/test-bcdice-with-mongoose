//npm install --save bcdice
const BCDice = require('bcdice').default;

function getInfo(gameType) {
  return BCDice.infoList.find(info => info.gameType === gameType);
}


console.log(getInfo('Cthulhu'))




//npm install mongodb --save
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb+srv://testtest:testtest@zetetic.lxckb.mongodb.net/test?retryWrites=true&w=majority';
 
// Database Name
const dbName = 'test';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
 
  client.close();
});

