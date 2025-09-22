'use client'

import React, { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/language-context'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

// Facebook Page: https://www.facebook.com/SuruhanjayaPelabuhanPulauPinang/
const FACEBOOK_PAGE_URL = 'https://www.facebook.com/SuruhanjayaPelabuhanPulauPinang'

export const CompactSocialFeed: React.FC = () => {
  const { t } = useLanguage()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load Facebook SDK
    const loadFacebookSDK = () => {
      // Check if Facebook SDK is already loaded
      if (window.FB) {
        setIsLoaded(true)
        // Force re-parse existing Facebook elements
        setTimeout(() => {
          if (window.FB && window.FB.XFBML) {
            window.FB.XFBML.parse()
          }
        }, 100)
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
          // Parse XFBML after SDK loads
          setTimeout(() => {
            if (window.FB && window.FB.XFBML) {
              window.FB.XFBML.parse()
            }
          }, 100)
        }
      }

      script.onerror = () => {
        console.error('Failed to load Facebook SDK')
        setIsLoaded(false)
      }

      document.head.appendChild(script)
    }

    // Add a delay to ensure DOM is ready
    const timer = setTimeout(loadFacebookSDK, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-semibold text-sppp-dark-blue flex items-center">
            <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            {t('facebook-feed', 'Suapan Facebook', 'Facebook Feed')}
          </h3>
          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-sppp-blue hover:text-sppp-dark-blue font-medium flex items-center"
          >
            {t('visit-page', 'Lawati Halaman', 'Visit Page')}
            <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>

      {/* Facebook Embed Content */}
      <div className="p-4 sm:p-6">
        {/* Facebook Page Plugin */}
        <div className="facebook-embed w-full min-h-[700px]">
          {isLoaded ? (
            <div
              className="fb-page w-full"
              data-href={FACEBOOK_PAGE_URL}
              data-tabs="timeline"
              data-width="500"
              data-height="700"
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
              <div className="bg-gray-200 h-80 sm:h-96 lg:h-[500px] rounded-lg mb-4"></div>
              <div className="bg-gray-200 h-4 rounded w-3/4 mb-2"></div>
              <div className="bg-gray-200 h-4 rounded w-1/2"></div>
            </div>
          )}
        </div>

        {/* Debug and Fallback */}
        <div className="mt-4 text-center">
          {!isLoaded ? (
            <>
              <p className="text-gray-500 text-sm mb-2">
                {t('loading-facebook', 'Memuatkan suapan Facebook...', 'Loading Facebook feed...')}
              </p>
              <p className="text-xs text-gray-400 mb-2">
                SDK Status: {typeof window !== 'undefined' && window.FB ? 'Loaded' : 'Loading...'}
              </p>
            </>
          ) : (
            <p className="text-xs text-green-600 mb-2">✓ Facebook SDK loaded successfully</p>
          )}
          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-sm underline"
          >
            {t('visit-facebook-page', 'Lawati halaman Facebook kami', 'Visit our Facebook page')}
          </a>
        </div>
      </div>

    </div>
  )
}

CompactSocialFeed.displayName = 'CompactSocialFeed'

// Extend window interface for Facebook SDK
declare global {
  interface Window {
    FB: any;
  }
}