import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  word: Yup.string(),
  // submit alanında kontrol ediliyor o yüzden required alanı kaldırıldı
});

export default validationSchema;
