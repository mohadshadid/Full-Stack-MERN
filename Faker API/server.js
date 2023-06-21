
const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');


const createUser = () => {
    const newUser = {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }   
    return newUser;
    };
const createCompany = () => {
    const newCompany = {
        id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
        
    };
    return newCompany;
    };
console.log(createCompany());
    

app.get("/api/user/new", (req, res) => {
    res.json(createUser());
});
app.get("/api/company/new", (req, res) => {
    res.json(createCompany());
}   
);
app.get("/api/user/company", (req, res) => {
    res.json({user: createUser(), company: createCompany()});
}   
);
const server = app.listen(8000, () =>   console.log(`Server is locked and loaded on port ${server.address().port}!`));






