import useFormContext from "../hooks/useFormContext";
import StepFooter from "./StepFooter";
import StepHeader from "./StepHeader";

function Step3() {
  const { planTime, addOns, setAddOns } = useFormContext();

  const handleAddOns = (pos) => {
    setAddOns(
      addOns.map((addOn, index) => ({
        ...addOn,
        isChecked: pos === index ? !addOn.isChecked : addOn.isChecked,
      }))
    );
  };

  return (
    <div className="step3">
      <StepHeader
        heading="Pick add-ons"
        text="Add-ons help enhance your gaming experience."
      />

      {addOns.map(({ name, desc, price_mo, price_yr, isChecked }, index) => {
        return (
          <div
            key={index}
            className={`add-on-container ${isChecked && "add-on-active"}`}
          >
            <div className="add-on">
              <label>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={isChecked}
                  onChange={() => handleAddOns(index)}
                />
                <span></span>
              </label>
              <div className="info">
                <h4>{name}</h4>
                <p>{desc}</p>
              </div>
            </div>
            <p className="price">
              {planTime === "monthly" ? `$${price_mo}/mo` : `$${price_yr}/yr`}
            </p>
          </div>
        );
      })}

      <StepFooter />
    </div>
  );
}

export default Step3;
