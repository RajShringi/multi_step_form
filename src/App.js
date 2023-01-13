import Sidebar from "./components/Sidebar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Thankyou from "./components/Thankyou";
import useFormContext from "./hooks/useFormContext";

function App() {
  const { currentStep, isSubmit } = useFormContext();

  function StepDisplay() {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      default:
        return <h1>Something Went Wrong</h1>;
    }
  }

  return (
    <div className="container">
      <form className="form-container">
        <Sidebar currentStep={currentStep} />
        <div className="step-container">
          {isSubmit ? <Thankyou /> : StepDisplay()}
        </div>
      </form>
    </div>
  );
}
export default App;
