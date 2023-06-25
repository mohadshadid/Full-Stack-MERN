const  {Author}  = require('../models/authors.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    Author.create({
        name,
      
    })
        .then(Author => response.json(Author))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllAuthor = (request, response) => {
    Author.find({})
        .then(Author => response.json(Author))
        .catch(err => response.status(400).json(err));
}

module.exports.getOneAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(Author => response.json(Author))
        .catch(err => response.status(400).json(err));
}
module.exports.updateAuthor = (request, response) => {
    const { name } = request.body;
    
    // Find the author by ID
    Author.findById(request.params.id)
      .then(author => {
        if (!author) {
          return response.status(404).json({ error: 'Author not found' });
        }
        
        // Update the author's name
        author.name = name;
        
        // Run validation on the updated author
        return author.validate();
      })
      .then(() => {
        // Save the updated author
        return Author.findOneAndUpdate({ _id: request.params.id }, { name }, { new: true });
      })
      .then(updatedAuthor => {
        console.log(updatedAuthor);
        response.json(updatedAuthor);
      })
      .catch(err => response.status(400).json(err));
  }

module.exports.deleteAuthor = (request, response)=>{
    Author.deleteOne({_id: request.params.id})
    .then(deletethis=> response.json(deletethis))
    .catch(err => response.status(400).json(err));
}
