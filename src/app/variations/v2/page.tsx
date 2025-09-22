'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeftIcon, PlayIcon, ChevronLeftIcon, ChevronRightIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

function SimpleHero() {
  const [currentBg, setCurrentBg] = useState(0)

  const backgroundImages = [
    '/images/port-installations/NBCT_1.JPG',
    '/images/port-installations/SPCT_1.JPG',
    '/images/port-installations/PBCT_1.JPG',
    '/images/port-installations/SPCT_2.JPG'
  ]

  // Auto-change background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-sppp-dark-blue flex items-center justify-center" style={{height: '720px'}}>
      {/* Rotating Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentBg ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />


      <div className="relative mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Kandungan Utama */}
          <div className="text-white max-w-4xl mx-auto">
            <h1 className="text-xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4 text-white">
              Suruhanjaya Pelabuhan<br />
              Pulau Pinang
            </h1>

            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200 mb-4 sm:mb-6 lg:mb-8 leading-relaxed max-w-3xl mx-auto">
              Pintu masuk maritim utama Malaysia dengan perkhidmatan pelabuhan bertaraf dunia, latihan profesional, dan teknologi canggih demi kecemerlangan industri maritim.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
              <span>
                <button className="px-8 py-4 bg-white text-sppp-dark-blue font-semibold rounded-md hover:bg-gray-100 transition-colors text-base shadow-lg cursor-not-allowed opacity-75">
                  Perkhidmatan Online
                </button>
              </span>

              <span>
                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white/10 transition-colors text-base cursor-not-allowed opacity-75">
                  Hubungi Kami
                </button>
              </span>
            </div>

            {/* Government Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <div className="bg-white/15 backdrop-blur-sm rounded-md p-6 border border-white/30">
                <div className="text-3xl font-bold text-white mb-2">1.2M</div>
                <div className="text-sm text-gray-100 uppercase tracking-wide">TEU Tahunan</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-md p-6 border border-white/30">
                <div className="text-3xl font-bold text-white mb-2">15</div>
                <div className="text-sm text-gray-100 uppercase tracking-wide">Terminal Aktif</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-md p-6 border border-white/30">
                <div className="text-3xl font-bold text-white mb-2">2,500+</div>
                <div className="text-sm text-gray-100 uppercase tracking-wide">Staf Terlatih</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-md p-6 border border-white/30">
                <div className="text-3xl font-bold text-white mb-2">96.8%</div>
                <div className="text-sm text-gray-100 uppercase tracking-wide">Kadar Kecekapan</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

function SimpleNews() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-sppp-dark-blue mb-4">Berita & Pengumuman</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-8">
            Berita terkini, pengumuman rasmi, dan perkembangan terbaru dari Suruhanjaya Pelabuhan Pulau Pinang.
          </p>
          <span>
            <button className="inline-flex items-center px-6 py-3 bg-sppp-blue text-white font-semibold rounded-lg hover:bg-sppp-dark-blue transition-colors cursor-not-allowed opacity-75">
              Lihat Semua Berita
              <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
            </button>
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative aspect-square rounded-xl overflow-hidden cursor-pointer">
            <div
              className="h-full bg-cover bg-center"
              style={{
                backgroundImage: 'url(/images/port-installations/SPCT_1.JPG)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end">
              <div className="text-center text-white p-6">
                <span className="inline-block px-3 py-1 bg-white/20 text-xs font-semibold rounded-full mb-4">
                  SISTEM AUTOMASI
                </span>
                <h3 className="text-xl font-bold mb-4">Sistem Pelabuhan Pintar Terkini</h3>
                <p className="text-white/95 text-sm">Teknologi AI dan IoT diintegrasikan untuk meningkatkan kecekapan operasi terminal.</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square rounded-xl overflow-hidden cursor-pointer">
            <div
              className="h-full bg-cover bg-center"
              style={{
                backgroundImage: 'url(/images/port-installations/PBCT_1.JPG)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end">
              <div className="text-center text-white p-6">
                <span className="inline-block px-3 py-1 bg-white/20 text-xs font-semibold rounded-full mb-4">
                  KERJASAMA STRATEGIK
                </span>
                <h3 className="text-xl font-bold mb-4">MOU Pelabuhan Antarabangsa</h3>
                <p className="text-white/95 text-sm">Kerjasama strategik dengan pelabuhan-pelabuhan utama di rantau Asia Tenggara.</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square rounded-xl overflow-hidden cursor-pointer">
            <div
              className="h-full bg-cover bg-center"
              style={{
                backgroundImage: 'url(/images/port-installations/SPCT_2.JPG)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end">
              <div className="text-center text-white p-6">
                <span className="inline-block px-3 py-1 bg-white/20 text-xs font-semibold rounded-full mb-4">
                  KELESTARIAN
                </span>
                <h3 className="text-xl font-bold mb-4">Inisiatif Pelabuhan Hijau</h3>
                <p className="text-white/95 text-sm">Program kelestarian alam sekitar untuk mengurangkan jejak karbon operasi pelabuhan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureGrid() {
  return (
    <section className="py-20 bg-sppp-light-gray">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-sppp-dark-blue text-center mb-16">
          Video Korporat SPPP
        </h2>

        {/* Video Section */}
        <div className="mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-md p-8 shadow-lg border border-gray-200">
              <div className="aspect-video bg-gray-100 rounded-md overflow-hidden mb-6 relative border">
                <Image
                  src="/images/port-installations/SPCT_1.JPG"
                  alt="Operasi Pelabuhan"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg">
                    <PlayIcon className="h-10 w-10 text-sppp-dark-blue ml-1" />
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-sppp-dark-blue mb-4">Video Korporat Suruhanjaya Pelabuhan Pulau Pinang</h3>
                <p className="text-gray-600 leading-relaxed">Tonton video rasmi yang memaparkan perkhidmatan dan kemudahan pelabuhan bertaraf dunia, teknologi canggih, serta komitmen kami dalam menyokong industri maritim Malaysia.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}



