import { PageTemplate } from '@/components/PageTemplate'
import {
  UserGroupIcon,
  BuildingOfficeIcon,
  StarIcon,
  CheckCircleIcon,
  IdentificationIcon,
  UserIcon,
  AcademicCapIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'

export const metadata = {
  title: 'Lembaga Pengarah SPPP | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Ahli-ahli Lembaga Pengarah Suruhanjaya Pelabuhan Pulau Pinang (SPPP) - kepimpinan dan tadbir urus yang berkesan',
  keywords: 'Lembaga Pengarah, SPPP, kepimpinan, tadbir urus, ahli lembaga',
}

export default function LembagaPengarahSPPPPage() {
  const boardMembers = [
    {
      name: "YBhg. Dato' Yeoh Soon Hin",
      position: "Pengerusi",
      category: "Kepimpinan Eksekutif",
      image: "/images/board/sppp/chairman.jpg"
    },
    {
      name: "YBhg. Dato' Dr. Vijayaindiaran A/L R. Viswalingam",
      position: "Pengarah Urusan",
      category: "Kepimpinan Eksekutif",
      image: "/images/board/sppp/managing-director.jpg"
    },
    {
      name: "Encik Guna Arulalan A/L Krishta@David",
      position: "Wakil Kementerian Pengangkutan",
      category: "Perwakilan Kementerian",
      image: "/images/board/sppp/transport-rep.jpg"
    },
    {
      name: "Puan Noni Salmina binti Abu",
      position: "Wakil Kementerian Kewangan",
      category: "Perwakilan Kementerian",
      image: "/images/board/sppp/finance-rep.jpg"
    },
    {
      name: "Puan Hidah binti Misran",
      position: "Wakil Kementerian Ekonomi",
      category: "Perwakilan Kementerian",
      image: "/images/board/sppp/economy-rep.jpg"
    },
    {
      name: "YB Dato' Haji Zulkifli Bin Long",
      position: "Setiausaha Negeri Pulau Pinang",
      category: "Perwakilan Negeri",
      image: "/images/board/sppp/state-secretary.jpg"
    },
    {
      name: "YBhg. Dato' Seri Chan Kong Yew",
      position: "Ahli Lembaga",
      category: "Ahli Bebas",
      image: "/images/board/sppp/member-1.jpg"
    },
    {
      name: "YBhg. Dato' Muhamad Anuar bin Mat Bakar",
      position: "Ahli Lembaga",
      category: "Ahli Bebas",
      image: "/images/board/sppp/member-2.jpg"
    },
    {
      name: "YBhg. Dato' Seri Ar Jong East Full",
      position: "Ahli Lembaga",
      category: "Ahli Bebas",
      image: "/images/board/sppp/member-3.jpg"
    },
    {
      name: "YBhg. Dato Dr. Amar Pritpal Bin Abdullah",
      position: "Ahli Lembaga",
      category: "Ahli Bebas",
      image: "/images/board/sppp/member-4.jpg"
    },
    {
      name: "YBhg. Dato Samarajoo A/L Manikam",
      position: "Ahli Lembaga",
      category: "Ahli bebas",
      image: "/images/board/sppp/member-5.jpg"
    }
  ]

  const boardCategories = [
    {
      title: "Kepimpinan Eksekutif",
      count: 2,
      description: "Pengerusi dan Pengarah Urusan yang mengetuai operasi harian",
      color: "bg-blue-500"
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
      description: "Setiausaha Negeri mewakili kerajaan negeri",
      color: "bg-purple-500"
    },
    {
      title: "Ahli Bebas",
      count: 5,
      description: "Ahli lembaga bebas dengan kepakaran pelbagai bidang",
      color: "bg-orange-500"
    }
  ]

  return (
    <PageTemplate
      title="Lembaga Pengarah SPPP"
      subtitle="Kepimpinan dan tadbir urus Suruhanjaya Pelabuhan Pulau Pinang yang berkesan dan bertanggungjawab"
      breadcrumbs={[
        { name: 'Utama', href: '/' },
        { name: 'Profil', href: '/profil' },
        { name: 'Organisasi', href: '/profil/organisasi' },
        { name: 'Lembaga Pengarah', href: '/profil/organisasi/lembaga-pengarah' },
        { name: 'SPPP' }
      ]}
    >
      <div className="max-w-none">
        {/* Board Overview */}
        <div className="bg-gradient-to-r from-sppp-dark-blue to-sppp-blue rounded-lg p-8 mb-8 text-white">
          <div className="flex items-center mb-4">
            <UserGroupIcon className="h-12 w-12 mr-4" />
            <h2 className="text-3xl font-bold">
              Lembaga Pengarah SPPP
            </h2>
          </div>
          <p className="text-xl leading-relaxed mb-6">
            Lembaga Pengarah SPPP terdiri daripada 11 ahli yang mewakili pelbagai sektor termasuk
            kerajaan persekutuan, kerajaan negeri dan sektor swasta untuk memastikan tadbir urus yang berkesan.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">11</div>
              <div className="text-sm opacity-90">Jumlah Ahli</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">3</div>
              <div className="text-sm opacity-90">Wakil Kementerian</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">1</div>
              <div className="text-sm opacity-90">Wakil Negeri</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">5</div>
              <div className="text-sm opacity-90">Ahli Bebas</div>
            </div>
          </div>
        </div>

        {/* Board Composition */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <ChartBarIcon className="h-7 w-7 mr-3 text-blue-600" />
            Komposisi Lembaga Pengarah
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {boardCategories.map((category, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className={`w-8 h-8 ${category.color} rounded-full mb-3`}></div>
                <h4 className="font-semibold text-sppp-dark-blue mb-2">{category.title}</h4>
                <div className="text-2xl font-bold text-sppp-blue mb-2">{category.count}</div>
                <p className="text-sppp-gray text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <StarIcon className="h-7 w-7 mr-3 text-blue-600" />
            Kepimpinan Eksekutif
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {boardMembers.filter(member => member.category === "Kepimpinan Eksekutif").map((member, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 flex items-center justify-center overflow-hidden">
                    {/* Placeholder for member photo */}
                    <UserIcon className="h-8 w-8 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sppp-dark-blue text-lg">{member.name}</h4>
                    <p className="text-blue-600 font-medium">{member.position}</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sppp-gray text-sm">
                    {member.position === "Pengerusi" ?
                      "Mengetuai mesyuarat lembaga pengarah dan menyelia hala tuju strategik organisasi" :
                      "Menguruskan operasi harian dan melaksanakan dasar yang ditetapkan oleh lembaga pengarah"
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
                    <p className={`text-xs font-medium ${member.category === "Perwakilan Kementerian" ? "text-green-600" : "text-purple-600"}`}>
                      {member.position}
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded p-3">
                  <p className="text-sppp-gray text-xs">
                    {member.position.includes("Kementerian") ?
                      "Mewakili kepentingan kementerian dalam pengawasan dan pembangunan pelabuhan" :
                      "Mewakili kerajaan negeri dalam hal ehwal pembangunan pelabuhan di Pulau Pinang"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.filter(member => member.category === "Ahli Bebas" || member.category === "Ahli bebas").map((member, index) => (
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
                    Menyumbang kepakaran dan pengalaman dari sektor swasta untuk menambah baik tadbir urus organisasi
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Governance Framework */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <IdentificationIcon className="h-7 w-7 mr-3 text-blue-600" />
            Rangka Kerja Tadbir Urus
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-sppp-dark-blue mb-4">Tanggungjawab Utama</h4>
              <ul className="space-y-3 text-sppp-gray">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  Menetapkan hala tuju dan strategi organisasi
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  Mengawasi pelaksanaan dasar dan operasi
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  Memastikan pematuhan kepada perundangan
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  Meluluskan belanjawan dan pelaburan utama
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-sppp-dark-blue mb-4">Struktur Mesyuarat</h4>
              <ul className="space-y-3 text-sppp-gray">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-blue-500 mr-2 mt-1" />
                  Mesyuarat berkala mengikut keperluan organisasi
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-blue-500 mr-2 mt-1" />
                  Kehadiran ahli lembaga mengikut peraturan
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-blue-500 mr-2 mt-1" />
                  Keputusan dibuat secara konsensus atau undi
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-blue-500 mr-2 mt-1" />
                  Minit mesyuarat disimpan sebagai rekod rasmi
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Board Diversity & Expertise */}
        <div className="bg-sppp-light-gray rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <UserGroupIcon className="h-7 w-7 mr-3 text-blue-600" />
            Kepelbagaian dan Kepakaran
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Perwakilan Seimbang</h4>
              <p className="text-sppp-gray text-sm">
                Gabungan wakil kerajaan dan sektor swasta memastikan kepentingan semua pihak berkepentingan terjaga
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Kepakaran Beragam</h4>
              <p className="text-sppp-gray text-sm">
                Ahli lembaga membawa kepakaran dari bidang maritim, kewangan, ekonomi, dan pentadbiran awam
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Pengalaman Luas</h4>
              <p className="text-sppp-gray text-sm">
                Kombinasi pengalaman dalam sektor awam dan swasta menyumbang kepada membuat keputusan yang bijaksana
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}