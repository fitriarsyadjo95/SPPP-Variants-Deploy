'use client'

import React, { useState, useMemo } from 'react'
import {
  DocumentTextIcon,
  MagnifyingGlassIcon,
  EyeIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/language-context'
import { DocumentViewer } from '@/components/document/document-viewer'

interface Publication {
  id: string
  title: string
  titleEn: string
  category: string
  categoryEn: string
  description: string
  descriptionEn: string
  fileUrl: string
  fileName: string
  fileSize: string
  pages: number
  publishDate: string
  tags: string[]
  tagsEn: string[]
  featured: boolean
}

// Real publications data based on the Penerbitan Documents folder
const publications: Publication[] = [
  {
    id: '1',
    title: 'Pelan Strategik Suruhanjaya Pelabuhan Pulau Pinang 2021-2025',
    titleEn: 'SPPP Strategic Plan 2021-2025',
    category: 'Pelan Strategik',
    categoryEn: 'Strategic Plans',
    description: 'Pelan strategik jangka menengah SPPP yang memaparkan visi, misi, objektif strategik dan inisiatif transformasi untuk tempoh 2021-2025',
    descriptionEn: 'SPPP medium-term strategic plan outlining vision, mission, strategic objectives and transformation initiatives for 2021-2025',
    fileUrl: '/documents/Pelan Strategik Suruhanjaya Pelabuhan Pulau Pinang 2021 - 2025.pdf',
    fileName: 'Pelan Strategik Suruhanjaya Pelabuhan Pulau Pinang 2021 - 2025.pdf',
    fileSize: '1.1 MB',
    pages: 48,
    publishDate: '2021-01-15',
    tags: ['strategik', 'pelan', 'transformasi', 'visi', 'misi'],
    tagsEn: ['strategic', 'plan', 'transformation', 'vision', 'mission'],
    featured: true
  },
  {
    id: '2',
    title: 'Ringkasan Eksekutif Pelan Strategik Teknologi Maklumat 2021-2025',
    titleEn: 'Executive Summary of IT Strategic Plan 2021-2025',
    category: 'Pelan Strategik',
    categoryEn: 'Strategic Plans',
    description: 'Ringkasan eksekutif yang merangkumi strategi teknologi maklumat dan transformasi digital SPPP untuk tempoh 2021-2025',
    descriptionEn: 'Executive summary covering IT strategy and digital transformation of SPPP for the period 2021-2025',
    fileUrl: '/documents/Ringkasan Eksekutif Pelan Strategik Teknologi Maklumat 2021-2025.pdf',
    fileName: 'Ringkasan Eksekutif Pelan Strategik Teknologi Maklumat 2021-2025.pdf',
    fileSize: '0.98 MB',
    pages: 24,
    publishDate: '2021-02-01',
    tags: ['teknologi', 'maklumat', 'digital', 'transformasi', 'IT'],
    tagsEn: ['technology', 'information', 'digital', 'transformation', 'IT'],
    featured: true
  },
  {
    id: '3',
    title: 'Polisi Anti Rasuah SPPP',
    titleEn: 'SPPP Anti-Corruption Policy',
    category: 'Dasar dan Polisi',
    categoryEn: 'Policies',
    description: 'Dokumen polisi komprehensif yang menetapkan komitmen SPPP terhadap integriti dan langkah-langkah anti rasuah',
    descriptionEn: 'Comprehensive policy document setting SPPP commitment to integrity and anti-corruption measures',
    fileUrl: '/documents/Polisi Anti Rasuah SPPP .pdf',
    fileName: 'Polisi Anti Rasuah SPPP.pdf',
    fileSize: '5.8 MB',
    pages: 156,
    publishDate: '2023-03-15',
    tags: ['anti-rasuah', 'integriti', 'polisi', 'etika', 'tadbir urus'],
    tagsEn: ['anti-corruption', 'integrity', 'policy', 'ethics', 'governance'],
    featured: true
  },
  {
    id: '4',
    title: 'Pernyataan Polisi Rasuah',
    titleEn: 'Corruption Policy Statement',
    category: 'Dasar dan Polisi',
    categoryEn: 'Policies',
    description: 'Pernyataan polisi rasmi SPPP mengenai pendirian organisasi terhadap amalan rasuah dan langkah pencegahan',
    descriptionEn: 'Official SPPP policy statement on organizational stance against corruption practices and prevention measures',
    fileUrl: '/documents/Pernyataan Polisi Rasuah.pdf',
    fileName: 'Pernyataan Polisi Rasuah.pdf',
    fileSize: '0.51 MB',
    pages: 12,
    publishDate: '2023-01-10',
    tags: ['rasuah', 'pernyataan', 'polisi', 'pencegahan'],
    tagsEn: ['corruption', 'statement', 'policy', 'prevention'],
    featured: false
  },
  {
    id: '5',
    title: 'Polisi Pelabuhan Hijau',
    titleEn: 'Green Port Policy',
    category: 'Dasar dan Polisi',
    categoryEn: 'Policies',
    description: 'Polisi kelestarian alam sekitar SPPP yang menggariskan komitmen terhadap operasi pelabuhan hijau dan mesra alam',
    descriptionEn: 'SPPP environmental sustainability policy outlining commitment to green and eco-friendly port operations',
    fileUrl: '/documents/Polisi Pelabuhan Hijau .pdf',
    fileName: 'Polisi Pelabuhan Hijau.pdf',
    fileSize: '0.49 MB',
    pages: 18,
    publishDate: '2022-06-20',
    tags: ['alam sekitar', 'hijau', 'kelestarian', 'mesra alam'],
    tagsEn: ['environment', 'green', 'sustainability', 'eco-friendly'],
    featured: false
  },
  {
    id: '6',
    title: 'Kod Etika Pembekal SPPP',
    titleEn: 'SPPP Supplier Code of Ethics',
    category: 'Kod Etika',
    categoryEn: 'Code of Ethics',
    description: 'Kod etika yang menetapkan standard tingkah laku dan amalan perniagaan yang diharapkan daripada pembekal SPPP',
    descriptionEn: 'Code of ethics setting behavioral standards and business practices expected from SPPP suppliers',
    fileUrl: '/documents/Kod Etika Pembekal SPPP.pdf',
    fileName: 'Kod Etika Pembekal SPPP.pdf',
    fileSize: '0.21 MB',
    pages: 8,
    publishDate: '2023-05-01',
    tags: ['etika', 'pembekal', 'kod', 'standard', 'perniagaan'],
    tagsEn: ['ethics', 'supplier', 'code', 'standards', 'business'],
    featured: false
  },
  {
    id: '7',
    title: 'Polisi Pemberi Maklumat SPPP',
    titleEn: 'SPPP Whistleblower Policy',
    category: 'Dasar dan Polisi',
    categoryEn: 'Policies',
    description: 'Polisi yang melindungi dan menggalakkan pelaporan salah laku atau pelanggaran melalui saluran yang selamat',
    descriptionEn: 'Policy that protects and encourages reporting of misconduct or violations through safe channels',
    fileUrl: '/documents/Polisi Pemberi Maklumat SPPP.pdf',
    fileName: 'Polisi Pemberi Maklumat SPPP.pdf',
    fileSize: '0.26 MB',
    pages: 10,
    publishDate: '2023-04-15',
    tags: ['pemberi maklumat', 'perlindungan', 'pelaporan', 'salah laku'],
    tagsEn: ['whistleblower', 'protection', 'reporting', 'misconduct'],
    featured: false
  },
  {
    id: '8',
    title: 'Borang Perlindungan Pemberi Maklumat SPPP',
    titleEn: 'SPPP Whistleblower Protection Form',
    category: 'Borang',
    categoryEn: 'Forms',
    description: 'Borang rasmi untuk membuat laporan dalam kerangka perlindungan pemberi maklumat SPPP',
    descriptionEn: 'Official form for making reports under SPPP whistleblower protection framework',
    fileUrl: '/documents/Borang Perlindungan Pemberi Maklumat SPPP.pdf',
    fileName: 'Borang Perlindungan Pemberi Maklumat SPPP.pdf',
    fileSize: '0.19 MB',
    pages: 4,
    publishDate: '2023-04-15',
    tags: ['borang', 'pemberi maklumat', 'perlindungan', 'laporan'],
    tagsEn: ['form', 'whistleblower', 'protection', 'report'],
    featured: false
  },
  {
    id: '9',
    title: 'Polisi Pemberian dan Penerimaan Hadiah SPPP',
    titleEn: 'SPPP Gift Giving and Receiving Policy',
    category: 'Dasar dan Polisi',
    categoryEn: 'Policies',
    description: 'Polisi yang mengatur pemberian dan penerimaan hadiah untuk mengelakkan konflik kepentingan dan rasuah',
    descriptionEn: 'Policy governing gift giving and receiving to avoid conflicts of interest and corruption',
    fileUrl: '/documents/Polisi Pemberian dan Penerimaan Hadiah SPPP.pdf',
    fileName: 'Polisi Pemberian dan Penerimaan Hadiah SPPP.pdf',
    fileSize: '0.31 MB',
    pages: 12,
    publishDate: '2023-02-28',
    tags: ['hadiah', 'pemberian', 'penerimaan', 'konflik kepentingan'],
    tagsEn: ['gifts', 'giving', 'receiving', 'conflict of interest'],
    featured: false
  }
]

const categories = [
  { id: 'all', name: 'Semua Kategori', nameEn: 'All Categories' },
  { id: 'pelan-strategik', name: 'Pelan Strategik', nameEn: 'Strategic Plans' },
  { id: 'dasar-polisi', name: 'Dasar dan Polisi', nameEn: 'Policies' },
  { id: 'kod-etika', name: 'Kod Etika', nameEn: 'Code of Ethics' },
  { id: 'borang', name: 'Borang', nameEn: 'Forms' }
]

export const PublicationsLibrary: React.FC = () => {
  const { t, language } = useLanguage()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDocument, setSelectedDocument] = useState<Publication | null>(null)
  const [sortBy, setSortBy] = useState<'date' | 'title' | 'size'>('date')

  // Filter and sort publications
  const filteredPublications = useMemo(() => {
    const filtered = publications.filter(pub => {
      const matchesSearch = searchTerm === '' ||
        (language === 'BM' ? pub.title : pub.titleEn).toLowerCase().includes(searchTerm.toLowerCase()) ||
        (language === 'BM' ? pub.description : pub.descriptionEn).toLowerCase().includes(searchTerm.toLowerCase()) ||
        (language === 'BM' ? pub.tags : pub.tagsEn).some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === 'all' ||
        pub.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory ||
        pub.categoryEn.toLowerCase().replace(/\s+/g, '-') === selectedCategory

      return matchesSearch && matchesCategory
    })

    // Sort publications
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
        case 'title':
          const titleA = language === 'BM' ? a.title : a.titleEn
          const titleB = language === 'BM' ? b.title : b.titleEn
          return titleA.localeCompare(titleB)
        case 'size':
          const sizeA = parseFloat(a.fileSize.replace(/[^0-9.]/g, ''))
          const sizeB = parseFloat(b.fileSize.replace(/[^0-9.]/g, ''))
          return sizeB - sizeA
        default:
          return 0
      }
    })

    return filtered
  }, [publications, searchTerm, selectedCategory, sortBy, language])

  const handleDownload = (publication: Publication, event: React.MouseEvent) => {
    event.stopPropagation()
    const link = window.document.createElement('a')
    link.href = publication.fileUrl
    link.download = publication.fileName
    window.document.body.appendChild(link)
    link.click()
    window.document.body.removeChild(link)
  }

  const handleViewDocument = (publication: Publication) => {
    setSelectedDocument(publication)
  }


  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Search and Filter Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('search-publications', 'Cari penerbitan...', 'Search publications...')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {language === 'BM' ? category.name : category.nameEn}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'title' | 'size')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              >
                <option value="date">
                  {t('sort-by-date', 'Susun mengikut tarikh', 'Sort by date')}
                </option>
                <option value="title">
                  {t('sort-by-title', 'Susun mengikut tajuk', 'Sort by title')}
                </option>
                <option value="size">
                  {t('sort-by-size', 'Susun mengikut saiz', 'Sort by size')}
                </option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600">
            {t('showing-results',
              `Menunjukkan ${filteredPublications.length} daripada ${publications.length} penerbitan`,
              `Showing ${filteredPublications.length} of ${publications.length} publications`
            )}
          </div>
        </div>

        {/* Featured Publications */}
        {selectedCategory === 'all' && searchTerm === '' && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t('featured-publications', 'Penerbitan Pilihan', 'Featured Publications')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {publications.filter(pub => pub.featured).slice(0, 3).map(publication => (
                <div
                  key={publication.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer p-6"
                  onClick={() => handleViewDocument(publication)}
                >
                  {/* Document Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-20 bg-orange-100 rounded-lg flex items-center justify-center">
                      <DocumentTextIcon className="h-8 w-8 text-orange-600" />
                    </div>
                  </div>

                  {/* Category */}
                  <div className="text-center mb-3">
                    <span className="text-xs text-gray-600">
                      {language === 'BM' ? publication.category : publication.categoryEn}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-medium text-sm text-gray-900 text-center mb-4 line-clamp-3 leading-relaxed">
                    {language === 'BM' ? publication.title : publication.titleEn}
                  </h3>

                  {/* Actions */}
                  <div className="flex items-center justify-center space-x-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleViewDocument(publication)
                      }}
                      className="flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors"
                    >
                      <EyeIcon className="h-4 w-4 mr-1" />
                      {t('view', 'Lihat', 'View')}
                    </button>
                    <button
                      onClick={(e) => handleDownload(publication, e)}
                      className="flex items-center text-gray-600 hover:text-orange-600 font-medium text-sm transition-colors"
                    >
                      <ArrowDownTrayIcon className="h-4 w-4 mr-1" />
                      {t('download', 'Muat Turun', 'Download')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPublications.map(publication => (
            <div
              key={publication.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer p-6"
              onClick={() => handleViewDocument(publication)}
            >
              {/* Document Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-20 bg-orange-100 rounded-lg flex items-center justify-center">
                  <DocumentTextIcon className="h-8 w-8 text-orange-600" />
                </div>
              </div>

              {/* Category */}
              <div className="text-center mb-3">
                <span className="text-xs text-gray-600">
                  {language === 'BM' ? publication.category : publication.categoryEn}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-medium text-sm text-gray-900 text-center mb-4 line-clamp-3 leading-relaxed">
                {language === 'BM' ? publication.title : publication.titleEn}
              </h3>


              {/* Actions */}
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleViewDocument(publication)
                  }}
                  className="flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors"
                >
                  <EyeIcon className="h-4 w-4 mr-1" />
                  {t('view', 'Lihat', 'View')}
                </button>
                <button
                  onClick={(e) => handleDownload(publication, e)}
                  className="flex items-center text-gray-600 hover:text-orange-600 font-medium text-sm transition-colors"
                >
                  <ArrowDownTrayIcon className="h-4 w-4 mr-1" />
                  {t('download', 'Muat Turun', 'Download')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredPublications.length === 0 && (
          <div className="text-center py-16">
            <DocumentTextIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('no-publications-found', 'Tiada penerbitan ditemui', 'No publications found')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('no-publications-description',
                'Cuba ubah kriteria carian atau tapis untuk melihat penerbitan lain.',
                'Try changing your search criteria or filters to see other publications.'
              )}
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
              }}
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
            >
              {t('clear-filters', 'Padam Tapisan', 'Clear Filters')}
            </button>
          </div>
        )}
      </div>

      {/* Document Viewer Modal */}
      {selectedDocument && (
        <DocumentViewer
          document={selectedDocument}
          onClose={() => setSelectedDocument(null)}
        />
      )}
    </section>
  )
}

PublicationsLibrary.displayName = 'PublicationsLibrary'