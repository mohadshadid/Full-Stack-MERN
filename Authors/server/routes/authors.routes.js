const AuthorsController = require('../controllers/authors.controller');
module.exports = function(app){
    app.get('/api', AuthorsController.index);
    app.post('/api/Author', AuthorsController.createAuthor);
    app.get('/api/Author', AuthorsController.getAllAuthor);
    app.get('/api/Author/:id', AuthorsController.getOneAuthor);
    app.put('/api/Author/:id', AuthorsController.updateAuthor);
    app.delete('/api/Author/:id', AuthorsController.deleteAuthor);



}