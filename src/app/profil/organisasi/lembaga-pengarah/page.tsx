'use client'

import { PageTemplate } from '@/components/PageTemplate'
import {
  UserGroupIcon,
  BuildingOfficeIcon,
  StarIcon,
  CheckCircleIcon,
  AcademicCapIcon,
  UserIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useState } from 'react'

export default function LembagaPengarahPage() {
  const [activeBoard, setActiveBoard] = useState('sppp')

  const sppPBoardMembers = [
    {
      name: "YBhg. Dato' Yeoh Soon Hin",
      position: "Pengerusi",
      category: "Kepimpinan Eksekutif",
      image: "https://www.penangport.gov.my/images/photo/Board_Members/SPPP/dato_yeoh2025.jpg"
    },
    {
      name: "YBhg. Dato' Dr. Vijayaindiaran A/L R.Viswalingam",
      position: "Pengurus Besar",
      category: "Kepimpinan Eksekutif",
      image: "https://www.penangport.gov.my/images/photo/Board_Members/SPPP/dato_dr_vsvjay2025.jpg"
    },
    {
      name: "Encik Guna Arulalan A/L Krishta@David",
      position: "Mewakili Kementerian Pengangkutan",
      category: "Perwakilan Kementerian",
      image: "https://www.penangport.gov.my/images/photo/Board_Members/SPPP/encik_guna2025.jpg"
    },
    {
      name: "Puan Noni Salmina binti Abu",
      position: "Mewakili Kementerian Kewangan",
      category: "Perwakilan Kementerian",
      image: "https://www.penangport.gov.my/images/photo/Board_Members/SPPP/Puan_Noni.jpg"
    },
    {
      name: "Puan Hidah binti Misran",
      position: "Mewakili Kementerian Ekonomi",
      category: "Perwakilan Kementerian",
      image: "https://www.penangport.gov.my/images/photo/Board_Members/SPPP/hidah2025.jpg"
    },
    {
      name: "YB Dato' Haji Zulkifli Bin Long",
      position: "Setiausaha Kerajaan Negeri Pulau Pinang",
      category: "Perwakilan Negeri",
      image: "https://www.penangport.gov.my/images/photo/Board_Members/SPPP/Dato_Zul_SS_Penang_22025.jpeg"
    },
    {
      name: "YBhg. Dato' Seri Chan Kong Yew",
      position: "Ahli Lembaga",
      category: "Ahli Bebas",
      image: "https://www.penangport.gov.my/images/photo/Board_Members/SPPP/dato_chan2025.jpg"
    },
    {
      name: "YBhg. Dato' Muhamad Anuar bin Mat Bakar",
      position: "Ahli Lembaga",
      category: "Ahli Bebas",
      image: "https://www.penangport.gov.my/images/photo/Board_Members/SPPP/dato_anuar2025.jpg"
    },
    {
      name: "YBhg. Dato' Seri Ar Jong East Full",
      position: "Ahli Lembaga",
      category: "Ahli Bebas",
      image: "https://www.penangport.gov.my/images/photo/Board_Members/SPPP/dato_jong2025.jpg"
    },
    {
      name: "YBhg. Dato Dr. Amar Pritpal Bin Abdullah",
      position: "Ahli Lembaga",
      category: "Ahli Bebas",
      image: "https://www.penangport.gov.my/images/photo/Board_Members/SPPP/dato_amar.jpg"
    },
    {
      name: "YBhg. Dato Samarajoo A/L Manikam",
      position: "Ahli Lembaga",
      category: "Ahli Bebas",
      image: "https://www.penangport.gov.my/images/photo/Board_Members/SPPP/dato_samarajoo2025.jpg"
    }
  ]

  const telukEwaBoardMembers = [
    {
      name: "Tuan Jeffrey Chew Gim Eam",
      position: "Pengerusi",
      category: "Kepimpinan Eksekutif",
      image: "https://www.penangport.gov.my/images/photo/Board_Members/Teluk_Ewa/dato_jeffrey2025.jpg"
    },
    {
      name: "YBhg. Dato' Dr. Vijayaindiaran A/L R.Viswalingam",
      position: "Pengurus Besar",
      category: "Kepimpinan Eksekutif",
      image: "https://www.penangport.gov.my/images/photo/Board_Members/Teluk_Ewa/Dato_Dr_Vsvjay.jpg"
    },
    {
      name: "Encik Guna Arulalan A/L Krishta@David",
      position: "Mewakili Kementerian Pengangkutan",
      category: "Perwakilan Kementerian",
      image: "https://www.penangport.gov.my/images/photo/Board_Members/Teluk_Ewa/Encik_Guna.jpg"
    },
    {
      name: "Puan Noni Salmina binti Abu",
      position: "Mewakili Kementerian Kewangan",
      category: "Perwakilan Kementerian",
      image: "https://www.penangport.gov.my/images/photo/Board_Members/Teluk_Ewa/Puan_Noni.jpg"
    },
    {
      name: "Puan Hidah binti Misran",
      position: "Mewakili Kementerian Ekonomi",
      category: "Perwakilan Kementerian",
      image: "https://www.penangport.gov.my/images/photo/Board_Members/Teluk_Ewa/Puan_Hidah.jpg"
    },
    {
      name: "YB Dato' Seri Haji Norizan Bin Khazali",
      position: "Setiausaha Kerajaan Negeri Kedah",
      category: "Perwakilan Negeri",
      image: "https://www.penangport.gov.my/images/photo/Board_Members/Teluk_Ewa/Dato_Norizan.jpg"
    },
    {
      name: "Encik Sr Tan Kok Yew",
      position: "Ahli Lembaga",
      category: "Ahli Bebas",
      image: "https://www.penangport.gov.my/images/photo/Board_Members/Teluk_Ewa/Sr_Tan_Kok_Yew.jpeg"
    },
    {
      name: "Encik Ong Jing Cheng",
      position: "Ahli Lembaga",
      category: "Ahli Bebas",
      image: "https://www.penangport.gov.my/images/photo/Board_Members/Teluk_Ewa/MR_ONG_BOARD_SPPPTE.jpg"
    },
    {
      name: "Encik Muhammad Fitri Bin Termizi",
      position: "Ahli Lembaga",
      category: "Ahli Bebas",
      image: "https://www.penangport.gov.my/images/photo/Board_Members/Teluk_Ewa/EN_FITRI_BOARD_SPPPTE.jpg"
    }
  ]

  const currentMembers = activeBoard === 'sppp' ? sppPBoardMembers : telukEwaBoardMembers
  const boardTitle = activeBoard === 'sppp' ? 'Lembaga Pengarah SPPP' : 'Lembaga Pengarah Teluk Ewa'
  const boardColor = activeBoard === 'sppp' ? 'from-sppp-dark-blue to-sppp-blue' : 'from-emerald-600 to-teal-700'

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Kepimpinan Eksekutif':
        return <StarIcon className="h-5 w-5" />
      case 'Perwakilan Kementerian':
        return <BuildingOfficeIcon className="h-5 w-5" />
      case 'Perwakilan Negeri':
        return <BuildingOfficeIcon className="h-5 w-5" />
      case 'Ahli Bebas':
        return <AcademicCapIcon className="h-5 w-5" />
      default:
        return <UserIcon className="h-5 w-5" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Kepimpinan Eksekutif':
        return 'text-blue-600 bg-blue-50 border-blue-200'
      case 'Perwakilan Kementerian':
        return 'text-green-600 bg-green-50 border-green-200'
      case 'Perwakilan Negeri':
        return 'text-purple-600 bg-purple-50 border-purple-200'
      case 'Ahli Bebas':
        return 'text-orange-600 bg-orange-50 border-orange-200'
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  return (
    <PageTemplate
      title="Lembaga Pengarah"
      subtitle="Kepimpinan dan tadbir urus Suruhanjaya Pelabuhan Pulau Pinang untuk operasi SPPP dan Teluk Ewa"
      breadcrumbs={[
        { name: 'Utama', href: '/' },
        { name: 'Profil', href: '/profil' },
        { name: 'Organisasi', href: '/profil/organisasi' },
        { name: 'Lembaga Pengarah' }
      ]}
    >
      <div className="max-w-none">
        {/* Overview */}
        <div className={`bg-gradient-to-r ${boardColor} rounded-lg p-8 mb-8 text-white`}>
          <div className="flex items-center mb-4">
            <UserGroupIcon className="h-12 w-12 mr-4" />
            <h2 className="text-3xl font-bold">
              {boardTitle}
            </h2>
          </div>
          <p className="text-xl leading-relaxed">
            {activeBoard === 'sppp'
              ? 'Lembaga Pengarah SPPP terdiri daripada 11 ahli yang mewakili pelbagai sektor untuk memastikan tadbir urus yang berkesan dalam operasi pelabuhan komprehensif.'
              : 'Lembaga Pengarah Teluk Ewa terdiri daripada 9 ahli yang dikhususkan untuk mengurus operasi kemudahan pelabuhan industri di Langkawi, Kedah.'
            }
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setActiveBoard('sppp')}
              className={`flex-1 px-6 py-4 rounded-lg font-medium transition-all duration-200 ${
                activeBoard === 'sppp'
                  ? 'bg-gradient-to-r from-sppp-dark-blue to-sppp-blue text-white shadow-lg'
                  : 'bg-gray-100 text-sppp-gray hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center justify-center">
                <UserGroupIcon className="h-5 w-5 mr-2" />
                <div className="text-left">
                  <div className="font-semibold">Lembaga Pengarah SPPP</div>
                  <div className="text-sm opacity-90">11 Ahli • Operasi Komprehensif</div>
                </div>
              </div>
            </button>

            <button
              onClick={() => setActiveBoard('teluk-ewa')}
              className={`flex-1 px-6 py-4 rounded-lg font-medium transition-all duration-200 ${
                activeBoard === 'teluk-ewa'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-lg'
                  : 'bg-gray-100 text-sppp-gray hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center justify-center">
                <UserGroupIcon className="h-5 w-5 mr-2" />
                <div className="text-left">
                  <div className="font-semibold">Lembaga Pengarah Teluk Ewa</div>
                  <div className="text-sm opacity-90">9 Ahli • Industri Khusus</div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Board Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentMembers.map((member, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border-l-4 ${
                activeBoard === 'sppp' ? 'border-sppp-blue' : 'border-emerald-600'
              }`}
            >
              {/* Member Photo */}
              <div className="relative h-48 bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    if (target.parentNode) {
                      (target.parentNode as HTMLElement).innerHTML = `
                        <div class="h-full flex items-center justify-center bg-gray-200">
                          <div class="text-center">
                            <div class="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                              <svg class="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                              </svg>
                            </div>
                            <div class="text-sm text-gray-500">Foto tidak tersedia</div>
                          </div>
                        </div>
                      `
                    }
                  }}
                />
              </div>

              {/* Member Info */}
              <div className="p-6">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3 border ${getCategoryColor(member.category)}`}>
                  {getCategoryIcon(member.category)}
                  <span className="ml-1">{member.category}</span>
                </div>

                <h3 className="font-semibold text-sppp-dark-blue text-lg mb-2 leading-tight">
                  {member.name}
                </h3>

                <p className={`text-sm font-medium mb-3 ${
                  activeBoard === 'sppp' ? 'text-sppp-blue' : 'text-emerald-600'
                }`}>
                  {member.position}
                </p>

                {/* Role Description */}
                <div className="text-xs text-sppp-gray">
                  {member.category === 'Kepimpinan Eksekutif' && member.position.includes('Pengerusi') &&
                    'Mengetuai mesyuarat lembaga dan menyelia hala tuju strategik organisasi'
                  }
                  {member.category === 'Kepimpinan Eksekutif' && member.position.includes('Pengurus') &&
                    'Menguruskan operasi harian dan melaksanakan dasar yang ditetapkan'
                  }
                  {member.category === 'Perwakilan Kementerian' &&
                    'Mewakili kepentingan kementerian dalam pengawasan dan pembangunan pelabuhan'
                  }
                  {member.category === 'Perwakilan Negeri' &&
                    `Mewakili kerajaan ${activeBoard === 'sppp' ? 'Pulau Pinang' : 'Kedah'} dalam hal ehwal pelabuhan`
                  }
                  {member.category === 'Ahli Bebas' &&
                    'Menyumbang kepakaran dan pengalaman dari sektor swasta'
                  }
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Board Composition Summary */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <BuildingOfficeIcon className="h-7 w-7 mr-3 text-blue-600" />
            Komposisi {boardTitle}
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {Object.entries(
              currentMembers.reduce((acc: Record<string, number>, member) => {
                acc[member.category] = (acc[member.category] || 0) + 1
                return acc
              }, {} as Record<string, number>)
            ).map(([category, count], index) => (
              <div key={index} className={`border rounded-lg p-6 text-center ${getCategoryColor(category)}`}>
                <div className="flex justify-center mb-3">
                  {getCategoryIcon(category)}
                </div>
                <div className={`text-2xl font-bold mb-2 ${
                  activeBoard === 'sppp' ? 'text-sppp-blue' : 'text-emerald-600'
                }`}>
                  {count}
                </div>
                <div className="text-sm font-medium text-sppp-dark-blue">
                  {category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}