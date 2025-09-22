import { Metadata } from 'next';
import { PageTemplate } from '@/components/PageTemplate';
import {
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  ComputerDesktopIcon,
  DocumentTextIcon,
  StarIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Maklum Balas | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Portal maklum balas dan sistem aduan untuk menyampaikan pandangan, cadangan dan laporan kepada SPPP',
  keywords: 'maklum balas, aduan, cadangan, portal feedback, SPPP, hubungi'
};

const feedbackChannels = [
  {
    title: "Portal E-Feedback",
    description: "Sistem maklum balas elektronik rasmi untuk SPPP",
    url: "https://www.ppcapps.gov.my/efeedback/",
    icon: ComputerDesktopIcon,
    color: "blue",
    features: ["Borang elektronik", "Jejak status", "Respons pantas", "24/7 akses"]
  },
  {
    title: "Kajian Kepuasan Pelanggan",
    description: "Berikan penilaian dan cadangan untuk peningkatan perkhidmatan",
    url: "https://www.ppcft.gov.my/kajiankepuasan.php",
    icon: StarIcon,
    color: "green",
    features: ["Penilaian perkhidmatan", "Cadangan pembaikan", "Survey komprehensif", "Analisis berkala"]
  }
];

const feedbackTypes = [
  {
    type: "Cadangan",
    description: "Idea dan cadangan untuk peningkatan perkhidmatan",
    icon: "💡",
    examples: ["Peningkatan kemudahan", "Proses baru", "Teknologi baharu"]
  },
  {
    type: "Aduan",
    description: "Laporan masalah atau ketidakpuasan terhadap perkhidmatan",
    icon: "⚠️",
    examples: ["Kualiti perkhidmatan", "Kelewatan", "Sikap petugas"]
  },
  {
    type: "Pujian",
    description: "Pengiktirafan terhadap perkhidmatan yang baik",
    icon: "👏",
    examples: ["Perkhidmatan cemerlang", "Petugas mesra", "Proses efisien"]
  },
  {
    type: "Pertanyaan",
    description: "Permintaan maklumat atau penjelasan",
    icon: "❓",
    examples: ["Prosedur operasi", "Yuran dan caj", "Keperluan dokumen"]
  }
];

export default function MaklumBalasPage() {
  return (
    <PageTemplate
      title="Maklum Balas"
      subtitle="Portal maklum balas dan sistem aduan untuk menyampaikan pandangan, cadangan dan laporan kepada SPPP"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Hubungi', href: '/hubungi' }, { name: 'Maklum Balas' }]}
    >
      <div className="max-w-none">
        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
            <div className="text-sm text-sppp-gray">Portal Aktif</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">48</div>
            <div className="text-sm text-sppp-gray">Jam Respons</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-1">2</div>
            <div className="text-sm text-sppp-gray">Portal Feedback</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">95%</div>
            <div className="text-sm text-sppp-gray">Tahap Kepuasan</div>
          </div>
        </div>

        {/* Official Feedback Portals */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <ComputerDesktopIcon className="h-7 w-7 mr-3 text-blue-600" />
            Portal Maklum Balas Rasmi
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            {feedbackChannels.map((channel, index) => (
              <div key={index} className={`border-2 border-${channel.color}-200 rounded-lg p-6 hover:shadow-lg transition-shadow`}>
                <div className="flex items-center mb-4">
                  <channel.icon className={`h-8 w-8 text-${channel.color}-600 mr-3`} />
                  <h4 className="text-xl font-semibold text-sppp-dark-blue">{channel.title}</h4>
                </div>
                <p className="text-sppp-gray mb-4">{channel.description}</p>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  {channel.features.map((feature, idx) => (
                    <div key={idx} className={`text-sm text-${channel.color}-700 bg-${channel.color}-50 px-2 py-1 rounded`}>
                      • {feature}
                    </div>
                  ))}
                </div>

                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block bg-${channel.color}-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-${channel.color}-700 transition-colors`}
                >
                  Akses Portal
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Feedback Types */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <ChatBubbleLeftRightIcon className="h-7 w-7 mr-3 text-green-600" />
            Jenis Maklum Balas
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            {feedbackTypes.map((type, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{type.icon}</span>
                  <h4 className="text-lg font-semibold text-sppp-dark-blue">{type.type}</h4>
                </div>
                <p className="text-sppp-gray mb-3">{type.description}</p>
                <div className="text-sm">
                  <strong className="text-sppp-dark-blue">Contoh:</strong>
                  <ul className="mt-1 text-sppp-gray">
                    {type.examples.map((example, idx) => (
                      <li key={idx}>• {example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Maklumat Hubungan
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-4 flex items-center">
                <BuildingOfficeIcon className="h-5 w-5 mr-2 text-blue-600" />
                Pejabat Utama
              </h4>
              <div className="space-y-3 text-sppp-gray">
                <div className="flex items-start">
                  <MapPinIcon className="h-4 w-4 mt-1 mr-2 text-green-600" />
                  <div>
                    <p>Level 2, Swettenham Pier Cruise Terminal</p>
                    <p>No. 1A, King Edward Place</p>
                    <p>10300 George Town, Penang</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="h-4 w-4 mr-2 text-blue-600" />
                  <span>604.263.3211 | 604.262.6211</span>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="h-4 w-4 mr-2 text-orange-600" />
                  <span>sppp@penangport.gov.my</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-4 flex items-center">
                <ClockIcon className="h-5 w-5 mr-2 text-green-600" />
                Waktu Operasi
              </h4>
              <div className="space-y-2 text-sppp-gray">
                <div className="flex justify-between">
                  <span>Isnin - Jumaat:</span>
                  <span className="font-medium">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu - Ahad:</span>
                  <span className="text-red-600 font-medium">Tertutup</span>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    💻 Portal online aktif 24/7 untuk kemudahan anda
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process & Guidelines */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <DocumentTextIcon className="h-7 w-7 mr-3 text-orange-600" />
            Proses & Garis Panduan
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Langkah Penghantaran</h4>
              <ol className="space-y-2 text-sppp-gray">
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">1</span>
                  Pilih portal yang sesuai (E-Feedback atau Survey)
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">2</span>
                  Isi borang dengan maklumat yang lengkap
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">3</span>
                  Hantar maklum balas anda
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">4</span>
                  Terima pengesahan dan rujukan
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">5</span>
                  Tunggu respons dalam 48 jam
                </li>
              </ol>
            </div>

            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Garis Panduan</h4>
              <ul className="space-y-2 text-sppp-gray text-sm">
                <li>• Sertakan maklumat yang jelas dan terperinci</li>
                <li>• Gunakan bahasa yang sopan dan konstruktif</li>
                <li>• Lampirkan dokumen sokongan jika perlu</li>
                <li>• Nyatakan maklumat hubungan yang betul</li>
                <li>• Pilih kategori yang sesuai dengan isu anda</li>
                <li>• Simpan nombor rujukan untuk susulan</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded-lg">
          <div className="flex items-start">
            <ExclamationTriangleIcon className="h-6 w-6 text-orange-600 mr-3 mt-0.5" />
            <div>
              <h4 className="font-semibold text-orange-900 mb-2">Maklumat Penting</h4>
              <div className="text-orange-800 text-sm space-y-1">
                <p>• Semua maklum balas akan diproses dengan teliti dan profesional</p>
                <p>• Maklumat peribadi anda akan dilindungi mengikut Akta Perlindungan Data Peribadi</p>
                <p>• Untuk urusan kecemasan, sila hubungi talian telefon terus</p>
                <p>• Portal E-Feedback adalah saluran rasmi untuk aduan dan cadangan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}