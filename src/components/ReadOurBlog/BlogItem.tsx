import styles from './readourblog.module.scss'
import Image from 'next/image'


interface ItemProps {
  image: string;
  title: string
  author: string
  avatar: string
}

export function BlogItem({ image, title, avatar, author }: ItemProps) {

  return (
    <>
      <div className={styles.BlogItem}>
        <div className={styles.BoxImage}>
          <Image
            src={`/assets/${image}.svg`}
            width="348px"
            height="247px"
            alt="blogitem"
          />
        </div>
        <div className={styles.BoxInfo}>

          <div>
            <h4>
              {title}
            </h4>
          </div>

          <div className={styles.BoxProfile}>
            <Image
              width="52px"
              height="52px"
              alt="person"
              src={`/assets/${avatar}.svg`} />
            <span>{author}</span>
          </div>

        </div>
      </div>
    </>
  )
}