// import { validateEmail } from 'helpers';
// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema(
//     {
//         username: {
//             type: String,
//             unique: true,
//             required: [true, 'username is missing'],
//         },
//         email: {
//             type: String,
//             unique: true,
//             required: [true, 'email is missing'],
//             validate: {
//                 validator: function (v: string) {
//                     return validateEmail(v);
//                 },
//                 message: `email is a valid email`,
//             },
//         },
//         password: {
//             type: String,
//             required: [true, 'password is missing'],
//         },
//     },
//     {
//         collection: 'user',
//     }
// );

// const User = mongoose.model('User', userSchema);

// export default User;
