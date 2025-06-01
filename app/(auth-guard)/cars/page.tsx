'use client'

import { useEffect, useState } from 'react'

import CarComponent from './components/car-card/page'

import { Car } from './models/car.model'
import styles from './cars.module.css'
import Loading from '../../loading'

export default function CarsPage() {
  const [data, setData] = useState<Car[]>([])

  useEffect(() => {
    fetch('/api/cars')
      .then((res) => res.json())
      .then((json) => setData(json.data))
  }, [])

  return (
    <div>
      {data ? (
        <div className={styles.grid}>
          {data.map((car, id) => (
            <div key={id} className={styles.item}>
              <CarComponent car={car} />
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  )
}
