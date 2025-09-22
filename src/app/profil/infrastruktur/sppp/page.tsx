import { PageTemplate } from '@/components/PageTemplate'
import { TruckIcon, GlobeAltIcon, MapPinIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Infrastruktur SPPP | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Infrastruktur dan jalinan perhubungan Suruhanjaya Pelabuhan Pulau Pinang untuk operasi pelabuhan yang cekap',
}

export default function SPPPInfrastructurePage() {
  return (
    <PageTemplate
      title="Infrastruktur SPPP"
      subtitle="Infrastruktur dan jalinan perhubungan pelabuhan"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Profil', href: '/profil' }, { name: 'Infrastruktur SPPP' }]}
    >
      <div className="max-w-none">
        {/* Connectivity Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <TruckIcon className="h-10 w-10 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-sppp-dark-blue mb-2">Rangkaian Jalan</h3>
            <p className="text-sm text-sppp-gray">Lebuhraya Utara-Selatan</p>
          </div>

          <div className="bg-green-50 rounded-lg p-6 text-center">
            <BuildingOfficeIcon className="h-10 w-10 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-sppp-dark-blue mb-2">Rangkaian Kereta Api</h3>
            <p className="text-sm text-sppp-gray">2.5 km ke stesen Butterworth</p>
          </div>

          <div className="bg-orange-50 rounded-lg p-6 text-center">
            <GlobeAltIcon className="h-10 w-10 text-orange-600 mx-auto mb-3" />
            <h3 className="font-semibold text-sppp-dark-blue mb-2">Lapangan Terbang</h3>
            <p className="text-sm text-sppp-gray">40 km ke LTAPP</p>
          </div>

          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <MapPinIcon className="h-10 w-10 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-sppp-dark-blue mb-2">Pelabuhan Global</h3>
            <p className="text-sm text-sppp-gray">200+ pelabuhan dunia</p>
          </div>
        </div>

        {/* Facilities */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Kemudahan Utama
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-sppp-dark-blue">Pengkalan Kontena Butterworth Utara</h4>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-sppp-dark-blue">Dermaga Air Dalam Butterworth</h4>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-sppp-dark-blue">Terminal Kargo Pukal Prai</h4>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-sppp-dark-blue">Terminal Kapal Persiaran Swettenham Pier</h4>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-sppp-dark-blue">Perkhidmatan Feri</h4>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-sppp-dark-blue">Jeti Minyak Sayuran</h4>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-sppp-dark-blue">Perkhidmatan Sampingan</h4>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-sppp-dark-blue">Kraf-kraf Pelabuhan</h4>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-sppp-dark-blue">Perkhidmatan Bunkering</h4>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}