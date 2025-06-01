import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  if (email === 'admin@test.hu' && password === 'admin') {
    const sessionToken = `sess_${Math.random().toString(36).substring(2)}`
    return NextResponse.json({ sessionToken })
  }

  return NextResponse.json({ message: 'Wrong user name or password' }, { status: 401 })
}
