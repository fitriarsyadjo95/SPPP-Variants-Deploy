import { Metadata } from 'next';
import { PageTemplate } from '@/components/PageTemplate';
import {
  BeakerIcon,
  FireIcon,
  ShieldCheckIcon,
  ScaleIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Vegetable Oil Tanker Pier (VOTP) | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Terminal minyak sayur khusus dengan kapasiti 650,000 tan/tahun, dermaga 190m dan sambungan pipeline overhead ke tank farm',
  keywords: 'VOTP, Vegetable Oil Tanker Pier, minyak sayur, pipeline, tank farm, dolphin berth',
};

export default function JetiMinyakSayurPage() {
  return (
    <PageTemplate
      title="Vegetable Oil Tanker Pier (VOTP)"
      subtitle="Terminal khusus minyak sayur dengan kapasiti 650,000 tan/tahun dan sambungan pipeline overhead"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Kemudahan', href: '/kemudahan' }, { name: 'Jeti Minyak' }]}
    >
      <div className="max-w-none">
        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-orange-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-1">650K</div>
            <div className="text-sm text-sppp-gray">Tan/Tahun</div>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">190m</div>
            <div className="text-sm text-sppp-gray">Dermaga W2</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">108</div>
            <div className="text-sm text-sppp-gray">Tangki Penyimpanan</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
            <div className="text-sm text-sppp-gray">Emergency Response</div>
          </div>
        </div>

        {/* Safety Warning Banner */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 mb-8 rounded-lg">
          <div className="flex items-center">
            <ExclamationTriangleIcon className="h-8 w-8 text-red-600 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-red-900 mb-2">Kemudahan Keselamatan Tinggi</h3>
              <p className="text-red-800">
                VOTP adalah terminal khusus untuk pengendalian minyak sayur dengan piawaian keselamatan antarabangsa.
                Akses terhad dan monitoring berterusan dijalankan untuk memastikan keselamatan operasi.
              </p>
            </div>
          </div>
        </div>

        {/* About VOTP */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <BeakerIcon className="h-7 w-7 mr-3 text-orange-600" />
            Mengenai VOTP
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sppp-gray mb-4">
                Vegetable Oil Tanker Pier (VOTP) adalah terminal khusus yang dibangunkan untuk pengendalian minyak sayur
                dengan sambungan pipeline overhead terus ke tank farm milik persendirian. Sistem ini membolehkan
                pemunggahan dan pemuatan yang cekap tanpa pengendalian konvensional.
              </p>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Keunikan VOTP:</h4>
              <ul className="space-y-2 text-sppp-gray">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Pipeline overhead connection
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Direct loading/discharging
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Reduced handling costs
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Enhanced safety measures
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Spesifikasi Teknikal:</h4>
              <div className="space-y-2">
                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span>Dolphin Berth</span>
                  <span className="font-semibold">90m (8m kedalaman)</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span>W2 Berth</span>
                  <span className="font-semibold">190m (10m kedalaman)</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span>Tank Farm</span>
                  <span className="font-semibold">136,970 tan</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span>Kapasiti Tahunan</span>
                  <span className="font-semibold">650,000 tan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pipeline System */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <ArrowPathIcon className="h-7 w-7 mr-3 text-orange-600" />
            Sistem Pipeline & Proses Operasi
          </h3>
          <div className="grid gap-6 md:grid-cols-3 mb-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border-l-4 border-blue-500">
              <div className="text-4xl mb-3">🚢</div>
              <h4 className="font-semibold text-blue-900 mb-2">1. Kapal Tangki Tiba</h4>
              <p className="text-sm text-blue-700">Kapal tangki bersauh di jeti khusus dengan sistem mooring yang selamat</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border-l-4 border-orange-500">
              <div className="text-4xl mb-3">🔗</div>
              <h4 className="font-semibold text-orange-900 mb-2">2. Sambungan Pipeline</h4>
              <p className="text-sm text-orange-700">Sambungan pipeline overhead dengan leak detection system</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border-l-4 border-green-500">
              <div className="text-4xl mb-3">🏭</div>
              <h4 className="font-semibold text-green-900 mb-2">3. Pemindahan ke Tank</h4>
              <p className="text-sm text-green-700">Minyak sayur dipindah terus ke tangki penyimpanan</p>
            </div>
          </div>
        </div>

        {/* Products Handled */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <ScaleIcon className="h-7 w-7 mr-3 text-orange-600" />
            Produk Cecair yang Dikendalikan
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-900 mb-3">Minyak Kelapa Sawit</h4>
              <div className="text-sm text-yellow-700 space-y-1">
                <p>• CPO (Crude Palm Oil)</p>
                <p>• RBD Palm Oil</p>
                <p>• Palm Kernel Oil</p>
                <p>• Olein & Stearin</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 mb-3">Minyak Sayur Lain</h4>
              <div className="text-sm text-green-700 space-y-1">
                <p>• Soybean Oil</p>
                <p>• Sunflower Oil</p>
                <p>• Coconut Oil</p>
                <p>• Corn Oil</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-900 mb-3">Produk Khusus</h4>
              <div className="text-sm text-orange-700 space-y-1">
                <p>• Refined Cooking Oil</p>
                <p>• Industrial Oil</p>
                <p>• Bio-diesel feedstock</p>
                <p>• Oleochemicals</p>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Features */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <FireIcon className="h-7 w-7 mr-3 text-red-600" />
            Ciri-ciri Keselamatan & Alam Sekitar
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-4 flex items-center">
                <ShieldCheckIcon className="h-5 w-5 mr-2 text-red-600" />
                Sistem Keselamatan
              </h4>
              <ul className="space-y-2 text-sppp-gray">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-red-600" />
                  Fire suppression system dengan foam dan water spray
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-red-600" />
                  Gas detection sensors untuk kebocoran
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-red-600" />
                  Emergency response team 24/7
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-red-600" />
                  Emergency shutdown system
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-4 flex items-center">
                <BeakerIcon className="h-5 w-5 mr-2 text-green-600" />
                Perlindungan Alam Sekitar
              </h4>
              <ul className="space-y-2 text-sppp-gray">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Spill containment system
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Water quality monitoring berterusan
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Waste management mengikut ISO 14001
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Environmental compliance monitoring
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
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Waktu Operasi</h4>
              <div className="space-y-2 text-sppp-gray">
                <p className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-2 text-sppp-blue" />
                  Bergantung kepada tide conditions
                </p>
                <p className="flex items-center">
                  <ShieldCheckIcon className="h-4 w-4 mr-2 text-red-600" />
                  Safety clearance diperlukan
                </p>
                <p className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  24/7 emergency response
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Hubungan</h4>
              <div className="space-y-2 text-sppp-gray">
                <p className="flex items-center">
                  <PhoneIcon className="h-4 w-4 mr-2 text-sppp-blue" />
                  Marine Operations: 604-262-6211
                </p>
                <p className="flex items-center">
                  <PhoneIcon className="h-4 w-4 mr-2 text-red-600" />
                  Emergency Hotline: 604-XXX-XXXX
                </p>
                <p>📧 Email: marine@penangport.gov.my</p>
                <p>📋 Advance booking required</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
            <p className="text-sm text-red-800">
              <strong>Amaran Keselamatan:</strong> VOTP adalah kemudahan berisiko tinggi.
              Semua operasi mesti mematuhi Occupational Safety and Health Act (OSHA) dan piawaian keselamatan antarabangsa.
              Akses terhad kepada kakitangan yang diberi kuasa sahaja.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}