const mongoose = require('mongoose');

const memberSChema = new mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true},
    phoneNumber:{type:String, required:true},
    intiationYear:Number,
    activeStatus:{
        type:String,
        enum:['Active','Inactive', 'Alumni', 'Pledge', 'Demitted'],
        default:'Active'
    },
    position:String,
    debts:Number,
    duesPaid:Boolean,
    comments:String

});

const Member = mongoose.model('Member', memberSChema);

module.exports = Member;
