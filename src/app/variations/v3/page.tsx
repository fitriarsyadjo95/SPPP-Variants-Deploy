'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Ship, FileText, MapPin, Shield, Anchor, Container, GraduationCap, Clock, Calendar, Users, TrendingUp, Award, Globe, ChevronLeft, ChevronRight, ArrowLeftIcon } from 'lucide-react'

const galleryItems = [
  {
    id: '1',
    title: 'Lawatan Yang Berhormat Menteri Pengangkutan Malaysia',
    category: 'Perhubungan Kerajaan',
    description: 'Lawatan rasmi YB Menteri Pengangkutan ke kemudahan pelabuhan untuk melihat pembangunan infrastruktur terkini.',
    image: '/images/port-installations/NBCT_1.JPG',
    date: '2023-11-15',
    views: 3250
  },
  {
    id: '2',
    title: 'Operasi Terminal Container North Butterworth',
    category: 'Operasi Pelabuhan',
    description: 'Aktiviti harian operasi terminal container terbesar di Pulau Pinang dengan teknologi automasi terkini.',
    image: '/images/port-installations/SPCT_1.JPG',
    date: '2023-09-30',
    views: 2890
  },
  {
    id: '3',
    title: 'Malaysia International Shipping Week 2023',
    category: 'Acara Industri',
    description: 'Penyertaan SPPP dalam minggu pelayaran antarabangsa Malaysia dengan paparan teknologi terkini.',
    image: '/images/port-installations/PBCT_1.JPG',
    date: '2023-08-15',
    views: 2567
  }
]

const services = [
  {
    id: 1,
    name: 'Perkhidmatan Kontena',
    icon: Container
  },
  {
    id: 2,
    name: 'Perkhidmatan Kargo',
    icon: Ship
  },
  {
    id: 3,
    name: 'Perkhidmatan Feri',
    icon: MapPin
  },
  {
    id: 4,
    name: 'Perkhidmatan Marin',
    icon: Globe
  },
  {
    id: 5,
    name: 'Kemudahan Pelabuhan',
    icon: Shield
  },
  {
    id: 6,
    name: 'Penerbitan',
    icon: FileText
  }
]

const programs = [
  {
    id: 'port-services',
    title: 'Perkhidmatan Pelabuhan',
    description: 'Perkhidmatan komprehensif untuk operasi kapal dan kargo dengan teknologi terkini.',
    image: '/images/port-installations/NBCT_1.JPG',
    category: 'Operasi'
  },
  {
    id: 'cruise-terminal',
    title: 'Terminal Kapal Persiaran',
    description: 'Terminal kapal persiaran moden di Swettenham Pier dengan kemudahan bertaraf dunia.',
    image: '/images/port-installations/SPCT_1.JPG',
    category: 'Kemudahan'
  },
  {
    id: 'logistics-solutions',
    title: 'Solusi Logistik',
    description: 'Penyelesaian logistik terpadu untuk keperluan import dan eksport yang efisien.',
    image: '/images/port-installations/PBCT_1.JPG',
    category: 'Logistik'
  },
  {
    id: 'digital-services',
    title: 'Perkhidmatan Digital',
    description: 'Platform digital untuk memudahkan urusan pelabuhan secara online 24/7.',
    image: '/images/port-installations/SPCT_2.JPG',
    category: 'Teknologi'
  },
  {
    id: 'environmental-initiatives',
    title: 'Inisiatif Alam Sekitar',
    description: 'Program kelestarian alam sekitar untuk pelabuhan hijau dan mesra alam.',
    image: '/images/port-installations/NBCT_2.JPG',
    category: 'Kelestarian'
  }
]

