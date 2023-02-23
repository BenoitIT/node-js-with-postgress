import { User } from'../models';
import  { Post }from '../models';
// create a new user
export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const user = await User.create({ firstName, lastName, email });
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
// view all users
export const viewUser = async (req, res) => {
    try {
      const user = await User.findAll({});
      res.status(200).json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  // read a all users
export const readOne = async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id
        }
      });
      res.status(200).json({user});
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };
    // delete a users
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id
      }
    });
    if(user) {
    await user.destroy();
    res.status(200).json({message: 'User deleted successfully'});
    }
    else {
      res.status(404).json({message: 'User not found'});
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
    // update a users
    export const updateUser = async (req, res) => {
      try {
        const user = await User.findOne({
          where: {
            id: req.params.id
          }
        });
        if(user) {
       await user.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
       });
       res.status(201).json({updated: true,
       data:user});
        }
        else {
          res.status(404).json({message: 'User not found'});
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
      }
    };


