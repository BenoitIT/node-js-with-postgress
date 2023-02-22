"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewUser = exports.updateUser = exports.readOne = exports.deleteUser = exports.createUser = void 0;
var _models = require("../models");
// create a new user
const createUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email
    } = req.body;
    const user = await _models.User.create({
      firstName,
      lastName,
      email
    });
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Server Error'
    });
  }
};
// view all users
exports.createUser = createUser;
const viewUser = async (req, res) => {
  try {
    const user = await _models.User.findAll({});
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Server Error'
    });
  }
};
// read a all users
exports.viewUser = viewUser;
const readOne = async (req, res) => {
  try {
    const user = await _models.User.findOne({
      where: {
        id: req.params.id
      }
    });
    const posts = await _models.Post.findOne({
      where: {
        user_id: req.params.id
      }
    });
    res.status(200).json({
      user,
      posts
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Server Error'
    });
  }
};
// delete a users
exports.readOne = readOne;
const deleteUser = async (req, res) => {
  try {
    const user = await _models.User.findOne({
      where: {
        id: req.params.id
      }
    });
    if (user) {
      await user.destroy();
      res.status(200).json({
        message: 'User deleted successfully'
      });
    } else {
      res.status(404).json({
        message: 'User not found'
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Server Error'
    });
  }
};
// update a users
exports.deleteUser = deleteUser;
const updateUser = async (req, res) => {
  try {
    const user = await _models.User.findOne({
      where: {
        id: req.params.id
      }
    });
    if (user) {
      await user.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
      });
      res.status(201).json({
        updated: true,
        data: user
      });
    } else {
      res.status(404).json({
        message: 'User not found'
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Server Error'
    });
  }
};
exports.updateUser = updateUser;