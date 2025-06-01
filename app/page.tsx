'use client'

import { redirect } from 'next/navigation'

export default function App() {
  const token = sessionStorage.getItem('session_token')

  if (!token) {
    redirect('/login')
  } else {
    redirect('/home')
  }
}
