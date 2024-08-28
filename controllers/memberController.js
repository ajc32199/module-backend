const Member = require("../models/MemberModel");
const mongoose = require("mongoose");


//get all members
const getAllMembers = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

//get a single member
const getMembers = async (req, res) => {
    const {id} = req.params 
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({msg: `INVALID ID ${id}`})
    }

    const member = await Member.findById(id)
    
    if(!Member){
        res.status(404).json({msg: `Member WITH ID ${id} NOT FOUND`})    
    }

    res.status(200).json(member)
}

//create a new member
const createMember = async (req, res) => {
    const {
        name,
        position,
        grade,
        debt,
        active_status,
        scroll_number,
        comments,
    } = req.body;

    try {
        const newMember = await Member.create({
            name,
            position,
            grade,
            debt,
            active_status,
            scroll_number,
            comments,
        });

        res.status(200).json(newMember);
    } catch (error) {
        res.status(400).json({ msg: "CREATE MEMBER FAILED" });
    }
}

//delete a member


//update a member

module.exports = {
    getAllMembers,
    getMembers,
    createMember
}