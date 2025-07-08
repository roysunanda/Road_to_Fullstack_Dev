import { useState } from "react";

function UseRef_Section1() {
  const [name, setName] = useState("");
  return (
    <>
      <label htmlFor='name'>Name</label>
      <input
        value={name}
        type='text'
        id='name'
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}
export default UseRef_Section1;
