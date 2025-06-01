import { NextResponse } from 'next/server'

import { getCars } from '@/backend/carHandler'

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  const cars = getCars()
  const car = cars.find((element) => element.id === +id!)

  await sleep(2000)

  if (!car) {
    return NextResponse.json({ error: "Car doesn't exists." }, { status: 400 })
  }

  return NextResponse.json({ data: car }, { status: 200 })
}
