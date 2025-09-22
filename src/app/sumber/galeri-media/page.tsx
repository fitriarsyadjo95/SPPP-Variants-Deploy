import { Metadata } from 'next';
import { PageTemplate } from '@/components/PageTemplate';
import {
  PhotoIcon,
  VideoCameraIcon,
  CalendarDaysIcon,
  UsersIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ArrowsPointingOutIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Galeri Media | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Koleksi foto dan video aktiviti, acara rasmi, dan pencapaian Suruhanjaya Pelabuhan Pulau Pinang',
  keywords: 'galeri SPPP, foto acara, video aktiviti, dokumentasi pelabuhan, media maritim',
};

interface MediaItem {
  id: string;
  title: string;
  category: 'government-relations' | 'port-operations' | 'industry-events' | 'awards-recognition' | 'community-engagement';
  type: 'photo' | 'video';
  date: string;
  year: number;
  description: string;
  thumbnail: string;
  views: number;
  featured: boolean;
}

const mediaItems: MediaItem[] = [
  // Government Relations (40%)
  {
    id: '1',
    title: 'Lawatan Yang Berhormat Menteri Pengangkutan Malaysia',
    category: 'government-relations',
    type: 'photo',
    date: '2023-11-15',
    year: 2023,
    description: 'Lawatan rasmi YB Menteri Pengangkutan ke kemudahan pelabuhan untuk melihat pembangunan infrastruktur terkini dan membincangkan strategi pelabuhan negara.',
    thumbnail: '/images/gallery/government/minister-visit-2023.jpg',
    views: 3250,
    featured: true
  },
  {
    id: '2',
    title: 'Mesyuarat Majlis Pelabuhan Negara',
    category: 'government-relations',
    type: 'photo',
    date: '2023-10-05',
    year: 2023,
    description: 'Sesi mesyuarat rasmi Majlis Pelabuhan Negara bagi membincangkan dasar dan strategi pelabuhan Malaysia.',
    thumbnail: '/images/gallery/government/national-port-council-2023.jpg',
    views: 2180,
    featured: true
  },
  {
    id: '3',
    title: 'Lawatan Delegasi Antarabangsa dari Jepun',
    category: 'government-relations',
    type: 'photo',
    date: '2023-08-22',
    year: 2023,
    description: 'Kunjungan hormat delegasi dari Japan Port Authority untuk kerjasama teknologi pelabuhan pintar.',
    thumbnail: '/images/gallery/government/japan-delegation-2023.jpg',
    views: 1890,
    featured: false
  },
  {
    id: '4',
    title: 'Pertemuan dengan Kerajaan Negeri Pulau Pinang',
    category: 'government-relations',
    type: 'photo',
    date: '2023-06-18',
    year: 2023,
    description: 'Mesyuarat koordinasi dengan pihak kerajaan negeri mengenai pembangunan pelabuhan yang mampan.',
    thumbnail: '/images/gallery/government/state-government-meeting-2023.jpg',
    views: 1675,
    featured: false
  },
  {
    id: '5',
    title: 'Sidang Parlimen - Laporan Pelabuhan Malaysia',
    category: 'government-relations',
    type: 'photo',
    date: '2023-04-12',
    year: 2023,
    description: 'Pembentangan laporan prestasi pelabuhan Malaysia di Dewan Rakyat oleh YB Menteri.',
    thumbnail: '/images/gallery/government/parliament-session-2023.jpg',
    views: 2456,
    featured: false
  },
  {
    id: '6',
    title: 'Lawatan Setiausaha Tetap Kementerian Pengangkutan',
    category: 'government-relations',
    type: 'photo',
    date: '2022-12-08',
    year: 2022,
    description: 'Sesi taklimat dan lawatan kemudahan oleh Setiausaha Tetap Kementerian Pengangkutan.',
    thumbnail: '/images/gallery/government/secretary-general-visit-2022.jpg',
    views: 1978,
    featured: false
  },

  // Port Operations (25%)
  {
    id: '7',
    title: 'Operasi Terminal Container North Butterworth',
    category: 'port-operations',
    type: 'photo',
    date: '2023-09-30',
    year: 2023,
    description: 'Aktiviti harian operasi terminal container terbesar di Pulau Pinang dengan teknologi automasi terkini.',
    thumbnail: '/images/gallery/operations/nbct-operations-2023.jpg',
    views: 2890,
    featured: true
  },
  {
    id: '8',
    title: 'Sistem Pelabuhan Pintar SPPP',
    category: 'port-operations',
    type: 'video',
    date: '2023-07-25',
    year: 2023,
    description: 'Demonstrasi teknologi pelabuhan pintar yang digunakan untuk meningkatkan kecekapan operasi.',
    thumbnail: '/images/gallery/operations/smart-port-system-2023.jpg',
    views: 3420,
    featured: true
  },
  {
    id: '9',
    title: 'Operasi Terminal Cruise Swettenham Pier',
    category: 'port-operations',
    type: 'photo',
    date: '2023-05-14',
    year: 2023,
    description: 'Kedatangan kapal cruise mewah dan operasi terminal penumpang di Swettenham Pier.',
    thumbnail: '/images/gallery/operations/cruise-terminal-2023.jpg',
    views: 2156,
    featured: false
  },
  {
    id: '10',
    title: 'Pemeriksaan Keselamatan Maritim',
    category: 'port-operations',
    type: 'photo',
    date: '2023-03-20',
    year: 2023,
    description: 'Aktiviti pemeriksaan keselamatan dan kepatuhan kapal oleh pasukan SPPP.',
    thumbnail: '/images/gallery/operations/maritime-safety-2023.jpg',
    views: 1734,
    featured: false
  },

  // Industry Events (20%)
  {
    id: '11',
    title: 'Malaysia International Shipping Week 2023',
    category: 'industry-events',
    type: 'photo',
    date: '2023-08-15',
    year: 2023,
    description: 'Penyertaan SPPP dalam minggu pelayaran antarabangsa Malaysia dengan paparan teknologi terkini.',
    thumbnail: '/images/gallery/events/shipping-week-2023.jpg',
    views: 2567,
    featured: true
  },
  {
    id: '12',
    title: 'Langkawi International Maritime & Aerospace Exhibition',
    category: 'industry-events',
    type: 'photo',
    date: '2023-05-23',
    year: 2023,
    description: 'Penyertaan SPPP dalam pameran maritim dan aerospace antarabangsa di Langkawi (LIMA 2023).',
    thumbnail: '/images/gallery/events/lima-2023.jpg',
    views: 3840,
    featured: true
  },
  {
    id: '13',
    title: 'Seminar Teknologi Pelabuhan Hijau',
    category: 'industry-events',
    type: 'video',
    date: '2023-04-18',
    year: 2023,
    description: 'Seminar mengenai teknologi hijau dan kelestarian dalam operasi pelabuhan moden.',
    thumbnail: '/images/gallery/events/green-port-seminar-2023.jpg',
    views: 1923,
    featured: false
  },
  {
    id: '14',
    title: 'World Ports Conference Kuala Lumpur',
    category: 'industry-events',
    type: 'photo',
    date: '2022-11-10',
    year: 2022,
    description: 'Persidangan pelabuhan dunia dengan penekanan kepada inovasi dan teknologi maritim.',
    thumbnail: '/images/gallery/events/world-ports-conference-2022.jpg',
    views: 2234,
    featured: false
  },

  // Awards & Recognition (10%)
  {
    id: '15',
    title: 'Anugerah Pelabuhan Terbaik Malaysia 2023',
    category: 'awards-recognition',
    type: 'photo',
    date: '2023-10-20',
    year: 2023,
    description: 'Majlis pengiktirafan SPPP sebagai pelabuhan terbaik Malaysia dalam kategori operasi dan perkhidmatan.',
    thumbnail: '/images/gallery/awards/best-port-award-2023.jpg',
    views: 4120,
    featured: true
  },
  {
    id: '16',
    title: 'Service Excellence Awards 2023',
    category: 'awards-recognition',
    type: 'photo',
    date: '2023-09-08',
    year: 2023,
    description: 'Majlis pengiktirafan pencapaian cemerlang pekerja SPPP dalam memberikan perkhidmatan yang berkualiti.',
    thumbnail: '/images/gallery/awards/service-excellence-2023.jpg',
    views: 2890,
    featured: false
  },
  {
    id: '17',
    title: 'ISO Certification Achievement',
    category: 'awards-recognition',
    type: 'photo',
    date: '2023-06-12',
    year: 2023,
    description: 'Penerimaan sijil ISO untuk sistem pengurusan kualiti dan alam sekitar.',
    thumbnail: '/images/gallery/awards/iso-certification-2023.jpg',
    views: 1456,
    featured: false
  },

  // Community Engagement (5%)
  {
    id: '18',
    title: 'Program Penglibatan Komuniti Nelayan',
    category: 'community-engagement',
    type: 'photo',
    date: '2023-09-12',
    year: 2023,
    description: 'Sesi dialog dan penglibatan dengan komuniti nelayan tempatan untuk meningkatkan kerjasama dan kesejahteraan.',
    thumbnail: '/images/gallery/community/fishermen-engagement-2023.jpg',
    views: 1856,
    featured: false
  },
  {
    id: '19',
    title: 'Program CSR Pendidikan Maritim',
    category: 'community-engagement',
    type: 'photo',
    date: '2023-07-28',
    year: 2023,
    description: 'Program tanggungjawab sosial korporat dalam memberikan pendidikan maritim kepada generasi muda.',
    thumbnail: '/images/gallery/community/maritime-education-2023.jpg',
    views: 1234,
    featured: false
  },
  {
    id: '20',
    title: 'Kempen Kesedaran Alam Sekitar',
    category: 'community-engagement',
    type: 'photo',
    date: '2023-05-05',
    year: 2023,
    description: 'Aktiviti kesedaran alam sekitar dan pembersihan pantai bersama komuniti tempatan.',
    thumbnail: '/images/gallery/community/environmental-campaign-2023.jpg',
    views: 987,
    featured: false
  }
];

