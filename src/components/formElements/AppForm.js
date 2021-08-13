import React from "react";
import PropType from "prop-types";
import { Formik } from "formik";

const AppForm = ({ initialValues, onSubmit, validationSchema, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

AppForm.propTypes = {
  initialValues: PropType.object.isRequired,
  onSubmit: PropType.func.isRequired,
  validationSchema: PropType.object.isRequired,
  children: PropType.node.isRequired,
};

export default AppForm;
