import { useState } from "react";
import { useEffect } from "react";

const RandomComp = () => {
  useEffect(() => {
    console.log(`random effect`);
  }, []);
  return <h1>Random Component</h1>;
};

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button className='btn' onClick={() => setToggle(!toggle)}>
        Toggle Click
      </button>
      {toggle && <RandomComp />}
    </div>
  );
};

export default CleanupFunction;
