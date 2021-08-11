import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Mail alanı boş bırakılamaz.")
    .email("Lütfen geçerli bir mail adresi giriniz.")
    .max(320, "Mail alanı en fazla 320 karakterden oluşabilir."),
});

export default validationSchema;