const heroSlides = [
  {
    category: 'KEMUDAHAN UTAMA',
    title: 'North Butterworth Container Terminal',
    subtitle: 'Terminal kontena utama dengan kapasiti tinggi',
    description: 'Terminal kontena tercanggih di Malaysia dengan sistem automasi penuh dan kapasiti pemprosesan tinggi untuk memenuhi keperluan perdagangan global.',
    image: '/images/port-installations/NBCT_1.JPG',
    color: 'bg-blue-900'
  },
  {
    category: 'PELAYARAN MEWAH',
    title: 'Swettenham Pier Cruise Terminal',
    subtitle: 'Terminal kapal persiaran moden dan mewah',
    description: 'Hub destinasi kapal persiaran dengan kemudahan bertaraf dunia, menyambut pelancong antarabangsa ke Pulau Pinang dengan pengalaman yang tak terlupakan.',
    image: '/images/port-installations/SPCT_1.JPG',
    color: 'bg-orange-600'
  },
  {
    category: 'HUB LOGISTIK',
    title: 'Penang Port Terminal',
    subtitle: 'Hub logistik terpenting di pantai barat Malaysia',
    description: 'Pintu masuk utama untuk perdagangan pantai barat Malaysia dengan sambungan strategik ke seluruh Asia Tenggara dan ekonomi global.',
    image: '/images/port-installations/PBCT_1.JPG',
    color: 'bg-green-700'
  },
  {
    category: 'TEKNOLOGI PINTAR',
    title: 'Port Operations Center',
    subtitle: 'Pusat operasi pelabuhan berteknologi tinggi',
    description: 'Sistem kawalan dan pemantauan terintegrasi dengan teknologi AI dan IoT untuk operasi pelabuhan yang optimum dan selamat 24/7.',
    image: '/images/port-installations/SPCT_2.JPG',
    color: 'bg-emerald-600'
  }
]

