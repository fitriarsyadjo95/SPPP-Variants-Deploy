import { PageTemplate } from '@/components/PageTemplate'
import {
  MapPinIcon,
  BuildingOfficeIcon,
  TruckIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Zon Bebas Komersil | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Zon Bebas Komersil di Butterworth untuk memudahkan perdagangan antarabangsa dan aktiviti logistik nilai tambah',
}

export default function ZonBebasKomersilPage() {
  return (
    <PageTemplate
      title="Zon Bebas Komersil"
      subtitle="Kawasan perdagangan bebas cukai untuk aktiviti logistik nilai tambah"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Kemudahan', href: '/kemudahan' }, { name: 'Zon Bebas Komersil' }]}
    >
      <div className="max-w-none">
        {/* Key Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">56</div>
            <div className="text-sm text-sppp-gray">Hektar Keluasan</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">200+</div>
            <div className="text-sm text-sppp-gray">Pelabuhan Terhubung</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
            <div className="text-sm text-sppp-gray">Sistem Online</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-1">0%</div>
            <div className="text-sm text-sppp-gray">Cukai Import</div>
          </div>
        </div>

        {/* Core Services */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Perkhidmatan Utama
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <BuildingOfficeIcon className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Penyimpanan & Pergudangan</h4>
            </div>
            <div className="text-center">
              <TruckIcon className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Perkhidmatan Nilai Tambah</h4>
            </div>
            <div className="text-center">
              <GlobeAltIcon className="h-12 w-12 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Sistem Teknologi</h4>
            </div>
            <div className="text-center">
              <MapPinIcon className="h-12 w-12 text-orange-600 mx-auto mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Infrastruktur Logistik</h4>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Faedah Utama
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <CurrencyDollarIcon className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Faedah Cukai</h4>
              <p className="text-sm text-sppp-gray">Penangguhan cukai barang asing</p>
            </div>
            <div className="text-center">
              <MapPinIcon className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Lokasi Strategik</h4>
              <p className="text-sm text-sppp-gray">Berhampiran institusi perbankan</p>
            </div>
            <div className="text-center">
              <GlobeAltIcon className="h-12 w-12 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Teknologi Moden</h4>
              <p className="text-sm text-sppp-gray">Sistem FCZ berasaskan internet</p>
            </div>
            <div className="text-center">
              <TruckIcon className="h-12 w-12 text-orange-600 mx-auto mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Operasi Fleksibel</h4>
              <p className="text-sm text-sppp-gray">Aktiviti nilai tambah pelbagai</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6 border-b">
            <h3 className="text-2xl font-semibold text-sppp-dark-blue flex items-center">
              <MapPinIcon className="h-6 w-6 mr-2" />
              Lokasi Zon Bebas Komersil
            </h3>
            <p className="text-sppp-gray mt-2">
              Terletak di Butterworth dengan akses mudah kepada kemudahan pengangkutan utama
            </p>
          </div>
          <div className="h-96 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="bg-white rounded-full p-4 inline-block mb-4 shadow-lg">
                  <MapPinIcon className="h-12 w-12 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-sppp-dark-blue mb-2">
                  Peta Lokasi Zon Bebas Komersil
                </h4>
                <p className="text-sppp-gray text-sm mb-4">
                  NB Tower, 5050 Jalan Bagan Luar, 12000 Butterworth, Penang
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=5.4009,100.3696&destination_place_id=Zon%20Bebas%20Komersil%20Butterworth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2" />
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Maklumat Hubungan
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Alamat</h4>
              <p className="text-sm text-sppp-gray">
                Aras 2, Swettenham Pier Cruise Terminal<br />
                No.1A, Pesara King Edward<br />
                10300 George Town, Pulau Pinang
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Telefon</h4>
              <p className="text-sm text-sppp-gray">604.263.3211 | 604.262.6211</p>
            </div>
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-2">E-mel</h4>
              <p className="text-sm text-sppp-gray">sppp@penangport.gov.my</p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}