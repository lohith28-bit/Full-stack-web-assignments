const mongoose = require('mongoose');
const URL = process.env.MONGODB_URL

// Connect to MongoDB
const connectdB = async () => {
    try {
        console.log(URL)
        mongoose.connect(URL);
        console.log("Connected to DataBase")
    } catch (err) {
        console.log("Unable to connect to database")
    }
}

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    connectdB,
    Admin,
    User,
    Course
}