const UserController = require('../controllers/user.controller');
module.exports = function(app){
    app.get('/api', UserController.index);
    app.post('/api/people', UserController.createUser);
    app.get('/api/people', UserController.getAllUser);
    app.get('/api/people/:id', UserController.getOneUser);
    



}