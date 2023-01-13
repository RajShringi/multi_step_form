import { useContext } from "react";
import { FormContext } from "../context/FormContext";

function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw Error("useFormContext must be used inside an FromContextProvider");
  }

  return context;
}

export default useFormContext;
