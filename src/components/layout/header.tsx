'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { PhoneIcon, EnvelopeIcon, Bars3Icon, XMarkIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'
import { Navigation } from './navigation'
import { GlobalSearch } from '../search/global-search'
import { useLanguage } from '@/contexts/language-context'
import { useAccessibility } from '@/contexts/accessibility-context'

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const { dispatch } = useAccessibility()
  const pathname = usePathname()

  // Check if we're on a variations page
  const isVariationsPage = pathname.startsWith('/variations')

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Header Bar */}
      <div className="bg-sppp-dark-blue text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                <span>+60 4-263 3211</span>
              </div>
              <div className="hidden sm:flex items-center">
                <EnvelopeIcon className="h-4 w-4 mr-2" />
                <span>sppp@penangport.gov.my</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* Government Requirements Navigation */}
              <div className="hidden md:flex items-center space-x-3">
                {isVariationsPage ? (
                  <>
                    <span
                      className="opacity-50 cursor-not-allowed p-1 rounded"
                      title={t('faq', 'Soalan Lazim', 'FAQ')}
                    >
                      <Image
                        src="/images/faq.svg"
                        alt="FAQ"
                        width={16}
                        height={16}
                        className="h-4 w-4 brightness-0 invert"
                      />
                    </span>
                    <span
                      className="opacity-50 cursor-not-allowed p-1 rounded"
                      title={t('contact-us-short', 'Hubungi Kami', 'Contact Us')}
                    >
                      <Image
                        src="/images/hubungi.svg"
                        alt="Contact"
                        width={16}
                        height={16}
                        className="h-4 w-4 brightness-0 invert"
                      />
                    </span>
                    <span
                      className="opacity-50 cursor-not-allowed p-1 rounded"
                      title={t('feedback', 'Aduan dan Maklum Balas', 'Complaints & Feedback')}
                    >
                      <Image
                        src="/images/maklumbalas.svg"
                        alt="Feedback"
                        width={16}
                        height={16}
                        className="h-4 w-4 brightness-0 invert"
                      />
                    </span>
                    <span
                      className="opacity-50 cursor-not-allowed p-1 rounded"
                      title={t('sitemap', 'Peta Laman', 'Site Map')}
                    >
                      <Image
                        src="/images/peta.svg"
                        alt="Site Map"
                        width={16}
                        height={16}
                        className="h-4 w-4 brightness-0 invert"
                      />
                    </span>
                  </>
                ) : (
                  <>
                    <Link
                      href="/hubungi/faq"
                      className="hover:opacity-75 transition-opacity p-1 rounded hover:bg-white/10"
                      title={t('faq', 'Soalan Lazim', 'FAQ')}
                    >
                      <Image
                        src="/images/faq.svg"
                        alt="FAQ"
                        width={16}
                        height={16}
                        className="h-4 w-4 brightness-0 invert"
                      />
                    </Link>
                    <Link
                      href="/hubungi"
                      className="hover:opacity-75 transition-opacity p-1 rounded hover:bg-white/10"
                      title={t('contact-us-short', 'Hubungi Kami', 'Contact Us')}
                    >
                      <Image
                        src="/images/hubungi.svg"
                        alt="Contact"
                        width={16}
                        height={16}
                        className="h-4 w-4 brightness-0 invert"
                      />
                    </Link>
                    <Link
                      href="/hubungi/maklum-balas"
                      className="hover:opacity-75 transition-opacity p-1 rounded hover:bg-white/10"
                      title={t('feedback', 'Aduan dan Maklum Balas', 'Complaints & Feedback')}
                    >
                      <Image
                        src="/images/maklumbalas.svg"
                        alt="Feedback"
                        width={16}
                        height={16}
                        className="h-4 w-4 brightness-0 invert"
                      />
                    </Link>
                    <Link
                      href="/sitemap"
                      className="hover:opacity-75 transition-opacity p-1 rounded hover:bg-white/10"
                      title={t('sitemap', 'Peta Laman', 'Site Map')}
                    >
                      <Image
                        src="/images/peta.svg"
                        alt="Site Map"
                        width={16}
                        height={16}
                        className="h-4 w-4 brightness-0 invert"
                      />
                    </Link>
                  </>
                )}
              </div>

              {isVariationsPage ? (
                <span className="text-xs bg-gray-400 px-3 py-1 rounded cursor-not-allowed opacity-50">
                  {t('staff-portal', 'Portal Staf', 'Staff Portal')}
                </span>
              ) : (
                <Link
                  href="/staff-portal"
                  className="text-xs bg-sppp-blue hover:bg-sppp-light-blue px-3 py-1 rounded transition-colors"
                >
                  {t('staff-portal', 'Portal Staf', 'Staff Portal')}
                </Link>
              )}
              
              {/* Accessibility Button */}
              <button
                onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
                className="text-xs hover:text-sppp-accent transition-colors p-1 rounded hover:bg-white/10"
                title={t('accessibility-menu', 'Menu Aksesibiliti', 'Accessibility Menu')}
                aria-label="Open accessibility menu"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="4" r="2"/>
                  <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-.46 2.48-.3 3.67.14 1.05.4 2.06.8 3H15v-2h-2.17z"/>
                  <circle cx="17.5" cy="19.5" r="1.5"/>
                  <circle cx="5.5" cy="19.5" r="1.5"/>
                  <path d="M5.5 16c-.83 0-1.5.67-1.5 1.5v0c0 .83.67 1.5 1.5 1.5h12c.83 0 1.5-.67 1.5-1.5v0c0-.83-.67-1.5-1.5-1.5H5.5z"/>
                </svg>
              </button>
              
              <div className="flex space-x-2">
                <button 
                  onClick={() => setLanguage('BM')}
                  className={`text-xs transition-colors ${
                    language === 'BM' 
                      ? 'text-sppp-accent font-semibold' 
                      : 'hover:text-sppp-accent'
                  }`}
                >
                  BM
                </button>
                <span className="text-xs">|</span>
                <button 
                  onClick={() => setLanguage('EN')}
                  className={`text-xs transition-colors ${
                    language === 'EN' 
                      ? 'text-sppp-accent font-semibold' 
                      : 'hover:text-sppp-accent'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              {isVariationsPage ? (
                <div className="flex items-center space-x-2 sm:space-x-3 cursor-not-allowed opacity-75">
                  {/* Malaysian Coat of Arms */}
                  <div className="relative">
                    <Image
                      src="/images/Coat_of_arms_of_Malaysia.png"
                      alt="Coat of Arms of Malaysia"
                      width={50}
                      height={50}
                      className="h-10 sm:h-15 w-auto object-contain"
                      priority
                    />
                  </div>
                  {/* SPPP Logo */}
                  <div className="relative">
                    <Image
                      src="/images/SPPP Official Logo.png"
                      alt="Suruhanjaya Pelabuhan Pulau Pinang Official Logo"
                      width={50}
                      height={50}
                      className="h-10 sm:h-15 w-auto object-contain"
                      priority
                    />
                  </div>
                  {/* Text Content */}
                  <div className="flex flex-col min-w-0 flex-1">
                    <div className="text-xs text-sppp-blue font-semibold mb-1">
                      PORTAL RASMI
                    </div>
                    <h1 className="text-sm sm:text-lg lg:text-xl font-bold text-sppp-dark-blue leading-tight">
                      {t('header-title', 'SURUHANJAYA PELABUHAN PULAU PINANG', 'PORT COMMISSION OF PENANG')}
                    </h1>
                  </div>
                </div>
              ) : (
                <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
                  {/* Malaysian Coat of Arms */}
                  <div className="relative">
                    <Image
                      src="/images/Coat_of_arms_of_Malaysia.png"
                      alt="Coat of Arms of Malaysia"
                      width={50}
                      height={50}
                      className="h-10 sm:h-15 w-auto object-contain"
                      priority
                    />
                  </div>
                  {/* SPPP Logo */}
                  <div className="relative">
                    <Image
                      src="/images/SPPP Official Logo.png"
                      alt="Suruhanjaya Pelabuhan Pulau Pinang Official Logo"
                      width={50}
                      height={50}
                      className="h-10 sm:h-15 w-auto object-contain"
                      priority
                    />
                  </div>
                  {/* Text Content */}
                  <div className="flex flex-col min-w-0 flex-1">
                    <div className="text-xs text-sppp-blue font-semibold mb-1">
                      PORTAL RASMI
                    </div>
                    <h1 className="text-sm sm:text-lg lg:text-xl font-bold text-sppp-dark-blue leading-tight">
                      {t('header-title', 'SURUHANJAYA PELABUHAN PULAU PINANG', 'PORT COMMISSION OF PENANG')}
                    </h1>
                  </div>
                </Link>
              )}
            </div>

            {/* Search - Hidden on mobile, will be in mobile menu */}
            <div className="hidden lg:flex flex-1 max-w-lg mx-8">
              <GlobalSearch />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {isVariationsPage ? (
                <Button size="sm" disabled className="opacity-50 cursor-not-allowed">
                  {t('online-services', 'Perkhidmatan Online', 'Online Services')}
                </Button>
              ) : (
                <Link href="/services">
                  <Button size="sm">
                    {t('online-services', 'Perkhidmatan Online', 'Online Services')}
                  </Button>
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        isVariationsPage={isVariationsPage}
      />
    </header>
  )
}

Header.displayName = 'Header'