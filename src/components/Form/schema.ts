import * as Yup from 'yup'

export default Yup.object().shape({
  name: Yup.string().min(2, "").required('Required field! Please, fill with your name'),
  email: Yup.string().email().required('Required field! Please, fill with your email.'),
  birthDay: Yup.date().required('Required field! Please, fill with your birthday.'),
  cep: Yup.string().required('Required field! Please, fill with your Zip Code'),
  cpf: Yup.string().required('Required field! Please, fill with your CPF'),
  street: Yup.string().required('Required field! Please, fill with your street address'),
  number: Yup.string().required('Required field! Please, fill with house number'),
  district: Yup.string().required('Required field! Please fill with your district'),
  city: Yup.string().required('Required field! Please, fill with your city'),
  state: Yup.string().required('Required field! Please, fill with your city')

})