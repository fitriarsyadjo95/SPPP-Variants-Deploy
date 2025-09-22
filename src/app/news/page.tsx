import { Metadata } from 'next';
import { PageTemplate } from '@/components/PageTemplate';
import {
  NewspaperIcon,
  CalendarDaysIcon,
  UserIcon,
  EyeIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  TagIcon,
  ClockIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PhotoIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Berita & Media | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Berita terkini, siaran media, pengumuman, dan laporan aktiviti Suruhanjaya Pelabuhan Pulau Pinang',
  keywords: 'berita SPPP, pengumuman pelabuhan, media maritim, siaran akhbar, aktiviti pelabuhan',
};

interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  category: 'news' | 'announcement' | 'event' | 'achievement';
  excerpt: string;
  author: string;
  publishDate: string;
  views: number;
  featured: boolean;
  tags: string[];
}

const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Komitmen Operasi Berintegriti dalam Pelabuhan Pulau Pinang',
    slug: 'komitmen-operasi-berintegriti-2024',
    category: 'announcement',
    excerpt: 'SPPP mengukuhkan komitmen untuk menjalankan operasi yang telus dan berintegriti dalam semua aspek pengurusan pelabuhan.',
    author: 'Unit Komunikasi Korporat SPPP',
    publishDate: '2024-12-23',
    views: 1850,
    featured: true,
    tags: ['integriti', 'operasi', 'ketelusan', 'pengurusan']
  },
  {
    id: '2',
    title: 'Engagements With Stakeholders',
    slug: 'engagements-stakeholders-2025',
    category: 'event',
    excerpt: 'Sesi penglibatan komprehensif dengan stakeholder untuk memahami keperluan dan meningkatkan perkhidmatan pelabuhan.',
    author: 'Bahagian Komersial SPPP',
    publishDate: '2025-03-27',
    views: 2240,
    featured: true,
    tags: ['stakeholder', 'penglibatan', 'perkhidmatan', 'feedback']
  },
  {
    id: '3',
    title: 'Perkhidmatan Feri Percuma Thaipusam 2024',
    slug: 'feri-percuma-thaipusam-2024',
    category: 'announcement',
    excerpt: 'SPPP menyediakan perkhidmatan feri percuma sempena perayaan Thaipusam untuk memudahkan pergerakan penumpang.',
    author: 'Bahagian Operasi Feri',
    publishDate: '2024-01-15',
    views: 3120,
    featured: false,
    tags: ['feri', 'thaipusam', 'percuma', 'perayaan']
  },
  {
    id: '4',
    title: 'Pelantikan Pengurus Besar Baharu SPPP',
    slug: 'pelantikan-pengurus-besar-2023',
    category: 'news',
    excerpt: 'Encik Vijayaindiaran A/L R. Viswalingam dilantik sebagai Pengurus Besar yang baharu untuk menerajui SPPP.',
    author: 'Unit Sumber Manusia SPPP',
    publishDate: '2023-11-20',
    views: 2680,
    featured: false,
    tags: ['pelantikan', 'kepimpinan', 'pengurus besar', 'organisasi']
  },
  {
    id: '5',
    title: 'Majlis Anugerah Excellence Service Awards',
    slug: 'excellence-service-awards-2023',
    category: 'achievement',
    excerpt: 'Majlis pengiktirafan pencapaian cemerlang pekerja SPPP dalam memberikan perkhidmatan yang berkualiti.',
    author: 'Unit Komunikasi Korporat SPPP',
    publishDate: '2023-10-15',
    views: 1920,
    featured: false,
    tags: ['anugerah', 'pencapaian', 'perkhidmatan', 'pengiktirafan']
  },
  {
    id: '6',
    title: 'Sesi Penglibatan dengan Komuniti Nelayan',
    slug: 'penglibatan-komuniti-nelayan-2023',
    category: 'event',
    excerpt: 'Program penglibatan dengan komuniti nelayan tempatan untuk meningkatkan kerjasama dan pemahaman.',
    author: 'Bahagian Hal Ehwal Awam SPPP',
    publishDate: '2023-09-08',
    views: 1450,
    featured: false,
    tags: ['komuniti', 'nelayan', 'kerjasama', 'penglibatan']
  }
];

const categories = [
  { key: 'all', name: 'Semua', count: newsArticles.length },
  { key: 'news', name: 'Berita', count: newsArticles.filter(a => a.category === 'news').length },
  { key: 'announcement', name: 'Pengumuman', count: newsArticles.filter(a => a.category === 'announcement').length },
  { key: 'event', name: 'Acara', count: newsArticles.filter(a => a.category === 'event').length },
  { key: 'achievement', name: 'Pencapaian', count: newsArticles.filter(a => a.category === 'achievement').length }
];

const categoryColors = {
  news: 'text-blue-600 bg-blue-100',
  announcement: 'text-green-600 bg-green-100',
  event: 'text-purple-600 bg-purple-100',
  achievement: 'text-yellow-600 bg-yellow-100'
};

