import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setValue((currentState) => currentState + 1);
  };
  return (
    <>
      <h2>{value}</h2>
      <button className='btn' type='button' onClick={handleClick}>
        increase
      </button>
    </>
  );
};

export default UseStateGotcha;
