import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const handleRemove = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    // console.log(newPeople);
    setPeople(newPeople);
  };
  const handleRemoveAll = () => {
    setPeople([]);
  };

  // console.log(people);

  return (
    <div>
      {people.map((person) => {
        // console.log(person);
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type='button' onClick={() => handleRemove(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button type='button' className='btn' onClick={handleRemoveAll}>
        remove All
      </button>
    </div>
  );
};

export default UseStateArray;
