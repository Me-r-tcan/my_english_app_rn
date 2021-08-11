import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Mail alanı boş bırakılamaz.")
    .email("Lütfen geçerli bir mail adresi giriniz.")
    .max(320, "Mail alanı en fazla 320 karakterden oluşabilir."),
  password: Yup.string()
    .required("Şifre alanı boş bırakılamaz.")
    .min(8, "Şifre alanı en az 8 karakterden oluşmalıdır.")
    .max(255, "Şifre alanı en fazla 255 karakterden oluşabilir.")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Şifre alanı 8 karakterden az olamaz, büyük harf, numara ve özel bir karakter içermelidir."
    ),
  passwordConfirmation: Yup.string()
    .required("Lütfen şifrenizi onaylayın.")
    .when("password", {
      is: (password) => (password && password.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "Şifreler eşleşmedi."),
    }),
  username: Yup.string()
    .required("Kullanıcı adı alanı boş bırakılamaz.")
    .min(3, "Kullanıcı adı alanı en az 3 karakterden oluşmalıdır.")
    .max(510, "Kullanıcı adı alanı en fazla 50 karakterden oluşabilir."),
});

export default validationSchema;
