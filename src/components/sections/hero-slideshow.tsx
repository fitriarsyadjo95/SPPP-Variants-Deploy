'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRightIcon, ArrowRightIcon, ChevronLeftIcon, PlayIcon, PauseIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/language-context'

const slideImages = [
  {
    src: '/images/port-installations/NBCT_1.JPG',
    title: 'North Butterworth Container Terminal',
    description: 'Terminal kontena utama dengan kapasiti tinggi'
  },
  {
    src: '/images/port-installations/SPCT_1.JPG',
    title: 'Swettenham Pier Cruise Terminal',
    description: 'Terminal kapal persiaran moden dan mewah'
  },
  {
    src: '/images/port-installations/PBCT_1.JPG',
    title: 'Penang Port Terminal',
    description: 'Hub logistik terpenting di pantai barat Malaysia'
  },
  {
    src: '/images/port-installations/SPCT_2.JPG',
    title: 'Port Operations Center',
    description: 'Pusat operasi pelabuhan berteknologi tinggi'
  }
]

export const HeroSlideshow: React.FC = () => {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative overflow-hidden flex items-center" style={{height: '720px'}}>
      {/* Slideshow Background */}
      <div className="absolute inset-0">
        {slideImages.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>
        ))}
      </div>

      {/* Slide Controls */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex space-x-2">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 text-white transition-colors"
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying ? <PauseIcon className="h-5 w-5" /> : <PlayIcon className="h-5 w-5" />}
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 w-full">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center w-full">
            {/* Left Content */}
            <div className="text-white">

              <h1 className="text-xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4 text-white">
                {t('hero-title-line1', 'Suruhanjaya Pelabuhan', 'Penang Port')}<br />
                {t('hero-title-line2', 'Pulau Pinang', 'Commission')}
              </h1>

              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200 mb-4 sm:mb-6 lg:mb-8 leading-relaxed max-w-2xl">
                {t('hero-description',
                  'Pintu masuk maritim utama Malaysia dengan perkhidmatan pelabuhan bertaraf dunia, latihan profesional, dan teknologi canggih demi kecemerlangan industri maritim.',
                  'Malaysia\'s premier maritime gateway with world-class port services, professional training, and advanced technology for maritime industry excellence.'
                )}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
                <Link href="/services">
                  <Button
                    size="lg"
                    className="bg-sppp-accent hover:bg-sppp-accent/90 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base"
                  >
                    {t('online-services-btn', 'Perkhidmatan Online', 'Online Services')}
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </Link>

                <Link href="/hubungi">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-sppp-blue font-semibold px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base"
                  >
                    {t('contact-us-btn', 'Hubungi Kami', 'Contact Us')}
                    <ChevronRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              {/* Current Slide Info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">{slideImages[currentSlide].title}</h3>
                <p className="text-xs sm:text-sm text-gray-200">{slideImages[currentSlide].description}</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slideImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide
                ? 'bg-white'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

HeroSlideshow.displayName = 'HeroSlideshow'