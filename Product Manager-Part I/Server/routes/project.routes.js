const ProjectController = require('../controllers/project.controller');
module.exports = app => {
    app.get('/api/projects', ProjectController.findAllProjects);
    //app.get('/api/users/:id', UserController.findOneSingleUser);
    //app.put('/api/users/:id', UserController.updateExistingUser);
    app.post('/api/projects', ProjectController.createNewProject);
    //app.delete('/api/users/:id', UserController.deleteAnExistingUser);
}