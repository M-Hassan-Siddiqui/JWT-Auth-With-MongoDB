const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fname: { type: String, required: true }, // fname is a required field in the form of a string
    lname: { type: String, required: true }, // lname is a required field in the form of a string
    email: { type: String, unique: true, required: true }, // email should be unique for every user
    password: { type: String, required: true }, // password is a required field in the form of a string
    contact_no: { type: Number, default: null } // contact number can be empty or it will have a default value as null
}, {
    collection: 'user-data'
});

const UserModel = mongoose.model('UserData', UserSchema);

module.exports = UserModel;
// This module exports an object called `UserModel` which represents our database schema for users.