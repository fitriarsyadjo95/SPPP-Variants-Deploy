'use client'

import React, { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/language-context'
import { ArrowTopRightOnSquareIcon, HeartIcon, ChatBubbleLeftIcon, ShareIcon } from '@heroicons/react/24/outline'

// Facebook Page: https://www.facebook.com/SuruhanjayaPelabuhanPulauPinang/
const FACEBOOK_PAGE_URL = 'https://www.facebook.com/SuruhanjayaPelabuhanPulauPinang'
const FACEBOOK_PAGE_ID = 'SuruhanjayaPelabuhanPulauPinang'

export const SocialMediaFeed: React.FC = () => {
  const { t, language } = useLanguage()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load Facebook SDK
    const loadFacebookSDK = () => {
      // Check if Facebook SDK is already loaded
      if (window.FB) {
        setIsLoaded(true)
        return
      }

      // Create Facebook root div if it doesn't exist
      if (!document.getElementById('fb-root')) {
        const fbRoot = document.createElement('div')
        fbRoot.id = 'fb-root'
        document.body.appendChild(fbRoot)
      }

      // Load Facebook SDK script
      const script = document.createElement('script')
      script.async = true
      script.defer = true
      script.crossOrigin = 'anonymous'
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0'

      script.onload = () => {
        if (window.FB) {
          window.FB.init({
            xfbml: true,
            version: 'v18.0'
          })
          setIsLoaded(true)
        }
      }

      document.head.appendChild(script)
    }

    loadFacebookSDK()
  }, [])

  // Mock social media data for fallback/demonstration
  const mockPosts = [
    {
      id: '1',
      content: 'Operasi pelabuhan berjalan lancar hari ini dengan 15 kapal yang sedang diproses. Terima kasih kepada semua staf yang bekerja keras!',
      timestamp: '2 jam yang lalu',
      likes: 42,
      comments: 8,
      shares: 3,
      image: '/images/port-installations/NBCT_1.JPG'
    },
    {
      id: '2',
      content: 'Selamat datang kepada MV Ocean Pride yang tiba di Terminal 5 pagi ini. Proses pemunggahan kargo sedang berjalan dengan lancar.',
      timestamp: '6 jam yang lalu',
      likes: 28,
      comments: 5,
      shares: 2,
      image: '/images/port-installations/SPCT_1.JPG'
    },
    {
      id: '3',
      content: 'SPPP komited untuk menjadi pelabuhan hijau. Program kelestarian alam sekitar kami terus diperkukuh untuk masa depan yang lebih baik.',
      timestamp: '1 hari yang lalu',
      likes: 67,
      comments: 12,
      shares: 8
    }
  ]

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sppp-dark-blue mb-3 sm:mb-4">
            {t('social-media-title', 'Media Sosial SPPP', 'SPPP Social Media')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto mb-4 sm:mb-6">
            {t('social-media-description',
              'Ikuti perkembangan terkini SPPP melalui platform media sosial kami untuk mendapat berita, pengumuman, dan maklumat operasi pelabuhan.',
              'Follow the latest SPPP developments through our social media platform for news, announcements, and port operation information.'
            )}
          </p>

          {/* Facebook Page Link */}
          <div className="flex justify-center">
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              {t('follow-facebook', 'Ikuti di Facebook', 'Follow on Facebook')}
              <ArrowTopRightOnSquareIcon className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
            </a>
          </div>
        </div>

        {/* Facebook Embed - Full Width */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold text-sppp-dark-blue mb-3 sm:mb-4">
            {t('facebook-feed', 'Suapan Facebook', 'Facebook Feed')}
          </h3>

          {/* Facebook Page Plugin */}
          <div className="facebook-embed">
            {isLoaded ? (
              <div
                className="fb-page"
                data-href={FACEBOOK_PAGE_URL}
                data-tabs="timeline"
                data-width=""
                data-height="500"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite={FACEBOOK_PAGE_URL}
                  className="fb-xfbml-parse-ignore"
                >
                  <a href={FACEBOOK_PAGE_URL}>
                    Suruhanjaya Pelabuhan Pulau Pinang
                  </a>
                </blockquote>
              </div>
            ) : (
              <div className="animate-pulse">
                <div className="bg-gray-200 h-96 rounded-lg mb-4"></div>
                <div className="bg-gray-200 h-4 rounded w-3/4 mb-2"></div>
                <div className="bg-gray-200 h-4 rounded w-1/2"></div>
              </div>
            )}
          </div>

          {/* Fallback Message */}
          {!isLoaded && (
            <div className="mt-4 text-center">
              <p className="text-gray-500 text-sm">
                {t('loading-facebook', 'Memuatkan suapan Facebook...', 'Loading Facebook feed...')}
              </p>
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm underline"
              >
                {t('visit-facebook-page', 'Lawati halaman Facebook kami', 'Visit our Facebook page')}
              </a>
            </div>
          )}
        </div>

        {/* Social Media Stats */}
        <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white rounded-lg p-4 sm:p-6 text-center shadow-md">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">2.5k+</div>
            <div className="text-gray-600">
              {t('followers', 'Pengikut', 'Followers')}
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 sm:p-6 text-center shadow-md">
            <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">450+</div>
            <div className="text-gray-600">
              {t('posts-this-year', 'Siaran Tahun Ini', 'Posts This Year')}
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 sm:p-6 text-center shadow-md">
            <div className="text-2xl sm:text-3xl font-bold text-sppp-accent mb-2">98%</div>
            <div className="text-gray-600">
              {t('engagement-rate', 'Kadar Penglibatan', 'Engagement Rate')}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 sm:mt-10 lg:mt-12 text-center bg-sppp-blue rounded-xl p-6 sm:p-8 text-white">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            {t('stay-connected', 'Kekal Berhubung dengan SPPP', 'Stay Connected with SPPP')}
          </h3>
          <p className="text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            {t('stay-connected-description',
              'Jangan terlepas sebarang berita penting. Ikuti kami di Facebook untuk mendapat kemas kini masa nyata tentang operasi pelabuhan, pengumuman, dan banyak lagi.',
              'Don\'t miss any important news. Follow us on Facebook for real-time updates on port operations, announcements, and much more.'
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-white text-sppp-blue font-medium rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              {t('like-our-page', 'Suka Halaman Kami', 'Like Our Page')}
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-sppp-blue transition-colors text-sm sm:text-base"
            >
              {t('contact-us', 'Hubungi Kami', 'Contact Us')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

SocialMediaFeed.displayName = 'SocialMediaFeed'

// Extend window interface for Facebook SDK
declare global {
  interface Window {
    FB: any;
  }
}