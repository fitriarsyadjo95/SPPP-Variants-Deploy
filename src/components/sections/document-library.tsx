'use client'

import React, { useState, useMemo } from 'react'
import {
  DocumentTextIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  EyeIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  TagIcon,
  FolderIcon
} from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/language-context'
import { DocumentViewer } from '@/components/document/document-viewer'

interface Document {
  id: string
  title: string
  titleEn: string
  category: string
  categoryEn: string
  description: string
  descriptionEn: string
  fileUrl: string
  fileSize: string
  pages: number
  publishDate: string
  tags: string[]
  tagsEn: string[]
  featured: boolean
}

// Mock document data - in real implementation, this would come from an API or CMS
const documents: Document[] = [
  {
    id: '1',
    title: 'Laporan Tahunan SPPP 2023',
    titleEn: 'SPPP Annual Report 2023',
    category: 'Laporan Tahunan',
    categoryEn: 'Annual Reports',
    description: 'Laporan tahunan yang mengandungi prestasi, aktiviti dan pencapaian SPPP sepanjang tahun 2023',
    descriptionEn: 'Annual report containing SPPP performance, activities and achievements throughout 2023',
    fileUrl: '/documents/sample-document.html',
    fileSize: '12.5 MB',
    pages: 84,
    publishDate: '2024-03-15',
    tags: ['laporan', 'prestasi', 'tahunan'],
    tagsEn: ['report', 'performance', 'annual'],
    featured: true
  },
  {
    id: '2',
    title: 'Panduan Keselamatan Pelabuhan',
    titleEn: 'Port Safety Guidelines',
    category: 'Panduan Keselamatan',
    categoryEn: 'Safety Guidelines',
    description: 'Panduan komprehensif mengenai prosedur keselamatan di kawasan pelabuhan untuk semua pengguna',
    descriptionEn: 'Comprehensive guide on safety procedures in port areas for all users',
    fileUrl: '/documents/sample-document.html',
    fileSize: '8.2 MB',
    pages: 45,
    publishDate: '2024-02-20',
    tags: ['keselamatan', 'panduan', 'prosedur'],
    tagsEn: ['safety', 'guidelines', 'procedures'],
    featured: true
  },
  {
    id: '3',
    title: 'Polisi Alam Sekitar SPPP',
    titleEn: 'SPPP Environmental Policy',
    category: 'Dasar dan Polisi',
    categoryEn: 'Policies',
    description: 'Komitmen SPPP terhadap kelestarian alam sekitar dan praktik hijau dalam operasi pelabuhan',
    descriptionEn: 'SPPP commitment to environmental sustainability and green practices in port operations',
    fileUrl: '/documents/sample-document.html',
    fileSize: '3.1 MB',
    pages: 28,
    publishDate: '2024-01-10',
    tags: ['alam sekitar', 'polisi', 'kelestarian'],
    tagsEn: ['environment', 'policy', 'sustainability'],
    featured: false
  },
  {
    id: '4',
    title: 'Prosedur Permohonan Lesen',
    titleEn: 'License Application Procedures',
    category: 'Prosedur Perkhidmatan',
    categoryEn: 'Service Procedures',
    description: 'Panduan langkah demi langkah untuk permohonan pelbagai jenis lesen pelabuhan',
    descriptionEn: 'Step-by-step guide for applying various types of port licenses',
    fileUrl: '/documents/sample-document.html',
    fileSize: '5.7 MB',
    pages: 36,
    publishDate: '2023-12-05',
    tags: ['lesen', 'permohonan', 'prosedur'],
    tagsEn: ['license', 'application', 'procedures'],
    featured: false
  },
  {
    id: '5',
    title: 'Pelan Strategik SPPP 2024-2028',
    titleEn: 'SPPP Strategic Plan 2024-2028',
    category: 'Pelan Strategik',
    categoryEn: 'Strategic Plans',
    description: 'Pelan strategik jangka menengah untuk pembangunan dan transformasi pelabuhan',
    descriptionEn: 'Medium-term strategic plan for port development and transformation',
    fileUrl: '/documents/sample-document.html',
    fileSize: '15.8 MB',
    pages: 92,
    publishDate: '2023-11-30',
    tags: ['strategik', 'pelan', 'pembangunan'],
    tagsEn: ['strategic', 'plan', 'development'],
    featured: true
  }
]

const categories = [
  { id: 'all', name: 'Semua Kategori', nameEn: 'All Categories' },
  { id: 'laporan-tahunan', name: 'Laporan Tahunan', nameEn: 'Annual Reports' },
  { id: 'panduan-keselamatan', name: 'Panduan Keselamatan', nameEn: 'Safety Guidelines' },
  { id: 'dasar-polisi', name: 'Dasar dan Polisi', nameEn: 'Policies' },
  { id: 'prosedur-perkhidmatan', name: 'Prosedur Perkhidmatan', nameEn: 'Service Procedures' },
  { id: 'pelan-strategik', name: 'Pelan Strategik', nameEn: 'Strategic Plans' }
]

