import React from "react";
import PropType from "prop-types";
import { useFormikContext } from "formik";

import AppSwitchInput from "../AppSwitchInput";
import ErrorMessage from "./ErrorMessage";

const AppFormSwitchField = ({ name, children, ...otherProps }) => {
  const {
    setFieldTouched,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormikContext();

  return (
    <>
      <AppSwitchInput
        onBlur={() => setFieldTouched(name)}
        onValueChange={() => setFieldValue(name, !values[name])}
        value={values[name]}
        {...otherProps}
      >
        {children}
      </AppSwitchInput>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

AppFormSwitchField.propTypes = {
  name: PropType.string.isRequired,
  children: PropType.node,
};

export default AppFormSwitchField;
