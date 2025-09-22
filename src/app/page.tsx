'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to variations page on load
    router.push('/variations')
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-8"></div>
        <h1 className="text-2xl font-semibold text-gray-900">Loading SPPP Variations...</h1>
        <p className="text-gray-600 mt-2">Redirecting to variations page</p>
      </div>
    </div>
  )
}