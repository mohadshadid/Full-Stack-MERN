const mongoose = require('mongoose');
const AuthorsSchema = new mongoose.Schema({
    name: { type: String,
    required: [true,"Title is required"],
    minlength:[3,"Title must be at least 3 characters"] },
    },
 { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorsSchema);