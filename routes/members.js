const express = require('express');
const router = express.Router();

// @route GET api/members
router.get('/', (req, res) => {
    res.json({msg: 'GET ALL MEMBERS'});
});

//get single member
router.get('/:id', (req, res) => {
    res.json({msg: `GET MEMBER WITH ID ${req.params.id}`});
});

//create member
router.post('/', (req, res) => {
    res.json({msg: 'CREATE MEMBER'});
});

//delete member
router.delete('/:id', (req, res) => {
    res.json({msg: `DELETE MEMBER WITH ID ${req.params.id}`});
});

//update member
router.patch('/:id', (req, res) => {
    res.json({msg: `UPDATE MEMBER WITH ID ${req.params.id}`});
});

module.exports = router;