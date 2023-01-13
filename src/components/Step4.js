import useFormContext from "../hooks/useFormContext";
import StepFooter from "./StepFooter";
import StepHeader from "./StepHeader";

function Step4() {
  const { plans, addOns, planTime, setCurrentStep, TOTAL } = useFormContext();
  const selectedPlan = plans.filter((plan) => plan.isSelected)[0];
  const selectedAddOns = addOns.filter((addOn) => addOn.isChecked);

  return (
    <div className="step4">
      <StepHeader
        heading="Finishing up"
        text="Double-check everything looks OK before confirming."
      />

      <div className="invoice">
        <div className="plan">
          <div>
            <h5>
              {selectedPlan.name} (
              {planTime.charAt(0).toUpperCase() + planTime.slice(1)})
            </h5>
            <button onClick={() => setCurrentStep(2)}>change</button>
          </div>
          <p className="price">{`$${
            planTime === "monthly"
              ? `${selectedPlan.price_mo}/mo`
              : `${selectedPlan.price_yr}/yr`
          }`}</p>
        </div>

        <div className="addOns">
          {selectedAddOns.map((addOn, index) => {
            return (
              <div key={index} className="addOn">
                <p>{addOn.name}</p>
                <p className="price">{`$${
                  planTime === "monthly"
                    ? `${addOn.price_mo}/mo`
                    : `${addOn.price_yr}/yr`
                }`}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="total">
        <p>Total ({planTime === "monthly" ? "per month" : "per year"})</p>
        <p className="price">{`+$${TOTAL}${
          planTime === "monthly" ? "/mo" : "/yr"
        }`}</p>
      </div>

      <StepFooter />
    </div>
  );
}
export default Step4;
