import { Metadata } from 'next';
import { 
  BuildingOfficeIcon, 
  TruckIcon, 
  GlobeAltIcon, 
  ClockIcon,
  MapPinIcon,
  PhoneIcon 
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Perkhidmatan Kontena | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Terminal kontena NBCT dengan kapasiti 2.3 juta TEU dan kemudahan terkini untuk pengendalian kontena',
};

export default function ContainerServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <BuildingOfficeIcon className="h-16 w-16 mx-auto mb-4 text-blue-200" />
            <h1 className="text-4xl font-bold mb-4">Perkhidmatan Kontena</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Terminal kontena NBCT dengan kapasiti 2.3 juta TEU dan kemudahan terkini
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* NBCT Overview */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">North Butterworth Container Terminal (NBCT)</h2>
            
            {/* Key Specifications */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Spesifikasi Utama</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <TruckIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Kapasiti Dermaga:</strong> 2.3 juta TEUs per tahun</span>
                  </li>
                  <li className="flex items-start">
                    <MapPinIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Keluasan Tanah:</strong> 72.2 hektar</span>
                  </li>
                  <li className="flex items-start">
                    <GlobeAltIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Bilangan Dermaga:</strong> 6 dermaga dengan 1.5 km panjang</span>
                  </li>
                  <li className="flex items-start">
                    <BuildingOfficeIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Kedalaman:</strong> 12 meter untuk kapal besar</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Kemudahan Penyimpanan</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <BuildingOfficeIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Kapasiti Penyimpanan:</strong> 10,466 slot</span>
                  </li>
                  <li className="flex items-start">
                    <TruckIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Kapasiti TEUs:</strong> 2.2 juta TEUs</span>
                  </li>
                  <li className="flex items-start">
                    <MapPinIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Reefer Points:</strong> 648 titik</span>
                  </li>
                  <li className="flex items-start">
                    <GlobeAltIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Rail Sidings:</strong> 4 trek kereta api</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Expansion Plan */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pelan Pengembangan NBCT</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-blue-600">Fasa 1A (2021-2025)</div>
                  <div className="text-sm text-gray-600 mt-1">Kapasiti: 2.3 juta TEUs</div>
                  <div className="text-sm text-gray-600">Yard: 2.2 juta TEUs</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-blue-600">Fasa 2A (2031-2033)</div>
                  <div className="text-sm text-gray-600 mt-1">Kapasiti: 3.1 juta TEUs</div>
                  <div className="text-sm text-gray-600">Yard: 4.6 juta TEUs</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-blue-600">Fasa 3B (2048-2051)</div>
                  <div className="text-sm text-gray-600 mt-1">Kapasiti: 6 juta TEUs</div>
                  <div className="text-sm text-gray-600">Yard: 7.8 juta TEUs</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Details */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Perkhidmatan Komprehensif</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Operasi 24/7</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Pengendalian kontena sepanjang masa</li>
                  <li>• Sistem pengurusan terminal canggih</li>
                  <li>• Pemantauan RFID dan GPS</li>
                  <li>• Integrasi dengan sistem kereta api dan lebuhraya</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Kemudahan Khusus</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Terminal untuk kapal kontena terbesar</li>
                  <li>• Kawasan industri bebas</li>
                  <li>• Kemudahan logistik dan pergudangan</li>
                  <li>• Sambungan terus ke hampir 30 syarikat kapal</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Hubungi Kami untuk Perkhidmatan Kontena
          </h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Untuk maklumat lanjut tentang perkhidmatan kontena dan terminal NBCT, sila hubungi kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/hubungi"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Hubungi Kami
            </a>
            <a 
              href="/services"
              className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Perkhidmatan Lain
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}