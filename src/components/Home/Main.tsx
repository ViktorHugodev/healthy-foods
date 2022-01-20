import { Header } from "./Header";
import { InputField } from './InputField'
import styles from './main.module.scss'
import { MobileSidebar } from "./MobileSIdebar";

export function Main() {
  return (
    <section id={styles.main} >
      <Header />
      <MobileSidebar />
      <InputField />
    </section>
  )
}