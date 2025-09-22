import { Metadata } from 'next';
import { PageTemplate } from '@/components/PageTemplate';
import {
  QuestionMarkCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  BuildingOfficeIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  TagIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Soalan Lazim | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Soalan lazim dan jawapan komprehensif mengenai perkhidmatan, operasi dan prosedur SPPP',
  keywords: 'soalan lazim, FAQ, SPPP, pelabuhan, perkhidmatan, operasi'
};

const faqCategories = [
  {
    title: "Organisasi & Peranan",
    icon: BuildingOfficeIcon,
    color: "blue",
    questions: [
      {
        question: "Apakah perbezaan antara Suruhanjaya Pelabuhan Pulau Pinang dan Penang Port Sdn. Bhd.?",
        answer: "Suruhanjaya Pelabuhan Pulau Pinang (SPPP) adalah 'Pihak Berkuasa Pelabuhan dan Pihak Berkuasa Kawal Selia' di bawah Kementerian Pengangkutan. Manakala Penang Port Sdn. Bhd. adalah operator pelabuhan yang dilesenkan oleh Suruhanjaya Pelabuhan Pulau Pinang."
      }
    ]
  },
  {
    title: "Operasi Pelabuhan",
    icon: ClockIcon,
    color: "green",
    questions: [
      {
        question: "Apakah waktu operasi pelabuhan?",
        answer: "Pelabuhan beroperasi 24 jam sehari, 7 hari seminggu, termasuk hari kelepasan am. Ini memastikan perkhidmatan berterusan untuk memenuhi keperluan pelanggan."
      },
      {
        question: "Apakah jenis kargo yang dikendalikan?",
        answer: "SPPP mengendalikan pelbagai jenis kargo termasuk:\n• Break bulk cargo (kargo pecah pukal)\n• Liquid bulk cargo (kargo cecair pukal)\n• Dry bulk cargo (kargo kering pukal)\n• Containerised cargo (kargo berkontena)"
      },
      {
        question: "Apakah dermaga khusus untuk jenis kargo berbeza?",
        answer: "• Butterworth Wharves: Break bulk dan liquid bulk\n• Prai Bulk Cargo Terminal: Dry bulk\n• North Butterworth Container Terminal: Kontena"
      }
    ]
  },
  {
    title: "Perkhidmatan Feri",
    icon: ClockIcon,
    color: "orange",
    questions: [
      {
        question: "Apakah waktu operasi perkhidmatan feri?",
        answer: "Perkhidmatan feri beroperasi dari 5:20 pagi hingga 12:40 tengah malam, menghubungkan George Town (Pangkalan Raja Tun Uda) dan Butterworth (Pangkalan Sultan Abdul Halim)."
      }
    ]
  },
  {
    title: "Kontena & Peralatan",
    icon: TagIcon,
    color: "purple",
    questions: [
      {
        question: "Apakah maksud TEU?",
        answer: "TEU bermaksud 'Twenty Equivalent Unit' - iaitu satu unit kontena sepanjang dua puluh kaki yang digunakan sebagai standard pengukuran dalam industri kontena."
      },
      {
        question: "Apakah peralatan pengendalian kontena yang digunakan?",
        answer: "Peralatan yang digunakan termasuk:\n• Gantry cranes (kren gantar)\n• Rubber tyre cranes (kren tayar getah)\n• Prime movers (penarik utama)\n• Trailers (treler)"
      },
      {
        question: "Apakah sistem maklumat pengendalian kontena yang digunakan?",
        answer: "PELKON III - sistem bersepadu tinggi untuk operasi harian kontena yang memastikan kecekapan dan ketepatan dalam pengendalian kontena."
      }
    ]
  },
  {
    title: "Zon Bebas Komersil",
    icon: TagIcon,
    color: "indigo",
    questions: [
      {
        question: "Apakah aktiviti yang dibenarkan di Zon Bebas Komersil?",
        answer: "Aktiviti yang dibenarkan termasuk:\n• Bulk trading\n• Breakbulk\n• Repacking (pembungkusan semula)\n• Grading (penggredan)\n• Relabelling (pelabelan semula)\n• Transit\n• Inventory management\n• Pick and pack\n• Knitting\n• Calibration\n• Testing\n• Product replenishing\n• Dock depot operations\n• Warehousing\n• Container freight stations"
      }
    ]
  }
];

