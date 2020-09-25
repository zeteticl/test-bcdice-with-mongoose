
//npm install --save bcdice
const BCDice = require('bcdice').default; 


//npm install mongoose --save
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://testtest:testtest@zetetic.lxckb.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected!')
});