//post database model
const mongoose=require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const infoSchema=mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    progress:{
        type:String,
        enum:['In progress','Completed'],
        default:'In progress'
    },
    date:{
        type:Date,
        default:Date.now
    }
})
const infoModel=new mongoose.model('Todoinfo',infoSchema)

module.exports=infoModel