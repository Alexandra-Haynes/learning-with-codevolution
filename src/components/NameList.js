import React from "react";
import Person from "./Person";

function NameList() {
  //const names = ["Alex", "Maria", "Andreea", "mom"];
  //const nameList = names.map((name) => <h1>{name}</h1>);
  //return <div>{nameList}</div>;

  const persons = [
    {
      id: 1,
      name: "Alex",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Ana",
      age: 20,
      skill: "nothing",
    },
    {
      id: 3,
      name: "Andreea",
      age: 29,
      skill: "Js",
    },
  ];

  const personsList = persons.map((person) => 
  <Person key={person.id} person={person} />);
  return <div> {personsList}</div>;
}

export default NameList;


/*

Only use index as key when:
. the items in your list do not have a unique id;
. the list is static and will not change;
. the list will never be reordered or filtered.

*/