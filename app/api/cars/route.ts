import { NextResponse } from 'next/server'

import { getCars } from '@/backend/carHandler'

export async function GET() {
  return NextResponse.json({ data: getCars() })
}
