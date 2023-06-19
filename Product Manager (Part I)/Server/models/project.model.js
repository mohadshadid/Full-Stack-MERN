const mongoose = require('mongoose');
 
const ProjectSchema = new mongoose.Schema({
    title: {
        type: String
    },
    desc: {
        type: String
    },
    price: {
        type: Number
    }
});
 
const Project = mongoose.model('Project', ProjectSchema);
 
module.exports = Project;