const mongoose = require('mongoose')
 const schema = mongoose.Schema;

 const animalSchema = new schema({
    name:{
        type:schema.Types.String,
        required:true,
        unique:true
    },
    family:{
        type:schema.Types.String
    },
    age:{
        type:schema.Types.Number
    },
    live_area:{
        type:schema.Types.Array
    }
 }
,{
    _id:false,
    autoIndex:true,
    timestamps:true,
    id:true,
    minimize:true,
    validateBeforeSave:true,
    versionKey:'_v'
 }
)

  const Animal =mongoose.model('Animal',animalSchema,'animal')

  module.exports =Animal