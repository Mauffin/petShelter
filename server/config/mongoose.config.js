const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/petShelter',{
  useNewUrlParser:true,
  useUnifiedTopology:true,
})
  .then(()=>console.log('conectado con DB Mongoose'))
  .catch(err => console.log('error al conectar BD ')+err);