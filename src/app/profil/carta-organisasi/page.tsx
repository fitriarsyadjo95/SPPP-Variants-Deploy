'use client'

import { useState } from 'react'
import { PageTemplate } from '@/components/PageTemplate'
import {
  BuildingOfficeIcon,
  ShieldCheckIcon,
  ClipboardDocumentCheckIcon,
  ScaleIcon,
  UserGroupIcon,
  TruckIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline'

export default function CartaOrganisasiPage() {
  const [selectedDivision, setSelectedDivision] = useState<string | null>(null)

  const functionalStructure = {
    pengurusBesar: {
      title: 'PENGURUS BESAR',
      icon: UserGroupIcon,
      color: 'from-blue-600 to-blue-800'
    },
    divisions: [
      {
        id: 'operasi',
        title: 'BAHAGIAN OPERASI & KAWALSELIA',
        icon: TruckIcon,
        color: 'from-green-500 to-green-700',
        description: 'Melaksanakan operasi dan kawalselia pelabuhan dan bidang berikut:',
        responsibilities: [
          {
            category: 'Pengurusan Marin dan Keselamatan Pelayaran',
            items: ['Pemaliman', 'Dagangan berbahaya (DG)', 'Sekuriti dan kebombaan']
          },
          {
            category: 'Aktiviti sampingan pelabuhan',
            items: ['Bunkering', 'Kejuruteraan', 'Aset tak alih', 'QMS', 'Operasi Cruise', 'Performance standard PPSB – Facility']
          }
        ]
      },
      {
        id: 'pengurusan',
        title: 'BAHAGIAN KHIDMAT PENGURUSAN & KEWANGAN',
        icon: BanknotesIcon,
        color: 'from-purple-500 to-purple-700',
        description: 'Melaksanakan pengurusan dan pembangunan sumber manusia serta kewangan seperti berikut:',
        responsibilities: [
          {
            category: '1. Khidmat Pengurusan',
            items: ['Sumber manusia', 'Pentadbiran', 'Aset alih dan inventori', 'Perolehan', 'Pesara', 'Projek Tanggungjawab Sosial Korporat (CSR)', 'Majlis dan Pengurusan Mesyuarat', 'Penyertaan Perarakan/Perhimpunan', 'Audit Nilai']
          },
          {
            category: '2. Kewangan',
            items: ['Bajet', 'Terimaan dan bayaran', 'Pelaburan', 'Percukaian dan perakaunan']
          },
          {
            category: '3. Lembaga',
            items: ['Hal Ehwal Lembaga', 'KPI SPPP', 'Pelan Strategik', 'Memorandum Jemaah Menteri']
          }
        ]
      },
      {
        id: 'korporat',
        title: 'BAHAGIAN KORPORAT',
        icon: BuildingOfficeIcon,
        color: 'from-blue-500 to-blue-700',
        description: 'Melaksanakan pengurusan khidmat korporat dalam bidang berikut:',
        responsibilities: [
          {
            category: '1. Perhubungan Awam dan Komunikasi Korporat',
            items: ['Aduan awam', 'Perhubungan Media', 'Promosi pelabuhan']
          },
          {
            category: '2. Khidmat Korporat',
            items: ['Pengeluaran Lesen, Permit dan Surat Kuasa', 'Pengurusan Hartanah', 'Pertanyaan Dewan / Parlimen', 'Tarif Pelabuhan', 'Teknologi Maklumat', 'ISMS', 'Port Master Plan']
          },
          {
            category: '3. Zon Bebas Komersil (ZBK)',
            items: ['Fasilitator Pelabuhan', 'Jawatankuasa Perunding Pelabuhan (PCC)', 'Logistik']
          },
          {
            category: '4. Trafik dan Feri (UTF)',
            items: ['Penyediaan maklumat statistik pelabuhan', 'Performance standard (Services)- Cargo Handling', 'Transformasi Pelabuhan', 'Barter trade', 'Foreshore Charges']
          }
        ]
      },
      {
        id: 'audit',
        title: 'UNIT AUDIT DALAM',
        icon: ClipboardDocumentCheckIcon,
        color: 'from-orange-500 to-orange-700',
        description: 'Melaksanakan auditan dalam aspek berikut:',
        responsibilities: [
          {
            category: 'Audit Functions',
            items: ['Audit Pengurusan Kewangan', 'Audit Operasi', 'Audit Pematuhan Perjanjian']
          }
        ]
      },
      {
        id: 'perundangan',
        title: 'UNIT PERUNDANGAN',
        icon: ScaleIcon,
        color: 'from-red-500 to-red-700',
        description: 'Melaksanakan urusan perundangan dalam aspek berikut:',
        responsibilities: [
          {
            category: 'Legal Services',
            items: ['Dokumen kontrak', 'Semakan undang-undang', 'Pengurusan kes', 'Nasihat perundangan']
          }
        ]
      },
      {
        id: 'integriti',
        title: 'UNIT INTEGRITI',
        icon: ShieldCheckIcon,
        color: 'from-teal-500 to-teal-700',
        description: 'Melaksanakan penguatkuasaan dan pemantauan integriti dalam aspek berikut:',
        responsibilities: [
          {
            category: 'Integrity Management',
            items: ['Latihan Integriti', 'Tatatertib', 'ABMS']
          }
        ]
      }
    ]
  }

  return (
    <PageTemplate
      title="Carta Fungsi SPPP"
      subtitle="Struktur fungsi dan tanggungjawab organisasi SPPP"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Profil', href: '/profil' }, { name: 'Carta Organisasi' }]}
    >
      <div className="max-w-none">
        {/* Header */}
        <div className="bg-gradient-to-r from-sppp-blue to-sppp-dark-blue rounded-lg p-6 sm:p-8 mb-8 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Carta Fungsi SPPP
          </h2>
          <p className="text-base sm:text-xl max-w-4xl mx-auto">
            Struktur fungsi dan tanggungjawab organisasi Suruhanjaya Pelabuhan Pulau Pinang
            yang direka untuk kecekapan operasi dan pencapaian objektif strategik.
          </p>
        </div>

        {/* General Manager */}
        <div className="mb-12">
          <div className="flex justify-center">
            <div className={`bg-gradient-to-r ${functionalStructure.pengurusBesar.color} rounded-lg shadow-xl p-6 sm:p-8 text-white max-w-md w-full text-center relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
              <div className="relative z-10">
                <functionalStructure.pengurusBesar.icon className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold">{functionalStructure.pengurusBesar.title}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Connecting Lines */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            {/* Vertical line */}
            <div className="w-1 h-16 bg-gradient-to-b from-sppp-blue to-gray-300 mx-auto"></div>
            {/* Horizontal line */}
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-sppp-blue to-transparent"></div>
            {/* Connection points */}
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 grid grid-cols-3 gap-32 w-96">
              <div className="w-3 h-3 bg-sppp-blue rounded-full"></div>
              <div className="w-3 h-3 bg-sppp-blue rounded-full"></div>
              <div className="w-3 h-3 bg-sppp-blue rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {functionalStructure.divisions.map((division) => (
            <div
              key={division.id}
              className={`bg-white rounded-xl shadow-lg border-2 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:scale-105 transform ${
                selectedDivision === division.id
                  ? 'border-sppp-blue ring-4 ring-sppp-blue ring-opacity-20 scale-105'
                  : 'border-gray-200 hover:border-sppp-blue'
              }`}
              onClick={() => setSelectedDivision(selectedDivision === division.id ? null : division.id)}
            >
              <div className={`bg-gradient-to-br ${division.color} rounded-t-xl p-5 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                <div className="relative z-10 flex items-center">
                  <div className="bg-white/20 p-2 rounded-lg mr-4">
                    <division.icon className="h-8 w-8 flex-shrink-0" />
                  </div>
                  <h4 className="font-bold text-sm sm:text-base leading-tight">{division.title}</h4>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-gray-700 mb-6 leading-relaxed font-medium">
                  {division.description}
                </p>

                {selectedDivision === division.id && (
                  <div className="border-t border-gray-100 pt-6 animate-slide-down">
                    {division.responsibilities.map((responsibility, index) => (
                      <div key={index} className="mb-6 last:mb-0">
                        <h5 className="font-bold text-sppp-dark-blue text-sm mb-3 uppercase tracking-wide">
                          {responsibility.category}
                        </h5>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <ul className="space-y-2">
                            {responsibility.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start text-sm text-gray-700">
                                <div className="w-2 h-2 bg-gradient-to-r from-sppp-blue to-sppp-dark-blue rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="text-center mt-6">
                  <button className={`text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                    selectedDivision === division.id
                      ? 'bg-gradient-to-r from-sppp-blue to-sppp-dark-blue text-white shadow-lg'
                      : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-sppp-blue hover:to-sppp-dark-blue hover:text-white shadow-md'
                  }`}>
                    {selectedDivision === division.id ? 'Tutup Butiran' : 'Lihat Butiran'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Enhanced Key Functions Summary */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 mb-12 border border-gray-100 shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-bold text-sppp-dark-blue mb-8 text-center">
            Fungsi-Fungsi Utama SPPP
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border-l-4 border-green-500 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <TruckIcon className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg">Operasi Pelabuhan</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">Pengurusan operasi harian, keselamatan, dan kawalselia pelabuhan</p>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <BanknotesIcon className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg">Pengurusan Kewangan</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">Pengurusan kewangan, sumber manusia, dan pentadbiran korporat</p>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <BuildingOfficeIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg">Perkhidmatan Korporat</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">Perhubungan awam, teknologi maklumat, dan perkhidmatan korporat</p>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-orange-500 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <ClipboardDocumentCheckIcon className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg">Audit Dalaman</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">Audit kewangan, operasi, dan pematuhan perjanjian</p>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-red-500 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-lg mr-4">
                  <ScaleIcon className="h-6 w-6 text-red-600" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg">Perkhidmatan Undang-undang</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">Nasihat perundangan, kontrak, dan pengurusan kes</p>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="bg-teal-100 p-3 rounded-lg mr-4">
                  <ShieldCheckIcon className="h-6 w-6 text-teal-600" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg">Pengurusan Integriti</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">Penguatkuasaan integriti, latihan, dan tatatertib</p>
            </div>
          </div>
        </div>

        {/* More Information */}
        <div className="bg-sppp-light-gray rounded-lg p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-sppp-dark-blue mb-4">
            Maklumat Lanjut
          </h3>
          <p className="text-sppp-gray mb-6">
            Untuk maklumat lanjut tentang fungsi organisasi atau hubungi bahagian tertentu
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/profil/organisasi/lembaga-pengarah"
              className="bg-sppp-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-sppp-dark-blue transition-colors duration-300"
            >
              Lihat Kepimpinan
            </a>
            <a
              href="/hubungi"
              className="bg-white text-sppp-blue border-2 border-sppp-blue px-6 py-3 rounded-lg font-semibold hover:bg-sppp-blue hover:text-white transition-colors duration-300"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}