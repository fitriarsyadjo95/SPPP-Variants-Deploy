import { Metadata } from 'next';
import { PageTemplate } from '@/components/PageTemplate';
import {
  MapPinIcon,
  ClockIcon,
  UsersIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Perkhidmatan Feri | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Perkhidmatan feri penghubung utama antara Butterworth dan George Town dengan jadual lengkap dan maklumat operasi',
};

export default function PerkhidmatanFeriPage() {
  return (
    <PageTemplate
      title="Perkhidmatan Feri Pulau Pinang"
      subtitle="Penghubung utama antara daratan dan pulau dengan perkhidmatan berkualiti"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Kemudahan', href: '/kemudahan' }, { name: 'Perkhidmatan Feri' }]}
    >
      <div className="max-w-none">
        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">150+</div>
            <div className="text-sm text-sppp-gray">Penumpang</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">50+</div>
            <div className="text-sm text-sppp-gray">Motosikal</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-1">70</div>
            <div className="text-sm text-sppp-gray">Trip/Hari</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">17</div>
            <div className="text-sm text-sppp-gray">Jam Operasi</div>
          </div>
        </div>

        {/* Lokasi Pangkalan Feri */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <MapPinIcon className="h-7 w-7 mr-3 text-green-600" />
            Lokasi Pangkalan Feri
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-blue-900 mb-3">Pangkalan Sultan Abdul Halim</h4>
              <p className="text-blue-700 mb-4">Butterworth (Tanah Besar)</p>
              <div className="space-y-2 text-sm text-blue-600">
                <p>📍 Jalan Pangkalan Butterworth</p>
                <p>🅿️ Tempat letak kereta tersedia</p>
                <p>🚌 Perhubungan bas awam</p>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-green-900 mb-3">Pangkalan Raja Tun Uda</h4>
              <p className="text-green-700 mb-4">George Town (Pulau)</p>
              <div className="space-y-2 text-sm text-green-600">
                <p>📍 Pengkalan Weld, George Town</p>
                <p>🏛️ Berdekatan UNESCO Heritage Site</p>
                <p>🚕 Kemudahan teksi & Grab</p>
              </div>
            </div>
          </div>
        </div>

        {/* Jadual Perkhidmatan Feri */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <CalendarDaysIcon className="h-7 w-7 mr-3 text-blue-600" />
            Jadual Perkhidmatan Feri
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Butterworth to George Town */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-4">Butterworth → George Town</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-blue-700">Bertolak Pertama</span>
                  <span className="font-semibold text-blue-900">07:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Bertolak Terakhir</span>
                  <span className="font-semibold text-blue-900">23:30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Selang Masa</span>
                  <span className="font-semibold text-blue-900">10-15 minit</span>
                </div>
              </div>
            </div>

            {/* George Town to Butterworth */}
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-green-900 mb-4">George Town → Butterworth</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-green-700">Bertolak Pertama</span>
                  <span className="font-semibold text-green-900">06:30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700">Bertolak Terakhir</span>
                  <span className="font-semibold text-green-900">23:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700">Selang Masa</span>
                  <span className="font-semibold text-green-900">10-15 minit</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tambang */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Tambang & Pembayaran
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-4">Tambang Semasa</h4>
              <div className="space-y-2">
                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span>Dewasa</span>
                  <span className="font-semibold text-green-600">RM 1.20</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span>Kanak-kanak</span>
                  <span className="font-semibold text-green-600">RM 0.60</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span>Warga Emas</span>
                  <span className="font-semibold text-green-600">RM 0.60</span>
                </div>
                <div className="flex justify-between p-3 bg-blue-50 rounded-lg">
                  <span>Motosikal</span>
                  <span className="font-semibold text-blue-600">RM 2.00</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-4">Cara Pembayaran</h4>
              <div className="space-y-2">
                <div className="p-3 bg-green-50 rounded-lg">Kad Touch 'n Go</div>
                <div className="p-3 bg-green-50 rounded-lg">Token</div>
                <div className="p-3 bg-green-50 rounded-lg">Wang tunai</div>
              </div>
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
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Butterworth</h4>
              <p className="text-sm text-sppp-gray">604-210-0144</p>
            </div>
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-2">George Town</h4>
              <p className="text-sm text-sppp-gray">604-210-0088</p>
            </div>
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Operasi</h4>
              <p className="text-sm text-sppp-gray">06:30 - 23:30 (Setiap hari)</p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}