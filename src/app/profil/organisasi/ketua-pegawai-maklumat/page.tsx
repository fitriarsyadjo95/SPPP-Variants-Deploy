import { PageTemplate } from '@/components/PageTemplate'
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'

export const metadata = {
  title: 'Ketua Pegawai Maklumat | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Ketua Pegawai Digital SPPP - kepimpinan dalam teknologi maklumat dan transformasi digital',
  keywords: 'Ketua Pegawai Maklumat, CIO, Chief Information Officer, SPPP, teknologi maklumat',
}

export default function KetuaPegawaiMaklumatPage() {
  const cioInfo = {
    name: "Maryati binti Ramli",
    title: "Ketua Pegawai Digital SPPP",
    subtitle: "Chief Information Officer (CIO)",
    image: "https://www.penangport.gov.my/images/photo/head-department/Maryati2.jpg",
    email: "maryati@penangport.gov.my",
    phone: "04-2633 211",
    fax: "04-2632 623",
    office: {
      level: "Aras 2, Swettenham Pier Cruise Terminal",
      address: "No.1A, Pesara King Edward",
      postcode: "10300 George Town, Pulau Pinang"
    }
  }

  return (
    <PageTemplate
      title="Ketua Pegawai Maklumat"
      subtitle="Kepimpinan dalam teknologi maklumat dan transformasi digital Suruhanjaya Pelabuhan Pulau Pinang"
      breadcrumbs={[
        { name: 'Utama', href: '/' },
        { name: 'Profil', href: '/profil' },
        { name: 'Organisasi', href: '/profil/organisasi' },
        { name: 'Ketua Pegawai Maklumat' }
      ]}
    >
      <div className="max-w-4xl mx-auto">
        {/* CIO Profile Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-sppp-dark-blue to-sppp-blue p-8 text-white text-center">
            <div className="flex items-center justify-center mb-4">
              <UserIcon className="h-12 w-12 mr-4" />
              <h2 className="text-3xl font-bold">
                Ketua Pegawai Digital SPPP
              </h2>
            </div>
            <p className="text-xl opacity-90">
              Chief Information Officer (CIO)
            </p>
          </div>

          {/* Profile Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Photo Section */}
              <div className="md:col-span-1">
                <div className="relative w-full h-80 bg-gray-100 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={cioInfo.image}
                    alt={cioInfo.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Information Section */}
              <div className="md:col-span-2">
                {/* Name and Title */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-sppp-dark-blue mb-2">
                    {cioInfo.name}
                  </h3>
                  <p className="text-lg text-sppp-blue font-medium mb-1">
                    {cioInfo.title}
                  </p>
                  <p className="text-sppp-gray">
                    {cioInfo.subtitle}
                  </p>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-sppp-dark-blue mb-4">
                    Maklumat Hubungan
                  </h4>

                  {/* Email */}
                  <div className="flex items-center text-sppp-gray">
                    <EnvelopeIcon className="h-5 w-5 text-sppp-blue mr-3" />
                    <div>
                      <span className="font-medium">E-mel: </span>
                      <a
                        href={`mailto:${cioInfo.email}`}
                        className="text-sppp-blue hover:underline"
                      >
                        {cioInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center text-sppp-gray">
                    <PhoneIcon className="h-5 w-5 text-sppp-blue mr-3" />
                    <div>
                      <span className="font-medium">Telefon: </span>
                      <a
                        href={`tel:${cioInfo.phone.replace(/[^0-9+]/g, '')}`}
                        className="text-sppp-blue hover:underline"
                      >
                        {cioInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* Fax */}
                  <div className="flex items-center text-sppp-gray">
                    <PhoneIcon className="h-5 w-5 text-sppp-blue mr-3" />
                    <div>
                      <span className="font-medium">Faks: </span>
                      <span>{cioInfo.fax}</span>
                    </div>
                  </div>

                  {/* Office Address */}
                  <div className="flex items-start text-sppp-gray">
                    <BuildingOfficeIcon className="h-5 w-5 text-sppp-blue mr-3 mt-1" />
                    <div>
                      <span className="font-medium">Alamat Pejabat: </span>
                      <div className="mt-1">
                        <div>{cioInfo.office.level}</div>
                        <div>{cioInfo.office.address}</div>
                        <div>{cioInfo.office.postcode}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Role Description */}
        <div className="bg-sppp-light-gray rounded-lg p-8 mt-8">
          <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4">
            Peranan dan Tanggungjawab
          </h3>
          <div className="text-sppp-gray leading-relaxed">
            <p className="mb-4">
              Ketua Pegawai Digital SPPP bertanggungjawab memimpin inisiatif transformasi digital
              dan menguruskan sistem teknologi maklumat di Suruhanjaya Pelabuhan Pulau Pinang.
            </p>
            <p>
              Peranan ini meliputi pengawasan infrastruktur IT, pembangunan sistem digital,
              keselamatan siber, dan memastikan teknologi maklumat menyokong operasi pelabuhan
              yang cekap dan moden.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}