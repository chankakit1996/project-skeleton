// import User from '../models/User';
// import { Request, Response } from 'express';
// import HttpStatusCode from '../helpers/httpStatusCode';
// import mongoose from 'mongoose';
// import { consoleLog } from 'helpers';

// const getUsers = async (req: Request, res: Response) => {
//     try {
//         const users = await User.find();
//         res.status(HttpStatusCode.OK).json(users);
//     } catch (err) {
//         res.status(HttpStatusCode.NOT_FOUND).json({ message: err });
//     }
// };

// const register = async (req: Request, res: Response) => {
//     const newPost = new User(req.body);
//     try {
//         await newPost.save();
//         res.status(HttpStatusCode.CREATED).json(newPost);
//     } catch (err) {
//         if (err instanceof mongoose.Error.ValidationError) {
//             consoleLog('validation error');
//             const { errors, name } = err;
//             res.status(HttpStatusCode.BAD_REQUEST).json({ errors });
//         } else {
//             consoleLog('any error type');
//             if (err.code && err.code == '11000') {
                
//             }
//             res.status(HttpStatusCode.BAD_REQUEST).json(err);
//         }
//     }
// };

// const login = async (req: Request, res: Response) => {};

// const forgetPassword = async (req: Request, res: Response) => {};

// export default {
//     getUsers,
//     register,
//     login,
//     forgetPassword,
// };
