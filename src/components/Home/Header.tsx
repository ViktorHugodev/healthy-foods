import Link from 'next/link'
import styles from './header.module.scss'

export function Header() {
  return (
    <header id={styles.Header} className={styles.Container}>
      <title>Healthy Foods</title>
      <div >
        <h1 className={styles.Logo}>Healthy Foods</h1>
      </div>
      <div>
        <ul>
          <li><Link href="#OurBestRecipes">HEALTHY RECIPES</Link></li>
          <li><Link href="#KnowMore">BLOG</Link></li>
          <li><Link href="#JoinUS">JOIN</Link></li>
          <li className={styles.register}><Link href="/register">REGISTER</Link></li>
        </ul>
      </div>
    </header>
  )
}