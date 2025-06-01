'use client'

import Image from 'next/image'
import { redirect } from 'next/navigation'

import styles from './footer.module.css'
import facebbokSvg from '@/public/facebook.svg'
import linkedinSvg from '@/public/linkedin.svg'

export default function FooterComponent() {
  const year = new Date().getFullYear()

  const handleLogout = () => {
    sessionStorage.removeItem('session_token')
    redirect('/login')
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <div className={styles.elementContainer}>
            <Image alt="facebook" src={facebbokSvg} className={styles.logo} />
            <a href="https://www.facebook.com">Facebook</a>
          </div>
          <div className={styles.elementContainer}>
            <Image alt="linkedin" src={linkedinSvg} className={styles.logo} />
            <a href="https://www.linkedin.com">Linkedin</a>
          </div>
          <div className={styles.elementContainer}>
            <div className={styles.logout} onClick={() => handleLogout()}>
              Session delete (logout)
            </div>
          </div>
        </div>
        <p className={styles.text}>&copy; {year} Test Task. Minden jog fenntartva.</p>
      </div>
    </footer>
  )
}
