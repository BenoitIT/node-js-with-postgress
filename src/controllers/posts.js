import { Post } from'../models';
import { User } from'../models';
// create a new user
export const createPost = async (req, res) => {
  try {
    const { title, description, user_id } = req.body;
 const user= await User.findOne({
  where:{
    id: user_id
  }
 })
 if(!user) return res.status(201).json({message: 'no user with id ' + user_id});
    const post = await Post.create({ title, description, user_id});
    res.status(201).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
// view all Posts
export const viewPost = async (req, res) => {
    try {
      const post = await Post.findAll({});
      res.status(200).json(post);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  // view post with a coresponding username
  export const viewPostByUsername = async (req, res) => {
    try {
      const post = await Post.findAll({
        where: {
          user_id: req.params.id
        }
      });
      res.status(200).json(post);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  // read a all Posts
  export const readOnePost = async (req, res) => {
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


