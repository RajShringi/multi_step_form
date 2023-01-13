function Sidebar({ currentStep }) {
  return (
    <div className="sidebar">
      <Step number={1} text="your info" currentStep={currentStep} />
      <Step number={2} text="select plan" currentStep={currentStep} />
      <Step number={3} text="add-ons" currentStep={currentStep} />
      <Step number={4} text="summary" currentStep={currentStep} />
    </div>
  );
}
export default Sidebar;

function Step({ number, text, currentStep }) {
  return (
    <div className="step">
      <div className={`${number === currentStep ? "number-active" : "number"}`}>
        {number}
      </div>
      <div className="desc">
        <p>step {number}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}
