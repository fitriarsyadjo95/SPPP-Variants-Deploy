import { PageTemplate } from '@/components/PageTemplate'
import { MapPinIcon, CalendarDaysIcon, BuildingOfficeIcon, TruckIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Infrastruktur Teluk Ewa | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Infrastruktur pelabuhan Teluk Ewa untuk pengendalian bahan mentah dan eksport simen',
}

export default function TelukEwaInfrastructurePage() {
  return (
    <PageTemplate
      title="Infrastruktur Teluk Ewa"
      subtitle="Kemudahan pelabuhan di Langkawi untuk industri simen"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Profil', href: '/profil' }, { name: 'Infrastruktur Teluk Ewa' }]}
    >
      <div className="max-w-none">
        {/* Basic Information */}
        <div className="bg-blue-50 rounded-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4">
                Lokasi
              </h3>
              <div className="space-y-2 text-sppp-gray">
                <div className="flex items-center">
                  <MapPinIcon className="h-5 w-5 mr-2" />
                  <span>Bahagian Barat Laut Pulau Langkawi</span>
                </div>
                <div className="flex items-center">
                  <BuildingOfficeIcon className="h-5 w-5 mr-2" />
                  <span>Keluasan: 45 ekar</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4">
                Sejarah Pembinaan
              </h3>
              <div className="space-y-2 text-sppp-gray">
                <div className="flex items-center">
                  <CalendarDaysIcon className="h-5 w-5 mr-2" />
                  <span>Mula dibina: November 1982</span>
                </div>
                <div className="flex items-center">
                  <CalendarDaysIcon className="h-5 w-5 mr-2" />
                  <span>Mula beroperasi: September 1984</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Kemudahan Jeti
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Jeti Utama</h4>
              <p className="text-2xl font-bold text-sppp-blue mb-1">330m</p>
              <p className="text-sm text-sppp-gray">Panjang</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Jeti Sampingan</h4>
              <p className="text-2xl font-bold text-sppp-blue mb-1">150m</p>
              <p className="text-sm text-sppp-gray">Panjang</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Jeti Tambahan</h4>
              <p className="text-2xl font-bold text-sppp-blue mb-1">157m</p>
              <p className="text-sm text-sppp-gray">Dibina 1993</p>
            </div>
          </div>
        </div>

        {/* Purpose */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Tujuan Utama
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <TruckIcon className="h-8 w-8 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold text-sppp-dark-blue mb-2">
                  Pengangkutan Bahan Mentah
                </h4>
                <p className="text-sppp-gray text-sm">
                  Untuk mengangkut bahan mentah dan alat ganti bagi kilang simen
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <BuildingOfficeIcon className="h-8 w-8 text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold text-sppp-dark-blue mb-2">
                  Eksport Simen
                </h4>
                <p className="text-sppp-gray text-sm">
                  Untuk mengeksport simen yang dihasilkan oleh kilang
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}