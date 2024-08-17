import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt='Facebook' height={24} width={24} />
        <Image src="/instagram.png" alt='Instagram' height={24} width={24} />
        <Image src="/tiktok.png" alt='Tiktok' height={24} width={24} />
        <Image src="/youtube.png" alt='Youtube' height={24} width={24} />
      </div>
      <div className={styles.logo}>{`Tanvir's Diary`}</div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link href="/home" className={styles.link}>Home</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar