"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewPostByUsername = exports.viewPost = exports.readOnePost = exports.createPost = void 0;
var _models = require("../models");
// create a new user
const createPost = async (req, res) => {
  try {
    const {
      title,
      description,
      user_id
    } = req.body;
    const post = await _models.Post.create({
      title,
      description,
      user_id
    });
    res.status(201).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Server Error'
    });
  }
};
// view all Posts
exports.createPost = createPost;
const viewPost = async (req, res) => {
  try {
    const post = await _models.Post.findAll({});
    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Server Error'
    });
  }
};
// view post with a coresponding username
exports.viewPost = viewPost;
const viewPostByUsername = async (req, res) => {
  try {
    const post = await _models.Post.findAll({
      where: {
        user_id: req.params.id
      }
    });
    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Server Error'
    });
  }
};
// read a all Posts
exports.viewPostByUsername = viewPostByUsername;
const readOnePost = async (req, res) => {
  try {
    const post = await _models.Post.findOne({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Server Error'
    });
  }
};
exports.readOnePost = readOnePost;