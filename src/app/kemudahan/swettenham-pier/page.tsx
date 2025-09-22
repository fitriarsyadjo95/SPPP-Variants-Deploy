import { PageTemplate } from '@/components/PageTemplate'
import {
  GlobeAltIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  UsersIcon,
  PhoneIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Swettenham Pier Cruise Terminal (SPCT) | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Terminal kapal persiaran moden SPCT yang dapat menampung kapal terbesar dunia dengan 1,046,165 penumpang dan 882 panggilan kapal pada 2024',
  keywords: 'SPCT, Swettenham Pier, cruise terminal, Penang, kapal persiaran',
}

export default function SwettenhamPierCruiseTerminalPage() {
  return (
    <PageTemplate
      title="Swettenham Pier Cruise Terminal (SPCT)"
      subtitle="Terminal kapal persiaran bertaraf antarabangsa di UNESCO World Heritage Site"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Kemudahan', href: '/kemudahan' }, { name: 'Swettenham Pier Cruise Terminal' }]}
    >
      <div className="max-w-none">
        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">1.05M</div>
            <div className="text-sm text-sppp-gray">Penumpang 2024</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">882</div>
            <div className="text-sm text-sppp-gray">Panggilan Kapal 2024</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-1">820m</div>
            <div className="text-sm text-sppp-gray">Dermaga Utama</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">12K</div>
            <div className="text-sm text-sppp-gray">Kapasiti Maksimum</div>
          </div>
        </div>

        {/* Berth Specifications */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Spesifikasi Dermaga
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Dermaga</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Kedalaman (m)</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Kegunaan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Main Berth (820m)</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">11.0</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">2 Kapal Kelas Oasis (360m)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm">North Inner Berth</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">8.5</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Kapal Sederhana (270m)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm">South Inner Berth</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">5.5</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Kapal Kecil (100m)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm">South Pontoon</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">3.0</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Tender Boat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Kemudahan */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Kemudahan Terminal
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <CheckCircleIcon className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">CIQ Services</h4>
              <p className="text-sm text-sppp-gray">Kastam, Imigresen & Kuarantin</p>
            </div>
            <div className="text-center">
              <CheckCircleIcon className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Duty Free Shop</h4>
              <p className="text-sm text-sppp-gray">Kedai bebas cukai</p>
            </div>
            <div className="text-center">
              <CheckCircleIcon className="h-12 w-12 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Wi-Fi & Banking</h4>
              <p className="text-sm text-sppp-gray">Internet & ATM</p>
            </div>
          </div>
        </div>

        {/* Cruise Lines */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Syarikat Cruise Antarabangsa
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <h4 className="font-medium text-sppp-dark-blue">Royal Caribbean</h4>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <h4 className="font-medium text-sppp-dark-blue">Princess Cruises</h4>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <h4 className="font-medium text-sppp-dark-blue">Cunard Line</h4>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <h4 className="font-medium text-sppp-dark-blue">Costa Cruises</h4>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Maklumat Hubungan
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Lokasi</h4>
              <p className="text-sm text-sppp-gray">George Town, Pulau Pinang</p>
            </div>
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Telefon</h4>
              <p className="text-sm text-sppp-gray">+604-375 2400</p>
            </div>
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-2">E-mel</h4>
              <p className="text-sm text-sppp-gray">info@penangport.com.my</p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}