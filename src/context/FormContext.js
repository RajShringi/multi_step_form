import React, { useEffect, useState } from "react";

export const FormContext = React.createContext();

const INITIAL_VALUES = {
  name: "",
  email: "",
  phone_no: "",
};

const PLANS = [
  { name: "Arcade", price_mo: 9, price_yr: 90, isSelected: true },
  { name: "Advanced", price_mo: 12, price_yr: 120, isSelected: false },
  { name: "Pro", price_mo: 15, price_yr: 150, isSelected: false },
];

const ADD_ONS = [
  {
    name: "Online Service",
    desc: "Access to multiplayer games",
    price_mo: 1,
    price_yr: 10,
    isChecked: false,
  },
  {
    name: "Larger storage",
    desc: "Extra 11B of cloud save",
    price_mo: 2,
    price_yr: 20,
    isChecked: false,
  },
  {
    name: "Customizable profile",
    desc: "Lustom theme on your profile",
    price_mo: 2,
    price_yr: 20,
    isChecked: false,
  },
];

const MAX_STEP = 4;
const PLAN_TIME = "monthly";
let TOTAL = 0;

export const FormContextProvider = ({ children }) => {
  const [formValues, setFormValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [plans, setPlans] = useState(PLANS);
  const [addOns, setAddOns] = useState(ADD_ONS);
  const [planTime, setPlanTime] = useState(PLAN_TIME);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    TOTAL = 0;
    const selectedPlan = plans.filter((plan) => plan.isSelected);
    const selectedAddOns = addOns.filter((addOn) => addOn.isChecked);

    if (planTime === "monthly") {
      TOTAL += selectedPlan[0].price_mo;
      TOTAL += selectedAddOns.reduce((acc, cur) => (acc += cur.price_mo), 0);
    } else {
      TOTAL += selectedPlan[0].price_yr;
      TOTAL += selectedAddOns.reduce((acc, cur) => (acc += cur.price_yr), 0);
    }
    console.log(TOTAL, "USEEFFECT");
  }, [planTime, addOns, plans]);

  const next = () => {
    if (currentStep === MAX_STEP) {
      return;
    }
    setCurrentStep((prevCurrentStep) => prevCurrentStep + 1);
  };

  const prev = () => {
    if (currentStep === 1) {
      return;
    }
    setCurrentStep((prevCurrentStep) => prevCurrentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    switch (currentStep) {
      case 1:
        if (!formValues.name) {
          errors.name = "This field is required";
        } else if (!formValues.email) {
          errors.email = "This field is required";
        } else if (!formValues.email.includes("@")) {
          errors.email = "Enter valid email address";
        } else if (!formValues.phone_no) {
          errors.phone_no = "This filed is required";
        } else {
          next();
        }
        break;
      case MAX_STEP:
        setIsSubmit(true);
        break;
      default:
        next();
    }
    setErrors(errors);
  };

  return (
    <FormContext.Provider
      value={{
        formValues,
        setFormValues,
        plans,
        setPlans,
        addOns,
        setAddOns,
        currentStep,
        setCurrentStep,
        next,
        prev,
        planTime,
        setPlanTime,
        MAX_STEP,
        TOTAL,
        isSubmit,
        errors,
        setErrors,
        handleSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
