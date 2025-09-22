import { Metadata } from 'next';
import { PageTemplate } from '@/components/PageTemplate';
import {
  WrenchScrewdriverIcon,
  MapPinIcon,
  CpuChipIcon,
  BeakerIcon,
  ClockIcon,
  PhoneIcon,
  CheckCircleIcon,
  FireIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Kraf-kraf Pelabuhan | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Armada kapal dan kraf pelabuhan termasuk tugboat, bot pandu, kapal keruk dan bot hidrografi untuk operasi maritim',
  keywords: 'tugboat, bot pandu, kapal keruk, bot hidrografi, kraf pelabuhan, operasi maritim',
};

export default function KrafkrafPelabuhanPage() {
  return (
    <PageTemplate
      title="Kraf-kraf Pelabuhan"
      subtitle="Armada kapal dan kraf pelabuhan untuk sokongan operasi maritim yang selamat dan cekap"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Kemudahan', href: '/kemudahan' }, { name: 'Kraf-kraf Pelabuhan' }]}
    >
      <div className="max-w-none">
        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">4</div>
            <div className="text-sm text-sppp-gray">Tugboat</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">4</div>
            <div className="text-sm text-sppp-gray">Bot Pandu</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-1">1</div>
            <div className="text-sm text-sppp-gray">Kapal Keruk</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">1</div>
            <div className="text-sm text-sppp-gray">Bot Hidrografi</div>
          </div>
        </div>

        {/* Tugboats */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <WrenchScrewdriverIcon className="h-7 w-7 mr-3 text-blue-600" />
            Tugboat
          </h3>
          <p className="text-sppp-gray mb-6">
            Armada tugboat SPPP beroperasi 24/7 untuk membantu kapal yang tiba dan berlepas dari pelabuhan.
            Semua tugboat dilengkapi dengan peralatan firefighting untuk kecemasan.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Nama Tugboat</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Tahun Dibina</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Panjang</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Kuasa Enjin</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm font-medium">Kantan Mesra</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">1993</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">32.75m</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">2,400 BHP</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm font-medium">Manta Ray</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">1984</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">24.38m</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">1,324 BHP</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm font-medium">Eagle Ray</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">1985</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">24.38m</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">1,324 BHP</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm font-medium">Nadional</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">1989</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">24.38m</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">1,324 BHP</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">Jenis Perkhidmatan</h4>
              <ul className="space-y-2 text-sm text-blue-700">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-blue-600" />
                  Berthing assistance
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-blue-600" />
                  Unberthing operations
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-blue-600" />
                  Ship escort
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-blue-600" />
                  Emergency response
                </li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-6">
              <h4 className="font-semibold text-red-900 mb-3 flex items-center">
                <FireIcon className="h-5 w-5 mr-2 text-red-600" />
                Ciri Keselamatan
              </h4>
              <ul className="space-y-2 text-sm text-red-700">
                <li>• Dilengkapi peralatan firefighting</li>
                <li>• Beroperasi 24/7</li>
                <li>• Crew terlatih dan berpengalaman</li>
                <li>• Maintenance berkala untuk keandalan</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pilot Boats */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <MapPinIcon className="h-7 w-7 mr-3 text-green-600" />
            Bot Pandu (Pilot Boats)
          </h3>
          <p className="text-sppp-gray mb-6">
            Bot pandu berkelajuan tinggi untuk mengangkut pandu berlesen ke kapal yang memerlukan perkhidmatan pemaliman.
            Beroperasi 24/7 untuk memastikan kapal dapat masuk dan keluar pelabuhan dengan selamat.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Nama Bot</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Tahun Dibina</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Panjang</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Kelajuan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm font-medium">FM 1</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">1999</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">15.24m</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">30 knots</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm font-medium">FM 2</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">1999</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">15.24m</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">30 knots</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm font-medium">SP 50</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">2007</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">12.18m</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">25 knots</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm font-medium">SP 52</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">2012</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">12.18m</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">25 knots</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h4 className="font-semibold text-green-900 mb-3">Kawasan Operasi</h4>
            <div className="space-y-2 text-sm text-green-700">
              <p>• Pilot Boarding Ground - 3NM dari pelabuhan</p>
              <p>• Georgetown Port approach</p>
              <p>• Butterworth Deep Water Wharves</p>
              <p>• Prai Bulk Cargo Terminal</p>
              <p>• Container terminals</p>
              <p>• Cruise terminal</p>
            </div>
          </div>
        </div>

        {/* Dredging Vessel */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <BeakerIcon className="h-7 w-7 mr-3 text-orange-600" />
            Kapal Keruk (Dredging Vessel)
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sppp-gray mb-4">
                Kapal keruk SPPP berperanan penting dalam mengekalkan kedalaman saluran pelabuhan dan
                kawasan bersandar untuk memastikan akses kapal yang selamat.
              </p>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Kegunaan:</h4>
              <ul className="space-y-2 text-sppp-gray">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-orange-600" />
                  Maintenance kedalaman saluran
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-orange-600" />
                  Pembersihan endapan lumpur
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-orange-600" />
                  Kerja-kerja pendalaman
                </li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-lg p-6">
              <h4 className="font-semibold text-orange-900 mb-3">Kuala Juru</h4>
              <div className="space-y-2 text-sm text-orange-700">
                <p><strong>Kuasa Enjin:</strong> 190 BHP</p>
                <p><strong>Jenis:</strong> Suction Dredger</p>
                <p><strong>Operasi:</strong> Mengikut keperluan</p>
                <p><strong>Kegunaan:</strong> Maintenance saluran pelabuhan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hydrographic Boat */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <CpuChipIcon className="h-7 w-7 mr-3 text-purple-600" />
            Bot Hidrografi (Hydrographic Boat)
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sppp-gray mb-4">
                Bot hidrografi digunakan untuk kerja-kerja survei dan pemetaan dasar laut bagi memastikan
                keselamatan navigasi dan operasi pelabuhan.
              </p>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Kegunaan:</h4>
              <ul className="space-y-2 text-sppp-gray">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-purple-600" />
                  Survei hidrografi
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-purple-600" />
                  Pemetaan dasar laut
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-purple-600" />
                  Monitoring kedalaman
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-purple-600" />
                  Data collection untuk navigasi
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="font-semibold text-purple-900 mb-3">Sri Tanjung</h4>
              <div className="space-y-2 text-sm text-purple-700">
                <p><strong>Kuasa Enjin:</strong> 2 x 500 BHP</p>
                <p><strong>Jenis:</strong> Survey Vessel</p>
                <p><strong>Peralatan:</strong> Sonar & GPS mapping</p>
                <p><strong>Kegunaan:</strong> Survei hidrografi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Maklumat Operasi & Hubungan
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Operasi</h4>
              <div className="space-y-2 text-sppp-gray">
                <p className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-2 text-sppp-blue" />
                  24/7 untuk tugboat dan bot pandu
                </p>
                <p className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Advance booking required
                </p>
                <p className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-orange-600" />
                  Weather dependent untuk kerja keruk
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Hubungan</h4>
              <div className="space-y-2 text-sppp-gray">
                <p className="flex items-center">
                  <PhoneIcon className="h-4 w-4 mr-2 text-sppp-blue" />
                  Marine Operations: +604 310 2334
                </p>
                <p className="flex items-center">
                  <PhoneIcon className="h-4 w-4 mr-2 text-green-600" />
                  Marine Services Chief: +604 310 2332
                </p>
                <p>📧 Email: marine@penangport.gov.my</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Maklumat Penting:</strong> Semua kraf pelabuhan diselenggarakan mengikut piawaian maritim antarabangsa
              dan menjalani pemeriksaan berkala untuk memastikan keselamatan dan keandalan operasi.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}