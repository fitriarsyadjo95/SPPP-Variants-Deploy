import { Metadata } from 'next';
import { PageTemplate } from '@/components/PageTemplate';
import {
  BriefcaseIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  UserGroupIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Peluang Kerjaya | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Portal kerjaya dan peluang pekerjaan di SPPP - menyertai pasukan profesional dalam pembangunan pelabuhan terkemuka',
  keywords: 'peluang kerjaya, jawatan kosong, pekerjaan SPPP, career opportunities, jobs'
};

const careerCategories = [
  {
    title: "Operasi Pelabuhan",
    description: "Menguruskan operasi harian pelabuhan dan pengendalian kargo",
    icon: BuildingOfficeIcon,
    color: "blue",
    positions: ["Port Operator", "Crane Operator", "Cargo Handler", "Terminal Supervisor"]
  },
  {
    title: "Pentadbiran & Kewangan",
    description: "Menyokong fungsi pentadbiran, kewangan dan sumber manusia",
    icon: DocumentTextIcon,
    color: "green",
    positions: ["Finance Officer", "HR Executive", "Admin Assistant", "Procurement Officer"]
  },
  {
    title: "Kejuruteraan & Teknikal",
    description: "Menyelenggara dan membangunkan infrastruktur pelabuhan",
    icon: AcademicCapIcon,
    color: "orange",
    positions: ["Marine Engineer", "Civil Engineer", "IT Support", "Maintenance Technician"]
  },
  {
    title: "Perkhidmatan Pelanggan",
    description: "Memberikan perkhidmatan terbaik kepada pelanggan dan stakeholder",
    icon: UserGroupIcon,
    color: "purple",
    positions: ["Customer Service", "Public Relations", "Marketing Executive", "Business Development"]
  }
];

const benefits = [
  { title: "Gaji Kompetitif", description: "Pakej gaji yang menarik dengan allowances", icon: "💰" },
  { title: "Latihan & Pembangunan", description: "Program latihan berterusan untuk kemajuan kerjaya", icon: "🎓" },
  { title: "Insurans Kesihatan", description: "Perlindungan kesihatan menyeluruh untuk pekerja", icon: "🏥" },
  { title: "Cuti Tahunan", description: "Cuti tahunan yang fleksibel dan hari kelepasan", icon: "🏖️" },
  { title: "Persekitaran Kerja", description: "Persekitaran kerja yang harmoni dan profesional", icon: "🏢" },
  { title: "Kemajuan Kerjaya", description: "Peluang kenaikan pangkat dan perkembangan kerjaya", icon: "📈" }
];

