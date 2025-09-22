import { PageTemplate } from '@/components/PageTemplate'
import {
  CalendarIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  TruckIcon,
  GlobeAltIcon,
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  CogIcon,
  PhoneIcon,
  DocumentTextIcon,
  ScaleIcon
} from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Latar Belakang Teluk Ewa | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Sejarah dan pembangunan Jeti Teluk Ewa - kemudahan pelabuhan industri khusus di Langkawi, Kedah yang beroperasi sejak 1984',
  keywords: 'Teluk Ewa, sejarah, latar belakang, jeti simen, Langkawi, pembangunan pelabuhan',
}

export default function LatarBelakangTelukEwaPage() {
  return (
    <PageTemplate
      title="Latar Belakang Teluk Ewa"
      subtitle="Sejarah dan pembangunan kemudahan pelabuhan industri khusus di pantai utara Langkawi, Kedah"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Profil', href: '/profil' }, { name: 'Latar Belakang', href: '/profil/latar-belakang' }, { name: 'Teluk Ewa' }]}
    >
      <div className="max-w-none">
        {/* Historical Overview */}
        <div className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 rounded-lg p-8 mb-8 text-white">
          <div className="flex items-center mb-4">
            <CalendarIcon className="h-12 w-12 mr-4" />
            <h2 className="text-3xl font-bold">
              Sejarah Penubuhan
            </h2>
          </div>
          <p className="text-xl leading-relaxed mb-6">
            Jeti Teluk Ewa ditubuhkan pada tahun 1982 dan mula beroperasi pada September 1984 sebagai
            kemudahan pelabuhan industri yang dikhususkan untuk sokongan operasi industri simen di Langkawi, Kedah.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">1982</div>
              <div className="text-sm opacity-90">Tahun Penubuhan</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">Sep 1984</div>
              <div className="text-sm opacity-90">Mula Beroperasi</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">45</div>
              <div className="text-sm opacity-90">Hektar Tanah</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">40+</div>
              <div className="text-sm opacity-90">Tahun Beroperasi</div>
            </div>
          </div>
        </div>

        {/* Geographic Location */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <MapPinIcon className="h-7 w-7 mr-3 text-emerald-600" />
            Lokasi Strategik
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-sppp-dark-blue mb-4">Kedudukan Geografi</h4>
              <ul className="space-y-3 text-sppp-gray">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  Terletak di bahagian utara pantai Langkawi, Kedah
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  Berada di kawasan Ayer Hangat Mukim, Teluk Ewa
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  Lokasi strategik untuk akses maritim
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  Berdekatan dengan kemudahan industri simen
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-6 bg-emerald-50">
              <h4 className="text-lg font-semibold text-sppp-dark-blue mb-4">Maklumat Lokasi</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-sppp-gray">Negeri</span>
                  <span className="font-medium">Kedah Darul Aman</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sppp-gray">Daerah</span>
                  <span className="font-medium">Langkawi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sppp-gray">Mukim</span>
                  <span className="font-medium">Ayer Hangat</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sppp-gray">Poskod</span>
                  <span className="font-medium">07000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sppp-gray">Keluasan</span>
                  <span className="font-medium">45 Hektar</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Development Timeline */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <ClockIcon className="h-7 w-7 mr-3 text-emerald-600" />
            Kronologi Pembangunan
          </h3>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-emerald-200"></div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-6 relative z-10">1982</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sppp-dark-blue mb-2">Pembinaan Dimulakan</h4>
                  <p className="text-sppp-gray text-sm">
                    Projek pembinaan Jeti Teluk Ewa dilancarkan dengan pembinaan jeti utama sepanjang 330 meter
                    dan sub-jeti sepanjang 150 meter untuk memenuhi keperluan industri simen.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-6 relative z-10">1984</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sppp-dark-blue mb-2">Mula Beroperasi</h4>
                  <p className="text-sppp-gray text-sm">
                    Pada September 1984, Jeti Teluk Ewa mula beroperasi secara rasmi sebagai kemudahan pelabuhan
                    khusus untuk pengangkutan bahan mentah dan alat ganti bagi operasi kilang simen.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-6 relative z-10">1993</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sppp-dark-blue mb-2">Pengembangan Kemudahan</h4>
                  <p className="text-sppp-gray text-sm">
                    Pembinaan dermaga tambahan sepanjang 157 meter untuk meningkatkan kapasiti pengendalian
                    kargo dan membolehkan operasi eksport produk simen siap.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-6 relative z-10">1999</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sppp-dark-blue mb-2">Pemindahan Pentadbiran</h4>
                  <p className="text-sppp-gray text-sm">
                    Pada 1 Januari 1999, pentadbiran Jeti Teluk Ewa dipindahkan kepada Suruhanjaya Pelabuhan
                    Pulau Pinang (SPPP) melalui Perintah Menteri, menjadikan SPPP sebagai Pihak Berkuasa Pelabuhan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Infrastructure Development */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <BuildingOfficeIcon className="h-7 w-7 mr-3 text-emerald-600" />
            Pembangunan Infrastruktur
          </h3>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Kemudahan</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Panjang (m)</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Tahun Siap</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Fungsi Utama</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Jeti Utama</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">330</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">1984</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Bahan Mentah Simen</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Sub-Jeti</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">150</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">1984</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Alat Ganti & Peralatan</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Dermaga Tambahan</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">157</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">1993</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Eksport Produk Simen</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-emerald-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-sppp-dark-blue mb-4">Kemudahan Sokongan</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm text-sppp-gray">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                  Kawasan penyimpanan seluas 45 hektar
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                  Kemudahan pemprosesan bahan mentah
                </li>
              </ul>
              <ul className="space-y-2 text-sm text-sppp-gray">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                  Terminal eksport produk siap
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                  Akses jalan dan utiliti
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Economic Significance */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <ChartBarIcon className="h-7 w-7 mr-3 text-emerald-600" />
            Kepentingan Ekonomi
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <TruckIcon className="h-8 w-8 text-emerald-500 mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Sokongan Industri</h4>
              <p className="text-sppp-gray text-sm">
                Menyokong operasi industri simen melalui pengangkutan bahan mentah dan eksport produk siap
              </p>
            </div>

            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <GlobeAltIcon className="h-8 w-8 text-emerald-500 mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Perdagangan Antarabangsa</h4>
              <p className="text-sppp-gray text-sm">
                Memudahkan perdagangan import dan eksport untuk industri pembinaan wilayah utara
              </p>
            </div>

            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <MapPinIcon className="h-8 w-8 text-emerald-500 mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Pembangunan Wilayah</h4>
              <p className="text-sppp-gray text-sm">
                Memacu pembangunan ekonomi tempatan dan mewujudkan peluang pekerjaan di Langkawi
              </p>
            </div>
          </div>
        </div>

        {/* Administrative Structure */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
              <ScaleIcon className="h-7 w-7 mr-3 text-emerald-600" />
              Struktur Pentadbiran
            </h3>

            <div className="space-y-4">
              <div className="border-l-4 border-emerald-500 pl-4">
                <h4 className="font-semibold text-sppp-dark-blue">Pihak Berkuasa Pelabuhan</h4>
                <p className="text-sppp-gray text-sm">Suruhanjaya Pelabuhan Pulau Pinang (SPPP)</p>
                <p className="text-xs text-sppp-gray mt-1">Berkuat kuasa 1 Januari 1999</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-sppp-dark-blue">Pengendali Operasi</h4>
                <p className="text-sppp-gray text-sm">Kedah Cement Jetty Sdn Bhd</p>
                <p className="text-xs text-sppp-gray mt-1">Pengendali khusus industri simen</p>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-lg p-4 mt-6">
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Fungsi SPPP</h4>
              <ul className="space-y-1 text-sm text-sppp-gray">
                <li>• Pengurusan kemudahan pelabuhan</li>
                <li>• Menetapkan standard prestasi</li>
                <li>• Kutipan duti pelabuhan</li>
                <li>• Pengurusan lesen dan permit</li>
                <li>• Penyelenggaraan laluan masuk pelabuhan</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
              <PhoneIcon className="h-7 w-7 mr-3 text-emerald-600" />
              Maklumat Hubungan
            </h3>

            <div className="space-y-6">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-sppp-dark-blue mb-3">SPPP Teluk Ewa</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <PhoneIcon className="h-4 w-4 text-emerald-500 mr-2" />
                    <span className="text-sppp-gray">+604 9594311</span>
                  </div>
                  <div className="flex items-center">
                    <DocumentTextIcon className="h-4 w-4 text-emerald-500 mr-2" />
                    <span className="text-sppp-gray">+604 9592311 (Faks)</span>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-sppp-dark-blue mb-3">Pengendali Pelabuhan</h4>
                <p className="text-sm text-sppp-gray mb-2">Kedah Cement Jetty Sdn Bhd</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <PhoneIcon className="h-4 w-4 text-blue-500 mr-2" />
                    <span className="text-sppp-gray">+604 9594600</span>
                  </div>
                  <div className="flex items-center">
                    <DocumentTextIcon className="h-4 w-4 text-blue-500 mr-2" />
                    <span className="text-sppp-gray">+604 9594598 (Faks)</span>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4 bg-blue-50">
                <h4 className="font-semibold text-sppp-dark-blue mb-2">Alamat Penuh</h4>
                <p className="text-sm text-sppp-gray">
                  Ayer Hangat Mukim, Teluk Ewa<br />
                  07000 Langkawi, Kedah<br />
                  Malaysia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Legacy */}
        <div className="bg-gradient-to-r from-sppp-light-gray to-emerald-100 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <GlobeAltIcon className="h-7 w-7 mr-3 text-emerald-600" />
            Warisan dan Impak Strategik
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Perintis Industri</h4>
              <p className="text-sppp-gray text-sm">
                Antara kemudahan pelabuhan industri terawal di Malaysia yang dikhususkan untuk sokongan industri simen
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Model Kerjasama</h4>
              <p className="text-sppp-gray text-sm">
                Contoh kejayaan kerjasama antara sektor awam dan swasta dalam pengurusan kemudahan pelabuhan
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Kestabilan Operasi</h4>
              <p className="text-sppp-gray text-sm">
                Lebih 40 tahun operasi yang konsisten menunjukkan kepentingan strategik dalam rantaian bekalan industri
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}