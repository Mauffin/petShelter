const mongoose = require('mongoose');


const schemaPet = new mongoose.Schema({
  petName:{
    type:String,
    require:[true,'el campo nombre es obligatorio'],
    minlength:[3,"el nombre debe contar con almenos 3 caracteres minimos"]
  },
  petType:{
    type:String,
    require:[true,'selecciona el tipo de mascota'],
  },
  petDescription:{
    type:String,
    require:[true,"da una breve descripcion de la mascota"],
    minlength:[3,'debe contar con almenos 3 caracteres']
  },
  petVacunas:{
    0:{type:Boolean},
    1:{type:Boolean}
  }
})