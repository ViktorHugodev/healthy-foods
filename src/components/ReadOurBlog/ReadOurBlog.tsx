import { BlogCard } from './BlogCard'
import styles from './readourblog.module.scss'

export function ReadOurBlog() {
  return (
    <section className={styles.ReadOurBlogContent} id="ReadOurBlog">
      <div className={styles.TitleBox}>
        <h3>
          Read Our Blog
        </h3>
        <p>
          Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia,  there live the blind texts.
        </p>
      </div>
      <div className={styles.Carroussel}>
      </div>
      <BlogCard />
    </section>
  )
}