export default function NewsPage() {
  const featuredArticles = newsArticles.filter(article => article.featured);
  const recentArticles = newsArticles.filter(article => !article.featured);
  const trending = newsArticles.sort((a, b) => b.views - a.views).slice(0, 5);

  return (
    <PageTemplate
      title="Berita & Media"
      subtitle="Ikuti berita terkini, pengumuman, dan perkembangan terbaharu Suruhanjaya Pelabuhan Pulau Pinang"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Berita & Media' }]}
    >
      <div className="max-w-none">
        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">{newsArticles.length}</div>
            <div className="text-sm text-sppp-gray">Berita & Artikel</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">{categories.length - 1}</div>
            <div className="text-sm text-sppp-gray">Kategori</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-1">24/7</div>
            <div className="text-sm text-sppp-gray">Kemaskini</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">{featuredArticles.length}</div>
            <div className="text-sm text-sppp-gray">Berita Utama</div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari berita, pengumuman, atau acara..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.key}
                  className="px-4 py-2 text-sm font-semibold rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Articles */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <ChartBarIcon className="h-7 w-7 mr-3 text-blue-600" />
            Berita Utama
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <article
                key={article.id}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <PhotoIcon className="h-16 w-16 text-blue-400" />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${categoryColors[article.category]}`}>
                      {article.category === 'achievement' ? 'Pencapaian' :
                       article.category === 'announcement' ? 'Pengumuman' :
                       article.category === 'event' ? 'Acara' : 'Berita'}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarDaysIcon className="h-4 w-4 mr-1" />
                      {new Date(article.publishDate).toLocaleDateString('ms-MY', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-sppp-dark-blue mb-3">
                    {article.title}
                  </h4>

                  <p className="text-sppp-gray mb-4">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <UserIcon className="h-4 w-4 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <EyeIcon className="h-4 w-4 mr-1" />
                      {article.views} views
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="inline-flex items-center px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                        <TagIcon className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Baca Selengkapnya
                    <ArrowRightIcon className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Articles */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
                <ClockIcon className="h-7 w-7 mr-3 text-green-600" />
                Berita Terkini
              </h3>

              <div className="space-y-6">
                {recentArticles.map((article) => (
                  <article
                    key={article.id}
                    className="border-b border-gray-200 pb-6 last:border-b-0"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-48 aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <PhotoIcon className="h-8 w-8 text-gray-400" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${categoryColors[article.category]}`}>
                            {article.category === 'achievement' ? 'Pencapaian' :
                             article.category === 'announcement' ? 'Pengumuman' :
                             article.category === 'event' ? 'Acara' : 'Berita'}
                          </span>
                          <div className="flex items-center text-sm text-gray-500">
                            <CalendarDaysIcon className="h-4 w-4 mr-1" />
                            {new Date(article.publishDate).toLocaleDateString('ms-MY', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>
                        </div>

                        <h4 className="text-lg font-bold text-sppp-dark-blue mb-2">
                          <a href={`/news/${article.slug}`} className="hover:text-blue-600 transition-colors duration-300">
                            {article.title}
                          </a>
                        </h4>

                        <p className="text-sppp-gray mb-3">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <UserIcon className="h-4 w-4 mr-1" />
                            {article.author}
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center text-sm text-gray-500">
                              <EyeIcon className="h-4 w-4 mr-1" />
                              {article.views}
                            </div>
                            <a
                              href={`/news/${article.slug}`}
                              className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                            >
                              Baca →
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="text-center mt-8">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                  Muat Lebih Banyak Berita
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Articles */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold text-sppp-dark-blue mb-4 flex items-center">
                <ChartBarIcon className="h-5 w-5 text-red-600 mr-2" />
                Trending
              </h4>

              <div className="space-y-4">
                {trending.map((article, index) => (
                  <div key={article.id} className="flex gap-3">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 text-sm font-bold rounded">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-sppp-dark-blue mb-1">
                        <a href={`/news/${article.slug}`} className="hover:text-blue-600 transition-colors duration-300">
                          {article.title}
                        </a>
                      </h5>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <EyeIcon className="h-3 w-3" />
                        {article.views} views
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="text-center">
                <GlobeAltIcon className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h4 className="text-lg font-semibold text-sppp-dark-blue mb-2">
                  Newsletter SPPP
                </h4>
                <p className="text-sppp-gray text-sm mb-4">
                  Dapatkan berita terkini terus ke e-mel anda
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="E-mel anda"
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700 transition-colors duration-300">
                    Langgan
                  </button>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold text-sppp-dark-blue mb-4">Ciri-ciri Utama</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sppp-gray">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Berita terkini dan tepat pada masanya</span>
                </div>
                <div className="flex items-center gap-3 text-sppp-gray">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Pengumuman rasmi SPPP</span>
                </div>
                <div className="flex items-center gap-3 text-sppp-gray">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Laporan aktiviti dan pencapaian</span>
                </div>
                <div className="flex items-center gap-3 text-sppp-gray">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Media dan galeri foto</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Information Note */}
        <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Maklumat Media:</strong> Untuk keterangan lanjut mengenai sebarang berita atau untuk menghubungi
            media relations SPPP, sila layari bahagian hubungi kami atau hantar e-mel kepada media@penangport.gov.my
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}