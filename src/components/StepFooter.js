import useFormContext from "../hooks/useFormContext";

function StepFooter() {
  const { next, prev, currentStep, MAX_STEP, handleSubmit } = useFormContext();
  return (
    <div className="button-container">
      <button type="button" className="prev-button" onClick={prev}>
        {currentStep === 1 ? "" : "Go Back"}
      </button>
      <button
        type="submit"
        className={currentStep === MAX_STEP ? "confirm" : "next-button"}
        onClick={handleSubmit}
      >
        {currentStep === MAX_STEP ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
}
export default StepFooter;
