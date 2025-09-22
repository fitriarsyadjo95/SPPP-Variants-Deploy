import { Metadata } from 'next';
import { PageTemplate } from '@/components/PageTemplate';
import {
  DocumentTextIcon,
  ClockIcon,
  PhoneIcon,
  EnvelopeIcon,
  CheckCircleIcon,
  ArrowDownTrayIcon,
  UserPlusIcon,
  CalendarDaysIcon,
  ExclamationTriangleIcon,
  TrophyIcon,
  ArchiveBoxIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Tender & Sebut Harga | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Maklumat tender dan sebut harga terkini, pendaftaran pembekal dan keputusan tender SPPP',
  keywords: 'tender, sebut harga, procurement, pembekal, SPPP'
};

const activeTenders = [
  {
    id: 'T2024-001',
    title: 'Pembekalan dan Pemasangan Sistem Keselamatan Pelabuhan',
    description: 'Tender untuk pembekalan, pemasangan dan penyelenggaraan sistem keselamatan CCTV dan kawalan akses.',
    publishDate: '10 September 2024',
    closeDate: '15 Oktober 2024',
    category: 'Infrastruktur',
    estimatedValue: 'RM 500,000 - RM 750,000',
    daysLeft: 25,
    isNew: true
  },
  {
    id: 'T2024-002',
    title: 'Perkhidmatan Penyelenggaraan Jeti Butterworth',
    description: 'Kontrak penyelenggaraan dan pembaikan struktur jeti untuk tempoh 2 tahun.',
    publishDate: '8 September 2024',
    closeDate: '20 Oktober 2024',
    category: 'Penyelenggaraan',
    estimatedValue: 'RM 200,000 - RM 300,000',
    daysLeft: 30,
    isNew: true
  },
  {
    id: 'T2024-003',
    title: 'Pembekalan Peralatan Operasi Kargo',
    description: 'Tender untuk pembekalan kren mudah alih dan peralatan pengendalian kargo.',
    publishDate: '5 September 2024',
    closeDate: '25 Oktober 2024',
    category: 'Peralatan',
    estimatedValue: 'RM 1,200,000 - RM 1,500,000',
    daysLeft: 35,
    isNew: false
  }
];

const tenderResults = [
  {
    id: 'T2024-R001',
    title: 'Sistem Pengurusan Lalu Lintas Feri',
    winner: 'Syarikat ABC Teknologi Sdn Bhd',
    awardValue: 'RM 890,000',
    awardDate: '30 Ogos 2024',
    category: 'Teknologi'
  },
  {
    id: 'T2024-R002',
    title: 'Perkhidmatan Pembersihan Terminal',
    winner: 'Kumpulan Kebersihan Utama Sdn Bhd',
    awardValue: 'RM 180,000',
    awardDate: '25 Ogos 2024',
    category: 'Perkhidmatan'
  }
];

