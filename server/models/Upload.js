const mongoose = require('mongoose')

const UploadSchema = new mongoose.Schema({
  filename:{
    type:String,
    required:true
  },
  file:{
    data:Buffer,
    contentType:String,
  },
  uploadTime:{
    type:Date,
    default:Date.now,
  },
},{timestamps:true},{versionKey:false});

module.exports = Upload = mongoose.model('upload',UploadSchema)