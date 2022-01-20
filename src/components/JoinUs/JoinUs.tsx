import styles from './joinus.module.scss'

export function JoinUs() {
  return (
    <section className={styles.JoinUsContent} id="JoinUS">
      <div className={styles.JoinBox}>
        <h3>
          Join our membership<br />
          to get special offer
        </h3>
        <div className={styles.InputBox}>
          <input type="text" placeholder="Enter your email address" />
          <button>Join</button>
        </div>
      </div>
    </section>
  )
}