const categories = [
  { key: 'all', name: 'Semua', count: mediaItems.length },
  { key: 'government-relations', name: 'Perhubungan Kerajaan', count: mediaItems.filter(m => m.category === 'government-relations').length },
  { key: 'port-operations', name: 'Operasi Pelabuhan', count: mediaItems.filter(m => m.category === 'port-operations').length },
  { key: 'industry-events', name: 'Acara Industri', count: mediaItems.filter(m => m.category === 'industry-events').length },
  { key: 'awards-recognition', name: 'Anugerah & Pengiktirafan', count: mediaItems.filter(m => m.category === 'awards-recognition').length },
  { key: 'community-engagement', name: 'Penglibatan Komuniti', count: mediaItems.filter(m => m.category === 'community-engagement').length }
];

const years = [2023, 2022, 2021, 2020, 2019, 2018];

const categoryColors = {
  'government-relations': 'text-blue-600 bg-blue-100',
  'port-operations': 'text-green-600 bg-green-100',
  'industry-events': 'text-purple-600 bg-purple-100',
  'awards-recognition': 'text-yellow-600 bg-yellow-100',
  'community-engagement': 'text-orange-600 bg-orange-100'
};

export default function GaleriMediaPage() {
  const featuredItems = mediaItems.filter(item => item.featured);
  const recentItems = mediaItems.filter(item => !item.featured);
  const photoCount = mediaItems.filter(item => item.type === 'photo').length;
  const videoCount = mediaItems.filter(item => item.type === 'video').length;

  return (
    <PageTemplate
      title="Galeri Media"
      subtitle="Koleksi foto dan video aktiviti, acara rasmi, dan pencapaian Suruhanjaya Pelabuhan Pulau Pinang"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Sumber', href: '/sumber' }, { name: 'Galeri Media' }]}
    >
      <div className="max-w-none">
        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">{photoCount}</div>
            <div className="text-sm text-sppp-gray">Foto</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">{videoCount}</div>
            <div className="text-sm text-sppp-gray">Video</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-1">{years.length}</div>
            <div className="text-sm text-sppp-gray">Tahun Arkib</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">{featuredItems.length}</div>
            <div className="text-sm text-sppp-gray">Media Pilihan</div>
          </div>
          <div className="bg-red-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-1">500+</div>
            <div className="text-sm text-sppp-gray">Jumlah Media</div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari foto, video, atau acara..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Semua Tahun</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Semua Jenis</option>
                <option value="photo">Foto</option>
                <option value="video">Video</option>
              </select>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap mt-4">
            {categories.map((category) => (
              <button
                key={category.key}
                className="px-3 py-1 text-sm font-semibold rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Featured Media */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <PhotoIcon className="h-7 w-7 mr-3 text-blue-600" />
            Media Pilihan
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative rounded-lg overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    {item.type === 'photo' ? (
                      <PhotoIcon className="h-16 w-16 text-gray-400" />
                    ) : (
                      <VideoCameraIcon className="h-16 w-16 text-gray-400" />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <ArrowsPointingOutIcon className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${categoryColors[item.category]}`}>
                      {item.category === 'government-relations' ? 'Kerajaan' :
                       item.category === 'port-operations' ? 'Operasi' :
                       item.category === 'industry-events' ? 'Industri' :
                       item.category === 'awards-recognition' ? 'Anugerah' : 'Komuniti'}
                    </span>
                  </div>
                  {item.type === 'video' && (
                    <div className="absolute top-3 right-3">
                      <VideoCameraIcon className="h-6 w-6 text-white" />
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h4 className="text-lg font-semibold text-sppp-dark-blue mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-sppp-gray text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <CalendarDaysIcon className="h-4 w-4 mr-1" />
                      {new Date(item.date).toLocaleDateString('ms-MY', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center">
                      <EyeIcon className="h-4 w-4 mr-1" />
                      {item.views}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Recent Media */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
                <ClockIcon className="h-7 w-7 mr-3 text-green-600" />
                Media Terkini
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentItems.map((item) => (
                  <div
                    key={item.id}
                    className="group cursor-pointer hover:shadow-md transition-shadow duration-300 border rounded-lg overflow-hidden"
                  >
                    <div className="relative">
                      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        {item.type === 'photo' ? (
                          <PhotoIcon className="h-12 w-12 text-gray-400" />
                        ) : (
                          <VideoCameraIcon className="h-12 w-12 text-gray-400" />
                        )}
                      </div>
                      <div className="absolute top-2 left-2">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${categoryColors[item.category]}`}>
                          {item.category === 'government-relations' ? 'Kerajaan' :
                           item.category === 'port-operations' ? 'Operasi' :
                           item.category === 'industry-events' ? 'Industri' :
                           item.category === 'awards-recognition' ? 'Anugerah' : 'Komuniti'}
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <h4 className="text-md font-semibold text-sppp-dark-blue mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-sppp-gray text-sm mb-3 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center">
                          <CalendarDaysIcon className="h-3 w-3 mr-1" />
                          {new Date(item.date).toLocaleDateString('ms-MY')}
                        </div>
                        <div className="flex items-center">
                          <EyeIcon className="h-3 w-3 mr-1" />
                          {item.views}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                  Muat Lebih Banyak Media
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Media by Year */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold text-sppp-dark-blue mb-4">Media Mengikut Tahun</h4>
              <div className="space-y-3">
                {years.map(year => {
                  const yearCount = mediaItems.filter(item => item.year === year).length;
                  return (
                    <div key={year} className="flex items-center justify-between text-sm">
                      <span className="text-sppp-gray">{year}</span>
                      <span className="font-semibold text-blue-600">{yearCount} item</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-sppp-dark-blue mb-4">Statistik Galeri</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sppp-gray">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">Dokumentasi lengkap aktiviti SPPP</span>
                </div>
                <div className="flex items-center gap-3 text-sppp-gray">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">Foto dan video berkualiti tinggi</span>
                </div>
                <div className="flex items-center gap-3 text-sppp-gray">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">Arkib media yang terorganisir</span>
                </div>
                <div className="flex items-center gap-3 text-sppp-gray">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">Kemaskini berkala</span>
                </div>
              </div>
            </div>

            {/* Media Request */}
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-sppp-dark-blue mb-2">Permintaan Media</h4>
              <p className="text-sppp-gray text-sm mb-4">
                Memerlukan foto atau video resolusi tinggi untuk kegunaan rasmi?
              </p>
              <button className="w-full bg-green-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-green-700 transition-colors duration-300">
                Hubungi Unit Media
              </button>
            </div>
          </div>
        </div>

        {/* Information Note */}
        <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Hak Cipta Media:</strong> Semua foto dan video dalam galeri ini adalah hak milik SPPP.
            Untuk penggunaan komersial atau penerbitan, sila dapatkan kebenaran daripada Unit Komunikasi Korporat.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}