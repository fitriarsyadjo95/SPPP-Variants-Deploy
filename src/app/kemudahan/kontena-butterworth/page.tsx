import { PageTemplate } from '@/components/PageTemplate'

export default function PengkalanKontenaButterworthUtaraPage() {
  return (
    <PageTemplate
      title="Pengkalan Kontena Butterworth Utara (NBCT)"
      subtitle="Terminal kontena strategik dengan kapasiti 2.3 juta TEU setahun"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Kemudahan', href: '/kemudahan' }, { name: 'Kontena Butterworth' }]}
    >
      <div className="max-w-none">
        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">67</div>
            <div className="text-sm text-sppp-gray">Hektar</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600">2.3M</div>
            <div className="text-sm text-sppp-gray">TEU</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">6</div>
            <div className="text-sm text-sppp-gray">Dermaga</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">648</div>
            <div className="text-sm text-sppp-gray">Reefer</div>
          </div>
          <div className="bg-teal-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-teal-600">24/7</div>
            <div className="text-sm text-sppp-gray">Operasi</div>
          </div>
        </div>

        {/* Development Plan Table */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Pelan Pengembangan NBCT
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-sppp-light-gray">
                  <th className="px-4 py-3 text-left text-sppp-dark-blue font-semibold">Fasa</th>
                  <th className="px-4 py-3 text-left text-sppp-dark-blue font-semibold">Tahun</th>
                  <th className="px-4 py-3 text-left text-sppp-dark-blue font-semibold">Kapasiti TEU</th>
                  <th className="px-4 py-3 text-left text-sppp-dark-blue font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-sppp-dark-blue">Fasa 1A</td>
                  <td className="px-4 py-3 text-sppp-gray">2021-2025</td>
                  <td className="px-4 py-3 text-sppp-gray">2.3 juta</td>
                  <td className="px-4 py-3"><span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Pelaksanaan</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-sppp-dark-blue">Fasa 1B</td>
                  <td className="px-4 py-3 text-sppp-gray">2026-2030</td>
                  <td className="px-4 py-3 text-sppp-gray">2.7 juta</td>
                  <td className="px-4 py-3"><span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Dirancang</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-sppp-dark-blue">Fasa 2A</td>
                  <td className="px-4 py-3 text-sppp-gray">2031-2033</td>
                  <td className="px-4 py-3 text-sppp-gray">3.1 juta</td>
                  <td className="px-4 py-3"><span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Dirancang</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-sppp-dark-blue">Fasa 2B</td>
                  <td className="px-4 py-3 text-sppp-gray">2034-2037</td>
                  <td className="px-4 py-3 text-sppp-gray">3.7 juta</td>
                  <td className="px-4 py-3"><span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Dirancang</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-sppp-dark-blue">Fasa 3A</td>
                  <td className="px-4 py-3 text-sppp-gray">2041-2047</td>
                  <td className="px-4 py-3 text-sppp-gray">5.3 juta</td>
                  <td className="px-4 py-3"><span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Jangka Panjang</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-sppp-dark-blue">Fasa 3B</td>
                  <td className="px-4 py-3 text-sppp-gray">2048-2051</td>
                  <td className="px-4 py-3 text-sppp-gray font-bold">7.8 juta</td>
                  <td className="px-4 py-3"><span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Matlamat Akhir</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Services */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Perkhidmatan
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Pemunggahan Kontena</h4>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Penyimpanan Kontena</h4>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Reefer Container</h4>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Container Freight Station</h4>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Perkhidmatan Kastam</h4>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Sambungan Kereta Api</h4>
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
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Telefon</h4>
              <p className="text-sm text-sppp-gray">604-263-3211</p>
            </div>
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-2">E-mel</h4>
              <p className="text-sm text-sppp-gray">sppp@penangport.gov.my</p>
            </div>
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Operasi</h4>
              <p className="text-sm text-sppp-gray">24 jam/7 hari</p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}