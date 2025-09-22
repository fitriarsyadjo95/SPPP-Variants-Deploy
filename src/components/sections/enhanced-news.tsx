'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Newspaper,
  Calendar,
  Clock,
  Archive,
  AlertCircle,
  Eye,
  ArrowRight,
  ChevronRight,
  Filter,
  RefreshCw
} from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

interface NewsArticle {
  id: string
  title: string
  slug: string
  category: 'news' | 'announcement' | 'event' | 'achievement'
  excerpt: string
  author: string
  publishDate: string
  expiryDate: string // New field for news expiry
  views: number
  featured: boolean
  image?: string
  tags: string[]
  status: 'active' | 'expired' | 'archived'
}

// Mock news data with expiry dates
const newsData: NewsArticle[] = [
  {
    id: '1',
    title: 'SPPP Mencatatkan Rekod Tertinggi Pengendalian Kontena 2024',
    slug: 'sppp-rekod-tertinggi-kontena-2024',
    category: 'achievement',
    excerpt: 'Pelabuhan Pulau Pinang berjaya mengendalikan 1.5 juta TEU dalam tempoh 9 bulan pertama 2024.',
    author: 'Unit Komunikasi Korporat SPPP',
    publishDate: '2024-09-01',
    expiryDate: '2024-12-01',
    views: 2450,
    featured: true,
    tags: ['kontena', 'rekod', 'prestasi', 'infrastruktur'],
    status: 'active'
  },
  {
    id: '2',
    title: 'Pengumuman Penutupan Sementara Dermaga B',
    slug: 'penutupan-dermaga-b',
    category: 'announcement',
    excerpt: 'Dermaga B akan ditutup sementara untuk kerja-kerja naik taraf dari 15-30 September 2024.',
    author: 'Jabatan Operasi',
    publishDate: '2024-09-10',
    expiryDate: '2024-09-30',
    views: 1200,
    featured: true,
    tags: ['pengumuman', 'dermaga', 'naik taraf'],
    status: 'expired' // This news has expired
  },
  {
    id: '3',
    title: 'Kunjungan Delegasi Pelabuhan Singapura ke SPPP',
    slug: 'kunjungan-delegasi-singapura',
    category: 'event',
    excerpt: 'Delegasi Maritime and Port Authority of Singapore melawat SPPP untuk berkongsi best practices.',
    author: 'Unit Perhubungan Antarabangsa',
    publishDate: '2024-08-25',
    expiryDate: '2024-11-25',
    views: 980,
    featured: false,
    tags: ['kunjungan', 'singapura', 'kerjasama'],
    status: 'active'
  },
  {
    id: '4',
    title: 'Program CSR Pembersihan Pantai 2024 - TAMAT',
    slug: 'csr-pembersihan-pantai-2024',
    category: 'event',
    excerpt: 'Program CSR pembersihan pantai telah berjaya dijalankan dengan penyertaan 200 sukarelawan.',
    author: 'Unit CSR SPPP',
    publishDate: '2024-07-15',
    expiryDate: '2024-08-15',
    views: 650,
    featured: false,
    tags: ['csr', 'alam sekitar', 'komuniti'],
    status: 'archived' // This news is archived
  }
]