export default function PeluangKerjayaPage() {
  return (
    <PageTemplate
      title="Peluang Kerjaya"
      subtitle="Portal kerjaya dan peluang pekerjaan di SPPP - menyertai pasukan profesional dalam pembangunan pelabuhan terkemuka"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Hubungi', href: '/hubungi' }, { name: 'Peluang Kerjaya' }]}
    >
      <div className="max-w-none">
        {/* Current Status */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 border-l-4 border-orange-500 p-6 mb-8 rounded-lg">
          <div className="flex items-center">
            <ExclamationCircleIcon className="h-8 w-8 text-orange-600 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-orange-900 mb-2">Status Terkini Jawatan Kosong</h3>
              <p className="text-orange-800">
                Tiada kekosongan jawatan pada masa ini. Sila semak kembali laman ini secara berkala atau
                ikuti media sosial kami untuk kemaskini terbaru mengenai peluang kerjaya.
              </p>
            </div>
          </div>
        </div>

        {/* Why Work With Us */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <BriefcaseIcon className="h-7 w-7 mr-3 text-blue-600" />
            Mengapa Bekerja di SPPP?
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sppp-gray mb-4">
                Suruhanjaya Pelabuhan Pulau Pinang (SPPP) adalah organisasi terkemuka dalam industri maritim Malaysia.
                Kami komited untuk menarik dan mengekalkan bakat terbaik untuk pembangunan pelabuhan yang mampan.
              </p>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Misi Kami:</h4>
              <ul className="space-y-2 text-sppp-gray text-sm">
                <li>• Menjadi pelabuhan pilihan utama di rantau ini</li>
                <li>• Menyediakan perkhidmatan pelabuhan berkualiti tinggi</li>
                <li>• Membangunkan modal insan yang kompeten</li>
                <li>• Menyumbang kepada ekonomi negara</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">Nilai-Nilai Organisasi</h4>
              <div className="space-y-2 text-sm text-blue-700">
                <div className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2" />
                  <span>Integriti dan Amanah</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2" />
                  <span>Kecemerlangan Perkhidmatan</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2" />
                  <span>Inovasi Berterusan</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2" />
                  <span>Kerja Berpasukan</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2" />
                  <span>Tanggungjawab Sosial</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Categories */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <UserGroupIcon className="h-7 w-7 mr-3 text-green-600" />
            Bidang Kerjaya
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            {careerCategories.map((category, index) => (
              <div key={index} className={`border border-${category.color}-200 rounded-lg p-6`}>
                <div className="flex items-center mb-3">
                  <category.icon className={`h-6 w-6 text-${category.color}-600 mr-3`} />
                  <h4 className="text-lg font-semibold text-sppp-dark-blue">{category.title}</h4>
                </div>
                <p className="text-sppp-gray mb-3 text-sm">{category.description}</p>
                <div className="space-y-1">
                  <strong className="text-sppp-dark-blue text-sm">Contoh Jawatan:</strong>
                  {category.positions.map((position, idx) => (
                    <div key={idx} className={`text-xs text-${category.color}-700 bg-${category.color}-50 px-2 py-1 rounded inline-block mr-1 mb-1`}>
                      {position}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits & Rewards */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Faedah & Manfaat
          </h3>

          <div className="grid gap-4 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">{benefit.icon}</div>
                <h4 className="font-semibold text-sppp-dark-blue mb-2 text-sm">{benefit.title}</h4>
                <p className="text-sppp-gray text-xs">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <DocumentTextIcon className="h-7 w-7 mr-3 text-orange-600" />
            Proses Permohonan
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Langkah Permohonan</h4>
              <ol className="space-y-2 text-sppp-gray">
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">1</span>
                  Semak kekosongan jawatan di laman web ini
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">2</span>
                  Sediakan dokumen lengkap (resume, sijil, surat sokongan)
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">3</span>
                  Hantar permohonan melalui email atau pos
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">4</span>
                  Tunggu panggilan untuk sesi temu duga
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">5</span>
                  Terima keputusan akhir dalam 2-4 minggu
                </li>
              </ol>
            </div>

            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Dokumen Diperlukan</h4>
              <ul className="space-y-2 text-sppp-gray text-sm">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Resume lengkap (dalam Bahasa Malaysia/Inggeris)
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Salinan kad pengenalan
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Sijil akademik dan profesional
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Surat pengalaman kerja (jika ada)
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  2 surat sokongan/rujukan
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Passport photo terkini
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
                <BuildingOfficeIcon className="h-5 w-5 mr-2 text-blue-600" />
                Pejabat Sumber Manusia
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
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <h5 className="font-semibold text-green-900 mb-2 flex items-center">
                    <GlobeAltIcon className="h-4 w-4 mr-2" />
                    Ikuti Kemaskini Terkini
                  </h5>
                  <p className="text-sm text-green-800">
                    📱 Media sosial rasmi SPPP<br />
                    🌐 Laman web: www.penangport.gov.my<br />
                    📧 Newsletter bulanan
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Nota Penting untuk Pemohon</h4>
            <div className="text-blue-800 text-sm space-y-1">
              <p>• Hanya calon yang layak akan dipanggil untuk temu duga</p>
              <p>• SPPP tidak mengenakan sebarang bayaran semasa proses permohonan</p>
              <p>• Berhati-hati dengan penipuan menggunakan nama SPPP</p>
              <p>• Tempoh pengiklanan adalah dari 30 Mei 2023 hingga 15 Jun 2023 (contoh)</p>
              <p>• Semua permohonan akan diproses dengan adil dan telus</p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}