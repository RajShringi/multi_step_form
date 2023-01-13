import useFormContext from "../hooks/useFormContext";
import StepFooter from "./StepFooter";
import StepHeader from "./StepHeader";

function Step1() {
  const { formValues, setFormValues, errors, setErrors } = useFormContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: "" });
    setFormValues({ ...formValues, [name]: value });
  };

  console.log(errors);

  return (
    <div className="step1">
      <StepHeader
        heading="Personal info"
        text="Please provide your name, email address, and phone number"
      />
      <div>
        <div className="input-container">
          <div>
            <label>Name</label>
            <span>{errors.name}</span>
          </div>
          <input
            type="text"
            name="name"
            placeholder="e.g. Stephen King"
            value={formValues.name}
            onChange={handleChange}
            className={errors.name && "input-error"}
          />
        </div>

        <div className="input-container">
          <div>
            <label>Email Address</label>
            <span>{errors.email}</span>
          </div>
          <input
            type="text"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            value={formValues.email}
            onChange={handleChange}
            className={errors.email && "input-error"}
          />
        </div>

        <div className="input-container">
          <div>
            <label>Phone Number</label>
            <span>{errors.phone_no}</span>
          </div>
          <input
            type="text"
            name="phone_no"
            placeholder="e.g. +1 234 567 890"
            value={formValues.phone_no}
            onChange={handleChange}
            className={errors.phone_no && "input-error"}
          />
        </div>
      </div>

      <StepFooter />
    </div>
  );
}
export default Step1;
