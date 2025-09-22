import { PageTemplate } from '@/components/PageTemplate'
import {
  BuildingOfficeIcon,
  TruckIcon,
  CheckCircleIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Butterworth Deep Water Wharves (BDWW) | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Butterworth Deep Water Wharves - terminal kargo pukal dengan 6 dermaga sepanjang 1.05km untuk pengendalian 2.5 juta tan kargo setahun',
  keywords: 'BDWW, Butterworth Deep Water Wharves, kargo pukal, dermaga, minyak sawit, besi keluli',
}

export default function ButterworthDeepWaterWharvesPage() {
  return (
    <PageTemplate
      title="Butterworth Deep Water Wharves (BDWW)"
      subtitle="Terminal kargo pukal dengan 6 dermaga sepanjang 1.05km untuk pengendalian 2.5 juta tan kargo setahun"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Kemudahan', href: '/kemudahan' }, { name: 'Dermaga Butterworth' }]}
    >
      <div className="max-w-none">
        {/* BDWW Overview */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-lg p-8 mb-8 text-white">
          <div className="flex items-center mb-4">
            <GlobeAltIcon className="h-12 w-12 mr-4" />
            <h2 className="text-3xl font-bold">
              Terminal Kargo Pukal Bertaraf Antarabangsa
            </h2>
          </div>
          <p className="text-xl leading-relaxed mb-6">
            Butterworth Deep Water Wharves (BDWW) mengendalikan pelbagai jenis kargo pukal seperti
            produk asas minyak sawit, rumah modular, papan fiber, produk besi dan keluli serta barangan perkilangan.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">61</div>
              <div className="text-sm opacity-90">Hektar Keluasan</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">2.5M</div>
              <div className="text-sm opacity-90">Tan Kargo/Tahun</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">6</div>
              <div className="text-sm opacity-90">Dermaga (1.05KM)</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">8-12m</div>
              <div className="text-sm opacity-90">Kedalaman Air</div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <BuildingOfficeIcon className="h-7 w-7 mr-3 text-blue-600" />
            Spesifikasi Teknikal Dermaga
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Dermaga</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Panjang (m)</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Kedalaman (m)</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Kargo Utama</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm">W1</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">200</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">10.0</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Kargo Am & Kontena</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm">W3</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">180</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">9.5</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Minyak Sawit & Produk Pertanian</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm">W4</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">165</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">9.0</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Besi & Keluli</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm">W5</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">180</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">8.5</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Rumah Modular</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm">W6</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">150</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">8.0</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Kargo Pukal Am</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm">W7</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">175</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">12.0</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Kargo Berat & Perkilangan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Cargo Types */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <TruckIcon className="h-7 w-7 mr-3 text-blue-600" />
            Jenis Kargo yang Dikendalikan
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <CheckCircleIcon className="h-8 w-8 text-green-500 mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Minyak Sawit & Produk Pertanian</h4>
              <p className="text-sppp-gray text-sm">Minyak kelapa sawit mentah, minyak kernel sawit, dan produk pertanian lain</p>
            </div>

            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <CheckCircleIcon className="h-8 w-8 text-green-500 mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Besi & Keluli</h4>
              <p className="text-sppp-gray text-sm">Produk besi, keluli dan logam untuk industri pembuatan dan pembinaan</p>
            </div>

            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <CheckCircleIcon className="h-8 w-8 text-green-500 mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Rumah Modular</h4>
              <p className="text-sppp-gray text-sm">Komponen binaan modular dan struktur pra-fabrikasi</p>
            </div>

            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <CheckCircleIcon className="h-8 w-8 text-green-500 mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Papan Fiber</h4>
              <p className="text-sppp-gray text-sm">Produk papan fiber dan bahan binaan berasaskan kayu</p>
            </div>

            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <CheckCircleIcon className="h-8 w-8 text-green-500 mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Barangan Perkilangan</h4>
              <p className="text-sppp-gray text-sm">Produk perkilangan dan barangan siap untuk eksport</p>
            </div>

            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <CheckCircleIcon className="h-8 w-8 text-green-500 mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Kargo Am & Kontena</h4>
              <p className="text-sppp-gray text-sm">Pelbagai jenis kargo am dan pengendalian kontena khusus</p>
            </div>
          </div>
        </div>

      </div>
    </PageTemplate>
  )
}