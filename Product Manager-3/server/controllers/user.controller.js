const { User } = require('../models/user.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createUser = (request, response) => {
    const { title, description,price } = request.body;
    User.create({
        title,
        description,
        price
    })
        .then(User => response.json(User))
        .catch(err => response.json(err));
}

module.exports.getAllUser = (request, response) => {
    User.find({})
        .then(User => response.json(User))
        .catch(err => response.json(err))
}

module.exports.getOneUser = (request, response) => {
    User.findOne({_id:request.params.id})
        .then(User => response.json(User))
        .catch(err => response.json(err))
}
module.exports.updateUser = (request, response) => {
    User.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updateUser => response.json(updateUser))
        .catch(err => response.json(err))
}

module.exports.deleteUser = (request, response)=>{
    User.deleteOne({_id: request.params.id})
    .then(deletethis=> response.json(deletethis))
    .catch(err => response.json(err))
}
