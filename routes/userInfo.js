
// Global Imports
const express = require('express');
const router = express.Router();

// Local Imports
const [ErrorMessagesEnum] = require('../constants');
const UserInfo = require('../models/userInfo');

router.get('/all', async (req, res) => {
  try {
    const userInfo = await UserInfo.find();
    res.status(200).json({
      status: 200,
      data: userInfo,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error,
    });
  }
});

router.get('/:id', async (req, res) => {
  console.log('Fetching user info...');
  try {
    const userInfo = await UserInfo.findOne({
      _id: req.params.id,
    });

    if (userInfo) {
      res.status(200).json({
        status: 200,
        data: user,
      });
    } else {
      res.status(400).json({
        status: 400,
        message: ErrorMessagesEnum.USER_INFO_NOT_FOUND,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
});

router.post('/', async (req, res) => {
  console.log('Posting new user info...');
  console.log(req.body);
  try {
    let userInfo = new UserInfo(req.body);
    userInfo = await userInfo.save();
    res.status(200).json({
      status: 200,
      data: userInfo,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
});

module.exports = router;
