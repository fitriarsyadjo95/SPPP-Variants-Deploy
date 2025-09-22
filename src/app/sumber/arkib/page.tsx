import { Metadata } from 'next';
import { PageTemplate } from '@/components/PageTemplate';
import {
  ArchiveBoxIcon,
  NewspaperIcon,
  CalendarDaysIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Arkib Elektronik | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Koleksi keratan akhbar dan dokumen arkib elektronik berkaitan aktiviti dan operasi SPPP',
  keywords: 'arkib elektronik, keratan akhbar, SPPP, dokumentasi, akhbar'
};

// Sample newspaper cuttings data based on web extraction
const newspaperCuttings = [
  {
    id: 1,
    title: "SPPP Lancar Perkhidmatan Feri Baharu ke Langkawi",
    source: "METRO",
    date: "2024-11-15",
    category: "Perkhidmatan Feri",
    excerpt: "Suruhanjaya Pelabuhan Pulau Pinang melancarkan perkhidmatan feri baharu yang menghubungkan Penang dengan Langkawi..."
  },
  {
    id: 2,
    title: "Port Operations Reach Record High in Third Quarter",
    source: "THE STAR",
    date: "2024-11-10",
    category: "Operasi Pelabuhan",
    excerpt: "Penang Port Commission reports significant growth in cargo handling operations during the third quarter..."
  },
  {
    id: 3,
    title: "Kapal Persiaran Antarabangsa Singgah di Penang",
    source: "BERITA HARIAN",
    date: "2024-11-05",
    category: "Pelancong Maritim",
    excerpt: "Penang menerima kedatangan kapal persiaran mewah dengan lebih 3,000 pelancong dari pelbagai negara..."
  },
  {
    id: 4,
    title: "SPPP Tingkatkan Kemudahan Terminal Kontena",
    source: "SINAR HARIAN",
    date: "2024-10-28",
    category: "Pembangunan",
    excerpt: "Projek peningkatan kemudahan di terminal kontena Butterworth dijangka siap menjelang akhir tahun..."
  },
  {
    id: 5,
    title: "Port Safety Standards Meet International Requirements",
    source: "UTUSAN MALAYSIA",
    date: "2024-10-20",
    category: "Keselamatan",
    excerpt: "Suruhanjaya Pelabuhan Pulau Pinang berjaya memenuhi piawaian keselamatan pelabuhan antarabangsa..."
  },
  {
    id: 6,
    title: "Perkhidmatan Logistik Penang Diperkasa",
    source: "METRO",
    date: "2024-10-15",
    category: "Logistik",
    excerpt: "Inisiatif baharu untuk mempertingkatkan perkhidmatan logistik di pelabuhan Penang dilancarkan..."
  }
];

const sources = ["Semua", "METRO", "THE STAR", "BERITA HARIAN", "SINAR HARIAN", "UTUSAN MALAYSIA"];
const categories = ["Semua", "Perkhidmatan Feri", "Operasi Pelabuhan", "Pelancong Maritim", "Pembangunan", "Keselamatan", "Logistik"];

