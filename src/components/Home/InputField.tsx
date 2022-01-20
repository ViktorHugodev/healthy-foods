import { AiOutlineSearch } from 'react-icons/ai'
import styles from './input.module.scss'

export function InputField() {
  return (
    <div className={styles.Box}>
      <h2>
        Ready for <br />Tryng a new recipe?
      </h2>
      <div className={styles.BoxInput}>

        <input type="text" placeholder="Search healthy recipes" />
        <button>
          <AiOutlineSearch size={24} />

        </button>
      </div>
    </div>
  )
}