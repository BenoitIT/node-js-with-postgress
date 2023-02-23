import { Comment  } from'../models';

// create a new user
export const createComment = async (req, res) => {
  try {
    const { comment, post_id } = req.body;
    const newcomment  = await Comment.create({comment, post_id});
    res.status(201).json(newcomment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
  // view Comment  with a coresponding username
  export const viewCommentsByPost = async (req, res) => {
    try {
      const comment  = await Comment .findAll({
        where: {
          post_id: req.params.id
        }
      });
      res.status(200).json(comment);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  // read a all Comment s
  export const readOneComment = async (req, res) => {
    try {
      const comment  = await Comment .findOne({
        where: {
          id: req.params.id
        }
      });
      res.status(200).json(comment);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };
