import { Metadata } from 'next';
import { PageTemplate } from '@/components/PageTemplate';
import {
  ChartBarIcon,
  StarIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  HandThumbUpIcon,
  ClockIcon,
  ComputerDesktopIcon,
  ExclamationCircleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Kajian Kepuasan Pelanggan | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Sistem kajian kepuasan pelanggan untuk menilai dan meningkatkan kualiti perkhidmatan SPPP',
  keywords: 'kajian kepuasan, survey pelanggan, penilaian perkhidmatan, SPPP, feedback'
};

const surveyFocusAreas = [
  {
    title: "Kualiti Perkhidmatan Kakitangan",
    description: "Penilaian terhadap profesionalisme dan sikap petugas",
    icon: UserGroupIcon,
    color: "blue",
    aspects: ["Sikap petugas", "Kesopanan", "Keramahan", "Profesionalisme"]
  },
  {
    title: "Kecekapan Perkhidmatan",
    description: "Analisis terhadap kelajuan dan efisiensi operasi",
    icon: ClockIcon,
    color: "green",
    aspects: ["Masa menunggu", "Kelajuan proses", "Ketepatan masa", "Efisiensi operasi"]
  },
  {
    title: "Kemudahan & Persekitaran",
    description: "Penilaian kemudahan fizikal dan persekitaran menunggu",
    icon: HandThumbUpIcon,
    color: "orange",
    aspects: ["Ruang menunggu", "Kebersihan", "Keselesaan", "Kemudahan sokongan"]
  },
  {
    title: "Bantuan Pelanggan",
    description: "Tahap bantuan dan sokongan yang diberikan kepada pelanggan",
    icon: CheckCircleIcon,
    color: "purple",
    aspects: ["Bantuan teknikal", "Panduan proses", "Penyelesaian masalah", "Maklumat jelas"]
  }
];

const demographicInfo = [
  { category: "Umur", options: ["18-20", "21-30", "31-40", "41-50", "51-60", "61+"] },
  { category: "Jantina", options: ["Lelaki", "Perempuan"] },
  { category: "Tujuan Lawatan", options: ["Perniagaan", "Peribadi", "Rasmi", "Lain-lain"] }
];

export default function KajianKepuasanPelangganPage() {
  return (
    <PageTemplate
      title="Kajian Kepuasan Pelanggan"
      subtitle="Sistem kajian kepuasan pelanggan untuk menilai dan meningkatkan kualiti perkhidmatan SPPP"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Hubungi', href: '/hubungi' }, { name: 'Kajian Kepuasan' }]}
    >
      <div className="max-w-none">
        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">95%</div>
            <div className="text-sm text-sppp-gray">Tahap Kepuasan</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">12</div>
            <div className="text-sm text-sppp-gray">Soalan Utama</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-1">4</div>
            <div className="text-sm text-sppp-gray">Fokus Utama</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">2023</div>
            <div className="text-sm text-sppp-gray">Survey Terkini</div>
          </div>
        </div>

        {/* Survey Portal */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <ComputerDesktopIcon className="h-7 w-7 mr-3 text-blue-600" />
            Portal Kajian Kepuasan
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border-2 border-green-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <ChartBarIcon className="h-8 w-8 text-green-600 mr-3" />
                <h4 className="text-xl font-semibold text-sppp-dark-blue">Survey Online</h4>
              </div>
              <p className="text-sppp-gray mb-4">
                Akses sistem kajian kepuasan pelanggan rasmi SPPP untuk memberikan penilaian terhadap
                perkhidmatan yang diterima.
              </p>

              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="text-sm text-green-700 bg-green-50 px-2 py-1 rounded">
                  • 12 soalan mudah
                </div>
                <div className="text-sm text-green-700 bg-green-50 px-2 py-1 rounded">
                  • Format Ya/Tidak
                </div>
                <div className="text-sm text-green-700 bg-green-50 px-2 py-1 rounded">
                  • Anonymus
                </div>
                <div className="text-sm text-green-700 bg-green-50 px-2 py-1 rounded">
                  • 5 minit sahaja
                </div>
              </div>

              <a
                href="https://www.ppcft.gov.my/kajiankepuasan.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Mula Survey
              </a>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                <StarIcon className="h-5 w-5 mr-2" />
                Kepentingan Survey
              </h4>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• Membantu SPPP memahami keperluan pelanggan</li>
                <li>• Mengenal pasti bidang untuk penambahbaikan</li>
                <li>• Meningkatkan kualiti perkhidmatan secara berterusan</li>
                <li>• Memastikan standard perkhidmatan yang cemerlang</li>
                <li>• Mengukur tahap kepuasan secara objektif</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Survey Focus Areas */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <ClipboardDocumentListIcon className="h-7 w-7 mr-3 text-orange-600" />
            Fokus Kajian
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            {surveyFocusAreas.map((area, index) => (
              <div key={index} className={`border border-${area.color}-200 rounded-lg p-6`}>
                <div className="flex items-center mb-3">
                  <area.icon className={`h-6 w-6 text-${area.color}-600 mr-3`} />
                  <h4 className="text-lg font-semibold text-sppp-dark-blue">{area.title}</h4>
                </div>
                <p className="text-sppp-gray mb-3 text-sm">{area.description}</p>
                <div className="space-y-1">
                  {area.aspects.map((aspect, idx) => (
                    <div key={idx} className={`text-xs text-${area.color}-700 bg-${area.color}-50 px-2 py-1 rounded inline-block mr-1 mb-1`}>
                      {aspect}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Survey Structure */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Struktur Survey
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-4">Format Soalan</h4>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <strong className="text-blue-900">12 Soalan Utama</strong>
                    <p className="text-blue-700 text-sm">Format jawapan Ya/Tidak untuk kemudahan</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <UserGroupIcon className="h-5 w-5 text-green-600 mr-3" />
                  <div>
                    <strong className="text-green-900">Maklumat Demografi</strong>
                    <p className="text-green-700 text-sm">Umur, jantina, dan tujuan lawatan</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                  <ClockIcon className="h-5 w-5 text-orange-600 mr-3" />
                  <div>
                    <strong className="text-orange-900">Masa Diperlukan</strong>
                    <p className="text-orange-700 text-sm">Hanya 3-5 minit untuk melengkapkan</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-4">Maklumat Demografi</h4>
              <div className="space-y-3">
                {demographicInfo.map((demo, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <strong className="text-sppp-dark-blue text-sm">{demo.category}:</strong>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {demo.options.map((option, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {option}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits & Guidelines */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Panduan & Manfaat
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Cara Mengisi Survey</h4>
              <ol className="space-y-2 text-sppp-gray">
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">1</span>
                  Klik pautan "Mula Survey" di atas
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">2</span>
                  Isi maklumat demografi asas
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">3</span>
                  Jawab 12 soalan dengan Ya/Tidak
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">4</span>
                  Hantar survey yang lengkap
                </li>
              </ol>
            </div>

            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Manfaat Penyertaan</h4>
              <ul className="space-y-2 text-sppp-gray text-sm">
                <li>• Suara anda didengar dalam penambahbaikan perkhidmatan</li>
                <li>• Membantu meningkatkan kualiti perkhidmatan untuk semua</li>
                <li>• Proses yang mudah dan pantas</li>
                <li>• Maklumat anda dilindungi sepenuhnya</li>
                <li>• Sumbangan kepada pembangunan pelabuhan yang lebih baik</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Results & Commitment */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Komitmen SPPP
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <ChartBarIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Analisis Menyeluruh</h4>
              <p className="text-sppp-gray text-sm">Setiap maklum balas dianalisis dengan teliti untuk penambahbaikan berterusan</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <HandThumbUpIcon className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Tindakan Susulan</h4>
              <p className="text-sppp-gray text-sm">Langkah pembaikan diambil berdasarkan hasil kajian kepuasan pelanggan</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <StarIcon className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Standard Tinggi</h4>
              <p className="text-sppp-gray text-sm">Komitmen untuk mengekalkan standard perkhidmatan pelanggan yang cemerlang</p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
            <div className="flex items-start">
              <ExclamationCircleIcon className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">Perlindungan Data</h4>
                <p className="text-blue-800 text-sm">
                  Semua maklumat yang diberikan dalam survey ini adalah sulit dan digunakan semata-mata
                  untuk tujuan penambahbaikan perkhidmatan. Data peribadi dilindungi mengikut
                  Akta Perlindungan Data Peribadi 2010.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}