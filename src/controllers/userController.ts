import { Request, Response } from 'express';
import User, { UserDocument } from '../models/user';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: UserDocument[] = await User.find();
    res.status(200).json({ data: users });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const user: UserDocument | null = await User.findById(req.params.id);
    if (user) {
      res.status(200).json({ data: user });
    } else {
      res.status(404).send('User not found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email } = req.body;
    const user: UserDocument = new User({ name, email });
    await user.save();
    res.status(201).json({ data: user });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email } = req.body;
    const user: UserDocument | null = await User.findById(req.params.id);
    if (user) {
      user.name = name || user.name;
      user.email = email || user.email;
      await user.save();
      res.status(200).json({ data: user });
    } else {
      res.status(404).send('User not found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user: UserDocument | null = await User.findByIdAndDelete(req.params.id);
    if (user) {
      res.status(200).json({ data: user });
    } else {
      res.status(404).send('User not found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};