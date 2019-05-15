const mongoose = require('mongoose');

//= =====================User Schema==============================
const userSchema = new mongoose.Schema({
    name: String,
    score: Number,
});
const User = mongoose.model('user', userSchema);

const getUsers = async () => {
    const users = await User
        .find({});
    return users;
};

const addUser = (user) => {
    const newUser = new User(user);
    newUser.save();
    return newUser;
};

module.exports = {
    getUsers,
    addUser,
}