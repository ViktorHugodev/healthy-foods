import Image from "next/image"
import styles from './ourbest.module.scss'

interface FoodProps {
  title: string;
  pathImg: string

}

export function GridItem({ title, pathImg }: FoodProps) {
  return (
    <>
      <div className={styles.GridItem}>
        <div className={styles.ImageItem}>
          <Image src={`/assets/${pathImg}.svg`}
            height="225px"
            width="253px"
            // layout="fill"
            alt={title}
          // objectFit="cover"
          />
        </div>
        <div className={styles.InfoItem}>
          <span>{title}</span>
          <button>See recipe</button>
        </div>
      </div>
    </>

  )
}