export const EnhancedNews: React.FC = () => {
  const { t, language } = useLanguage()
  const [activeTab, setActiveTab] = useState<'current' | 'archived'>('current')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // Auto-categorize news based on expiry dates
  const categorizedNews = useMemo(() => {
    const now = new Date()
    const currentNews = newsData.filter(news => {
      const expiryDate = new Date(news.expiryDate)
      return expiryDate > now && news.status === 'active'
    })

    const expiredNews = newsData.filter(news => {
      const expiryDate = new Date(news.expiryDate)
      return expiryDate <= now || news.status === 'expired'
    })

    const archivedNews = newsData.filter(news => news.status === 'archived')

    return {
      current: currentNews,
      expired: expiredNews,
      archived: archivedNews
    }
  }, [])

  const getDisplayNews = () => {
    const baseNews = activeTab === 'current'
      ? categorizedNews.current
      : [...categorizedNews.expired, ...categorizedNews.archived]

    if (selectedCategory === 'all') {
      return baseNews
    }
    return baseNews.filter(news => news.category === selectedCategory)
  }

  const displayNews = getDisplayNews()

  const categoryNames = {
    all: language === 'BM' ? 'Semua' : 'All',
    news: language === 'BM' ? 'Berita' : 'News',
    announcement: language === 'BM' ? 'Pengumuman' : 'Announcements',
    event: language === 'BM' ? 'Acara' : 'Events',
    achievement: language === 'BM' ? 'Pencapaian' : 'Achievements'
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return language === 'BM'
      ? date.toLocaleDateString('ms-MY', { year: 'numeric', month: 'long', day: 'numeric' })
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      news: 'bg-blue-100 text-blue-800',
      announcement: 'bg-red-100 text-red-800',
      event: 'bg-green-100 text-green-800',
      achievement: 'bg-purple-100 text-purple-800'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Newspaper className="h-12 w-12 mx-auto mb-4 text-sppp-blue" />
          <h2 className="text-3xl lg:text-4xl font-bold text-sppp-dark-blue mb-4">
            {t('news-media-title', 'Berita & Media', 'News & Media')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('news-description',
              'Berita terkini, pengumuman, dan laporan aktiviti SPPP untuk memaklumkan perkembangan pelabuhan.',
              'Latest news, announcements, and activity reports from SPPP to inform about port developments.'
            )}
          </p>
        </div>

        {/* News Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-2xl font-bold text-sppp-blue mb-1">
              {categorizedNews.current.length}
            </div>
            <div className="text-gray-600 text-sm">
              {t('current-news', 'Berita Semasa', 'Current News')}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">
              {categorizedNews.expired.length}
            </div>
            <div className="text-gray-600 text-sm">
              {t('expired-news', 'Berita Tamat', 'Expired News')}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-2xl font-bold text-gray-600 mb-1">
              {categorizedNews.archived.length}
            </div>
            <div className="text-gray-600 text-sm">
              {t('archived-news', 'Arkib Berita', 'Archived News')}
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('current')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'current'
                    ? 'border-sppp-blue text-sppp-blue'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {t('current-news', 'Berita Semasa', 'Current News')}
                  {categorizedNews.current.length > 0 && (
                    <span className="ml-2 bg-sppp-blue text-white text-xs rounded-full px-2 py-1">
                      {categorizedNews.current.length}
                    </span>
                  )}
                </div>
              </button>

              <button
                onClick={() => setActiveTab('archived')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'archived'
                    ? 'border-sppp-blue text-sppp-blue'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <Archive className="h-4 w-4 mr-2" />
                  {t('archived-news', 'Arkib Berita', 'Archived News')}
                  <span className="ml-2 bg-gray-400 text-white text-xs rounded-full px-2 py-1">
                    {categorizedNews.expired.length + categorizedNews.archived.length}
                  </span>
                </div>
              </button>
            </nav>
          </div>

          {/* Category Filter */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">
                {t('filter-category', 'Tapis Kategori:', 'Filter by Category:')}
              </span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 text-sm"
              >
                {Object.entries(categoryNames).map(([key, name]) => (
                  <option key={key} value={key}>{name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* News Content */}
        <div className="bg-white rounded-lg shadow">
          {displayNews.length === 0 ? (
            // No News State
            <div className="text-center py-16">
              {activeTab === 'current' ? (
                <>
                  <AlertCircle className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('no-current-news', 'Tiada Berita Semasa', 'No Current News')}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t('no-current-news-desc',
                      'Tiada berita atau pengumuman terkini pada masa ini. Sila semak arkib berita untuk maklumat lepas.',
                      'No current news or announcements at this time. Please check the news archive for past information.'
                    )}
                  </p>
                  <button
                    onClick={() => setActiveTab('archived')}
                    className="inline-flex items-center px-4 py-2 bg-sppp-blue text-white rounded hover:bg-sppp-dark-blue transition-colors"
                  >
                    <Archive className="h-4 w-4 mr-2" />
                    {t('view-archived-news', 'Lihat Arkib Berita', 'View Archived News')}
                  </button>
                </>
              ) : (
                <>
                  <Archive className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('no-archived-news', 'Tiada Berita Arkib', 'No Archived News')}
                  </h3>
                  <p className="text-gray-600">
                    {t('no-archived-news-desc',
                      'Tiada berita arkib dalam kategori yang dipilih.',
                      'No archived news in the selected category.'
                    )}
                  </p>
                </>
              )}
            </div>
          ) : (
            // News List
            <div className="divide-y divide-gray-200">
              {displayNews.map((article, index) => {
                const isExpired = activeTab === 'archived' &&
                  (categorizedNews.expired.includes(article) || categorizedNews.archived.includes(article))

                return (
                  <article key={article.id} className={`p-6 hover:bg-gray-50 transition-colors ${
                    isExpired ? 'opacity-75' : ''
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            getCategoryColor(article.category)
                          }`}>
                            {categoryNames[article.category as keyof typeof categoryNames]}
                          </span>

                          {article.featured && (
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                              {t('featured', 'Ditampilkan', 'Featured')}
                            </span>
                          )}

                          {isExpired && (
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                              {article.status === 'archived'
                                ? t('archived', 'Diarkibkan', 'Archived')
                                : t('expired', 'Tamat Tempoh', 'Expired')
                              }
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-sppp-blue transition-colors">
                          <Link href={`/news/${article.slug}`}>
                            {article.title}
                          </Link>
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formatDate(article.publishDate)}
                          </div>
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {article.views} {t('views', 'tontonan', 'views')}
                          </div>
                          <div>{article.author}</div>
                          {isExpired && (
                            <div className="flex items-center text-orange-600">
                              <Clock className="h-4 w-4 mr-1" />
                              {t('expired-on', 'Tamat:', 'Expired:')} {formatDate(article.expiryDate)}
                            </div>
                          )}
                        </div>
                      </div>

                      <Link
                        href={`/news/${article.slug}`}
                        className="ml-4 p-2 text-gray-400 hover:text-sppp-blue transition-colors"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Link>
                    </div>
                  </article>
                )
              })}
            </div>
          )}

          {/* View All Link */}
          {displayNews.length > 0 && (
            <div className="p-6 border-t border-gray-200 text-center">
              <Link
                href="/news"
                className="inline-flex items-center text-sppp-blue hover:text-sppp-dark-blue font-medium"
              >
                {t('view-all-news', 'Lihat Semua Berita', 'View All News')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          )}
        </div>

        {/* Auto-refresh Notice */}
        <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
          <RefreshCw className="h-4 w-4 mr-2" />
          {t('auto-archive-notice',
            'Berita akan diarkibkan secara automatik selepas tarikh tamat tempoh.',
            'News will be automatically archived after the expiry date.'
          )}
        </div>
      </div>
    </section>
  )
}

EnhancedNews.displayName = 'EnhancedNews'