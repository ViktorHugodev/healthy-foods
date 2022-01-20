import styles from './ourbest.module.scss'

import { GridCard } from "./GridCard";


export function OurBestRecipes() {
  return (
    <section className={styles.OurBestRecipesContent}>

      <section className={styles.OurBestSect} id="OurBestRecipes">
        <h3>
          Our Best Recipes
        </h3>
        <p>
          For far away, behind the world mountains, far from the countries<br />
          Vakalia and Consonantia, there live the blind texts.
        </p>
        <GridCard />
      </section>
    </section>

  )
}