export default function SoalanLazimPage() {
  return (
    <PageTemplate
      title="Soalan Lazim"
      subtitle="Soalan lazim dan jawapan komprehensif mengenai perkhidmatan, operasi dan prosedur SPPP"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Hubungi', href: '/hubungi' }, { name: 'Soalan Lazim' }]}
    >
      <div className="max-w-none">
        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4 flex items-center">
            <MagnifyingGlassIcon className="h-6 w-6 mr-2 text-blue-600" />
            Cari Soalan
          </h3>
          <div className="relative">
            <MagnifyingGlassIcon className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Taipkan kata kunci untuk mencari soalan..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        {faqCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
              <category.icon className={`h-7 w-7 mr-3 text-${category.color}-600`} />
              {category.title}
            </h3>

            <div className="space-y-4">
              {category.questions.map((faq, index) => (
                <div key={index} className={`border border-${category.color}-200 rounded-lg`}>
                  <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg">
                    <span className="font-semibold text-sppp-dark-blue pr-4">{faq.question}</span>
                    <ChevronDownIcon className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  </button>
                  <div className={`px-6 pb-4 bg-${category.color}-50`}>
                    <div className="text-sppp-gray whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Quick Contact */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Masih Ada Soalan?
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <PhoneIcon className="h-8 w-8 mx-auto mb-3 text-blue-600" />
              <h4 className="font-semibold text-blue-900 mb-2">Telefon</h4>
              <p className="text-blue-700 text-sm">604.263.3211 | 604.262.6211</p>
              <p className="text-blue-600 text-xs mt-1">Isnin - Jumaat: 8:00 AM - 5:00 PM</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg">
              <EnvelopeIcon className="h-8 w-8 mx-auto mb-3 text-green-600" />
              <h4 className="font-semibold text-green-900 mb-2">E-mel</h4>
              <p className="text-green-700 text-sm">sppp@penangport.gov.my</p>
              <p className="text-green-600 text-xs mt-1">Respons dalam 24-48 jam</p>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <QuestionMarkCircleIcon className="h-8 w-8 mx-auto mb-3 text-orange-600" />
              <h4 className="font-semibold text-orange-900 mb-2">Portal Maklum Balas</h4>
              <p className="text-orange-700 text-sm">Hantar soalan anda</p>
              <a href="/hubungi/maklum-balas" className="text-orange-600 text-xs mt-1 hover:underline">
                Akses Portal →
              </a>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Sumber Tambahan
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-4">Maklumat Berkaitan</h4>
              <ul className="space-y-3 text-sppp-gray">
                <li>
                  <a href="/kemudahan" className="flex items-center hover:text-blue-600">
                    <InformationCircleIcon className="h-4 w-4 mr-2" />
                    Kemudahan & Perkhidmatan
                  </a>
                </li>
                <li>
                  <a href="/hubungi/kajian-kepuasan" className="flex items-center hover:text-blue-600">
                    <InformationCircleIcon className="h-4 w-4 mr-2" />
                    Kajian Kepuasan Pelanggan
                  </a>
                </li>
                <li>
                  <a href="/news" className="flex items-center hover:text-blue-600">
                    <InformationCircleIcon className="h-4 w-4 mr-2" />
                    Berita & Pengumuman
                  </a>
                </li>
                <li>
                  <a href="/sumber/tender" className="flex items-center hover:text-blue-600">
                    <InformationCircleIcon className="h-4 w-4 mr-2" />
                    Tender & Sebut Harga
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-4">Tips Menggunakan FAQ</h4>
              <ul className="space-y-2 text-sppp-gray text-sm">
                <li>• Gunakan fungsi carian untuk mencari soalan tertentu</li>
                <li>• Semak kategori yang berkaitan dengan soalan anda</li>
                <li>• Hubungi kami jika tidak menemui jawapan yang dikehendaki</li>
                <li>• Hantar cadangan untuk soalan baharu melalui portal maklum balas</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
            <div className="flex items-start">
              <InformationCircleIcon className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">Nota Penting</h4>
                <p className="text-blue-800 text-sm">
                  FAQ ini dikemaskini secara berkala berdasarkan soalan yang kerap ditanya.
                  Untuk maklumat terkini mengenai operasi dan perkhidmatan, sila hubungi kami terus
                  atau layari laman web rasmi SPPP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}