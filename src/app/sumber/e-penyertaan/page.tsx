import { Metadata } from 'next';
import { PageTemplate } from '@/components/PageTemplate';
import {
  UsersIcon,
  ChatBubbleBottomCenterIcon,
  DocumentTextIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  HandRaisedIcon,
  MegaphoneIcon,
  ClipboardDocumentListIcon,
  PresentationChartBarIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  ArrowRightIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'e-Penyertaan | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Platform penyertaan elektronik untuk budayakan penglibatan dan sumbangan warga bagi meningkatkan perkhidmatan',
  keywords: 'e-penyertaan, penyertaan elektronik, maklum balas, SPPP, penglibatan awam'
};

const participationChannels = [
    {
      title: 'Kajian Kepuasan',
      description: 'Berikan maklum balas tentang kualiti perkhidmatan yang diterima',
      icon: PresentationChartBarIcon,
      action: 'Isi Kajian',
      link: '/hubungi/kajian-kepuasan',
      color: 'blue'
    },
    {
      title: 'Perundingan Awam',
      description: 'Sertai sesi perundingan rasmi mengenai dasar dan keputusan',
      icon: UserGroupIcon,
      action: 'Lihat Perundingan',
      link: '#',
      color: 'green'
    },
    {
      title: 'Borang Maklum Balas',
      description: 'Hantar cadangan dan pandangan melalui borang berstruktur',
      icon: DocumentTextIcon,
      action: 'Hantar Maklum Balas',
      link: '/hubungi/maklum-balas',
      color: 'purple'
    },
    {
      title: 'Tinjauan Pendapat',
      description: 'Kongsi pendapat anda mengenai isu-isu semasa',
      icon: ClipboardDocumentListIcon,
      action: 'Sertai Tinjauan',
      link: '#',
      color: 'orange'
    },
    {
      title: 'E-mel Terus',
      description: 'Hubungi kami secara langsung melalui e-mel rasmi',
      icon: EnvelopeIcon,
      action: 'Hantar E-mel',
      link: 'mailto:sppp@penangport.gov.my',
      color: 'teal'
    },
    {
      title: 'Media Sosial',
      description: 'Berinteraksi dengan kami di platform media sosial rasmi',
      icon: GlobeAltIcon,
      action: 'Ikuti Kami',
      link: '#',
      color: 'indigo'
    }
];

const guidelines = [
    {
      category: 'Tanggungjawab Peserta',
      icon: ShieldCheckIcon,
      rules: [
        'Elakkan kenyataan yang bersifat diskriminasi',
        'Jangan gunakan bahasa yang tidak sopan atau menyinggung perasaan',
        'Pastikan komen berkaitan dengan topik yang dibincangkan',
        'Hormati hak kekayaan intelek',
        'Jangan membuat iklan komersial atau promosi',
        'Elakkan berkongsi kandungan digital yang hasad atau berbahaya'
      ]
    },
    {
      category: 'Hak Pentadbiran',
      icon: UserGroupIcon,
      rules: [
        'Mengubah suai atau memadam kandungan yang tidak sesuai',
        'Mengemaskini garis panduan penyertaan mengikut keperluan',
        'Menguruskan dan memoderasi platform penyertaan',
        'Memastikan pematuhan terhadap standard dasar yang ditetapkan'
      ]
    }
];

const principles = [
    {
      title: 'Komunikasi Telus',
      description: 'Perkongsian maklumat yang terbuka dan jelas',
      icon: ChatBubbleBottomCenterIcon
    },
    {
      title: 'Dialog Berhemah',
      description: 'Mengekalkan wacana sivil dalam semua interaksi',
      icon: HandRaisedIcon
    },
    {
      title: 'Penyertaan Terbuka',
      description: 'Menggalakkan penyertaan luas dengan mengekalkan standard',
      icon: UsersIcon
    },
    {
      title: 'Tadbir Urus Kolaboratif',
      description: 'Bekerjasama untuk meningkatkan perkhidmatan awam',
      icon: MegaphoneIcon
    }
  ];

