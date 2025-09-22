'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/language-context'

interface Program {
  id: string
  title: {
    bm: string
    en: string
  }
  description: {
    bm: string
    en: string
  }
  image: string
  link: string
  category: {
    bm: string
    en: string
  }
}

const programs: Program[] = [
  {
    id: 'port-services',
    title: {
      bm: 'Perkhidmatan Pelabuhan',
      en: 'Port Services'
    },
    description: {
      bm: 'Perkhidmatan komprehensif untuk operasi kapal dan kargo dengan teknologi terkini.',
      en: 'Comprehensive services for ship and cargo operations with latest technology.'
    },
    image: '/images/port-installations/NBCT_1.JPG',
    link: '/services/port-services',
    category: {
      bm: 'Operasi',
      en: 'Operations'
    }
  },
  {
    id: 'cruise-terminal',
    title: {
      bm: 'Terminal Kapal Persiaran',
      en: 'Cruise Terminal'
    },
    description: {
      bm: 'Terminal kapal persiaran moden di Swettenham Pier dengan kemudahan bertaraf dunia.',
      en: 'Modern cruise terminal at Swettenham Pier with world-class facilities.'
    },
    image: '/images/port-installations/SPCT_1.JPG',
    link: '/kemudahan/swettenham-pier',
    category: {
      bm: 'Kemudahan',
      en: 'Facilities'
    }
  },
  {
    id: 'logistics-solutions',
    title: {
      bm: 'Solusi Logistik',
      en: 'Logistics Solutions'
    },
    description: {
      bm: 'Penyelesaian logistik terpadu untuk keperluan import dan eksport yang efisien.',
      en: 'Integrated logistics solutions for efficient import and export needs.'
    },
    image: '/images/port-installations/PBCT_1.JPG',
    link: '/services/logistics',
    category: {
      bm: 'Logistik',
      en: 'Logistics'
    }
  },
  {
    id: 'digital-services',
    title: {
      bm: 'Perkhidmatan Digital',
      en: 'Digital Services'
    },
    description: {
      bm: 'Platform digital untuk memudahkan urusan pelabuhan secara online 24/7.',
      en: 'Digital platform for convenient 24/7 online port transactions.'
    },
    image: '/images/port-installations/SPCT_2.JPG',
    link: '/services/digital',
    category: {
      bm: 'Teknologi',
      en: 'Technology'
    }
  },
  {
    id: 'environmental-initiatives',
    title: {
      bm: 'Inisiatif Alam Sekitar',
      en: 'Environmental Initiatives'
    },
    description: {
      bm: 'Program kelestarian alam sekitar untuk pelabuhan hijau dan mesra alam.',
      en: 'Environmental sustainability programs for green and eco-friendly port.'
    },
    image: '/images/port-installations/NBCT_2.JPG',
    link: '/services/environment',
    category: {
      bm: 'Kelestarian',
      en: 'Sustainability'
    }
  }
]

export const ProgramsCarousel: React.FC = () => {
  const { t, language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Number of visible programs (responsive)
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth < 768) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  }

  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount())
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(1, programs.length - visibleCount + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, visibleCount])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, programs.length - visibleCount + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, programs.length - visibleCount + 1)) % Math.max(1, programs.length - visibleCount + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-sppp-dark-blue mb-4">
            {t('programs-highlight-title', 'Sorotan Program SPPP', 'SPPP Programs Highlight')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('programs-highlight-description',
              'Jelajahi pelbagai program dan perkhidmatan terbaik yang ditawarkan oleh Suruhanjaya Pelabuhan Pulau Pinang.',
              'Explore the various excellent programs and services offered by the Penang Port Commission.'
            )}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Programs Grid */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`
              }}
            >
              {programs.map((program, index) => (
                <div
                  key={program.id}
                  className={`flex-none ${
                    visibleCount === 1 ? 'w-full' :
                    visibleCount === 2 ? 'w-1/2' : 'w-1/3'
                  } px-3`}
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                    {/* Program Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={program.image}
                        alt={language === 'BM' ? program.title.bm : program.title.en}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-sppp-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                          {language === 'BM' ? program.category.bm : program.category.en}
                        </span>
                      </div>
                    </div>

                    {/* Program Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-sppp-dark-blue mb-3 group-hover:text-sppp-blue transition-colors">
                        {language === 'BM' ? program.title.bm : program.title.en}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {language === 'BM' ? program.description.bm : program.description.en}
                      </p>

                      {/* Learn More Link */}
                      <Link
                        href={program.link}
                        className="inline-flex items-center text-sppp-blue hover:text-sppp-dark-blue font-medium transition-colors group/link"
                      >
                        {t('learn-more', 'Ketahui Lebih Lanjut', 'Learn More')}
                        <ArrowRightIcon className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow z-10"
            aria-label="Previous programs"
          >
            <ChevronLeftIcon className="h-6 w-6 text-sppp-dark-blue" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow z-10"
            aria-label="Next programs"
          >
            <ChevronRightIcon className="h-6 w-6 text-sppp-dark-blue" />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.max(1, programs.length - visibleCount + 1) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? 'bg-sppp-blue'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to program set ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
            <span>
              {isAutoPlaying
                ? t('auto-playing', 'Auto-main', 'Auto-playing')
                : t('auto-paused', 'Auto-dijeda', 'Auto-paused')
              }
            </span>
          </button>
        </div>

        {/* View All Programs CTA */}
        <div className="text-center mt-8">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sppp-blue hover:bg-sppp-dark-blue transition-colors"
          >
            {t('view-all-programs', 'Lihat Semua Program', 'View All Programs')}
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

ProgramsCarousel.displayName = 'ProgramsCarousel'