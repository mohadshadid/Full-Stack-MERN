const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    title: { type: String,
    required: [true,"Title is required"],
    minlength:[5,"Title must be at least 5 characters"] },
    
    description: { type: String,
        required: [true,"Description is required"],
    minlength:[5,"Description must be at least 5 characters"] },
    
    price: {
        type: Number,
        required: [true,"price is required"],
        min:[10,"Price must be at least 10 dollars"],
    }},
 { timestamps: true });
module.exports.User = mongoose.model('User', UserSchema);