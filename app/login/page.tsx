'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import styles from './login.module.css'
import { Login } from './models/login.model'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (formEvent: React.FormEvent) => {
    formEvent.preventDefault()
    setError('')

    let loginData: Login = {
      email,
      password,
    }

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData),
    })

    const data = await res.json()

    if (res.ok) {
      sessionStorage.setItem('session_token', data.sessionToken)
      router.push('/home')
    } else {
      setError(data.message || 'Login error')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1 className={styles.title}>Login</h1>
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.submit}>
            Submit
          </button>
        </form>
        <p className={styles.helper}>email: admin@test.hu, pw: admin</p>
      </div>
    </div>
  )
}
