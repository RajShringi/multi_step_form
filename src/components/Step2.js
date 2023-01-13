import useFormContext from "../hooks/useFormContext";
import StepFooter from "./StepFooter";
import StepHeader from "./StepHeader";

function Step2() {
  const { planTime, setPlanTime, plans, setPlans } = useFormContext();

  const ChangePlanTime = () => {
    setPlanTime((prevPlanTime) =>
      prevPlanTime === "monthly" ? "yearly" : "monthly"
    );
  };

  const changePlan = (pos) => {
    setPlans(
      plans.map((plan, index) => ({
        ...plan,
        isSelected: pos === index ? true : false,
      }))
    );
  };

  return (
    <div className="step2">
      <StepHeader
        heading="Select your plan"
        text="You have the option of monthly or yearly billing."
      />

      <div className="card-container">
        {plans.map(({ name, price_mo, price_yr, isSelected }, index) => {
          return (
            <div
              key={index}
              className={`card ${isSelected && "card-active"}`}
              onClick={() => changePlan(index)}
            >
              <div className="img-container">
                <img
                  src={`/images/icon-${name.toLowerCase()}.svg`}
                  alt={name}
                />
              </div>
              <div>
                <h4>{name}</h4>
                <p>
                  {planTime === "monthly"
                    ? `$${price_mo}/mo`
                    : `$${price_yr}/yr`}
                </p>
                {planTime === "yearly" && <p className="free">2 months free</p>}
              </div>
            </div>
          );
        })}
      </div>

      <div className="plan-time">
        <span className={`time ${planTime === "monthly" ? "active" : ""}`}>
          Monthly
        </span>

        <label>
          <input
            type="checkbox"
            defaultChecked={planTime === "monthly" ? false : true}
            onClick={ChangePlanTime}
          />
          <span className="circle" />
        </label>
        <span className={`time ${planTime === "yearly" ? "active" : ""}`}>
          Yearly
        </span>
      </div>
      <StepFooter />
    </div>
  );
}
export default Step2;
