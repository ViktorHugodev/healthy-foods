import styles from './footer.module.scss'

export function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.LeftInfo}>
        <a href="https://github.com/ViktorHugodev">
          © Developed by Victor Hugo.
        </a>

      </div>
      <div className={styles.RightInfo}>
        <a href="#">
          Privacy Policy
        </a>

        <a href="#">
          Terms and Conditions
        </a>
      </div>

    </div>
  )
}