const {
  DynamicLoader
} = require('bcdice');

async function main() {
  const loader = new DynamicLoader();

  console.log(loader.listAvailableGameSystems().map(info => info.id));

  const GameSystem = await loader.dynamicLoad('Cthulhu7th');
  const result = GameSystem.eval('CC<=54');

  console.log(result && result.text);
}





//npm install mongodb --save
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb+srv://testtest:testtest@zetetic.lxckb.mongodb.net/test?retryWrites=true&w=majority';

// Database Name
const dbName = 'test';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  main();
});