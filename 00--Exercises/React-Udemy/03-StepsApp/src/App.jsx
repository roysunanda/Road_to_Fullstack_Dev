import { useState } from "react";
import { messages } from "./msg.js";

function App() {
  // const step = 1;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // console.log(arr);
  function handlePrevious() {
    // alert("Previous");
    step > 1 && setStep(step - 1);
  }
  function handleNext() {
    // alert("Next");
    step < 3 && setStep(step + 1);
  }
  return (
    <>
      <button className='close' onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? "active" : undefined}>1</div>
            <div className={step >= 2 ? "active" : undefined}>2</div>
            <div className={step >= 3 ? "active" : undefined}>3</div>
          </div>
          <p className='message'>
            Step {step}: {messages[step - 1]}
          </p>
          <div className='buttons'>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}>
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
