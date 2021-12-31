// Global Imports
const express = require('express');
const router = express.Router();

// Local Imports
const users = require('../dummyUserDB');
const ErrorMessagesEnum = require('../constants');

router.get("/all", async (req, res) => {
	try {
		res.status(200).json({
			data: users,
		})
	} catch (error) {
		res.status(400).json({
			message: ErrorMessagesEnum.DEFAULT, error
		})
	}
})

router.get("/:id", async (req, res) => {
	let { id } = req.params;
	id = Number(id);
	try {
		let user = users.find(user => user._id === id);
		res.status(200).json({
			data: user,
		})
	}catch (error) {
		res.status(400).json({
			message: ErrorMessagesEnum.DEFAULT, error
		})
	}
})

module.exports = router;