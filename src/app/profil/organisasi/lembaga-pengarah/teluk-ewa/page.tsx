import { PageTemplate } from '@/components/PageTemplate'
import {
  UserGroupIcon,
  BuildingOfficeIcon,
  StarIcon,
  CheckCircleIcon,
  IdentificationIcon,
  UserIcon,
  AcademicCapIcon,
  ChartBarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'

export const metadata = {
  title: 'Lembaga Pengarah Teluk Ewa | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Ahli-ahli Lembaga Pengarah operasi Teluk Ewa - kepimpinan khusus untuk kemudahan pelabuhan industri di Langkawi',
  keywords: 'Lembaga Pengarah, Teluk Ewa, Langkawi, kepimpinan, tadbir urus, industri simen',
}

export default function LembagaPengarahTelukEwaPage() {
  const boardMembers = [
    {
      name: "Tuan Jeffrey Chew Gim Eam",
      position: "Pengerusi",
      category: "Kepimpinan Eksekutif",
      image: "/images/board/teluk-ewa/chairman.jpg"
    },
    {
      name: "YBhg. Dato' Dr. Vijayaindiaran A/L R.Viswalingam",
      position: "Pengarah Urusan",
      category: "Kepimpinan Eksekutif",
      image: "/images/board/teluk-ewa/managing-director.jpg"
    },
    {
      name: "Encik Guna Arulalan A/L Krishta@David",
      position: "Wakil Kementerian Pengangkutan",
      category: "Perwakilan Kementerian",
      image: "/images/board/teluk-ewa/transport-rep.jpg"
    },
    {
      name: "Puan Noni Salmina binti Abu",
      position: "Wakil Kementerian Kewangan",
      category: "Perwakilan Kementerian",
      image: "/images/board/teluk-ewa/finance-rep.jpg"
    },
    {
      name: "Puan Hidah binti Misran",
      position: "Wakil Kementerian Ekonomi",
      category: "Perwakilan Kementerian",
      image: "/images/board/teluk-ewa/economy-rep.jpg"
    },
    {
      name: "YB Dato' Seri Haji Norizan Bin Khazali",
      position: "Setiausaha Negeri Kedah",
      category: "Perwakilan Negeri",
      image: "/images/board/teluk-ewa/kedah-state-secretary.jpg"
    },
    {
      name: "Encik Sr Tan Kok Yew",
      position: "Ahli Lembaga",
      category: "Ahli Bebas",
      image: "/images/board/teluk-ewa/member-1.jpg"
    },
    {
      name: "Encik Ong Jing Cheng",
      position: "Ahli Lembaga",
      category: "Ahli Bebas",
      image: "/images/board/teluk-ewa/member-2.jpg"
    },
    {
      name: "Encik Muhammad Fitri Bin Termizi",
      position: "Ahli Lembaga",
      category: "Ahli Bebas",
      image: "/images/board/teluk-ewa/member-3.jpg"
    }
  ]

  const boardCategories = [
    {
      title: "Kepimpinan Eksekutif",
      count: 2,
      description: "Pengerusi dan Pengarah Urusan yang mengetuai operasi Teluk Ewa",
      color: "bg-emerald-500"
    },
    {
      title: "Perwakilan Kementerian",
      count: 3,
      description: "Wakil dari Kementerian Pengangkutan, Kewangan dan Ekonomi",
      color: "bg-green-500"
    },
    {
      title: "Perwakilan Negeri",
      count: 1,
      description: "Setiausaha Negeri Kedah mewakili kerajaan negeri",
      color: "bg-purple-500"
    },
    {
      title: "Ahli Bebas",
      count: 3,
      description: "Ahli lembaga bebas dengan kepakaran industri dan teknikal",
      color: "bg-orange-500"
    }
  ]

  return (
    <PageTemplate
      title="Lembaga Pengarah Teluk Ewa"
      subtitle="Kepimpinan khusus untuk operasi kemudahan pelabuhan industri Teluk Ewa di Langkawi, Kedah"
      breadcrumbs={[
        { name: 'Utama', href: '/' },
        { name: 'Profil', href: '/profil' },
        { name: 'Organisasi', href: '/profil/organisasi' },
        { name: 'Lembaga Pengarah', href: '/profil/organisasi/lembaga-pengarah' },
        { name: 'Teluk Ewa' }
      ]}
    >
      <div className="max-w-none">
        {/* Board Overview */}
        <div className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 rounded-lg p-8 mb-8 text-white">
          <div className="flex items-center mb-4">
            <UserGroupIcon className="h-12 w-12 mr-4" />
            <h2 className="text-3xl font-bold">
              Lembaga Pengarah Teluk Ewa
            </h2>
          </div>
          <p className="text-xl leading-relaxed mb-6">
            Lembaga Pengarah Teluk Ewa terdiri daripada 9 ahli yang dikhususkan untuk mengurus operasi
            kemudahan pelabuhan industri di Langkawi, Kedah dengan fokus kepada industri simen dan kargo khusus.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">9</div>
              <div className="text-sm opacity-90">Jumlah Ahli</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">3</div>
              <div className="text-sm opacity-90">Wakil Kementerian</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">1</div>
              <div className="text-sm opacity-90">Wakil Kedah</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">3</div>
              <div className="text-sm opacity-90">Ahli Bebas</div>
            </div>
          </div>
        </div>

        {/* Key Differences */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <GlobeAltIcon className="h-7 w-7 mr-3 text-emerald-600" />
            Ciri Khas Lembaga Pengarah Teluk Ewa
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-emerald-50 rounded-lg p-6 border-l-4 border-emerald-500">
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Fokus Industri Khusus</h4>
              <p className="text-sppp-gray text-sm">
                Dikhususkan untuk operasi pelabuhan industri simen dan kemudahan kargo khusus di Langkawi
              </p>
            </div>

            <div className="bg-teal-50 rounded-lg p-6 border-l-4 border-teal-500">
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Perwakilan Kedah</h4>
              <p className="text-sppp-gray text-sm">
                Melibatkan Setiausaha Negeri Kedah sebagai wakil kerajaan negeri tempat operasi berada
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Struktur Kompak</h4>
              <p className="text-sppp-gray text-sm">
                Komposisi 9 ahli yang lebih kompak membolehkan pengambilan keputusan yang pantas dan berkesan
              </p>
            </div>
          </div>
        </div>

        {/* Board Composition */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <ChartBarIcon className="h-7 w-7 mr-3 text-emerald-600" />
            Komposisi Lembaga Pengarah
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {boardCategories.map((category, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className={`w-8 h-8 ${category.color} rounded-full mb-3`}></div>
                <h4 className="font-semibold text-sppp-dark-blue mb-2">{category.title}</h4>
                <div className="text-2xl font-bold text-emerald-600 mb-2">{category.count}</div>
                <p className="text-sppp-gray text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <StarIcon className="h-7 w-7 mr-3 text-emerald-600" />
            Kepimpinan Eksekutif
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {boardMembers.filter(member => member.category === "Kepimpinan Eksekutif").map((member, index) => (
              <div key={index} className="bg-emerald-50 rounded-lg p-6 border-l-4 border-emerald-500">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 flex items-center justify-center overflow-hidden">
                    {/* Placeholder for member photo */}
                    <UserIcon className="h-8 w-8 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sppp-dark-blue text-lg">{member.name}</h4>
                    <p className="text-emerald-600 font-medium">{member.position}</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sppp-gray text-sm">
                    {member.position === "Pengerusi" ?
                      "Mengetuai mesyuarat lembaga pengarah dan menyelia operasi khusus kemudahan pelabuhan industri Teluk Ewa" :
                      "Menguruskan operasi harian Teluk Ewa dan melaksanakan dasar khusus untuk kemudahan pelabuhan industri"
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Government Representatives */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <BuildingOfficeIcon className="h-7 w-7 mr-3 text-green-600" />
            Perwakilan Kerajaan
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.filter(member => member.category === "Perwakilan Kementerian" || member.category === "Perwakilan Negeri").map((member, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-3 flex items-center justify-center overflow-hidden">
                    <UserIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sppp-dark-blue text-sm">{member.name}</h4>
                    <p className={`text-xs font-medium ${
                      member.category === "Perwakilan Kementerian" ? "text-green-600" :
                      member.position.includes("Kedah") ? "text-purple-600" : "text-purple-600"
                    }`}>
                      {member.position}
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded p-3">
                  <p className="text-sppp-gray text-xs">
                    {member.position.includes("Kementerian") ?
                      "Mewakili kepentingan kementerian dalam pengawasan operasi pelabuhan industri Teluk Ewa" :
                      "Mewakili kerajaan negeri Kedah dalam hal ehwal operasi pelabuhan di Langkawi"
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Independent Members */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <AcademicCapIcon className="h-7 w-7 mr-3 text-orange-600" />
            Ahli Lembaga Bebas
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {boardMembers.filter(member => member.category === "Ahli Bebas").map((member, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-3 flex items-center justify-center overflow-hidden">
                    <UserIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sppp-dark-blue text-sm">{member.name}</h4>
                    <p className="text-orange-600 text-xs font-medium">{member.position}</p>
                  </div>
                </div>
                <div className="bg-orange-50 rounded p-3">
                  <p className="text-sppp-gray text-xs">
                    {member.name.includes("Sr") ?
                      "Menyumbang kepakaran teknikal dan profesional dalam bidang pembinaan dan kejuruteraan" :
                      "Membawa pengalaman industri dan kepakaran sektor swasta untuk operasi pelabuhan khusus"
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Governance */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <IdentificationIcon className="h-7 w-7 mr-3 text-emerald-600" />
            Tadbir Urus Khusus Teluk Ewa
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-sppp-dark-blue mb-4">Fokus Operasi Khusus</h4>
              <ul className="space-y-3 text-sppp-gray">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-emerald-500 mr-2 mt-1" />
                  Pengawasan operasi pelabuhan industri simen
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-emerald-500 mr-2 mt-1" />
                  Pengurusan kemudahan kargo khusus di Langkawi
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-emerald-500 mr-2 mt-1" />
                  Koordinasi dengan pengendali industri
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-emerald-500 mr-2 mt-1" />
                  Pemantauan standard keselamatan industri
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-sppp-dark-blue mb-4">Kerjasama Wilayah</h4>
              <ul className="space-y-3 text-sppp-gray">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-teal-500 mr-2 mt-1" />
                  Koordinasi dengan kerajaan negeri Kedah
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-teal-500 mr-2 mt-1" />
                  Kerjasama dengan pihak berkuasa tempatan
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-teal-500 mr-2 mt-1" />
                  Hubungan dengan komuniti Langkawi
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-teal-500 mr-2 mt-1" />
                  Penyelarasan dengan dasar pembangunan wilayah
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Comparison with SPPP Board */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Perbezaan dengan Lembaga Pengarah SPPP
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-emerald-600 mb-4">Lembaga Pengarah Teluk Ewa</h4>
              <ul className="space-y-2 text-sm text-sppp-gray">
                <li>• 9 ahli lembaga (lebih kompak)</li>
                <li>• Fokus khusus operasi industri simen</li>
                <li>• Perwakilan Setiausaha Negeri Kedah</li>
                <li>• Kepakaran teknikal dan industri</li>
                <li>• Pengambilan keputusan pantas</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-sppp-blue mb-4">Lembaga Pengarah SPPP</h4>
              <ul className="space-y-2 text-sm text-sppp-gray">
                <li>• 11 ahli lembaga (komprehensif)</li>
                <li>• Operasi pelabuhan menyeluruh</li>
                <li>• Perwakilan Setiausaha Negeri Pulau Pinang</li>
                <li>• Kepakaran sektor awam dan swasta</li>
                <li>• Pengawasan strategik menyeluruh</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Strategic Focus */}
        <div className="bg-sppp-light-gray rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <GlobeAltIcon className="h-7 w-7 mr-3 text-emerald-600" />
            Fokus Strategik dan Kepakaran
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Industri Khusus</h4>
              <p className="text-sppp-gray text-sm">
                Kepakaran mendalam dalam operasi pelabuhan industri simen dan pengendalian kargo khusus
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Lokasi Strategik</h4>
              <p className="text-sppp-gray text-sm">
                Memanfaatkan kedudukan Langkawi sebagai pintu masuk ke wilayah utara dan rantau ASEAN
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Kepakaran Teknikal</h4>
              <p className="text-sppp-gray text-sm">
                Kombinasi kepakaran teknikal, industri dan pentadbiran untuk operasi pelabuhan yang cekap
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}