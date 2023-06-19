const Project = require('../models/project.model');

module.exports.createNewProject = (req, res) => {
    Project.create(req.body)
        .then(newlyCreatedProject => {
            res.json({ project: newlyCreatedProject })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
module.exports.findAllProjects = (req, res) => {
    Project.find({})
        .then((allDaProjects) => {
            res.json({ projects: allDaProjects })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}