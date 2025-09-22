import { PageTemplate } from '@/components/PageTemplate'
import {
  BuildingOfficeIcon,
  ScaleIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  EyeIcon,
  ChartBarIcon,
  TruckIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Peranan Suruhanjaya | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Peranan dan tanggungjawab Suruhanjaya Pelabuhan Pulau Pinang sebagai pihak berkuasa pelabuhan, pengawal selia dan pemudah cara perdagangan',
  keywords: 'Suruhanjaya Pelabuhan, peranan, tanggungjawab, pihak berkuasa pelabuhan, pengawal selia',
}

export default function PerananSuruhanjayaPage() {
  return (
    <PageTemplate
      title="Peranan Suruhanjaya"
      subtitle="Peranan dan tanggungjawab Suruhanjaya Pelabuhan Pulau Pinang sebagai pihak berkuasa pelabuhan dan pengawal selia"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Profil', href: '/profil' }, { name: 'Peranan Suruhanjaya' }]}
    >
      <div className="max-w-none">
        {/* Legal Framework */}
        <div className="bg-gradient-to-r from-sppp-dark-blue to-sppp-blue rounded-lg p-8 mb-8 text-white">
          <div className="flex items-center mb-4">
            <ScaleIcon className="h-12 w-12 mr-4" />
            <h2 className="text-3xl font-bold">
              Asas Perundangan
            </h2>
          </div>
          <p className="text-xl leading-relaxed mb-6">
            Suruhanjaya Pelabuhan Pulau Pinang ditubuhkan di bawah Akta Suruhanjaya Pelabuhan Pulau Pinang, 1955
            dan dipinda pada November 1995 untuk memperluaskan kuasa dan pentadbiran ke pelabuhan-pelabuhan lain.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-lg font-bold mb-2">Akta Penubuhan</div>
              <div className="text-sm opacity-90">Akta Suruhanjaya Pelabuhan Pulau Pinang, 1955</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-lg font-bold mb-2">Pindaan Terkini</div>
              <div className="text-sm opacity-90">November 1995 - Perluasan Kuasa</div>
            </div>
          </div>
        </div>

        {/* Primary Functions */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <BuildingOfficeIcon className="h-7 w-7 mr-3 text-blue-600" />
            Fungsi Utama Suruhanjaya
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-sppp-dark-blue mb-3">Perundangan & Pentadbiran</h4>
              <p className="text-sppp-gray text-sm">Melaksanakan fungsi perundangan, menyelia aktiviti pelabuhan, dan mengeluarkan lesen serta permit</p>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-sppp-dark-blue mb-3">Promosi & Koordinasi</h4>
              <p className="text-sppp-gray text-sm">Menggalakkan pembangunan pelabuhan dan bertindak sebagai penghubung kerajaan-swasta</p>
            </div>
          </div>
        </div>

        {/* Regulatory Oversight */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <ShieldCheckIcon className="h-7 w-7 mr-3 text-blue-600" />
            Pengawasan Kawal Selia
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <MapPinIcon className="h-8 w-8 text-blue-500 mx-auto mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Pengurusan Tanah</h4>
            </div>

            <div className="text-center p-4">
              <DocumentTextIcon className="h-8 w-8 text-blue-500 mx-auto mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Pengeluaran Lesen</h4>
            </div>

            <div className="text-center p-4">
              <EyeIcon className="h-8 w-8 text-blue-500 mx-auto mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Standard Prestasi</h4>
            </div>
          </div>
        </div>




        {/* Key Responsibilities Summary */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-blue-500">
            <ScaleIcon className="h-8 w-8 mx-auto mb-3 text-blue-500" />
            <h4 className="font-semibold text-sppp-dark-blue mb-2">Pengawal Selia</h4>
            <p className="text-sppp-gray text-sm">Mengawal selia operasi pelabuhan dan memastikan pematuhan</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-green-500">
            <BuildingOfficeIcon className="h-8 w-8 mx-auto mb-3 text-green-500" />
            <h4 className="font-semibold text-sppp-dark-blue mb-2">Pihak Berkuasa</h4>
            <p className="text-sppp-gray text-sm">Menjalankan kuasa pihak berkuasa pelabuhan</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-purple-500">
            <ChartBarIcon className="h-8 w-8 mx-auto mb-3 text-purple-500" />
            <h4 className="font-semibold text-sppp-dark-blue mb-2">Pusat Data</h4>
            <p className="text-sppp-gray text-sm">Mengumpul dan menyediakan data serta statistik pelabuhan</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-orange-500">
            <TruckIcon className="h-8 w-8 mx-auto mb-3 text-orange-500" />
            <h4 className="font-semibold text-sppp-dark-blue mb-2">Pemudah Cara</h4>
            <p className="text-sppp-gray text-sm">Platform pemudah cara perdagangan dan logistik</p>
          </div>
        </div>

      </div>
    </PageTemplate>
  )
}