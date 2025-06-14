import { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("Sandy");
  const [age, setAge] = useState(20);
  const [hobby, setHobby] = useState("Gamer");
  const handleClick = () => {
    setName("John");
    setAge(31);
    setHobby("Software Engineer");
  };
  return (
    <>
      <h2>useState object example</h2>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{hobby}</h3>
      <button type='button' className='btn' onClick={handleClick}>
        show john
      </button>
    </>
  );
};

export default UseStateObject;
