import { PageTemplate } from '@/components/PageTemplate'
import {
  UserGroupIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'

export const metadata = {
  title: 'Ketua-Ketua Jabatan | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Ketua-ketua jabatan Suruhanjaya Pelabuhan Pulau Pinang - kepimpinan profesional dalam semua bahagian operasi',
  keywords: 'Ketua Jabatan, SPPP, kepimpinan, pengurusan, jabatan',
}

export default function KetuaKetuaJabatanPage() {
  const departmentHeads = [
    {
      name: "YBhg. Dato' Dr. Vijayaindiaran a/l R.Viswalingam",
      title: "Pengurus Besar",
      department: "Kepimpinan Eksekutif",
      image: "https://www.penangport.gov.my/images/photo/head-department/vijay_hod.png",
      isExecutive: true
    },
    {
      name: "Norlida Saad binti Md Saad",
      title: "Pengurus Kanan Operasi & Kawalselia",
      department: "Bahagian Operasi & Kawalselia",
      image: "https://www.penangport.gov.my/images/photo/head-department/Norlida1.jpg"
    },
    {
      name: "Maryati binti Ramli",
      title: "Pengurus Kanan Korporat",
      department: "Bahagian Hal Ehwal Korporat",
      image: "https://www.penangport.gov.my/images/photo/head-department/Maryati2.jpg"
    },
    {
      name: "Mohamad Safri bin Halim",
      title: "Pengurus Khidmat Pengurusan & Kewangan",
      department: "Bahagian Khidmat Pengurusan & Kewangan",
      image: "https://www.penangport.gov.my/images/photo/head-department/Safri1.jpg"
    },
    {
      name: "Shapudin bin Khalid",
      title: "Pengurus Zon Bebas Komersil",
      department: "Bahagian Zon Bebas Komersil",
      image: "https://www.penangport.gov.my/images/photo/head-department/Shapudin1.jpg"
    },
    {
      name: "Zulkeffli bin Md Desa",
      title: "Pengurus Operasi",
      department: "Bahagian Operasi",
      image: "https://www.penangport.gov.my/images/photo/head-department/Zulkeffli1.jpg"
    },
    {
      name: "Mohd Syarmizar bin Mhd Nasir",
      title: "Pengurus Korporat",
      department: "Bahagian Korporat",
      image: "https://www.penangport.gov.my/images/photo/head-department/Syarmizar1.jpg"
    },
    {
      name: "Hamidi bin Karia",
      title: "Pengurus Keselamatan & Kebombaan",
      department: "Bahagian Keselamatan & Kebombaan",
      image: "https://www.penangport.gov.my/images/photo/head-department/Hamidi2.jpeg"
    },
    {
      name: "Indira a/p M. Sivananthasharma",
      title: "Pengurus Kewangan",
      department: "Bahagian Kewangan",
      image: "https://www.penangport.gov.my/images/photo/head-department/Indira1.jpg"
    },
    {
      name: "Lim Ben Ching",
      title: "Penolong Pengurus Khidmat Pengurusan",
      department: "Bahagian Khidmat Pengurusan",
      image: "https://www.penangport.gov.my/images/photo/head-department/limbenching.jpg"
    },
    {
      name: "Muhammad Fauzi bin Che Leh",
      title: "Ketua Audit Dalam",
      department: "Bahagian Audit Dalam",
      image: "https://www.penangport.gov.my/images/photo/head-department/fauzi1.jpg"
    },
    {
      name: "Hasnizah binti Mat Akhir",
      title: "Pegawai Undang-Undang",
      department: "Bahagian Hal Ehwal Undang-Undang",
      image: "https://www.penangport.gov.my/images/photo/head-department/Hasnizah1.jpg"
    },
    {
      name: "Nurliyana binti Che Anour",
      title: "Pegawai Integriti",
      department: "Bahagian Integriti",
      image: "https://www.penangport.gov.my/images/photo/head-department/nurliyana1.jpg"
    },
    {
      name: "Azizah binti Ismail",
      title: "Pegawai Trafik & Feri",
      department: "Bahagian Trafik & Feri",
      image: "https://www.penangport.gov.my/images/photo/head-department/Azizah.jpeg"
    }
  ]

  const executiveHead = departmentHeads.filter(head => head.isExecutive)
  const departmentManagers = departmentHeads.filter(head => !head.isExecutive)

  return (
    <PageTemplate
      title="Ketua-Ketua Jabatan"
      subtitle="Kepimpinan profesional dalam semua bahagian operasi Suruhanjaya Pelabuhan Pulau Pinang"
      breadcrumbs={[
        { name: 'Utama', href: '/' },
        { name: 'Profil', href: '/profil' },
        { name: 'Organisasi', href: '/profil/organisasi' },
        { name: 'Ketua-Ketua Jabatan' }
      ]}
    >
      <div className="max-w-none">
        {/* Header */}
        <div className="bg-gradient-to-r from-sppp-dark-blue to-sppp-blue rounded-lg p-8 mb-8 text-white">
          <div className="flex items-center mb-4">
            <UserGroupIcon className="h-12 w-12 mr-4" />
            <h2 className="text-3xl font-bold">
              Ketua-Ketua Jabatan SPPP
            </h2>
          </div>
          <p className="text-xl leading-relaxed">
            Kepimpinan profesional yang menguruskan semua aspek operasi pelabuhan
            dengan komitmen terhadap kecemerlangan dan perkhidmatan berkualiti.
          </p>
        </div>

        {/* Executive Leadership */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <BuildingOfficeIcon className="h-7 w-7 mr-3 text-blue-600" />
            Kepimpinan Eksekutif
          </h3>
          <div className="grid gap-6">
            {executiveHead.map((head, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-blue-500">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Photo */}
                    <div className="flex-shrink-0">
                      <div className="relative w-32 h-40 bg-gray-100 rounded-lg overflow-hidden">
                        <Image
                          src={head.image}
                          alt={head.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Information */}
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-sppp-dark-blue mb-2">
                        {head.name}
                      </h4>
                      <p className="text-lg text-blue-600 font-medium mb-2">
                        {head.title}
                      </p>
                      <p className="text-sppp-gray">
                        {head.department}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Department Managers - Compact 2-Column Layout */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <UserGroupIcon className="h-7 w-7 mr-3 text-green-600" />
            Pengurus-Pengurus Jabatan
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {departmentManagers.map((head, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-green-500">
                <div className="p-4">
                  <div className="flex gap-4">
                    {/* Photo */}
                    <div className="flex-shrink-0">
                      <div className="relative w-24 h-32 bg-gray-100 rounded-lg overflow-hidden">
                        <Image
                          src={head.image}
                          alt={head.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Information */}
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-sppp-dark-blue mb-1 leading-tight">
                        {head.name}
                      </h4>
                      <p className="text-green-600 font-medium text-sm mb-1">
                        {head.title}
                      </p>
                      <p className="text-sppp-gray text-sm">
                        {head.department}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="bg-sppp-light-gray rounded-lg p-8">
          <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4">
            Struktur Kepimpinan
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-lg p-6">
              <div className="text-3xl font-bold text-sppp-blue mb-2">14</div>
              <div className="text-sppp-gray">Jumlah Ketua Jabatan</div>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">13</div>
              <div className="text-sppp-gray">Pengurus Jabatan</div>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
              <div className="text-sppp-gray">Kepimpinan Eksekutif</div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
