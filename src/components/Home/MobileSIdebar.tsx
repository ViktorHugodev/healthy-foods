import Link from 'next/link'
import styles from './header.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosArrowBack } from 'react-icons/io'
import { useState } from 'react'
export function MobileSidebar() {
  const [toggle, setToggle] = useState(true)

  return (
    <>
      {toggle ? (
        <aside className={styles.MobileNav}>
          <div className={styles.BackIcon}>

            <IoIosArrowBack size={40}
              onClick={(e) => setToggle(!toggle)} />
          </div>
          <div className={styles.LogoMobile}>
            <h1>Healthy Foods</h1>

          </div>
          <div className={styles.BoxMobile}>
            <nav>
              <ul>
                <li><Link href="#OurBestRecipes">HEALTHY RECIPES</Link></li>
                <li><Link href="#KnowMore">BLOG</Link></li>
                <li><Link href="#JoinUS">JOIN</Link></li>
                <li><Link href="/register">REGISTER</Link></li>
              </ul>
            </nav>

          </div>
        </aside>
      ) : <div className={styles.hamburguer}>
        <GiHamburgerMenu onClick={(e) => setToggle(!toggle)} size={40} />
      </div>}
    </>

  )
}