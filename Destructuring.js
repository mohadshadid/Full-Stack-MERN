const cars = ['Tesla', 'Mercedes', 'Honda']; ///1
const [randomCar] = cars;
const [, otherRandomCar] = cars;

console.log(randomCar);
console.log(otherRandomCar);

//the output should 
Tesla
Mercedes

const employee = { ///2
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

//the output should 

//ReferenceError: name is not defined
"Elon"

const person = { ///3
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
copy


//the output should 

"12345"
undefined


const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2]; ////4
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

//the output should 

false
true

const lastTest = { ////5
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);


//the output should 

"value"
[1, 5, 1, 8, 3, 3]
1
5
