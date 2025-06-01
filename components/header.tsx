'use client'

import Link from 'next/link'

import styles from './header.module.css'

export default function HeaderComponent() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>Test Task</div>
      <div className={styles.urls}>
        <nav>
          <Link href="/home" className={styles.navLink}>
            Home
          </Link>{' '}
          <Link href="/cars" className={styles.navLink}>
            Cars
          </Link>{' '}
          <Link href="/login" className={styles.navLink}>
            Login
          </Link>
        </nav>
      </div>
    </header>
  )
}
