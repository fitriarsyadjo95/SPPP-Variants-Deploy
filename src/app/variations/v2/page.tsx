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

export default function VariationTwo() {
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
        <div className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
          Variasi 2: Modern
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
        <HeroSlideshow />
        <div className="bg-white/80 backdrop-blur-sm">
          <CorporateVideo />
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <ProgramsCarousel />
        </div>
        <div className="bg-white/90">
          <Stats />
        </div>
        <div className="bg-gradient-to-l from-emerald-50 to-cyan-50">
          <Services />
        </div>
        <div className="bg-white/80 backdrop-blur-sm">
          <QuickLinks />
        </div>
        <div className="bg-gradient-to-tr from-purple-50 to-pink-50">
          <GalleryAndSocial />
        </div>
      </div>
    </>
  )
}