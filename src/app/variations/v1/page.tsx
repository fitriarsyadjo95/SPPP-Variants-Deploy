import React from 'react'
import { HeroSlideshow } from '@/components/sections/hero-slideshow'
import { CorporateVideo } from '@/components/sections/corporate-video'
import { ProgramsCarousel } from '@/components/sections/programs-carousel'
import { Stats } from '@/components/sections/stats'
import { Services } from '@/components/sections/services'
import { QuickLinks } from '@/components/sections/quick-links'
import { GalleryAndSocial } from '@/components/sections/gallery-and-social'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function VariationOne() {
  return (
    <>
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/variations"
          className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-700 rounded-lg shadow-lg hover:bg-white transition-all duration-300"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Kembali ke Variasi
        </Link>
      </div>

      <div className="fixed top-4 right-4 z-50">
        <div className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
          Variasi 1: Asal
        </div>
      </div>

      <HeroSlideshow />
      <CorporateVideo />
      <ProgramsCarousel />
      <Stats />
      <Services />
      <QuickLinks />
      <GalleryAndSocial />
    </>
  )
}