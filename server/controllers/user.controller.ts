import { RequestHandler } from 'express';
import User from '../models/user';

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { first_name, last_name, continent, date_of_birth } = req.body;

    const user = await User.create({
      first_name,
      last_name,
      continent,
      date_of_birth,
    });

    return res.status(201).json({ user });
  } catch (error) {
    console.log('[Create User]:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const getUsers: RequestHandler = async (req, res, next) => {
  try {
    const users = await User.findAll();

    return res.status(200).json({ users });
  } catch (error) {
    console.log('[Get Users]:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const getUser: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({
      where: {
        id: id,
      },
    });

    return res.status(200).json({ user });
  } catch (error) {
    console.log('[Get User]:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteUser: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.destroy({
      where: {
        id: id,
      },
    });

    return deletedUser;
  } catch (error) {
    console.log('[Delete User]:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
