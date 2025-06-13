import { useEffect } from "react";
import { useState } from "react";

export const NameCounter = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    const handler = () => {
      console.log(name);
    };
    document.addEventListener("click", handler);
    console.log("inside effect");
    return () => {
      document.removeEventListener("click", handler);
      console.log("cleanup");
    };
  }, [name]);
  return (
    <>
      <label htmlFor='name'>Enter your name: </label>
      <br />
      <input
        type='text'
        name='name'
        id='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button
        type='button'
        onClick={() => {
          setAge((currentAge) => currentAge + 1);
        }}>
        +
      </button>
      <span>{age}</span>
      <button
        type='button'
        onClick={() => {
          setAge((currentAge) => currentAge - 1);
        }}>
        -
      </button>
      <br />
      <br />
      <h1>
        My name is {name} and i am {age} years old.
      </h1>
    </>
  );
};
