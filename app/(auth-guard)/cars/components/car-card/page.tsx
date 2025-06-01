import Image from 'next/image'
import Link from 'next/link'

import { Car } from '../../models/car.model'
import styles from './car.module.css'

type CarProps = {
  car: Car
}

export default function CarCardComponent({ car }: CarProps) {
  return (
    <Link href={{ pathname: '/cars/car-detail', query: { id: car.id } }} className={styles.navLink}>
      <Image
        src={car.image}
        alt={car.carName}
        width={300}
        height={180}
        style={{
          objectFit: 'cover',
          overflow: 'hidden',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
        }}
      />
      <div className={styles.name}>{car.carName}</div>
      <div className={styles.description}>{car.description}</div>
    </Link>
  )
}
