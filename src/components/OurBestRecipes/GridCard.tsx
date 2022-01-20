import { GridItem } from './GridItem'
import styles from './ourbest.module.scss'
import { useEffect, useState } from 'react'

interface FoodsProps {
  title: string;
  pathImg: string
}

export function GridCard() {
  const [foods, setFoods] = useState<FoodsProps[]>([])

  useEffect(() => {
    fetch('https://healthy-foods-seven.vercel.app/foods.json')
      .then(response => response.json())
      .then(response => setFoods(response.foods))

  }, [])

  return (
    <div className={styles.GridCard}>
      {foods.map(food => (
        <GridItem key={food.title}
          title={food.title}
          pathImg={food.pathImg} />
      ))}

    </div>
  )
}