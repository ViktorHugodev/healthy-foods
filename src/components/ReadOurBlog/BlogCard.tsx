import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from './readourblog.module.scss'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { BlogItem } from './BlogItem'

interface ItemProps {
  image: string;
  title: string
  author: string
  avatar: string
}

export function BlogCard() {
  const carousel = useRef<any>(null)

  function handleLeftClick() {
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  function handleRightClick() {
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }
  const [posts, setPosts] = useState<ItemProps[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/foods.json')
      .then((response) => response.json())
      .then(response => setPosts(response.posts))
  }, [])


  return (
    <>
      <div className={styles.Carousel} ref={carousel}>
        {posts.map(post => {
          return (
            <BlogItem
              avatar={post.avatar}
              author={post.author}
              key={post.image}
              title={post.title}
              image={post.image} />
          )
        })}

      </div>

      <div className={styles.Buttons}>
        <button
          onClick={handleLeftClick}
        >
          <HiOutlineArrowNarrowLeft
            size={22}
          />
        </button>

        <button
          onClick={handleRightClick}
        >
          <HiOutlineArrowNarrowRight
            size={22}
          />
        </button>

      </div>
    </>
  )
}