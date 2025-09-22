import { Metadata } from 'next';
import { 
  MapIcon, 
  ClockIcon, 
  UserGroupIcon, 
  ShieldCheckIcon,
  PhoneIcon,
  MapPinIcon,
  TruckIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Perkhidmatan Feri | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Perkhidmatan feri baharu dengan kapasiti 150 penumpang + 50 motosikal, beroperasi 70 perjalanan sehari',
};

export default function FerryServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <MapIcon className="h-16 w-16 mx-auto mb-4 text-blue-200" />
            <h1 className="text-4xl font-bold mb-4">Perkhidmatan Feri</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Perkhidmatan feri baharu yang menghubungkan Butterworth dan George Town dengan kapasiti dan kemudahan terkini
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Ferry Overview */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Perkhidmatan Feri Butterworth - George Town</h2>
            
            {/* Key Specifications */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Kapasiti dan Operasi</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <UserGroupIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Kapasiti Penumpang:</strong> 150 orang per perjalanan</span>
                  </li>
                  <li className="flex items-start">
                    <TruckIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Kapasiti Motosikal:</strong> 50 unit per perjalanan</span>
                  </li>
                  <li className="flex items-start">
                    <ClockIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Frekuensi:</strong> 70 perjalanan sehari setiap 30 minit</span>
                  </li>
                  <li className="flex items-start">
                    <GlobeAltIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Masa Operasi:</strong> Setiap hari dari 6:00 pagi hingga 11:00 malam</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Kemudahan dan Keselamatan</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <ShieldCheckIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Penyaman Udara:</strong> Penuh untuk keselesaan penumpang</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheckIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Sistem CCTV:</strong> Pemantauan keselamatan 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <UserGroupIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Kemudahan OKU:</strong> Akses mudah untuk pengguna berkeperluan khas</span>
                  </li>
                  <li className="flex items-start">
                    <MapPinIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Sistem Navigasi:</strong> GPS dan radar canggih</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Route Information */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Maklumat Laluan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <MapPinIcon className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-gray-900">Terminal Butterworth</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Berhampiran dengan stesen kereta api dan terminal bas Butterworth
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Alamat:</strong> Jalan Pengkalan Raja Tun Uda, Butterworth, Penang
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <MapPinIcon className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-gray-900">Terminal George Town</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Di pusat bandar George Town, UNESCO World Heritage Site
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Alamat:</strong> Pengkalan Weld, George Town, Penang
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ferry Performance Statistics */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Prestasi Perkhidmatan Feri</h2>

            {/* Performance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 text-center">
                <UserGroupIcon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-800">2.86M</div>
                <div className="text-sm text-blue-600">Penumpang 2024</div>
                <div className="text-xs text-green-600 mt-1">+29.9% dari 2023</div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6 text-center">
                <TruckIcon className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-800">737K</div>
                <div className="text-sm text-green-600">Motosikal 2024</div>
                <div className="text-xs text-green-600 mt-1">+142.8% dari 2023</div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6 text-center">
                <ClockIcon className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-800">15 min</div>
                <div className="text-sm text-purple-600">Masa Perjalanan</div>
                <div className="text-xs text-gray-600 mt-1">Purata setiap laluan</div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6 text-center">
                <ShieldCheckIcon className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-800">99.2%</div>
                <div className="text-sm text-orange-600">Kebolehpercayaan</div>
                <div className="text-xs text-gray-600 mt-1">Perjalanan tepat masa</div>
              </div>
            </div>

            {/* Historical Performance */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Trend Penggunaan Tahunan</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-sm text-gray-600">2021</div>
                  <div className="text-lg font-bold text-gray-800">0.80M</div>
                  <div className="text-xs text-gray-500">penumpang</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">2022</div>
                  <div className="text-lg font-bold text-gray-800">1.54M</div>
                  <div className="text-xs text-green-600">+92.5%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">2023</div>
                  <div className="text-lg font-bold text-gray-800">2.20M</div>
                  <div className="text-xs text-green-600">+42.9%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">2024</div>
                  <div className="text-lg font-bold text-blue-800">2.86M</div>
                  <div className="text-xs text-green-600">+29.9%</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule and Pricing */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Jadual dan Harga Tambang</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Jadual Operasi</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="font-semibold text-blue-600 mb-2">Hari Biasa (Isnin - Jumaat)</div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Perjalanan Pertama: 6:00 pagi</li>
                      <li>• Perjalanan Terakhir: 11:00 malam</li>
                      <li>• Selang masa: Setiap 30 minit</li>
                      <li>• Jumlah perjalanan: 34 perjalanan sehari</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="font-semibold text-blue-600 mb-2">Hujung Minggu & Cuti Umum</div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Perjalanan Pertama: 6:00 pagi</li>
                      <li>• Perjalanan Terakhir: 11:30 malam</li>
                      <li>• Selang masa: Setiap 20 minit (waktu puncak)</li>
                      <li>• Jumlah perjalanan: 70 perjalanan sehari</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Harga Tambang</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="font-semibold text-blue-600 mb-2">Penumpang</div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Dewasa: RM 1.20 (sehala)</li>
                      <li>• Kanak-kanak (3-12 tahun): RM 0.60</li>
                      <li>• Warga Emas (60+ tahun): RM 0.60</li>
                      <li>• Pelajar: RM 0.60 (dengan kad pelajar)</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="font-semibold text-blue-600 mb-2">Kenderaan</div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Motosikal: RM 1.70 (termasuk pemandu)</li>
                      <li>• Skuter: RM 1.50 (termasuk pemandu)</li>
                      <li>• Basikal: RM 0.30</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services and Facilities */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Kemudahan dan Perkhidmatan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 border rounded-lg">
                <UserGroupIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Kemudahan Penumpang</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tempat duduk yang selesa</li>
                  <li>• Kawasan penyimpanan bagasi</li>
                  <li>• Toilet yang bersih</li>
                  <li>• Ruang untuk OKU</li>
                </ul>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <ShieldCheckIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Keselamatan</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Sistem CCTV 24/7</li>
                  <li>• Peralatan keselamatan maritim</li>
                  <li>• Anak kapal terlatih</li>
                  <li>• Komunikasi radio VHF</li>
                </ul>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <ClockIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Perkhidmatan Tambahan</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Maklumat cuaca dan lalu lintas</li>
                  <li>• Bantuan untuk OKU</li>
                  <li>• Sistem tiket elektronik</li>
                  <li>• WiFi percuma (dalam perancangan)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Hubungi Kami untuk Maklumat Perkhidmatan Feri
          </h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Untuk maklumat lanjut tentang jadual, harga tambang, atau perkhidmatan feri, sila hubungi kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/hubungi"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Hubungi Kami
            </a>
            <a 
              href="/services"
              className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Perkhidmatan Lain
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}