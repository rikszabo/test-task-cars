'use client'

import { useSearchParams } from 'next/navigation'
import Image from 'next/image'

import { useEffect, useState } from 'react'

import styles from './car-detail.module.css'
import Loading from '@/app/loading'

export default function CarDetailPage() {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')

  const searchParams = useSearchParams()
  const carId = searchParams.get('id')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/car?id=${carId}`)
        console.log(res)

        if (!res.ok) {
          const errorData = await res.json()
          setError(errorData.error || 'Unknown error')
          return
        }

        const result = await res.json()
        setData(result.data)
      } catch (err) {
        setError('Server not responding')
      }
    }

    fetchData()
  }, [])

  return (
    <div className={styles.box}>
      {data ? (
        <div className={styles.wrapper}>
          <div className={styles.img}>
            <Image
              src={data['image']}
              alt={data['carName']}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                overflow: 'hidden',
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px',
              }}
            />
          </div>
          <h1 className={styles.title}>{data['carName']}</h1>
          <h3 className={styles.description}>{data['description']}</h3>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  )
}
