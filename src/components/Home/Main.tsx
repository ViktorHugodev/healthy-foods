import { Header } from "./Header";
import { InputField } from './InputField'
import styles from './main.module.scss'
import { MobileSidebar } from "./MobileSIdebar";

export function Main() {
  return (
    <div id={styles.main} >
      <Header />
      <MobileSidebar />
      <InputField />
    </div>
  )
}