'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  DocumentTextIcon,
  CalendarDaysIcon,
  GlobeAltIcon,
  ArrowTopRightOnSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/language-context'

const quickLinks = [
  {
    id: 1,
    name: 'Portal Staf',
    href: '/staff-portal',
    external: false
  },
  {
    id: 2,
    name: 'Jadual Kapal',
    href: '/services/vessel-schedule',
    external: false
  },
  {
    id: 3,
    name: 'Borang & Dokumen',
    href: '/documents',
    external: false
  },
  {
    id: 4,
    name: 'Tender Terkini',
    href: '/sumber/tender',
    external: false
  },
  {
    id: 5,
    name: 'Berita & Media',
    href: '/news',
    external: false
  },
  {
    id: 6,
    name: 'Hubungi Kami',
    href: '/hubungi',
    external: false
  }
]

const governmentLinks = [
  {
    id: 1,
    name: 'Kerajaan Negeri Pulau Pinang',
    href: 'https://www.penang.gov.my/',
    logo: '/images/logos/Penang logo.svg'
  },
  {
    id: 2,
    name: 'Kerajaan Malaysia',
    href: 'https://www.malaysia.gov.my/public/cms/',
    logo: '/images/logos/MyGoverment logo.png'
  },
  {
    id: 3,
    name: 'Kementerian Pengangkutan',
    href: 'http://www.mot.gov.my/en',
    logo: '/images/logos/Ministry-of-Transport-Malaysia.png'
  },
  {
    id: 4,
    name: 'Lembaga Pelabuhan Johor',
    href: 'http://www.lpj.gov.my/index.php/ms/',
    logo: '/images/logos/Johor logo.png'
  },
  {
    id: 5,
    name: 'Lembaga Pelabuhan Klang',
    href: 'http://www.pka.gov.my/',
    logo: '/images/logos/Port_Klang_Authority_logo.png'
  },
  {
    id: 6,
    name: 'Lembaga Pelabuhan Kuantan',
    href: 'http://www.lpktn.gov.my/',
    logo: '/images/logos/Kuantan logo.png'
  },
  {
    id: 7,
    name: 'Lembaga Pelabuhan Bintulu',
    href: 'http://www.bpa.gov.my/web/home/index/',
    logo: '/images/logos/Lembaga pelabuhan bintulu logo.png'
  },
  {
    id: 8,
    name: 'Lembaga Pelabuhan Melaka',
    href: 'http://www.mpam.gov.my/',
    logo: '/images/logos/Melaka port logo.png'
  },
  {
    id: 9,
    name: 'Northport Malaysia',
    href: 'https://www.northport.com.my/npv2/index.html',
    logo: '/images/logos/Northport logo.png'
  },
  {
    id: 10,
    name: 'Port of Tanjung Pelepas',
    href: 'http://www.ptp.com.my/',
    logo: '/images/logos/Tanjung Pelepas logo.png'
  },
  {
    id: 11,
    name: 'Bintulu Port Sdn Bhd',
    href: 'http://www.bintuluport.com.my/',
    logo: '/images/logos/Bintulu logo.png'
  },
  {
    id: 12,
    name: 'Westport Malaysia',
    href: 'http://www.westportsmalaysia.com/',
    logo: '/images/logos/Westport logo.png'
  }
]

export const QuickLinks: React.FC = () => {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(6)

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(2) // Mobile: 2 items per slide
      } else if (window.innerWidth < 768) {
        setItemsPerSlide(3) // Tablet: 3 items per slide
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(4) // Medium: 4 items per slide
      } else {
        setItemsPerSlide(6) // Desktop: 6 items per slide
      }
    }

    updateItemsPerSlide()
    window.addEventListener('resize', updateItemsPerSlide)
    return () => window.removeEventListener('resize', updateItemsPerSlide)
  }, [])

  const totalSlides = Math.ceil(governmentLinks.length / itemsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-sppp-dark-blue">
            {t('quick-links-title', 'Akses Pantas', 'Quick Links')}
          </h2>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {quickLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              target={link.external ? '_blank' : '_self'}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="group bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md hover:border-sppp-blue transition-all duration-300 text-center"
            >
              <h3 className="text-sm font-medium text-sppp-dark-blue group-hover:text-sppp-blue transition-colors">
                {link.name}
                {link.external && (
                  <ArrowTopRightOnSquareIcon className="inline h-3 w-3 ml-1" />
                )}
              </h3>
            </Link>
          ))}
        </div>

        {/* Government Links Carousel */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-sppp-dark-blue">
              {t('government-links-title', 'Pautan Kerajaan & Agensi', 'Government & Agency Links')}
            </h3>

            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="p-2 bg-sppp-blue/10 hover:bg-sppp-blue/20 rounded-full transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeftIcon className="h-5 w-5 text-sppp-blue" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 bg-sppp-blue/10 hover:bg-sppp-blue/20 rounded-full transition-colors"
                aria-label="Next slide"
              >
                <ChevronRightIcon className="h-5 w-5 text-sppp-blue" />
              </button>
            </div>
          </div>

          {/* Carousel Container - Single Row Only */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="flex gap-4 justify-center">
                    {governmentLinks
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((link) => (
                        <Link
                          key={link.id}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group text-center"
                        >
                          <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg hover:border-sppp-blue transition-all duration-300 flex flex-col justify-center w-28 sm:w-32 md:w-36 lg:w-40 h-28">
                            <div className="flex items-center justify-center h-16 mb-1">
                              <div className="relative w-full h-full">
                                <Image
                                  src={link.logo}
                                  alt={link.name}
                                  fill
                                  className="object-contain"
                                  sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 144px, 160px"
                                />
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide
                    ? 'bg-sppp-blue'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Popular Services Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-sppp-dark-blue text-center mb-8">
            {t('popular-services-title', 'Perkhidmatan Popular', 'Popular Services')}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/permits" className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sppp-blue/10 rounded-full mb-4 group-hover:bg-sppp-blue/20 transition-colors">
                <DocumentTextIcon className="h-8 w-8 text-sppp-blue" />
              </div>
              <h4 className="font-semibold text-sppp-dark-blue group-hover:text-sppp-blue transition-colors">
                {t('permits-services', 'Permit & Kelulusan', 'Permits & Approvals')}
              </h4>
            </Link>

            <Link href="/bookings" className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sppp-blue/10 rounded-full mb-4 group-hover:bg-sppp-blue/20 transition-colors">
                <CalendarDaysIcon className="h-8 w-8 text-sppp-blue" />
              </div>
              <h4 className="font-semibold text-sppp-dark-blue group-hover:text-sppp-blue transition-colors">
                {t('facility-booking', 'Tempahan Kemudahan', 'Facility Booking')}
              </h4>
            </Link>

            <Link href="/tracking" className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sppp-blue/10 rounded-full mb-4 group-hover:bg-sppp-blue/20 transition-colors">
                <GlobeAltIcon className="h-8 w-8 text-sppp-blue" />
              </div>
              <h4 className="font-semibold text-sppp-dark-blue group-hover:text-sppp-blue transition-colors">
                {t('cargo-tracking', 'Tracking Kargo', 'Cargo Tracking')}
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

QuickLinks.displayName = 'QuickLinks'