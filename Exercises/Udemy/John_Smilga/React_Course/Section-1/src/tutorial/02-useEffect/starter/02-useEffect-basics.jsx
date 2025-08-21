import { useEffect } from "react";
import { useState } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log("first useEffect");
  }, [value]);
  useEffect(() => {
    console.log("second useEffect");
  }, [secondValue]);

  return (
    <>
      <div>
        <h1>First value : {value}</h1>
        <button className='btn' onClick={() => setValue(value + 1)}>
          First Click
        </button>
      </div>
      <div>
        <h1>Second value : {secondValue}</h1>
        <button className='btn' onClick={() => setSecondValue(secondValue + 1)}>
          Second Click
        </button>
      </div>
    </>
  );
};
export default UseEffectBasics;
