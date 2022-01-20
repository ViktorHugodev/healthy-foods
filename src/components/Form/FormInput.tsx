import styles from './form.module.scss'
import { Formik, FormikProps, Field, FormikValues, Form, ErrorMessage } from 'formik'
import schema from './schema'
import { useEffect } from 'react'
import Cookies from 'js-cookie'

interface FormProps {
  name: string
  email: string
  cep: string
  street: string
  number: string
  district: string
  state: string
  city: string
  birthDay: string

}

export function FormInput() {

  useEffect(() => {
    const storage = localStorage.getItem("form")

    if (storage) {
      return JSON.parse(storage)
    }

    return []
  }, [])

  function onSubmit(values: any) {
    localStorage.setItem("form", JSON.stringify(values))
    Cookies.set('form', String(values))
  }


  function getCep(event: any, setFieldValue: any) {
    const { value } = event.target

    const cep = value?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8) return

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        setFieldValue('street', data.logradouro)
        setFieldValue('district', data.bairro)
        setFieldValue('city', data.localidade)
        setFieldValue('state', data.uf)
      })
  }

  return (
    <div className={styles.FormContent}>
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        initialValues={{
          name: '',
          email: '',
          cep: '',
          birthDay: '',
          street: '',
          number: '',
          district: '',
          state: '',
          city: '',

        }}
        render={({ values, errors, setFieldValue }: FormikProps<FormProps>) => (
          <Form >
            <div className={styles.BoxInput}>
              <label>Name</label>
              <Field type="text"
                name="name"
                placeholder="Full name" />
              <div className={styles.DivError}>
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className={styles.BoxInput}>
              <label>Email</label>
              <Field type="text"
                name="email"
                placeholder="Your_email@email.com" />
              <div className={styles.DivError}>
                <ErrorMessage name="email" />
              </div>
            </div>
            <div className={styles.BoxInput}>
              <label>Birth day</label>
              <Field type="date"
                name="birthDay"
                placeholder="Birth day" />
              <div className={styles.DivError}>

                <ErrorMessage name="birthDay" />
              </div>
            </div>

            <div className={styles.BoxInput}>
              <label>CPF</label>
              <Field type="text"
                name="cpf"
                placeholder="CPF - Just numbers" />
              <div className={styles.DivError}>
                <ErrorMessage name="cpf" />
              </div>
            </div>

            <div className={styles.BoxInput}>
              <label>CEP</label>
              <Field type="text"
                onBlur={(event: any) => getCep(event, setFieldValue)}
                name="cep"
                placeholder="Zip code - Just numbers" />
              <div className={styles.DivError}>
                <ErrorMessage name="cep" />
              </div>
            </div>


            <div className="form-street">
              <div className={styles.BoxInput}>
                <label>Street</label>
                <Field type="text"
                  name="street"
                  placeholder="Street address" />
                <div className={styles.DivError}>
                  <ErrorMessage name="street" />
                </div>
              </div>

              <div className={styles.BoxInput}>
                <label>N</label>
                <Field type="text"
                  name="number"
                  placeholder="Number" />
                <div className={styles.DivError}>
                  <ErrorMessage name="number" />
                </div>

              </div>
            </div>
            <div className={styles.BoxInput}>
              <label>District:</label>
              <Field type="text"
                name="district"
                placeholder="District address" />
              <div className={styles.DivError}>
                <ErrorMessage name="district" />
              </div>
            </div>

            <div className={styles.BoxInput}>
              <label>City:</label>
              <Field type="text"
                name="city"
                placeholder="City address" />
              <div className={styles.DivError}>
                <ErrorMessage name="city" />
              </div>
            </div>

            <div className={styles.BoxInput}>
              <label>State:</label>
              <Field type="text"
                name="state" />
              <div className={styles.DivError}>
                <ErrorMessage name="state" />
              </div>
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      ></Formik>

    </div>
  );
}