export const DocumentLibrary: React.FC = () => {
  const { t, language } = useLanguage()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null)
  const [sortBy, setSortBy] = useState<'date' | 'title' | 'size'>('date')

  // Filter and sort documents
  const filteredDocuments = useMemo(() => {
    let filtered = documents.filter(doc => {
      const matchesSearch = searchTerm === '' ||
        (language === 'BM' ? doc.title : doc.titleEn).toLowerCase().includes(searchTerm.toLowerCase()) ||
        (language === 'BM' ? doc.description : doc.descriptionEn).toLowerCase().includes(searchTerm.toLowerCase()) ||
        (language === 'BM' ? doc.tags : doc.tagsEn).some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === 'all' ||
        doc.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory ||
        doc.categoryEn.toLowerCase().replace(/\s+/g, '-') === selectedCategory

      return matchesSearch && matchesCategory
    })

    // Sort documents
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
  }, [documents, searchTerm, selectedCategory, sortBy, language])

  const handleDownload = (document: Document, event: React.MouseEvent) => {
    event.stopPropagation()
    const link = window.document.createElement('a')
    link.href = document.fileUrl
    link.download = `${document.title}.pdf`
    window.document.body.appendChild(link)
    link.click()
    window.document.body.removeChild(link)
  }

  const handleViewDocument = (document: Document) => {
    setSelectedDocument(document)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return language === 'BM'
      ? date.toLocaleDateString('ms-MY', { year: 'numeric', month: 'long', day: 'numeric' })
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <DocumentTextIcon className="h-12 w-12 mx-auto mb-4 text-sppp-blue" />
          <h2 className="text-3xl lg:text-4xl font-bold text-sppp-dark-blue mb-4">
            {t('document-library-title', 'Perpustakaan Dokumen', 'Document Library')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('document-library-description',
              'Akses koleksi lengkap dokumen, laporan, panduan dan polisi SPPP dalam format digital yang mudah dibaca.',
              'Access complete collection of SPPP documents, reports, guidelines and policies in easy-to-read digital format.'
            )}
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('search-documents', 'Cari dokumen...', 'Search documents...')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sppp-blue focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sppp-blue focus:border-transparent"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sppp-blue focus:border-transparent"
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
              `Menunjukkan ${filteredDocuments.length} daripada ${documents.length} dokumen`,
              `Showing ${filteredDocuments.length} of ${documents.length} documents`
            )}
          </div>
        </div>

        {/* Featured Documents */}
        {selectedCategory === 'all' && searchTerm === '' && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-sppp-dark-blue mb-6">
              {t('featured-documents', 'Dokumen Pilihan', 'Featured Documents')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.filter(doc => doc.featured).slice(0, 3).map(document => (
                <div
                  key={document.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => handleViewDocument(document)}
                >
                  <div className="bg-gradient-to-r from-sppp-blue to-sppp-dark-blue p-4 text-white">
                    <div className="flex items-center justify-between">
                      <DocumentTextIcon className="h-8 w-8" />
                      <span className="bg-yellow-500 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">
                        {t('featured', 'Pilihan', 'Featured')}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-gray-900 mb-2 line-clamp-2">
                      {language === 'BM' ? document.title : document.titleEn}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {language === 'BM' ? document.description : document.descriptionEn}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>{formatDate(document.publishDate)}</span>
                      <span>{document.fileSize}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-1 bg-sppp-blue text-white text-xs rounded-full">
                        {language === 'BM' ? document.category : document.categoryEn}
                      </span>
                      <div className="flex space-x-2">
                        <button
                          onClick={(e) => handleDownload(document, e)}
                          className="p-1 text-gray-400 hover:text-sppp-blue transition-colors"
                          title={t('download', 'Muat Turun', 'Download')}
                        >
                          <ArrowDownTrayIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Document Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map(document => (
            <div
              key={document.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleViewDocument(document)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-3 bg-sppp-blue bg-opacity-10 rounded-lg mr-3">
                      <DocumentTextIcon className="h-6 w-6 text-sppp-blue" />
                    </div>
                    <div>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {language === 'BM' ? document.category : document.categoryEn}
                      </span>
                    </div>
                  </div>
                  {document.featured && (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                      {t('featured', 'Pilihan', 'Featured')}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                  {language === 'BM' ? document.title : document.titleEn}
                </h3>

                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {language === 'BM' ? document.description : document.descriptionEn}
                </p>

                <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {formatDate(document.publishDate)}
                  </div>
                  <div className="flex items-center">
                    <FolderIcon className="h-4 w-4 mr-1" />
                    {document.pages} {t('pages', 'muka surat', 'pages')}
                  </div>
                  <div>{document.fileSize}</div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {(language === 'BM' ? document.tags : document.tagsEn).slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <button
                    onClick={() => handleViewDocument(document)}
                    className="flex items-center text-sppp-blue hover:text-sppp-dark-blue font-medium text-sm transition-colors"
                  >
                    <EyeIcon className="h-4 w-4 mr-1" />
                    {t('view', 'Lihat', 'View')}
                  </button>
                  <button
                    onClick={(e) => handleDownload(document, e)}
                    className="flex items-center text-gray-600 hover:text-sppp-blue font-medium text-sm transition-colors"
                  >
                    <ArrowDownTrayIcon className="h-4 w-4 mr-1" />
                    {t('download', 'Muat Turun', 'Download')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDocuments.length === 0 && (
          <div className="text-center py-16">
            <DocumentTextIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('no-documents-found', 'Tiada dokumen ditemui', 'No documents found')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('no-documents-description',
                'Cuba ubah kriteria carian atau tapis untuk melihat dokumen lain.',
                'Try changing your search criteria or filters to see other documents.'
              )}
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
              }}
              className="bg-sppp-blue text-white px-6 py-3 rounded-lg hover:bg-sppp-dark-blue transition-colors"
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

DocumentLibrary.displayName = 'DocumentLibrary'