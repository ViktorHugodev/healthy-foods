import { FormInput } from '../components/Form/FormInput'
import { Header } from '../components/Home/Header'
import styles from '../styles/register.module.scss'

export default function Register() {
  return (
    <div className={styles.Container}>

      <h2>Register</h2>
      {/* <p>
        Far far away, behind the word mountains, <br /> far from the countries. Vokalia and Consonantia, there live the blind texts.

      </p> */}
      <FormInput />
    </div>
  )
}