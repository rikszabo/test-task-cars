'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import Loading from '../loading'
import HeaderComponent from '@/components/header'
import FooterComponent from '@/components/footer'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const [authState, setAuth] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = sessionStorage.getItem('session_token')

    if (!token) {
      router.replace('/login')
    } else {
      setAuth(true)
    }
  }, [router])

  if (!authState) return <Loading /> // vagy loading spinner

  return (
    <>
      <div className="page-layout">
        <HeaderComponent />
        <div className="content">{children}</div>
        <div className="footer">
          <FooterComponent />
        </div>
      </div>
    </>
  )
}
