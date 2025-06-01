import styles from './home-content.module.css'

export default function HomeContentComponent() {
  return (
    <div className={styles.container}>
      <h1>Üdvözöllek</h1>
      <div className={styles.description}>
        <h2>Ez egy teszt feladat ami NextJS segitségével készült. Üdvözöllek a főoldalon.</h2>
      </div>
    </div>
  )
}
