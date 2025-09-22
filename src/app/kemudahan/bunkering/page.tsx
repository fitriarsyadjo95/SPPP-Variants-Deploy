import { Metadata } from 'next';
import { PageTemplate } from '@/components/PageTemplate';
import {
  BeakerIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Perkhidmatan Bunkering | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Perkhidmatan bekalan minyak dan bahan bakar untuk kapal-kapal di pelabuhan dengan 10 syarikat bunkering berlesen',
  keywords: 'bunkering, bekalan minyak, bahan bakar kapal, marine fuel, bunker services',
};

export default function PerkhidmatanBunkeringPage() {
  return (
    <PageTemplate
      title="Perkhidmatan Bunkering"
      subtitle="Perkhidmatan bekalan minyak dan bahan bakar untuk kapal-kapal dengan 10 syarikat bunkering berlesen"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Kemudahan', href: '/kemudahan' }, { name: 'Bunkering' }]}
    >
      <div className="max-w-none">
        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">10</div>
            <div className="text-sm text-sppp-gray">Syarikat Berlesen</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">24/7</div>
            <div className="text-sm text-sppp-gray">Ketersediaan</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-1">5</div>
            <div className="text-sm text-sppp-gray">Jenis Bahan Bakar</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">3</div>
            <div className="text-sm text-sppp-gray">Kawasan Operasi</div>
          </div>
        </div>

        {/* Safety Warning */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 mb-8 rounded-lg">
          <div className="flex items-center">
            <ExclamationTriangleIcon className="h-8 w-8 text-red-600 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-red-900 mb-2">Amaran Keselamatan</h3>
              <p className="text-red-800">
                Operasi bunkering adalah berisiko tinggi. Semua kapal mesti mematuhi piawaian keselamatan antarabangsa
                dan prosedur keselamatan pelabuhan semasa operasi bekalan bahan bakar.
              </p>
            </div>
          </div>
        </div>

        {/* About Bunkering */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <BeakerIcon className="h-7 w-7 mr-3 text-blue-600" />
            Tentang Perkhidmatan Bunkering
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sppp-gray mb-4">
                Pelabuhan Pulau Pinang menyediakan perkhidmatan bunkering komprehensif melalui 10 syarikat berlesen
                yang menawarkan pelbagai jenis bahan bakar maritim untuk memenuhi keperluan kapal domestik dan antarabangsa.
              </p>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Jenis Bahan Bakar:</h4>
              <ul className="space-y-2 text-sppp-gray">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-blue-600" />
                  Marine Gas Oil (MGO)
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-blue-600" />
                  Intermediate Fuel Oil (IFO)
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-blue-600" />
                  Heavy Fuel Oil (HFO)
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-blue-600" />
                  Low Sulphur Fuel Oil (LSFO)
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-blue-600" />
                  Ultra Low Sulphur Fuel Oil (ULSFO)
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">Kawasan Operasi</h4>
              <div className="space-y-2 text-sm text-blue-700">
                <p>• Georgetown Port Terminal</p>
                <p>• Butterworth Deep Water Wharves</p>
                <p>• Prai Bulk Cargo Terminal</p>
                <p>• Container terminals</p>
                <p>• Anchor areas (mengikut cuaca)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Licensed Bunkering Companies */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <BuildingOfficeIcon className="h-7 w-7 mr-3 text-green-600" />
            Syarikat Bunkering Berlesen
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Nama Syarikat</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Lokasi</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Telefon</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm font-medium">Shell Malaysia Trading Sdn. Bhd.</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Butterworth</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">04-332 8888</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm font-medium">Esso Malaysia Sdn. Bhd.</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Penang</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">04-226 3511</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm font-medium">Chevron Malaysia Limited</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Butterworth</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">04-332 7200</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm font-medium">Mekar Serunding Sdn. Bhd</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Prai</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">04-390 6919</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm font-medium">New Matac Sdn. Bhd</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Butterworth</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">04-331 1186</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm font-medium">Oriental Global Shipping & Services Sdn. Bhd.</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Harbor Trade Centre</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">04-264 2233</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm font-medium">Fast Meridian Sdn. Bhd</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Butterworth</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">04-331 9891</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm font-medium">Sin Soon Hock Sdn. Bhd.</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Penang</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">04-261 8886</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm font-medium">Ever Vital Sdn. Bhd</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Butterworth</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">04-332 3388</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm font-medium">Zue Huat Trading Sdn. Bhd.</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Penang</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">04-228 1234</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Safety & Procedures */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <ShieldCheckIcon className="h-7 w-7 mr-3 text-red-600" />
            Keselamatan & Prosedur
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-4">Keperluan Keselamatan</h4>
              <ul className="space-y-2 text-sppp-gray">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-red-600" />
                  ISPS Code compliance
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-red-600" />
                  Hot work permit diperlukan
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-red-600" />
                  Fire safety equipment siap sedia
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-red-600" />
                  Oil spill response plan
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-red-600" />
                  VHF communication active
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-4">Prosedur Operasi</h4>
              <ul className="space-y-2 text-sppp-gray">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Advance booking 24 jam
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Port clearance diperlukan
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Weather condition check
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Quality testing & certification
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Documentation completion
                </li>
              </ul>
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
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Operasi Bunkering</h4>
              <div className="space-y-2 text-sppp-gray">
                <p className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-2 text-sppp-blue" />
                  24/7 (bergantung cuaca)
                </p>
                <p className="flex items-center">
                  <MapPinIcon className="h-4 w-4 mr-2 text-green-600" />
                  Semua terminal pelabuhan
                </p>
                <p className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-orange-600" />
                  Advance booking 24 jam
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
                  Port Control: +604 310 2211
                </p>
                <p>📧 Email: marine@penangport.gov.my</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>Nota Penting:</strong> Semua syarikat bunkering berlesen mematuhi piawaian kualiti antarabangsa
              dan prosedur keselamatan pelabuhan. Kapal disarankan menghubungi syarikat bunkering secara terus untuk
              membuat tempahan dan pengesahan ketersediaan.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}