export default function VariationThree() {
  const [currentBanner, setCurrentBanner] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentBanner((prev) => (prev + 1) % heroSlides.length)
        setIsTransitioning(false)
      }, 300)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextBanner = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentBanner((prev) => (prev + 1) % heroSlides.length)
      setIsTransitioning(false)
    }, 300)
  }

  const prevBanner = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentBanner((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation */}
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
        <div className="bg-orange-600 text-white px-4 py-2 rounded-lg shadow-lg">
          Variasi 3: Editorial
        </div>
      </div>

      {/* MAGAZINE-STYLE HERO */}
      <section className="relative bg-white border-t-8 border-blue-900 pt-0">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-l-4 border-r-4 border-gray-200 bg-white">
          {/* Magazine Header */}
          <div className="text-center mb-8 border-b-2 border-gray-300 pb-6">
            <h1 className="text-4xl font-black text-blue-900 mb-6 tracking-tight">
              SURUHANJAYA PELABUHAN PULAU PINANG
            </h1>

            {/* Full Width Image Slideshow */}
            <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentBanner ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50" />

                  {/* Slide Content Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                      <div className="inline-block px-3 py-1 bg-white/20 border border-white/30 rounded text-white text-xs font-bold uppercase tracking-wide mb-2">
                        {slide.category}
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">{slide.title}</h3>
                      <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto">{slide.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevBanner}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 text-white transition-colors"
                aria-label="Slaid sebelumnya"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextBanner}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 text-white transition-colors"
                aria-label="Slaid seterusnya"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsTransitioning(true)
                      setTimeout(() => {
                        setCurrentBanner(index)
                        setIsTransitioning(false)
                      }, 300)
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentBanner
                        ? 'bg-white shadow-lg'
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Pergi ke slaid ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Rotating Banner */}
          <div className="mb-8 relative">
            <div className="relative h-64 bg-white border-2 border-gray-300 overflow-hidden">
              {/* Banner Navigation */}
              <div className="absolute top-4 right-4 z-20 flex gap-2">
                <button
                  onClick={prevBanner}
                  className="w-8 h-8 bg-white/90 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={nextBanner}
                  className="w-8 h-8 bg-white/90 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              {/* Banner Content */}
              <div className={`h-full transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}>
                <div className={`h-full ${heroSlides[currentBanner].color} relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex items-center">
                    <div className="w-full px-8">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        {/* Left Content */}
                        <div className="lg:col-span-2">
                          <div className="inline-block px-3 py-1 bg-white/20 border border-white/30 rounded text-white text-xs font-bold uppercase tracking-wide mb-3">
                            {heroSlides[currentBanner].category}
                          </div>
                          <h2 className="text-2xl lg:text-3xl font-black text-white mb-2 leading-tight">
                            {heroSlides[currentBanner].title}
                          </h2>
                          <p className="text-lg text-white/90 font-semibold mb-3">
                            {heroSlides[currentBanner].subtitle}
                          </p>
                          <p className="text-sm text-white/80 leading-relaxed mb-4">
                            {heroSlides[currentBanner].description}
                          </p>
                          <button className="px-6 py-2 bg-white text-gray-900 font-bold text-sm hover:bg-gray-100 transition-colors">
                            BACA SELENGKAPNYA
                          </button>
                        </div>

                        {/* Right Content - Image */}
                        <div className="hidden lg:block">
                          <div className="bg-white/20 border-2 border-white/30 h-40 rounded overflow-hidden">
                            <img
                              src={heroSlides[currentBanner].image}
                              alt={heroSlides[currentBanner].title}
                              className="w-full h-full object-cover opacity-80"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Banner Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsTransitioning(true)
                      setTimeout(() => {
                        setCurrentBanner(index)
                        setIsTransitioning(false)
                      }, 300)
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentBanner
                        ? 'bg-white shadow-lg'
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-l border-r border-gray-200 bg-gray-50 p-6">
            {/* Featured Story */}
            <div className="lg:col-span-8">
              <div className="bg-white border-2 border-gray-300 h-[500px] relative">
                {/* Article Header */}
                <div className="absolute top-0 left-0 right-0 bg-orange-600 text-white px-4 py-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-wide">LAPORAN KHAS</span>
                    <span className="text-xs">MUKA SURAT 1</span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="pt-12 p-8 h-full flex flex-col">
                  <div className="border-l-4 border-orange-600 pl-4 mb-6">
                    <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
                      LAPORAN KHAS
                    </div>
                    <h1 className="text-3xl lg:text-4xl font-black text-blue-900 mb-4 leading-tight">
                      VIDEO KORPORAT SPPP: MEMBUKA TIRAI OPERASI PELABUHAN
                    </h1>
                    <div className="text-sm text-gray-600 font-semibold">
                      Oleh: Unit Media Korporat | {new Date().toLocaleDateString('ms-MY')}
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <p className="text-sm text-gray-800 leading-relaxed">
                        <span className="float-left text-6xl font-bold text-orange-600 mr-2 leading-none">M</span>
                        enyaksikan kehebatan operasi pelabuhan melalui video korporat SPPP yang akan segera dilancarkan, memberikan gambaran menyeluruh tentang perkhidmatan dan kemudahan bertaraf dunia.
                      </p>
                      <p className="text-sm text-gray-800 leading-relaxed">
                        Video ini akan menampilkan operasi harian yang canggih dan sistematik, kemudahan terminal berteknologi tinggi, serta pasukan profesional yang berpengalaman dalam industri maritim.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-gray-100 border border-gray-300 h-32 overflow-hidden">
                        <img
                          src="/images/port-installations/SPCT_1.JPG"
                          alt="Operasi Pelabuhan SPPP"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-sm text-gray-800 leading-relaxed">
                        Dokumentari visual ini merakamkan setiap aspek operasi pelabuhan dari fasilitas moden hingga teknologi terdepan.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-300 pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500 font-semibold">SAMBUNGAN DI MUKA SURAT 3</span>
                      <button className="px-4 py-2 bg-orange-600 text-white text-xs font-bold uppercase tracking-wide hover:bg-blue-900 transition-colors">
                        Baca Penuh
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Content */}
            <div className="lg:col-span-4 space-y-6">
              {/* Quick Stats Box */}
              <div className="bg-white border-2 border-gray-300 relative">
                <div className="bg-blue-900 text-white px-4 py-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-wide">DATA PRESTASI</span>
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-black text-blue-900 mb-4 border-b border-gray-200 pb-2">
                    STATISTIK BULANAN
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center border border-gray-200 p-2">
                      <div className="text-lg font-black text-orange-600">32.3M</div>
                      <div className="text-xs text-gray-600 font-semibold uppercase">Tan Kargo</div>
                      <div className="text-xs text-green-600">+1.0%</div>
                    </div>
                    <div className="text-center border border-gray-200 p-2">
                      <div className="text-lg font-black text-orange-600">1.42M</div>
                      <div className="text-xs text-gray-600 font-semibold uppercase">TEU</div>
                      <div className="text-xs text-red-600">-1.9%</div>
                    </div>
                    <div className="text-center border border-gray-200 p-2">
                      <div className="text-lg font-black text-orange-600">2.86M</div>
                      <div className="text-xs text-gray-600 font-semibold uppercase">Penumpang</div>
                      <div className="text-xs text-green-600">+29.9%</div>
                    </div>
                    <div className="text-center border border-gray-200 p-2">
                      <div className="text-lg font-black text-orange-600">70.6%</div>
                      <div className="text-xs text-gray-600 font-semibold uppercase">Berkontena</div>
                      <div className="text-xs text-green-600">+5.8%</div>
                    </div>
                    <div className="text-center border border-gray-200 p-2 col-span-2">
                      <div className="text-lg font-black text-orange-600">4 Tahun</div>
                      <div className="text-xs text-gray-600 font-semibold uppercase">Pertumbuhan Positif</div>
                      <div className="text-xs text-blue-600">2021-2024</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Breaking News */}
              <div className="bg-white border-2 border-gray-300 relative">
                <div className="bg-red-600 text-white px-4 py-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-wide">BERITA TERKINI</span>
                    <Award className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange-600 pl-4 bg-orange-50 p-3">
                      <div className="text-xs text-red-600 font-bold uppercase tracking-wide mb-1">URGENT</div>
                      <div className="text-sm font-bold text-gray-900">Sistem Automasi Baharu</div>
                      <div className="text-xs text-gray-600 font-semibold">2 hari lalu | Muka Surat 2</div>
                    </div>
                    <div className="border-l-4 border-blue-600 pl-4 bg-blue-50 p-3">
                      <div className="text-xs text-blue-600 font-bold uppercase tracking-wide mb-1">KERJASAMA</div>
                      <div className="text-sm font-bold text-gray-900">MoU Strategik Antarabangsa</div>
                      <div className="text-xs text-gray-600 font-semibold">5 hari lalu | Muka Surat 4</div>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-3">
                      <div className="text-xs text-green-600 font-bold uppercase tracking-wide mb-1">KELESTARIAN</div>
                      <div className="text-sm font-bold text-gray-900">Inisiatif Green Port</div>
                      <div className="text-xs text-gray-600 font-semibold">1 minggu lalu | Muka Surat 6</div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t-2 border-gray-300">
                    <button className="w-full px-4 py-2 bg-orange-600 text-white font-bold text-xs uppercase tracking-wide hover:bg-blue-900 transition-colors border border-orange-600">
                      LIHAT SEMUA BERITA
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-blue-900 tracking-wide uppercase mb-2">
              Perkhidmatan Utama
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Solusi Pelabuhan Terpadu
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <div key={program.id} className="bg-white border-2 border-gray-200 hover:border-blue-600 transition-colors rounded-lg overflow-hidden shadow-sm hover:shadow-md">
                {/* Program Image */}
                <div className="h-40 relative overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-orange-600 text-white px-2 py-1 text-xs font-semibold rounded uppercase">
                      {program.category}
                    </span>
                  </div>
                </div>

                {/* Program Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{program.description}</p>
                  <span className="text-gray-400 font-semibold text-sm cursor-not-allowed">
                    Ketahui Lebih Lanjut →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK ACCESS BOXES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-blue-900 tracking-wide uppercase mb-2">
              Akses Pantas
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Perkhidmatan Digital
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => {
              const colors = [
                'bg-blue-900 hover:bg-blue-600',
                'bg-orange-600 hover:bg-orange-700',
                'bg-green-600 hover:bg-green-700',
                'bg-purple-600 hover:bg-purple-700',
                'bg-indigo-600 hover:bg-indigo-700',
                'bg-red-600 hover:bg-red-700'
              ]
              const IconComponent = service.icon
              return (
                <div key={service.id} className={`${colors[index]} text-white p-6 rounded-lg text-center transition-colors cursor-pointer`}>
                  <IconComponent className="w-8 h-8 mx-auto mb-3" />
                  <div className="font-semibold text-sm">{service.name}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <div className="text-sm font-semibold text-blue-900 tracking-wide uppercase mb-2">
                Galeri & Media
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Paparan Foto & Aktiviti
              </h2>
            </div>
            <span className="text-gray-400 font-semibold cursor-not-allowed">
              Lihat Semua →
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => {
              const categoryColors = [
                'bg-orange-600',
                'bg-blue-900',
                'bg-green-600'
              ]
              return (
                <article key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className={`${categoryColors[index]} text-white px-2 py-1 text-xs font-semibold rounded uppercase`}>
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(item.date).toLocaleDateString('ms-MY')}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {item.views.toLocaleString()} tontonan
                      </span>
                      <span className="text-gray-400 font-semibold cursor-not-allowed">Lihat →</span>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-semibold text-blue-900 tracking-wide uppercase mb-2">
                Tentang SPPP
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pemimpin Industri Pelabuhan Malaysia
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Suruhanjaya Pelabuhan Pulau Pinang adalah badan berkanun yang bertanggungjawab mengurus dan membangunkan pelabuhan-pelabuhan di Pulau Pinang dengan misi menjadi hab maritim terkemuka di rantau Asia Tenggara.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="border-l-4 border-orange-600 pl-4">
                  <div className="text-2xl font-bold text-gray-900">90+</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="text-2xl font-bold text-gray-900">150+</div>
                  <div className="text-sm text-gray-600">Negara Dilayani</div>
                </div>
              </div>
              <span className="px-6 py-3 bg-gray-400 text-white font-semibold rounded cursor-not-allowed">
                Ketahui Lebih Lanjut
              </span>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-900 to-blue-600 rounded-lg overflow-hidden">
                <img
                  src="/images/port-installations/NBCT_3.JPG"
                  alt="SPPP Port Operations"
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-600 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">#1</div>
                  <div className="text-xs">Pelabuhan Malaysia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY UPDATES SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-blue-900 tracking-wide uppercase mb-2">
              Kemas Kini Komuniti
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Media Sosial & Berita Terkini
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Ikuti aktiviti dan perkembangan terkini SPPP melalui saluran media sosial rasmi kami.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Facebook Feed */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 ml-3">Facebook</h3>
              </div>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">SPPP</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800 mb-2">
                        Lawatan rasmi YB Menteri Pengangkutan ke terminal container NBCT untuk melihat kemajuan infrastruktur pelabuhan.
                      </p>
                      <div className="text-xs text-gray-500">2 hari lalu</div>
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">SPPP</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800 mb-2">
                        Sistem automasi baru telah berjaya dilaksanakan di terminal container dengan peningkatan kecekapan 40%.
                      </p>
                      <div className="text-xs text-gray-500">5 hari lalu</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="text-gray-400 font-semibold text-sm cursor-not-allowed">
                  Lihat Lebih Banyak di Facebook →
                </span>
              </div>
            </div>

            {/* Twitter/X Feed */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">X</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 ml-3">Twitter/X</h3>
              </div>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-semibold text-sm">SPPP</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800 mb-2">
                        🚢 Operasi 24/7 SPPP memastikan kelancaran perdagangan Malaysia di pantai barat. #PelabuhanPinang #SPPP
                      </p>
                      <div className="text-xs text-gray-500">1 hari lalu</div>
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-semibold text-sm">SPPP</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800 mb-2">
                        📊 Statistik September: 32.3M tan kargo dikendalikan dengan pertumbuhan positif 4 tahun berturut-turut.
                      </p>
                      <div className="text-xs text-gray-500">3 hari lalu</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="text-gray-400 font-semibold text-sm cursor-not-allowed">
                  Lihat Lebih Banyak di X →
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA SECTION */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bersedia untuk Bekerjasama?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk mengetahui lebih lanjut tentang perkhidmatan pelabuhan dan peluang kerjasama strategik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <span className="px-8 py-3 bg-gray-400 text-white font-semibold rounded cursor-not-allowed">
              Hubungi Kami
            </span>
            <span className="px-8 py-3 border-2 border-gray-400 text-gray-400 font-semibold rounded cursor-not-allowed">
              Muat Turun Brosur
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}