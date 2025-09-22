'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { HomeIcon, CubeIcon, NewspaperIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'

const variations = [
  {
    id: 'v1',
    name: 'Original',
    description: 'Traditional government website layout',
    icon: HomeIcon,
    color: 'bg-blue-600'
  },
  {
    id: 'v4',
    name: 'Dashboard',
    description: 'Data-driven dashboard with dark theme',
    icon: ComputerDesktopIcon,
    color: 'bg-gray-800'
  }
]

export default function VariationsController() {
  const [selectedVariation, setSelectedVariation] = useState<string>('v1')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const stored = localStorage.getItem('selectedVariation')
    if (stored && variations.some(v => v.id === stored)) {
      setSelectedVariation(stored)
    }
  }, [])

  const handleVariationChange = (variationId: string) => {
    setIsLoading(true)
    setSelectedVariation(variationId)
    localStorage.setItem('selectedVariation', variationId)

    setTimeout(() => {
      router.push(`/variations/${variationId}`)
    }, 300)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Homepage Variations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore two distinct design approaches for the SPPP website.
            Select a variation below to experience unique layouts and styles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {variations.map((variation) => {
            const Icon = variation.icon
            const isSelected = selectedVariation === variation.id

            return (
              <div
                key={variation.id}
                className={`relative rounded-2xl p-8 transition-all duration-300 cursor-pointer
                  ${isSelected
                    ? 'bg-white shadow-2xl scale-105 ring-4 ring-offset-2 ring-blue-500'
                    : 'bg-white shadow-lg hover:shadow-xl hover:scale-102'
                  }`}
                onClick={() => handleVariationChange(variation.id)}
              >
                <div className={`inline-flex p-3 rounded-lg ${variation.color} mb-4`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {variation.name}
                </h3>

                <p className="text-gray-600 mb-4">
                  {variation.description}
                </p>

                <div className="absolute top-4 right-4">
                  {isSelected && (
                    <div className="flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full">
                      <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs font-medium text-green-700">Active</span>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <button
            onClick={() => handleVariationChange(selectedVariation)}
            className={`inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg text-white
              transition-all duration-300 transform hover:scale-105
              ${isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
              }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Loading...
              </>
            ) : (
              `View ${variations.find(v => v.id === selectedVariation)?.name} Design`
            )}
          </button>
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            About Homepage Variations
          </h2>
          <p className="text-gray-700">
            This showcase presents two distinct design approaches for the SPPP website,
            each maintaining the same content but with unique visual styles and layouts.
            Your selection is saved and will persist across sessions.
          </p>
        </div>
      </div>
    </div>
  )
}