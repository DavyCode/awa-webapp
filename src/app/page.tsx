import LoginComponent from '@/components/Login/LoginComponent'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <LoginComponent />
    </main>
  )
}
