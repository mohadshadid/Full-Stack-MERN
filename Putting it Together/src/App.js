
import React from 'react';
import './App.css';
import PersonComponent from './Component/Components';

const people = [
  {"FirstName": "mohad", "LastName": "shadid", "age": 26, "hairColor": "black"},
  {"FirstName": "mahdi", "LastName": "saqqa", "age": 26, "hairColor": "black"},
  {"FirstName": "shatha", "LastName": "moraliss", "age": 39, "hairColor": "black"}
];

function App() {
  return (
    <div className="App">
      {people.map((person) => {
        return (
          <PersonComponent
            
            firstName={person.FirstName}
            lastName={person.LastName}
            age={person.age}
            hairColor={person.hairColor}
          />
        );
      })}
    </div>
  );
}

export default App;

