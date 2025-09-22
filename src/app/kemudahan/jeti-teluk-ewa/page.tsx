import { Metadata } from 'next';
import { PageTemplate } from '@/components/PageTemplate';
import {
  BuildingOfficeIcon,
  TruckIcon,
  ClockIcon,
  MapPinIcon,
  CheckCircleIcon,
  GlobeAltIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Jeti Teluk Ewa | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Jeti Teluk Ewa - kemudahan pelabuhan industri khusus untuk pengangkutan bahan mentah simen dan eksport produk simen di Langkawi, Kedah',
  keywords: 'Jeti Teluk Ewa, Langkawi, simen, kargo industri, SPPP, Kedah Cement',
};

export default function JetiTelukEwaPage() {
  return (
    <PageTemplate
      title="Jeti Teluk Ewa"
      subtitle="Kemudahan pelabuhan industri khusus untuk pengangkutan bahan mentah simen dan eksport produk simen di Langkawi, Kedah"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Kemudahan', href: '/kemudahan' }, { name: 'Jeti Teluk Ewa' }]}
    >
      <div className="max-w-none">
        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-orange-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-1">45</div>
            <div className="text-sm text-sppp-gray">Hektar</div>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">637m</div>
            <div className="text-sm text-sppp-gray">Panjang Jeti</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">30</div>
            <div className="text-sm text-sppp-gray">Tahun Konsesi</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">1984</div>
            <div className="text-sm text-sppp-gray">Tahun Operasi</div>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <GlobeAltIcon className="h-7 w-7 mr-3 text-orange-600" />
            Mengenai Jeti Teluk Ewa
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sppp-gray mb-4">
                Jeti Teluk Ewa adalah kemudahan pelabuhan industri yang dikhususkan untuk pengangkutan bahan mentah
                dan alat ganti untuk operasi pembuatan simen, serta kemudahan eksport produk simen siap di Langkawi, Kedah.
              </p>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Lokasi & Operasi:</h4>
              <ul className="space-y-2 text-sppp-gray">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-orange-600" />
                  Pantai Utara Langkawi, Kedah
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-orange-600" />
                  Dikendalikan oleh Kedah Cement Jetty Sdn. Bhd.
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-orange-600" />
                  Di bawah pentadbiran SPPP
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-orange-600" />
                  Status diswastakan dengan konsesi 30 tahun
                </li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-lg p-6">
              <h4 className="font-semibold text-orange-900 mb-3">Jenis Kargo</h4>
              <div className="space-y-2 text-sm text-orange-700">
                <p>• Bahan mentah simen (Import)</p>
                <p>• Alat ganti dan peralatan kilang</p>
                <p>• Produk simen siap (Eksport)</p>
                <p>• Kargo industri khusus</p>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <BuildingOfficeIcon className="h-7 w-7 mr-3 text-blue-600" />
            Kemudahan & Spesifikasi
          </h3>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Kemudahan</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Panjang</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Tahun</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Fungsi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm font-medium">Jeti Utama</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">330m</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">1982-1984</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Bahan Mentah Simen</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm font-medium">Sub-Jeti</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">150m</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">1982-1984</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Alat Ganti & Peralatan</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm font-medium">Jeti Tambahan</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">157m</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">1993</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Eksport Produk Simen</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6 text-center">
              <TruckIcon className="h-8 w-8 mx-auto mb-3 text-blue-600" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Bahan Mentah</h4>
              <p className="text-sppp-gray text-sm">Import bahan mentah untuk operasi kilang simen</p>
            </div>
            <div className="border rounded-lg p-6 text-center">
              <BuildingOfficeIcon className="h-8 w-8 mx-auto mb-3 text-green-600" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Alat Ganti</h4>
              <p className="text-sppp-gray text-sm">Pengendalian peralatan dan alat ganti kilang</p>
            </div>
            <div className="border rounded-lg p-6 text-center">
              <CheckCircleIcon className="h-8 w-8 mx-auto mb-3 text-orange-600" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Produk Siap</h4>
              <p className="text-sppp-gray text-sm">Eksport produk simen ke pasaran domestik dan antarabangsa</p>
            </div>
          </div>
        </div>

        {/* Enhanced Timeline */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <ClockIcon className="h-7 w-7 mr-3 text-orange-600" />
            Kronologi Pembangunan
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-blue-500 via-green-500 to-purple-500"></div>

            <div className="space-y-8">
              {/* 1982 */}
              <div className="relative flex items-start">
                <div className="relative z-10 bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm shadow-lg">
                  1982
                </div>
                <div className="ml-8 bg-orange-50 rounded-lg p-6 flex-1 border-l-4 border-orange-500">
                  <h4 className="text-lg font-semibold text-orange-900 mb-2">Permulaan Pembinaan</h4>
                  <p className="text-orange-700 mb-2">Pembinaan jeti utama (330m) dan sub-jeti (150m) dimulakan</p>
                  <div className="text-sm text-orange-600">
                    <span className="inline-block bg-orange-100 px-2 py-1 rounded">Fasa Pembinaan Awal</span>
                  </div>
                </div>
              </div>

              {/* 1984 */}
              <div className="relative flex items-start">
                <div className="relative z-10 bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm shadow-lg">
                  1984
                </div>
                <div className="ml-8 bg-blue-50 rounded-lg p-6 flex-1 border-l-4 border-blue-500">
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">Operasi Bermula</h4>
                  <p className="text-blue-700 mb-2">Kemudahan mula beroperasi pada September 1984</p>
                  <div className="text-sm text-blue-600">
                    <span className="inline-block bg-blue-100 px-2 py-1 rounded">Milestone Operasi</span>
                  </div>
                </div>
              </div>

              {/* 1993 */}
              <div className="relative flex items-start">
                <div className="relative z-10 bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm shadow-lg">
                  1993
                </div>
                <div className="ml-8 bg-green-50 rounded-lg p-6 flex-1 border-l-4 border-green-500">
                  <h4 className="text-lg font-semibold text-green-900 mb-2">Pengembangan Kemudahan</h4>
                  <p className="text-green-700 mb-2">Pembinaan jeti tambahan sepanjang 157m untuk eksport produk simen</p>
                  <div className="text-sm text-green-600">
                    <span className="inline-block bg-green-100 px-2 py-1 rounded">Fasa Pengembangan</span>
                  </div>
                </div>
              </div>

              {/* 1999 */}
              <div className="relative flex items-start">
                <div className="relative z-10 bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm shadow-lg">
                  1999
                </div>
                <div className="ml-8 bg-purple-50 rounded-lg p-6 flex-1 border-l-4 border-purple-500">
                  <h4 className="text-lg font-semibold text-purple-900 mb-2">Pemindahan Pentadbiran</h4>
                  <p className="text-purple-700 mb-2">Dipindahkan ke pentadbiran SPPP pada 1 Januari 1999</p>
                  <div className="text-sm text-purple-600">
                    <span className="inline-block bg-purple-100 px-2 py-1 rounded">Restructuring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SPPP Responsibilities */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <ShieldCheckIcon className="h-7 w-7 mr-3 text-green-600" />
            Fungsi & Tanggungjawab SPPP
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-4">Pengurusan Operasi</h4>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 text-blue-600 mr-2" />
                  Pengurusan keseluruhan kemudahan pelabuhan
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 text-blue-600 mr-2" />
                  Penetapan dan pemantauan standard prestasi
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 text-blue-600 mr-2" />
                  Pengurusan infrastruktur dan kemudahan
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-4">Fungsi Kawal Selia</h4>
              <ul className="space-y-2 text-green-700 text-sm">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2" />
                  Kutipan duti dan fi pelabuhan
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2" />
                  Penyelenggaraan laluan masuk pelabuhan
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2" />
                  Pengeluaran lesen dan permit operasi
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500 rounded-lg">
            <p className="text-sm text-orange-800">
              <strong>Kepentingan Strategik:</strong> Jeti Teluk Ewa merupakan infrastruktur kritikal yang menyokong
              operasi pembuatan simen di Langkawi dan memudahkan import bahan mentah serta eksport produk siap,
              menyumbang kepada pembangunan perindustrian di utara Malaysia.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}