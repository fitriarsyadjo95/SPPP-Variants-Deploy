import { Metadata } from 'next';
import { PageTemplate } from '@/components/PageTemplate';
import {
  MapPinIcon,
  ShieldCheckIcon,
  FireIcon,
  WrenchScrewdriverIcon,
  PhoneIcon,
  ClockIcon,
  CheckCircleIcon,
  TruckIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Perkhidmatan Sampingan | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Perkhidmatan sampingan komprehensif termasuk pilotage, tug boat, ship repair, security dan fire services untuk operasi pelabuhan',
  keywords: 'perkhidmatan sampingan, pilotage, tug boat, ship repair, security, fire services, ISPS code',
};

export default function PerkhidmatanSampinganPage() {
  return (
    <PageTemplate
      title="Perkhidmatan Sampingan"
      subtitle="Perkhidmatan sokongan komprehensif untuk operasi pelabuhan yang selamat dan cekap"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Kemudahan', href: '/kemudahan' }, { name: 'Perkhidmatan Sampingan' }]}
    >
      <div className="max-w-none">
        {/* Overview Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 mb-8 text-white">
          <div className="flex items-center mb-4">
            <TruckIcon className="h-12 w-12 mr-4" />
            <h2 className="text-3xl font-bold">
              Perkhidmatan Sokongan Pelabuhan
            </h2>
          </div>
          <p className="text-xl leading-relaxed mb-6">
            SPPP menyediakan rangkaian perkhidmatan sampingan yang komprehensif untuk menyokong operasi pelabuhan,
            memastikan keselamatan, kecekapan dan pematuhan kepada piawaian antarabangsa seperti ISPS Code.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm opacity-90">Operasi</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">5</div>
              <div className="text-sm opacity-90">Perkhidmatan Utama</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">700</div>
              <div className="text-sm opacity-90">Tan Ship Repair</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">ISPS</div>
              <div className="text-sm opacity-90">Compliant</div>
            </div>
          </div>
        </div>

        {/* Pilotage Services */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <MapPinIcon className="h-7 w-7 mr-3 text-blue-600" />
            Perkhidmatan Pemaliman (Pilotage)
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sppp-gray mb-4">
                Perkhidmatan pemaliman adalah wajib untuk kapal yang melebihi saiz tertentu dalam kawasan pelabuhan.
                Pandu berlesen kami memastikan kapal dapat masuk dan keluar pelabuhan dengan selamat.
              </p>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Keperluan Mandatory:</h4>
              <ul className="space-y-2 text-sppp-gray">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-blue-600" />
                  Kapal melebihi 600 tan dalam had pelabuhan
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-blue-600" />
                  Kapal melebihi 200 tan masuk/keluar jeti persendirian
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-blue-600" />
                  Semua kapal di dermaga pelabuhan
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">Kawasan Operasi</h4>
              <div className="space-y-2 text-sm text-blue-700">
                <p>• Kawasan had pelabuhan Pulau Pinang</p>
                <p>• Jeti persendirian di sekitar pelabuhan</p>
                <p>• Semua dermaga SPPP</p>
                <p>• Kawasan anchor dan approach channel</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tug Boat Services */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <WrenchScrewdriverIcon className="h-7 w-7 mr-3 text-orange-600" />
            Perkhidmatan Tug Boat
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sppp-gray mb-4">
                Armada tug boat SPPP beroperasi 24/7 untuk membantu kapal yang tiba dan berlepas dari pelabuhan.
                Semua tug boat dilengkapi dengan peralatan firefighting untuk kecemasan.
              </p>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Jenis Bantuan:</h4>
              <ul className="space-y-2 text-sppp-gray">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-orange-600" />
                  Berthing dan unberthing assistance
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-orange-600" />
                  Ship maneuvering dalam pelabuhan
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-orange-600" />
                  Emergency towing services
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-orange-600" />
                  Firefighting support
                </li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-lg p-6">
              <h4 className="font-semibold text-orange-900 mb-3">Ciri-ciri Tug Boat</h4>
              <div className="space-y-2 text-sm text-orange-700">
                <p>• Dilengkapi peralatan firefighting</p>
                <p>• Beroperasi 24/7</p>
                <p>• Crew terlatih dan berpengalaman</p>
                <p>• Maintenance berkala untuk keandalan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ship Repair Services */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <BeakerIcon className="h-7 w-7 mr-3 text-green-600" />
            Perkhidmatan Pembaikan Kapal
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sppp-gray mb-4">
                SPPP menyediakan perkhidmatan pembaikan dan penyelenggaraan untuk kapal milik pelabuhan
                serta perkhidmatan komersil untuk kapal sehingga 700 tan di Bagan Dalam Shipyard.
              </p>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Jenis Pembaikan:</h4>
              <ul className="space-y-2 text-sppp-gray">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Maintenance kapal milik pelabuhan
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Pembaikan komersil (sehingga 700 tan)
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Engine dan mechanical repairs
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Hull dan structural works
                </li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3">Lokasi</h4>
              <div className="space-y-2 text-sm text-green-700">
                <p><strong>Bagan Dalam Shipyard</strong></p>
                <p>• Kapasiti: Kapal sehingga 700 tan</p>
                <p>• Kemudahan: Workshop dan tools lengkap</p>
                <p>• Services: Commercial ship repairs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Fire Services */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Perkhidmatan Keselamatan & Bomba
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-4 flex items-center">
                <ShieldCheckIcon className="h-5 w-5 mr-2 text-blue-600" />
                Perkhidmatan Keselamatan
              </h4>
              <p className="text-sppp-gray mb-3">
                Pemantauan keselamatan 24/7 di semua pintu masuk dan keluar untuk memastikan
                keselamatan maksimum kemudahan pelabuhan mengikut ISPS Code.
              </p>
              <ul className="space-y-2 text-sppp-gray">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-blue-600" />
                  24/7 security monitoring
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-blue-600" />
                  ISPS Code compliance
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-blue-600" />
                  Access control systems
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-4 flex items-center">
                <FireIcon className="h-5 w-5 mr-2 text-red-600" />
                Perkhidmatan Bomba
              </h4>
              <p className="text-sppp-gray mb-3">
                Kemampuan firefighting untuk kawasan pelabuhan dan maritim dengan
                peralatan firefighting yang moden dan canggih.
              </p>
              <ul className="space-y-2 text-sppp-gray">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-red-600" />
                  Modern firefighting equipment
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-red-600" />
                  Maritime firefighting capabilities
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-red-600" />
                  Emergency response teams
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Maklumat Hubungan
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Perkhidmatan Marin</h4>
              <div className="space-y-2 text-sppp-gray">
                <p className="flex items-center">
                  <PhoneIcon className="h-4 w-4 mr-2 text-sppp-blue" />
                  Marine Services Chief: +604 310 2332
                </p>
                <p className="flex items-center">
                  <PhoneIcon className="h-4 w-4 mr-2 text-sppp-blue" />
                  Marine Operations Control: +604 310 2334
                </p>
                <p className="flex items-center">
                  <PhoneIcon className="h-4 w-4 mr-2 text-sppp-blue" />
                  Senior Marine Engineer: +604 310 2342
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Keselamatan & Bomba</h4>
              <div className="space-y-2 text-sppp-gray">
                <p className="flex items-center">
                  <PhoneIcon className="h-4 w-4 mr-2 text-red-600" />
                  Security & Fire Services Chief: +604 310 2275
                </p>
                <p className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-2 text-green-600" />
                  Operasi: 24 jam / 7 hari
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Pematuhan ISPS Code:</strong> Semua perkhidmatan sampingan SPPP mematuhi
              International Ship and Port Facility Security (ISPS) Code untuk memastikan keselamatan
              operasi pelabuhan dan kapal.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}