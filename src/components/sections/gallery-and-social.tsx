'use client'

import React from 'react'
import { DynamicGallery } from './dynamic-gallery'
import { CompactSocialFeed } from './compact-social-feed'
import { useLanguage } from '@/contexts/language-context'

export const GalleryAndSocial: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sppp-dark-blue mb-3 sm:mb-4">
            {t('media-gallery-title', 'Media & Galeri', 'Media & Gallery')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            {t('media-gallery-description',
              'Lihat galeri foto terkini aktiviti SPPP dan ikuti perkembangan kami melalui media sosial untuk berita dan pengumuman terbaru.',
              'View our latest photo gallery of SPPP activities and follow our social media for the latest news and announcements.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Dynamic Gallery */}
          <div className="lg:col-span-1">
            <DynamicGallery />
          </div>

          {/* Social Media Feed (compact version) */}
          <div className="lg:col-span-1">
            <CompactSocialFeed />
          </div>
        </div>
      </div>
    </section>
  )
}

GalleryAndSocial.displayName = 'GalleryAndSocial'