const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    position:{
        type: String,
        required: true
    },
    
    grade:{
        type: String
    },
    debt:{
        type: Number
    },
    active_status:{
        type: String
    },
    scroll_number:{
        type: Number
    },
    comments:{
        type: String
    }


}, {timestamps: true})

module.exports = mongoose.model("Member", memberSchema);