export default function ArkibElektronikPage() {
  return (
    <PageTemplate
      title="Arkib Elektronik"
      subtitle="Koleksi keratan akhbar dan dokumen arkib elektronik berkaitan aktiviti dan operasi SPPP"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Sumber', href: '/sumber' }, { name: 'Arkib Elektronik' }]}
    >
      <div className="max-w-none">
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">320+</div>
            <div className="text-sm text-sppp-gray">Keratan Akhbar</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">32</div>
            <div className="text-sm text-sppp-gray">Halaman</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-1">5</div>
            <div className="text-sm text-sppp-gray">Sumber Akhbar</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">2024</div>
            <div className="text-sm text-sppp-gray">Tahun Terkini</div>
          </div>
        </div>

        {/* About Archive */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <ArchiveBoxIcon className="h-7 w-7 mr-3 text-blue-600" />
            Mengenai Arkib Elektronik
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sppp-gray mb-4">
                Arkib Elektronik SPPP menyimpan koleksi komprehensif keratan akhbar dan dokumen bersejarah
                yang berkaitan dengan aktiviti, pembangunan, dan pencapaian Suruhanjaya Pelabuhan Pulau Pinang.
              </p>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Kandungan Arkib:</h4>
              <ul className="space-y-2 text-sppp-gray">
                <li className="flex items-center">
                  <DocumentTextIcon className="h-4 w-4 mr-2 text-blue-600" />
                  Keratan akhbar tempatan dan antarabangsa
                </li>
                <li className="flex items-center">
                  <DocumentTextIcon className="h-4 w-4 mr-2 text-blue-600" />
                  Laporan aktiviti pelabuhan
                </li>
                <li className="flex items-center">
                  <DocumentTextIcon className="h-4 w-4 mr-2 text-blue-600" />
                  Dokumentasi projek pembangunan
                </li>
                <li className="flex items-center">
                  <DocumentTextIcon className="h-4 w-4 mr-2 text-blue-600" />
                  Pencapaian dan pengiktirafan
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">Sumber Akhbar</h4>
              <div className="space-y-2 text-sm text-blue-700">
                <p>• Metro</p>
                <p>• The Star</p>
                <p>• Berita Harian</p>
                <p>• Sinar Harian</p>
                <p>• Utusan Malaysia</p>
                <p>• Dan banyak lagi...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4 flex items-center">
            <FunnelIcon className="h-6 w-6 mr-2 text-green-600" />
            Carian & Penapis
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-sppp-gray mb-2">Cari Tajuk</label>
              <div className="relative">
                <MagnifyingGlassIcon className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Masukkan kata kunci..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-sppp-gray mb-2">Sumber</label>
              <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                {sources.map(source => (
                  <option key={source} value={source}>{source}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-sppp-gray mb-2">Kategori</label>
              <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Newspaper Cuttings */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <NewspaperIcon className="h-7 w-7 mr-3 text-orange-600" />
            Keratan Akhbar Terkini
          </h3>

          <div className="grid gap-6">
            {newspaperCuttings.map((cutting) => (
              <div key={cutting.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {cutting.source}
                      </span>
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {cutting.category}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-sppp-dark-blue mb-2 hover:text-orange-600 cursor-pointer">
                      {cutting.title}
                    </h4>
                    <p className="text-sppp-gray text-sm mb-3">
                      {cutting.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarDaysIcon className="h-4 w-4 mr-1" />
                      {new Date(cutting.date).toLocaleDateString('ms-MY', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-700 transition-colors">
                      Baca Selengkapnya
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex items-center justify-between">
            <div className="text-sm text-sppp-gray">
              Menunjukkan 1-6 daripada 320+ keratan akhbar
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                Sebelum
              </button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">1</button>
              <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">2</button>
              <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">3</button>
              <span className="text-sm text-sppp-gray">...</span>
              <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">32</button>
              <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                Seterusnya
              </button>
            </div>
          </div>
        </div>

        {/* Access Information */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Maklumat Akses
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Cara Menggunakan</h4>
              <ul className="space-y-2 text-sppp-gray text-sm">
                <li>• Gunakan fungsi carian untuk mencari keratan akhbar tertentu</li>
                <li>• Tapis mengikut sumber akhbar atau kategori</li>
                <li>• Klik pada tajuk untuk membaca artikel penuh</li>
                <li>• Navigasi halaman untuk melihat lebih banyak arkib</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Kemaskini</h4>
              <div className="space-y-2 text-sppp-gray text-sm">
                <p>• Arkib dikemaskini secara berkala</p>
                <p>• Keratan akhbar baharu ditambah mingguan</p>
                <p>• Dokumentasi sejarah dikekalkan</p>
                <p>• Akses percuma untuk umum</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Nota:</strong> Arkib elektronik ini menyediakan akses kepada rekod bersejarah
              aktiviti SPPP untuk tujuan rujukan dan penyelidikan. Untuk maklumat terkini,
              sila rujuk bahagian berita dan pengumuman.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}