export default function ePenyertaanPage() {
  return (
    <PageTemplate
      title="e-Penyertaan"
      subtitle="Platform penyertaan elektronik untuk budayakan penglibatan dan sumbangan warga bagi meningkatkan perkhidmatan"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Sumber', href: '/sumber' }, { name: 'e-Penyertaan' }]}
    >
      <div className="max-w-none">
        {/* Overview Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <InformationCircleIcon className="h-7 w-7 mr-3 text-blue-600" />
            Definisi e-Penyertaan
          </h3>

          <div className="bg-teal-50 border-l-4 border-teal-400 p-6 rounded-r-lg mb-6">
            <p className="text-sppp-gray leading-relaxed mb-4">
              e-Penyertaan adalah inisiatif platform digital yang bertujuan untuk <strong>budayakan penglibatan
              dan sumbangan warga untuk meningkatkan perkhidmatan</strong>. Tujuan utamanya adalah untuk
              membolehkan perspektif komuniti yang lebih luas dan memudahkan penambahbaikan yang berpotensi
              dalam keputusan kerajaan dan perkhidmatan awam.
            </p>
            <p className="text-sppp-gray leading-relaxed">
              Platform ini memanfaatkan teknologi maklumat dan komunikasi untuk tadbir urus yang lebih baik
              serta memudahkan dialog produktif antara kerajaan dan rakyat.
            </p>
          </div>

          <h4 className="text-lg font-semibold text-sppp-dark-blue mb-4">Objektif Utama</h4>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-sppp-dark-blue">Penglibatan Komuniti</h5>
                <p className="text-sm text-sppp-gray">Melibatkan komuniti dalam pembangunan dasar dan proses membuat keputusan</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-sppp-dark-blue">Dialog Produktif</h5>
                <p className="text-sm text-sppp-gray">Memudahkan dialog produktif antara kerajaan dan rakyat</p>
              </div>
            </div>
          </div>
        </div>

        {/* Participation Channels */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <ChatBubbleBottomCenterIcon className="h-7 w-7 mr-3 text-green-600" />
            Saluran Penyertaan
          </h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {participationChannels.map((channel, index) => (
              <div key={index} className={`border-2 rounded-lg p-6 transition-all duration-200 hover:shadow-md bg-${channel.color}-50 border-${channel.color}-200`}>
                <div className="flex items-center mb-4">
                  <channel.icon className={`h-8 w-8 mr-3 text-${channel.color}-600`} />
                  <h4 className="text-lg font-semibold text-sppp-dark-blue">{channel.title}</h4>
                </div>
                <p className="text-sm mb-4 leading-relaxed text-sppp-gray">{channel.description}</p>
                <a
                  href={channel.link}
                  className={`inline-flex items-center px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    channel.color === 'blue' ? 'bg-blue-600 text-white hover:bg-blue-700' :
                    channel.color === 'green' ? 'bg-green-600 text-white hover:bg-green-700' :
                    channel.color === 'purple' ? 'bg-purple-600 text-white hover:bg-purple-700' :
                    channel.color === 'orange' ? 'bg-orange-600 text-white hover:bg-orange-700' :
                    channel.color === 'teal' ? 'bg-teal-600 text-white hover:bg-teal-700' :
                    'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  {channel.action}
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start">
              <InformationCircleIcon className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-800 mb-2">Sasaran Penyertaan</h4>
                <p className="text-sm text-blue-700">
                  Kami mengalu-alukan penyertaan daripada orang awam, organisasi komuniti, pihak berkepentingan
                  yang terjejas oleh operasi pelabuhan, dan sesiapa sahaja yang berminat untuk menyumbang
                  kepada penambahbaikan perkhidmatan awam.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Guidelines Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <DocumentTextIcon className="h-7 w-7 mr-3 text-orange-600" />
            Garis Panduan dan Peraturan
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            {guidelines.map((guideline, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <guideline.icon className="h-6 w-6 text-teal-600 mr-3" />
                  <h4 className="text-lg font-semibold text-sppp-dark-blue">{guideline.category}</h4>
                </div>
                <ul className="space-y-3">
                  {guideline.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start text-sm text-sppp-gray">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start">
              <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600 mr-3 mt-0.5" />
              <div>
                <h4 className="font-medium text-yellow-800 mb-2">Kandungan Terlarang</h4>
                <p className="text-sm text-yellow-700 mb-3">
                  Dasar ini secara khusus melarang:
                </p>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Kenyataan diskriminasi atau ucapan kebencian</li>
                  <li>• Bahasa yang menyinggung atau tidak sesuai</li>
                  <li>• Komen yang tidak berkaitan atau di luar topik</li>
                  <li>• Iklan komersial atau kandungan promosi</li>
                  <li>• Pelanggaran hak kekayaan intelek</li>
                  <li>• Kandungan digital yang hasad atau berbahaya</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Submit Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <HandRaisedIcon className="h-7 w-7 mr-3 text-purple-600" />
            Hantar Maklum Balas Anda
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-sppp-dark-blue mb-4">Cara Berpartisipasi</h4>
              <div className="space-y-3 text-sm text-sppp-gray">
                <div className="flex items-start">
                  <div className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</div>
                  <span>Pilih saluran penyertaan yang sesuai</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</div>
                  <span>Pastikan maklum balas berkaitan dengan topik</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</div>
                  <span>Ikuti garis panduan yang ditetapkan</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">4</div>
                  <span>Hantar maklum balas melalui saluran dipilih</span>
                </div>
              </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-sppp-dark-blue">Akses Pantas</h4>
                <a
                  href="/hubungi/kajian-kepuasan"
                  className="block w-full bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700 transition-colors text-center font-medium"
                >
                  Kajian Kepuasan Perkhidmatan
                </a>
                <a
                  href="/hubungi/maklum-balas"
                  className="block w-full border border-teal-600 text-teal-600 p-3 rounded-lg hover:bg-teal-50 transition-colors text-center font-medium"
                >
                  Borang Maklum Balas Umum
                </a>
                <a
                  href="mailto:sppp@penangport.gov.my"
                  className="block w-full border border-gray-300 text-sppp-gray p-3 rounded-lg hover:bg-gray-50 transition-colors text-center font-medium"
                >
                  E-mel Terus
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sppp-dark-blue mb-4 flex items-center">
              <PhoneIcon className="h-5 w-5 mr-2 text-blue-600" />
              Maklumat Hubungan
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start">
                <MapPinIcon className="h-4 w-4 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h5 className="font-medium text-sppp-dark-blue">Alamat</h5>
                  <p className="text-sppp-gray">
                    Aras 2, Swettenham Pier Cruise Terminal<br />
                    No.1A, Pesara King Edward<br />
                    10300 George Town, Pulau Pinang
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="h-4 w-4 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h5 className="font-medium text-sppp-dark-blue">Telefon</h5>
                  <p className="text-sppp-gray">604.263.3211</p>
                </div>
              </div>
              <div className="flex items-start">
                <EnvelopeIcon className="h-4 w-4 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h5 className="font-medium text-sppp-dark-blue">E-mel</h5>
                  <p className="text-sppp-gray">sppp@penangport.gov.my</p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                <div>
                  <h5 className="font-medium text-green-800 mb-1">Komitmen Kami</h5>
                  <p className="text-sm text-green-700">
                    Kami komited untuk memproses semua maklum balas yang diterima dan menggunakannya
                    untuk penambahbaikan berterusan perkhidmatan kami.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}