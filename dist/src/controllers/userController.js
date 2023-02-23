"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const getUsers = async (req, res) => {
    try {
        const users = await user_1.default.find();
        res.status(200).json({ data: users });
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
exports.getUsers = getUsers;
const getUserById = async (req, res) => {
    try {
        const user = await user_1.default.findById(req.params.id);
        if (user) {
            res.status(200).json({ data: user });
        }
        else {
            res.status(404).send('User not found');
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
exports.getUserById = getUserById;
const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = new user_1.default({ name, email });
        await user.save();
        res.status(201).json({ data: user });
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
exports.createUser = createUser;
const updateUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await user_1.default.findById(req.params.id);
        if (user) {
            user.name = name || user.name;
            user.email = email || user.email;
            await user.save();
            res.status(200).json({ data: user });
        }
        else {
            res.status(404).send('User not found');
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    try {
        const user = await user_1.default.findByIdAndDelete(req.params.id);
        if (user) {
            res.status(200).json({ data: user });
        }
        else {
            res.status(404).send('User not found');
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map