function ImagePrograms() {
  const programs = [
    {
      title: "Kecemerlangan Latihan Maritim",
      image: "/images/port-installations/NBCT_1.JPG",
      description: "Program pembangunan profesional yang komprehensif untuk kemahiran maritim terkini",
      icon: <svg className="w-8 h-8 text-sppp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    },
    {
      title: "Inovasi Teknologi Pelabuhan",
      image: "/images/port-installations/SPCT_2.JPG",
      description: "Sistem automasi canggih dan teknologi pintar untuk operasi yang lebih cekap",
      icon: <svg className="w-8 h-8 text-sppp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    },
    {
      title: "Kelestarian Alam Sekitar",
      image: "/images/port-installations/PBCT_1.JPG",
      description: "Inisiatif pelabuhan hijau untuk mengurangkan jejak karbon dan menjaga alam sekitar",
      icon: <svg className="w-8 h-8 text-sppp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sppp-dark-blue mb-4">
            Program & Inisiatif Strategik
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-8">
            Program pembangunan yang dirancang untuk meningkatkan kecekapan operasi pelabuhan dan memajukan industri maritim Malaysia.
          </p>
          <span>
            <button className="inline-flex items-center px-6 py-3 bg-sppp-blue text-white font-semibold rounded-lg hover:bg-sppp-dark-blue transition-colors cursor-not-allowed opacity-75">
              Lihat Semua Program
              <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
            </button>
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${program.image})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end">
                <div className="text-left text-white p-8">
                  <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                  <p className="text-white/95">{program.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


function ImageServices() {
  const services = [
    {
      title: "Operasi Kontena",
      image: "/images/port-installations/NBCT_1.JPG",
      description: "Pengendalian kontena canggih dengan teknologi automasi terdepan",
      icon: <svg className="w-8 h-8 text-sppp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
    },
    {
      title: "Terminal Kapal Persiaran",
      image: "/images/port-installations/SPCT_1.JPG",
      description: "Kemudahan penumpang bertaraf dunia dengan perkhidmatan premium",
      icon: <svg className="w-8 h-8 text-sppp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
    },
    {
      title: "Pengendalian Kargo",
      image: "/images/port-installations/PBCT_1.JPG",
      description: "Pemprosesan kargo yang cekap dengan sistem logistik terintegrasi",
      icon: <svg className="w-8 h-8 text-sppp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" /></svg>
    },
    {
      title: "Perkhidmatan Pelabuhan",
      image: "/images/port-installations/SPCT_2.JPG",
      description: "Solusi pelabuhan komprehensif untuk semua keperluan maritim",
      icon: <svg className="w-8 h-8 text-sppp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    }
  ]

  return (
    <section className="py-20 bg-sppp-light-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sppp-dark-blue mb-4">
            Perkhidmatan Pelabuhan
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-8">
            Perkhidmatan pelabuhan yang komprehensif dan berkualiti tinggi untuk memenuhi keperluan industri maritim tempatan dan antarabangsa.
          </p>
          <span>
            <button className="inline-flex items-center px-6 py-3 bg-sppp-blue text-white font-semibold rounded-lg hover:bg-sppp-dark-blue transition-colors cursor-not-allowed opacity-75">
              Lihat Semua Perkhidmatan
              <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
            </button>
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${service.image})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end">
                <div className="text-left text-white p-8">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-white/95">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MinimalistQuickLinks() {
  const links = [
    {
      title: "Kadar Pelabuhan",
      description: "Senarai kadar dan yuran terkini untuk semua perkhidmatan pelabuhan",
      icon: <svg className="w-8 h-8 text-sppp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" /></svg>
    },
    {
      title: "Jadual Kapal",
      description: "Maklumat jadual ketibaan dan berlepas kapal dalam masa nyata",
      icon: <svg className="w-8 h-8 text-sppp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    },
    {
      title: "Program Latihan",
      description: "Kursus dan latihan profesional untuk industri maritim",
      icon: <svg className="w-8 h-8 text-sppp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
    },
    {
      title: "Hubungi Kami",
      description: "Maklumat hubungan dan sokongan pelanggan 24/7",
      icon: <svg className="w-8 h-8 text-sppp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sppp-dark-blue mb-4">
            Perkhidmatan Online
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-8">
            Akses pantas kepada perkhidmatan dan maklumat penting untuk kemudahan urus niaga dan pertanyaan anda.
          </p>
          <span>
            <button className="inline-flex items-center px-6 py-3 bg-sppp-blue text-white font-semibold rounded-lg hover:bg-sppp-dark-blue transition-colors cursor-not-allowed opacity-75">
              Lihat Semua Perkhidmatan Online
              <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
            </button>
          </span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {links.map((link, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="w-16 h-16 bg-sppp-blue/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-sppp-blue/20 transition-colors">
                {React.cloneElement(link.icon, { className: 'w-8 h-8 text-sppp-blue' })}
              </div>
              <h3 className="text-xl font-bold text-sppp-dark-blue mb-4">{link.title}</h3>
              <p className="text-sppp-gray">{link.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const galleryItems = [
    {
      image: "/images/port-installations/NBCT_1.JPG",
      title: "Terminal Kontena Utara",
      description: "Kemudahan kontena terbesar dengan kapasiti pemprosesan tinggi"
    },
    {
      image: "/images/port-installations/SPCT_1.JPG",
      title: "Terminal Kapal Persiaran",
      description: "Terminal moden untuk kapal persiaran dan penumpang"
    },
    {
      image: "/images/port-installations/PBCT_1.JPG",
      title: "Terminal Kargo Umum",
      description: "Hub logistik utama untuk kargo dan barangan umum"
    },
    {
      image: "/images/port-installations/SPCT_2.JPG",
      title: "Pusat Operasi",
      description: "Kawalan berpusat dengan teknologi canggih"
    },
    {
      image: "/images/port-installations/NBCT_1.JPG",
      title: "Kawasan Pelabuhan",
      description: "Pemandangan menyeluruh kawasan pelabuhan yang luas"
    },
    {
      image: "/images/port-installations/SPCT_1.JPG",
      title: "Kemudahan Moden",
      description: "Infrastruktur pelabuhan berteknologi tinggi"
    }
  ]


  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  return (
    <section className="py-12 bg-sppp-light-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-sppp-dark-blue mb-4">
            Galeri Kemudahan
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-8">
            Paparan visual kemudahan dan infrastruktur pelabuhan yang moden serta aktiviti harian operasi pelabuhan.
          </p>
          <span>
            <button className="inline-flex items-center px-6 py-3 bg-sppp-blue text-white font-semibold rounded-lg hover:bg-sppp-dark-blue transition-colors cursor-not-allowed opacity-75">
              Lihat Semua Galeri
              <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
            </button>
          </span>
        </div>

        {/* Bekas Karusel */}
        <div className="relative mb-8">
          {/* Anak Panah Navigasi */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronLeftIcon className="h-6 w-6 text-sppp-dark-blue" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronRightIcon className="h-6 w-6 text-sppp-dark-blue" />
          </button>

          {/* Single Card Display - Full Width */}
          <div className="relative w-full">
            <div className="relative rounded-xl overflow-hidden mx-16">
              <div
                className="h-96 md:h-[500px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${galleryItems[currentIndex].image})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end">
                <div className="text-left text-white p-8">
                  <h3 className="text-3xl font-bold mb-4">{galleryItems[currentIndex].title}</h3>
                  <p className="text-white/95 text-lg">{galleryItems[currentIndex].description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Titik Paginasi */}
          <div className="flex justify-center mt-8 space-x-2">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex
                    ? 'bg-sppp-blue'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Suapan Facebook */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Pengepala */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-sppp-dark-blue flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Suapan Facebook
                </h3>
                <span className="text-sm text-gray-400 font-medium flex items-center cursor-not-allowed">
                  Lawati Halaman
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
                </span>
              </div>
            </div>

            {/* Kandungan Simulasi Facebook */}
            <div className="p-6">
              <div className="facebook-embed w-full">
                {/* Header Halaman Facebook */}
                <div className="bg-blue-600 text-white p-4 rounded-t-lg">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-3">
                      <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Suruhanjaya Pelabuhan Pulau Pinang</h3>
                      <p className="text-blue-100 text-sm">Organisasi Kerajaan • 12,450 pengikut</p>
                    </div>
                  </div>
                </div>

                {/* Pos Facebook */}
                <div className="bg-white border-x border-gray-200">
                  {/* Pos 1 */}
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">SP</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Suruhanjaya Pelabuhan Pulau Pinang</p>
                        <p className="text-gray-500 text-xs">2 jam yang lalu</p>
                      </div>
                    </div>
                    <p className="text-gray-800 mb-3">
                      📢 Pengumuman: Terminal Kontena Utara Butterworth kini beroperasi dengan kapasiti penuh menggunakan sistem automasi terkini. Peningkatan kecekapan sebanyak 35% telah dicapai!
                    </p>
                    <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden mb-3">
                      <div
                        className="h-full bg-cover bg-center"
                        style={{
                          backgroundImage: 'url(/images/port-installations/NBCT_1.JPG)',
                        }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-gray-500 text-sm">
                      <div className="flex items-center space-x-4">
                        <span>👍 142</span>
                        <span>💬 23 komen</span>
                        <span>↗️ 8 kongsi</span>
                      </div>
                    </div>
                  </div>

                  {/* Pos 2 */}
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">SP</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Suruhanjaya Pelabuhan Pulau Pinang</p>
                        <p className="text-gray-500 text-xs">1 hari yang lalu</p>
                      </div>
                    </div>
                    <p className="text-gray-800 mb-3">
                      🚢 Kedatangan kapal persiaran mewah "Royal Caribbean" di Terminal Swettenham Pier. Selamat datang kepada 3,200 pelancong antarabangsa ke Pulau Pinang!
                    </p>
                    <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden mb-3">
                      <div
                        className="h-full bg-cover bg-center"
                        style={{
                          backgroundImage: 'url(/images/port-installations/SPCT_1.JPG)',
                        }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-gray-500 text-sm">
                      <div className="flex items-center space-x-4">
                        <span>👍 89</span>
                        <span>💬 15 komen</span>
                        <span>↗️ 5 kongsi</span>
                      </div>
                    </div>
                  </div>

                  {/* Pos 3 */}
                  <div className="p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">SP</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Suruhanjaya Pelabuhan Pulau Pinang</p>
                        <p className="text-gray-500 text-xs">3 hari yang lalu</p>
                      </div>
                    </div>
                    <p className="text-gray-800 mb-3">
                      🌱 Program Pelabuhan Hijau: Pemasangan 500 panel solar telah siap! Langkah penting menuju operasi pelabuhan yang mampan dan mesra alam.
                    </p>
                    <div className="flex items-center justify-between text-gray-500 text-sm">
                      <div className="flex items-center space-x-4">
                        <span>👍 156</span>
                        <span>💬 31 komen</span>
                        <span>↗️ 12 kongsi</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 p-4 rounded-b-lg text-center">
                  <span className="text-gray-400 text-sm cursor-not-allowed">
                    Lihat Lebih Banyak di Facebook →
                  </span>
                </div>
              </div>

              {/* Pautan Sandaran */}
              <div className="mt-4 text-center">
                <span className="text-gray-400 text-sm cursor-not-allowed">
                  Lawati halaman Facebook kami
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

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
        <div className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg">
          Variasi 2: Moden
        </div>
      </div>

      <SimpleHero />
      <FeatureGrid />
      <ImagePrograms />
      <ImageServices />
      <MinimalistQuickLinks />
      <ImageGallery />
      <SimpleNews />
    </>
  )
}

// Perluaskan antara muka tetingkap untuk SDK Facebook
declare global {
  interface Window {
    FB: any;
  }
}