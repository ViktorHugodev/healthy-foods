import styles from './knowmore.module.scss'

export function KnowMore() {
  return (
    <section className={styles.KnowMoreContent} id="KnowMore">
      <div className={styles.Box}>

        <h3>
          The best services ready <br />
          To serve you
        </h3>
        <p>
          Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.
        </p>

        <p>
          Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

        </p>

        <p>
          A small river named Duden flows by their place and supplies it with the necessary regelialia.
        </p>

        <button>
          Know More
        </button>

      </div>
    </section>
  )
}