export default function TenderSebutHargaPage() {
  return (
    <PageTemplate
      title="Tender & Sebut Harga"
      subtitle="Maklumat tender dan sebut harga terkini, pendaftaran pembekal dan keputusan tender SPPP"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Sumber', href: '/sumber' }, { name: 'Tender & Sebut Harga' }]}
    >
      <div className="max-w-none">
        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">{activeTenders.length}</div>
            <div className="text-sm text-sppp-gray">Tender Aktif</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">{tenderResults.length}</div>
            <div className="text-sm text-sppp-gray">Keputusan Terbaru</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-1">30</div>
            <div className="text-sm text-sppp-gray">Hari Max Tender</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
            <div className="text-sm text-sppp-gray">Portal Online</div>
          </div>
        </div>

        {/* Vendor Registration */}
        <div className="bg-gradient-to-r from-blue-50 to-orange-50 border-l-4 border-blue-500 p-6 mb-8 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <UserPlusIcon className="h-8 w-8 text-blue-600 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Pendaftaran Pembekal</h3>
                <p className="text-blue-800">
                  Daftar sebagai pembekal SPPP untuk menerima maklumat tender terkini dan menyertai proses tender.
                </p>
              </div>
            </div>
            <a
              href="/NOTIS TENDER _BORANG_PENDAFTARAN_PEMBEKAL.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center"
            >
              <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
              Muat Turun Borang
            </a>
          </div>
        </div>

        {/* Active Tenders */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <DocumentTextIcon className="h-7 w-7 mr-3 text-orange-600" />
            Tender Aktif ({activeTenders.length})
          </h3>

          <div className="space-y-6">
            {activeTenders.map((tender) => (
              <div key={tender.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      {tender.isNew && (
                        <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                          BARU
                        </span>
                      )}
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-sppp-dark-blue mb-2">{tender.title}</h4>
                        <p className="text-sppp-gray text-sm mb-3">{tender.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3 text-sm text-sppp-gray">
                      <div className="flex items-center">
                        <CalendarDaysIcon className="h-4 w-4 mr-2 text-green-600" />
                        Diterbitkan: {tender.publishDate}
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-2 text-orange-600" />
                        Tutup: {tender.closeDate}
                      </div>
                      <div className="flex items-center">
                        <DocumentTextIcon className="h-4 w-4 mr-2 text-blue-600" />
                        Kategori: {tender.category}
                      </div>
                      <div className="flex items-center">
                        <span className="text-purple-600">💰</span>
                        <span className="ml-2">Anggaran: {tender.estimatedValue}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    <div className={`px-3 py-2 rounded-lg text-sm font-medium ${
                      tender.daysLeft > 7 ? 'bg-green-100 text-green-800' :
                      tender.daysLeft > 3 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {tender.daysLeft} hari lagi
                    </div>
                    <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium">
                      Lihat Butiran
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tender Results */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <TrophyIcon className="h-7 w-7 mr-3 text-green-600" />
            Keputusan Tender Terbaru
          </h3>

          <div className="space-y-4">
            {tenderResults.map((result) => (
              <div key={result.id} className="border border-gray-200 rounded-lg p-6 bg-green-50">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-sppp-dark-blue mb-3">{result.title}</h4>
                    <div className="grid md:grid-cols-2 gap-3 text-sm text-sppp-gray">
                      <div className="flex items-center">
                        <TrophyIcon className="h-4 w-4 mr-2 text-green-600" />
                        Pemenang: <span className="font-medium ml-1">{result.winner}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-600">💰</span>
                        <span className="ml-2">Nilai: <span className="font-medium">{result.awardValue}</span></span>
                      </div>
                      <div className="flex items-center">
                        <CalendarDaysIcon className="h-4 w-4 mr-2 text-orange-600" />
                        Tarikh: {result.awardDate}
                      </div>
                      <div className="flex items-center">
                        <DocumentTextIcon className="h-4 w-4 mr-2 text-blue-600" />
                        Kategori: {result.category}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                      DIANUGERAHKAN
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process & Guidelines */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Proses & Garis Panduan
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-4">Langkah Penyertaan Tender</h4>
              <ol className="space-y-2 text-sppp-gray">
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">1</span>
                  Daftar sebagai pembekal SPPP
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">2</span>
                  Muat turun dokumen tender
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">3</span>
                  Sediakan proposal lengkap
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">4</span>
                  Hantar sebelum tarikh tutup
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">5</span>
                  Tunggu keputusan penilaian
                </li>
              </ol>
            </div>

            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-4">Maklumat Penting</h4>
              <ul className="space-y-2 text-sppp-gray text-sm">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Semua tender mesti diserahkan sebelum tarikh tutup
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Pendaftaran pembekal diperlukan terlebih dahulu
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Dokumen tender boleh dimuat turun dari portal
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Keputusan akan diumumkan selepas penilaian
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Proses tender adalah telus dan adil
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Maklumat Hubungan
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-4 flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2 text-blue-600" />
                Bahagian Perolehan
              </h4>
              <div className="space-y-3 text-sppp-gray">
                <div className="flex items-center">
                  <PhoneIcon className="h-4 w-4 mr-2 text-blue-600" />
                  <span>04-263 3211</span>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="h-4 w-4 mr-2 text-orange-600" />
                  <span>procurement@penangport.gov.my</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-2 text-green-600" />
                  <span>Isnin - Jumaat: 8:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-4 flex items-center">
                <ArchiveBoxIcon className="h-5 w-5 mr-2 text-purple-600" />
                Sumber Tambahan
              </h4>
              <ul className="space-y-2 text-sppp-gray text-sm">
                <li>
                  <a href="#" className="flex items-center hover:text-blue-600">
                    <DocumentTextIcon className="h-4 w-4 mr-2" />
                    Portal Tender Online
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center hover:text-blue-600">
                    <UserPlusIcon className="h-4 w-4 mr-2" />
                    Panduan Pendaftaran Pembekal
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center hover:text-blue-600">
                    <ArchiveBoxIcon className="h-4 w-4 mr-2" />
                    Arkib Tender Lepas
                  </a>
                </li>
                <li>
                  <a href="/hubungi/faq" className="flex items-center hover:text-blue-600">
                    <InformationCircleIcon className="h-4 w-4 mr-2" />
                    Soalan Lazim
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500 rounded-lg">
            <div className="flex items-start">
              <ExclamationTriangleIcon className="h-5 w-5 text-orange-600 mr-3 mt-0.5" />
              <div>
                <h4 className="font-semibold text-orange-900 mb-1">Amaran Penting</h4>
                <p className="text-orange-800 text-sm">
                  SPPP tidak mengenakan sebarang bayaran untuk proses tender. Berhati-hati dengan
                  penipuan yang menggunakan nama SPPP. Hanya dokumen yang dimuat turun dari portal
                  rasmi yang sah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}