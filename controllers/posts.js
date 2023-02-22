const { Post } = require('../models');

// create a new user
const createPost = async (req, res) => {
  try {
    const { title, description, user_id } = req.body;
    const post = await Post.create({ title, description, user_id});
    res.status(201).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
// view all Posts
const viewPost = async (req, res) => {
    try {
      const post = await Post.findAll({});
      res.status(200).json(post);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  // read a all Posts
const readOnePost = async (req, res) => {
    try {
      const post = await Post.findOne({
        where: {
          id: req.params.id
        }
      });
      res.status(200).json(post);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };

module.exports = { viewPost ,createPost,readOnePost };
