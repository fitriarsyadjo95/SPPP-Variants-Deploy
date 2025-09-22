import { Metadata } from 'next';
import { PageTemplate } from '@/components/PageTemplate';
import {
  GlobeAltIcon,
  CpuChipIcon,
  MapPinIcon,
  WrenchScrewdriverIcon,
  ClockIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Perkhidmatan Marin | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Perkhidmatan marin komprehensif termasuk VTMS, bot pandu, tug boat, pemaliman dan pengurusan lesen maritim',
};

export default function PerkhidmatanMarinPage() {
  return (
    <PageTemplate
      title="Perkhidmatan Marin"
      subtitle="Perkhidmatan marin komprehensif dengan teknologi canggih untuk keselamatan dan kecekapan maritim"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Kemudahan', href: '/kemudahan' }, { name: 'Perkhidmatan Marin' }]}
    >
      <div className="max-w-none">
        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
            <div className="text-sm text-sppp-gray">Operasi</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">15NM</div>
            <div className="text-sm text-sppp-gray">Kawasan Pantau</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-1">6</div>
            <div className="text-sm text-sppp-gray">Bot Pandu</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">4</div>
            <div className="text-sm text-sppp-gray">Tug Boat</div>
          </div>
        </div>

        {/* VTMS */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <CpuChipIcon className="h-7 w-7 mr-3 text-blue-600" />
            Vessel Traffic Management System (VTMS)
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <GlobeAltIcon className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Radar Surveillance</h4>
              <p className="text-sm text-sppp-gray">Pemantauan 24/7 dalam radius 15NM</p>
            </div>
            <div className="text-center">
              <CpuChipIcon className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">AIS Monitoring</h4>
              <p className="text-sm text-sppp-gray">Tracking real-time kapal</p>
            </div>
            <div className="text-center">
              <PhoneIcon className="h-12 w-12 text-orange-600 mx-auto mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">VHF Communication</h4>
              <p className="text-sm text-sppp-gray">Channel 16 & 12</p>
            </div>
          </div>
        </div>

        {/* Bot Pandu */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <MapPinIcon className="h-7 w-7 mr-3 text-green-600" />
            Perkhidmatan Bot Pandu
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-4">Spesifikasi</h4>
              <div className="space-y-2">
                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span>Jumlah Bot</span>
                  <span className="font-semibold">6 unit</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span>Panjang</span>
                  <span className="font-semibold">12-15 meter</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span>Kelajuan</span>
                  <span className="font-semibold">25-30 knots</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span>Operasi</span>
                  <span className="font-semibold">24/7/365</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-4">Kawasan Perkhidmatan</h4>
              <div className="space-y-2 text-sm text-sppp-gray">
                <p>• Pilot Boarding Ground - 3NM</p>
                <p>• Georgetown Port approach</p>
                <p>• Butterworth Deep Water Wharves</p>
                <p>• Prai Bulk Cargo Terminal</p>
                <p>• Container terminals</p>
                <p>• Cruise terminal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tug Boat Services & Table */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <WrenchScrewdriverIcon className="h-7 w-7 mr-3 text-orange-600" />
            Perkhidmatan Tug Boat
          </h3>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Nama Tug</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Bollard Pull</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Panjang</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-sppp-dark-blue">Kegunaan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm">SPPP Tug 1</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">45 tonnes</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">32m</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Kapal besar/Container</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm">SPPP Tug 2</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">35 tonnes</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">28m</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Kapal cargo/Bulk</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm">SPPP Tug 3</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">30 tonnes</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">26m</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">General cargo</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-sm">SPPP Tug 4</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">25 tonnes</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">24m</td>
                  <td className="border border-gray-300 px-4 py-3 text-sm">Kapal kecil/Emergency</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Jenis Perkhidmatan</h4>
              <ul className="text-sm text-sppp-gray space-y-1">
                <li>• Berthing assistance</li>
                <li>• Unberthing operations</li>
                <li>• Ship escort</li>
                <li>• Emergency response</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Ketersediaan</h4>
              <ul className="text-sm text-sppp-gray space-y-1">
                <li>• 24/7 standby</li>
                <li>• Emergency response</li>
                <li>• Weather dependent</li>
                <li>• Advance booking required</li>
              </ul>
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
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Marine Operations</h4>
              <p className="text-sm text-sppp-gray">604-262-6211</p>
            </div>
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-2">VTMS Control</h4>
              <p className="text-sm text-sppp-gray">604-263-3211</p>
            </div>
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-2">VHF Radio</h4>
              <p className="text-sm text-sppp-gray">Channel 16 (Emergency)<br />Channel 12 (Operations)</p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}