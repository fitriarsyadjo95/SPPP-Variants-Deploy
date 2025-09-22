'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { PageTemplate } from '@/components/PageTemplate'
import {
  TrophyIcon,
  ShieldCheckIcon,
  CheckBadgeIcon,
  CalendarDaysIcon,
  BuildingOfficeIcon,
  EyeIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

// Certificate and Award data structure
interface CertificateAward {
  id: string
  title: string
  category: 'iso-certification' | 'quality-award' | 'innovation-award' | 'management-system'
  year: string
  validPeriod?: string
  organization: string
  description: string
  image: string
  locations?: string[]
  featured: boolean
}

const certificatesAwards: CertificateAward[] = [
  {
    id: 'iso-27001-2024',
    title: 'ISO/IEC 27001:2022 Information Security Management System',
    category: 'iso-certification',
    year: '2024',
    validPeriod: '14 Disember 2023 - 12 Disember 2025',
    organization: 'International Organization for Standardization (ISO)',
    description: 'Sistem pengurusan keselamatan maklumat yang memastikan integriti, kerahsiaan dan ketersediaan data organisasi.',
    image: '/images/certificates/iso-27001-2024.jpg',
    locations: ['SPCT', 'NBT'],
    featured: true
  },
  {
    id: 'iso-37001-2024',
    title: 'ISO 37001:2016 Anti-Bribery Management System',
    category: 'management-system',
    year: '2024',
    validPeriod: '28 Mei 2024 - 12 April 2027',
    organization: 'International Organization for Standardization (ISO)',
    description: 'Sistem pengurusan anti-rasuah yang direka untuk membantu organisasi mencegah, mengesan dan menangani rasuah.',
    image: '/images/certificates/iso-37001-2024.jpg',
    featured: true
  },
  {
    id: 'iso-27001-2020',
    title: 'ISO/IEC 27001:2013 Information Security Management System',
    category: 'iso-certification',
    year: '2020',
    validPeriod: '2020 - 2022',
    organization: 'International Organization for Standardization (ISO)',
    description: 'Sijil sebelumnya untuk sistem pengurusan keselamatan maklumat yang dinaik taraf kepada versi 2022.',
    image: '/images/certificates/iso-27001-2020.jpg',
    featured: false
  },
  {
    id: 'iso-9001-2008',
    title: 'ISO 9001:2008 Quality Management System',
    category: 'iso-certification',
    year: '2008',
    organization: 'International Organization for Standardization (ISO)',
    description: 'Sistem pengurusan kualiti yang memfokuskan kepada peningkatan berterusan dan kepuasan pelanggan.',
    image: '/images/certificates/iso-9001-2008.jpg',
    featured: false
  },
  {
    id: '5s-certification',
    title: '5S Quality Environment Certification',
    category: 'quality-award',
    year: '2012',
    organization: 'Malaysian Administrative Modernisation and Management Planning Unit (MAMPU)',
    description: 'Pengiktirafan untuk pelaksanaan sistem 5S dalam mengekalkan persekitaran kerja yang berkualiti dan teratur.',
    image: '/images/certificates/5s-quality-2012.jpg',
    featured: false
  },
  {
    id: 'mampu-certification',
    title: 'MAMPU Certification',
    category: 'quality-award',
    year: '2012',
    organization: 'Malaysian Administrative Modernisation and Management Planning Unit (MAMPU)',
    description: 'Pengiktirafan daripada MAMPU untuk kecemerlangan dalam pemodenan pentadbiran dan perancangan pengurusan.',
    image: '/images/certificates/mampu-2012.jpg',
    featured: false
  },
  {
    id: 'cm-kict-award',
    title: 'Penang Chief Minister K-ICT Awards (e-Service Category)',
    category: 'innovation-award',
    year: '2007',
    organization: 'Kerajaan Negeri Pulau Pinang',
    description: 'Anugerah untuk kecemerlangan dalam kategori e-Service yang dianugerahkan oleh Ketua Menteri Pulau Pinang.',
    image: '/images/certificates/cm-kict-2007.jpg',
    featured: true
  },
  {
    id: 'iaph-silver',
    title: 'Technology Information Award Silver Prize',
    category: 'innovation-award',
    year: '2005',
    organization: 'International Association of Ports and Harbors (IAPH)',
    description: 'Anugerah pingat perak untuk kecemerlangan dalam teknologi maklumat di peringkat antarabangsa.',
    image: '/images/certificates/iaph-silver-2005.jpg',
    featured: true
  },
  {
    id: 'civil-service-innovation',
    title: 'Civil Services Innovation Award',
    category: 'innovation-award',
    year: '2003',
    organization: 'Jabatan Perkhidmatan Awam Malaysia',
    description: 'Pengiktirafan untuk inovasi dalam perkhidmatan awam yang meningkatkan kecekapan dan kualiti perkhidmatan.',
    image: '/images/certificates/civil-innovation-2003.jpg',
    featured: false
  },
  {
    id: 'brand-laureate-sme',
    title: 'Brand Laurette SMEs Strategic Business Partner Award',
    category: 'quality-award',
    year: '2017',
    validPeriod: '2017 - 2018',
    organization: 'Asia Pacific Brands Foundation',
    description: 'Anugerah untuk rakan kongsi perniagaan strategik yang cemerlang dalam kalangan perusahaan kecil dan sederhana.',
    image: '/images/certificates/brand-laureate-2017.jpg',
    featured: true
  }
]

const categories = [
  { key: 'all', name: 'Semua', icon: TrophyIcon, count: certificatesAwards.length },
  { key: 'iso-certification', name: 'Sijil ISO', icon: ShieldCheckIcon, count: certificatesAwards.filter(c => c.category === 'iso-certification').length },
  { key: 'quality-award', name: 'Anugerah Kualiti', icon: CheckBadgeIcon, count: certificatesAwards.filter(c => c.category === 'quality-award').length },
  { key: 'innovation-award', name: 'Anugerah Inovasi', icon: TrophyIcon, count: certificatesAwards.filter(c => c.category === 'innovation-award').length },
  { key: 'management-system', name: 'Sistem Pengurusan', icon: BuildingOfficeIcon, count: certificatesAwards.filter(c => c.category === 'management-system').length }
]

const categoryColors = {
  'iso-certification': 'bg-blue-100 text-blue-800 border-blue-200',
  'quality-award': 'bg-green-100 text-green-800 border-green-200',
  'innovation-award': 'bg-purple-100 text-purple-800 border-purple-200',
  'management-system': 'bg-orange-100 text-orange-800 border-orange-200'
}

export default function SijilPenghargaanPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateAward | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredCertificates = selectedCategory === 'all'
    ? certificatesAwards
    : certificatesAwards.filter(cert => cert.category === selectedCategory)

  const featuredCertificates = certificatesAwards.filter(cert => cert.featured)
  const recentCertificates = certificatesAwards
    .sort((a, b) => parseInt(b.year) - parseInt(a.year))
    .slice(0, 6)

  const openCertificateModal = (certificate: CertificateAward) => {
    setSelectedCertificate(certificate)
    setCurrentImageIndex(0)
  }

  const closeCertificateModal = () => {
    setSelectedCertificate(null)
  }

  const nextImage = () => {
    if (selectedCertificate) {
      setCurrentImageIndex((prev) => (prev + 1) % 1) // For now, assume 1 image per certificate
    }
  }

  const prevImage = () => {
    if (selectedCertificate) {
      setCurrentImageIndex((prev) => (prev - 1 + 1) % 1) // For now, assume 1 image per certificate
    }
  }

  return (
    <PageTemplate
      title="Sijil & Penghargaan"
      subtitle="Pengiktirafan dan pencapaian SPPP dalam kecemerlangan perkhidmatan"
      breadcrumbs={[
        { name: 'Utama', href: '/' },
        { name: 'Profil', href: '/profil' },
        { name: 'Sijil & Penghargaan' }
      ]}
    >
      <div className="space-y-12">
        {/* Page Introduction */}
        <div className="bg-gradient-to-r from-sppp-blue to-sppp-light-blue rounded-2xl p-8 text-white">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-4">
              Kecemerlangan yang Diiktiraf
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Suruhanjaya Pelabuhan Pulau Pinang telah meraih pelbagai sijil dan anugerah yang membuktikan komitmen kami
              terhadap kualiti, inovasi, dan kecemerlangan dalam perkhidmatan pelabuhan. Pencapaian ini mencerminkan
              dedikasi berterusan dalam memenuhi standard antarabangsa dan memberikan perkhidmatan terbaik.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm opacity-80">Sijil & Anugerah</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4</div>
                <div className="text-sm opacity-80">Kategori</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">2024</div>
                <div className="text-sm opacity-80">Terkini</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">ISO</div>
                <div className="text-sm opacity-80">Sijil Terkini</div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Certificates */}
        <section>
          <h3 className="text-2xl font-bold text-sppp-dark-blue mb-6 flex items-center">
            <TrophyIcon className="h-7 w-7 mr-3 text-sppp-blue" />
            Sijil & Anugerah Pilihan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCertificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
                onClick={() => openCertificateModal(cert)}
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShieldCheckIcon className="h-16 w-16 text-gray-400" />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${categoryColors[cert.category]}`}>
                      {cert.year}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <EyeIcon className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-sppp-dark-blue mb-2 group-hover:text-sppp-blue transition-colors line-clamp-2">
                    {cert.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {cert.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center">
                      <BuildingOfficeIcon className="h-4 w-4 mr-1" />
                      {cert.organization.split(' ')[0]}...
                    </span>
                    {cert.validPeriod && (
                      <span className="flex items-center">
                        <CalendarDaysIcon className="h-4 w-4 mr-1" />
                        Sah
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section>
          <h3 className="text-2xl font-bold text-sppp-dark-blue mb-6">Semua Sijil & Anugerah</h3>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.key
                    ? 'bg-sppp-blue text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="h-4 w-4 mr-2" />
                {category.name}
                <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-white/20">
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCertificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group border border-gray-100"
                onClick={() => openCertificateModal(cert)}
              >
                <div className="relative h-40 bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShieldCheckIcon className="h-12 w-12 text-gray-400 group-hover:text-sppp-blue transition-colors" />
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${categoryColors[cert.category]}`}>
                      {cert.year}
                    </span>
                  </div>
                  {cert.featured && (
                    <div className="absolute top-2 right-2">
                      <div className="bg-yellow-400 text-yellow-900 px-2 py-1 text-xs font-semibold rounded-full">
                        Pilihan
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h4 className="text-md font-semibold text-sppp-dark-blue mb-2 group-hover:text-sppp-blue transition-colors line-clamp-2">
                    {cert.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {cert.description}
                  </p>
                  {cert.locations && (
                    <div className="flex flex-wrap gap-1 mb-2">
                      {cert.locations.map((location) => (
                        <span key={location} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {location}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="text-sm text-gray-500 truncate">
                    {cert.organization}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Achievements */}
        <section className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-sppp-dark-blue mb-6 flex items-center">
            <CalendarDaysIcon className="h-7 w-7 mr-3 text-sppp-blue" />
            Pencapaian Terkini
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentCertificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-lg p-4 border border-gray-200 hover:border-sppp-blue transition-colors cursor-pointer"
                onClick={() => openCertificateModal(cert)}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-sppp-blue/10 rounded-lg flex items-center justify-center">
                      <ShieldCheckIcon className="h-6 w-6 text-sppp-blue" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-sppp-dark-blue line-clamp-2 mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-gray-500 mb-2">{cert.organization}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-sppp-blue font-medium">{cert.year}</span>
                      {cert.validPeriod && (
                        <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                          Aktif
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-sppp-dark-blue pr-8">
                    {selectedCertificate.title}
                  </h3>
                  <button
                    onClick={closeCertificateModal}
                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Certificate Image */}
                    <div>
                      <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <ShieldCheckIcon className="h-24 w-24 text-gray-400" />
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full border ${categoryColors[selectedCertificate.category]}`}>
                            {selectedCertificate.year}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Certificate Details */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-sppp-dark-blue mb-2">Maklumat Sijil</h4>
                        <div className="space-y-3">
                          <div>
                            <label className="text-sm font-medium text-gray-500">Organisasi Pengeluar</label>
                            <p className="text-gray-900">{selectedCertificate.organization}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-500">Tahun</label>
                            <p className="text-gray-900">{selectedCertificate.year}</p>
                          </div>
                          {selectedCertificate.validPeriod && (
                            <div>
                              <label className="text-sm font-medium text-gray-500">Tempoh Sah</label>
                              <p className="text-gray-900">{selectedCertificate.validPeriod}</p>
                            </div>
                          )}
                          {selectedCertificate.locations && (
                            <div>
                              <label className="text-sm font-medium text-gray-500">Lokasi</label>
                              <div className="flex flex-wrap gap-2 mt-1">
                                {selectedCertificate.locations.map((location) => (
                                  <span key={location} className="px-3 py-1 bg-sppp-blue/10 text-sppp-blue text-sm rounded-full">
                                    {location}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-sppp-dark-blue mb-2">Keterangan</h4>
                        <p className="text-gray-700 leading-relaxed">
                          {selectedCertificate.description}
                        </p>
                      </div>

                      <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                        <div className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full border ${categoryColors[selectedCertificate.category]}`}>
                          {selectedCertificate.category === 'iso-certification' && 'Sijil ISO'}
                          {selectedCertificate.category === 'quality-award' && 'Anugerah Kualiti'}
                          {selectedCertificate.category === 'innovation-award' && 'Anugerah Inovasi'}
                          {selectedCertificate.category === 'management-system' && 'Sistem Pengurusan'}
                        </div>
                        {selectedCertificate.featured && (
                          <div className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-yellow-100 text-yellow-800 border border-yellow-200">
                            Pilihan
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageTemplate>
  )
}