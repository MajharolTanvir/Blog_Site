import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>Hey, Tanvir here!</b> Discover my details and creative ideas.</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt='' fill className={styles.image}></Image>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, et?
          </h1>
          <p className={styles.postDesc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius hic quam ipsum ipsam quasi voluptatem facilis, ut error harum excepturi nemo laborum inventore delectus veniam eligendi quis temporibus dolorum unde ducimus, iure eos aspernatur voluptate explicabo. In optio quis eum!</p>
          <button className={styles.button}>Read More</button>
        </div>
        
      </div>
    </div>
  )
}

export default Featured