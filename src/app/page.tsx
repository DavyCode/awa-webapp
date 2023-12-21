import React from 'react'
import LoginComponent from '@/components/Login/LoginComponent'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between px-4 py-14 sm:p-24 w-full">
      <LoginComponent />
    </main>
  );
}
