// Global Imports
const express = require('express');
const router = express.Router();

// Local Imports
const [ErrorMessagesEnum, SuccessMessageEnum] = require('../constants');
const User = require('../models/user');

router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    let user = new User(req.body);
    user = await user.save();
    res.status(200).json({
      status: 200,
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
});

router.get('/all', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: 200,
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      data: users,
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findOne({
      _id: req.params.id,
    });
    if (user) {
      res.status(200).json({
        status: 200,
        data: user,
      });
    } else {
      res.status(400).json({
        status: 400,
        message: ErrorMessagesEnum.USER_NOT_FOUND,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (user) {
      res.status(200).json({
        status: 200,
        data: user,
      });
    }
    res.status(400).json({
      status: 400,
      message: ErrorMessagesEnum.USER_NOT_FOUND,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id);
    if (user) {
      res.status(200).json({
        status: 200,
        message: SuccessMessageEnum.USER_REMOVED,
      });
    }
    res.status(400).json({
      status: 400,
      message: ErrorMessagesEnum.USER_NOT_FOUND,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
});

module.exports = router;
