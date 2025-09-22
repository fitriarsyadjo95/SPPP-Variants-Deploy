'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PhotoIcon, ArrowTopRightOnSquareIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/language-context'

interface MediaItem {
  id: string
  title: string
  category: 'government-relations' | 'port-operations' | 'industry-events' | 'awards-recognition' | 'community-engagement'
  type: 'photo' | 'video'
  date: string
  year: number
  description: string
  thumbnail: string
  views: number
  featured: boolean
}

const mediaItems: MediaItem[] = [
  {
    id: '1',
    title: 'Lawatan Yang Berhormat Menteri Pengangkutan Malaysia',
    category: 'government-relations',
    type: 'photo',
    date: '2023-11-15',
    year: 2023,
    description: 'Lawatan rasmi YB Menteri Pengangkutan ke kemudahan pelabuhan untuk melihat pembangunan infrastruktur terkini.',
    thumbnail: '/images/port-installations/NBCT_1.JPG',
    views: 3250,
    featured: true
  },
  {
    id: '7',
    title: 'Operasi Terminal Container North Butterworth',
    category: 'port-operations',
    type: 'photo',
    date: '2023-09-30',
    year: 2023,
    description: 'Aktiviti harian operasi terminal container terbesar di Pulau Pinang dengan teknologi automasi terkini.',
    thumbnail: '/images/port-installations/SPCT_1.JPG',
    views: 2890,
    featured: true
  },
  {
    id: '11',
    title: 'Malaysia International Shipping Week 2023',
    category: 'industry-events',
    type: 'photo',
    date: '2023-08-15',
    year: 2023,
    description: 'Penyertaan SPPP dalam minggu pelayaran antarabangsa Malaysia dengan paparan teknologi terkini.',
    thumbnail: '/images/port-installations/PBCT_1.JPG',
    views: 2567,
    featured: true
  },
  {
    id: '15',
    title: 'Anugerah Pelabuhan Terbaik Malaysia 2023',
    category: 'awards-recognition',
    type: 'photo',
    date: '2023-10-20',
    year: 2023,
    description: 'Majlis pengiktirafan SPPP sebagai pelabuhan terbaik Malaysia dalam kategori operasi dan perkhidmatan.',
    thumbnail: '/images/port-installations/SPCT_2.JPG',
    views: 4120,
    featured: true
  },
  {
    id: '2',
    title: 'Mesyuarat Majlis Pelabuhan Negara',
    category: 'government-relations',
    type: 'photo',
    date: '2023-10-05',
    year: 2023,
    description: 'Sesi mesyuarat rasmi Majlis Pelabuhan Negara bagi membincangkan dasar dan strategi pelabuhan Malaysia.',
    thumbnail: '/images/port-installations/NBCT_1.JPG',
    views: 2180,
    featured: true
  },
  {
    id: '8',
    title: 'Sistem Pelabuhan Pintar SPPP',
    category: 'port-operations',
    type: 'video',
    date: '2023-07-25',
    year: 2023,
    description: 'Demonstrasi teknologi pelabuhan pintar yang digunakan untuk meningkatkan kecekapan operasi.',
    thumbnail: '/images/port-installations/SPCT_1.JPG',
    views: 3420,
    featured: true
  },
  {
    id: '12',
    title: 'Langkawi International Maritime & Aerospace Exhibition',
    category: 'industry-events',
    type: 'photo',
    date: '2023-05-23',
    year: 2023,
    description: 'Penyertaan SPPP dalam pameran maritim dan aerospace antarabangsa di Langkawi (LIMA 2023).',
    thumbnail: '/images/port-installations/PBCT_1.JPG',
    views: 3840,
    featured: true
  },
  {
    id: '18',
    title: 'Program Penglibatan Komuniti Nelayan',
    category: 'community-engagement',
    type: 'photo',
    date: '2023-09-12',
    year: 2023,
    description: 'Sesi dialog dan penglibatan dengan komuniti nelayan tempatan untuk meningkatkan kerjasama dan kesejahteraan.',
    thumbnail: '/images/port-installations/SPCT_2.JPG',
    views: 1856,
    featured: false
  }
]

const categoryColors = {
  'government-relations': 'text-blue-600 bg-blue-100',
  'port-operations': 'text-green-600 bg-green-100',
  'industry-events': 'text-purple-600 bg-purple-100',
  'awards-recognition': 'text-yellow-600 bg-yellow-100',
  'community-engagement': 'text-orange-600 bg-orange-100'
}

export const DynamicGallery: React.FC = () => {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  // Auto-change images every 4 seconds
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaItems.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const currentItem = mediaItems[currentIndex]

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)
  }

  const getCategoryName = (category: string) => {
    const names = {
      'government-relations': 'Perhubungan Kerajaan',
      'port-operations': 'Operasi Pelabuhan',
      'industry-events': 'Acara Industri',
      'awards-recognition': 'Anugerah & Pengiktirafan',
      'community-engagement': 'Penglibatan Komuniti'
    }
    return names[category as keyof typeof names] || category
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full min-h-[800px]">
      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-semibold text-sppp-dark-blue flex items-center">
            <PhotoIcon className="h-5 w-5 mr-2 text-sppp-blue" />
            {t('gallery-showcase', 'Paparan Galeri', 'Gallery Showcase')}
          </h3>
          <Link
            href="/sumber/galeri-media"
            className="text-sm text-sppp-blue hover:text-sppp-dark-blue font-medium flex items-center"
          >
            {t('view-all', 'Lihat Semua', 'View All')}
            <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="relative">
        {/* Main Image */}
        <div className="relative h-96 sm:h-[450px] lg:h-[550px] bg-gradient-to-br from-gray-100 to-gray-200">
          <Image
            src={currentItem.thumbnail}
            alt={currentItem.title}
            fill
            className="object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = '<div class="absolute inset-0 flex items-center justify-center"><svg class="h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div>';
              }
            }}
          />

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full p-2 text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full p-2 text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-3 right-3 z-10 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full p-2 text-white transition-colors"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? (
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>

          {/* Category Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${categoryColors[currentItem.category]}`}>
              {getCategoryName(currentItem.category)}
            </span>
          </div>
        </div>

        {/* Image Info */}
        <div className="p-4 sm:p-6">
          <h4 className="text-lg font-semibold text-sppp-dark-blue mb-2 line-clamp-2">
            {currentItem.title}
          </h4>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {currentItem.description}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(currentItem.date).toLocaleDateString('ms-MY', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {currentItem.views.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="px-4 sm:px-6 pb-4">
          <div className="flex space-x-2 justify-center">
            {mediaItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-sppp-blue'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-200">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">
            {t('gallery-total', `Menampilkan ${currentIndex + 1} daripada ${mediaItems.length} media`, `Showing ${currentIndex + 1} of ${mediaItems.length} media`)}
          </p>
          <Link
            href="/sumber/galeri-media"
            className="inline-flex items-center text-sm font-medium text-sppp-blue hover:text-sppp-dark-blue"
          >
            {t('explore-full-gallery', 'Terokai Galeri Penuh', 'Explore Full Gallery')}
            <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}

DynamicGallery.displayName = 'DynamicGallery'