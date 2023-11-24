const mongoose =  require('mongoose');

const historyData =  new mongoose.Schema({
    contact:{
        type:String,
        required:true
    },
    address:{
        district:{
            type:String,
            required:true,
        }, 
        city:{
            type:String,
            required:true,
        }, 
        state:{
            type:String,
            required:true,
        }, 
        pinCode:{
            type:String,
            required:true,
        },
    },
},{
    timestamps:true
})

module.exports = mongoose.model('Address', historyData);

