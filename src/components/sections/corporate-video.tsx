'use client'

import React, { useState } from 'react'
import { PlayIcon, PauseIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/language-context'

export const CorporateVideo: React.FC = () => {
  const { t } = useLanguage()
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  // Since corporate video is yet to be provided, we'll use a placeholder
  const videoUrl = "/videos/sppp-corporate-video.mp4" // Placeholder for future video
  const thumbnailUrl = "/images/port-installations/SPCT_1.JPG" // Use port image as thumbnail

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
    // Video play/pause logic will be implemented when video is provided
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    // Video mute logic will be implemented when video is provided
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-sppp-dark-blue mb-4">
            {t('corporate-video-title', 'Video Korporat SPPP', 'SPPP Corporate Video')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('corporate-video-description',
              'Tonton video korporat kami untuk mengetahui lebih lanjut tentang perkhidmatan dan kemudahan pelabuhan yang kami tawarkan.',
              'Watch our corporate video to learn more about the port services and facilities we offer.'
            )}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Video Container */}
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            {/* Video Thumbnail / Placeholder */}
            <div className="relative aspect-video">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${thumbnailUrl})` }}
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                {/* Play Button */}
                <button
                  onClick={handlePlayPause}
                  className="group relative flex items-center justify-center w-20 h-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? (
                    <PauseIcon className="h-8 w-8 text-white ml-0" />
                  ) : (
                    <PlayIcon className="h-8 w-8 text-white ml-1" />
                  )}

                  {/* Ripple Effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-pulse" />
                  <div className="absolute inset-0 rounded-full border border-white/30 animate-ping" />
                </button>
              </div>

              {/* Video Coming Soon Overlay */}
              <div className="absolute top-4 left-4 bg-sppp-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                {t('video-coming-soon', 'Video Akan Datang', 'Video Coming Soon')}
              </div>

              {/* Video Controls */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button
                  onClick={toggleMute}
                  className="flex items-center justify-center w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full transition-colors"
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? (
                    <SpeakerXMarkIcon className="h-5 w-5 text-white" />
                  ) : (
                    <SpeakerWaveIcon className="h-5 w-5 text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Video Information */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-sppp-dark-blue mb-2">
                {t('port-operations', 'Operasi Pelabuhan', 'Port Operations')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('port-operations-desc',
                  'Lihat operasi harian pelabuhan yang canggih dan sistematik.',
                  'See our advanced and systematic daily port operations.'
                )}
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-sppp-dark-blue mb-2">
                {t('modern-facilities', 'Kemudahan Moden', 'Modern Facilities')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('modern-facilities-desc',
                  'Kemudahan terminal dan peralatan berteknologi tinggi.',
                  'High-tech terminal facilities and equipment.'
                )}
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-sppp-dark-blue mb-2">
                {t('professional-team', 'Pasukan Profesional', 'Professional Team')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('professional-team-desc',
                  'Kakitangan terlatih dan berpengalaman dalam industri maritim.',
                  'Trained and experienced staff in the maritime industry.'
                )}
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              {t('video-cta-text',
                'Video korporat SPPP akan segera tersedia. Sementara itu, jelajahi perkhidmatan kami.',
                'SPPP corporate video will be available soon. Meanwhile, explore our services.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sppp-blue hover:bg-sppp-dark-blue transition-colors"
              >
                {t('explore-services', 'Jelajahi Perkhidmatan', 'Explore Services')}
              </a>
              <a
                href="/hubungi"
                className="inline-flex items-center justify-center px-6 py-3 border border-sppp-blue text-base font-medium rounded-md text-sppp-blue hover:bg-sppp-blue hover:text-white transition-colors"
              >
                {t('contact-us', 'Hubungi Kami', 'Contact Us')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

CorporateVideo.displayName = 'CorporateVideo'