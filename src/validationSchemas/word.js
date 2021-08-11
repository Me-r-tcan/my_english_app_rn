import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  word: Yup.string().required("Boş bırakılamaz."),
});

export default validationSchema;
