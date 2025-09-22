import { Metadata } from 'next';
import { 
  ShieldCheckIcon, 
  BuildingOfficeIcon,
  UserGroupIcon,
  GlobeAltIcon,
  MapPinIcon,
  ClockIcon,
  StarIcon,
  CameraIcon,
  ShoppingBagIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Perkhidmatan Cruise | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Terminal cruise SPCT yang dapat menampung kapal terbesar dunia dengan kemudahan mewah di UNESCO World Heritage Site',
};

export default function CruiseServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShieldCheckIcon className="h-16 w-16 mx-auto mb-4 text-blue-200" />
            <h1 className="text-4xl font-bold mb-4">Perkhidmatan Cruise</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Terminal cruise SPCT yang dapat menampung kapal cruise terbesar dunia di lokasi World Heritage UNESCO
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* SPCT Overview */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Swettenham Pier Cruise Terminal (SPCT)</h2>
            
            {/* Key Specifications */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Spesifikasi Terminal</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <BuildingOfficeIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Dermaga Utama:</strong> 820 meter dengan kedalaman 12 meter</span>
                  </li>
                  <li className="flex items-start">
                    <UserGroupIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Kapasiti:</strong> 12,000 penumpang serentak</span>
                  </li>
                  <li className="flex items-start">
                    <GlobeAltIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Kapal Terbesar:</strong> Mampu menampung kapal cruise terbesar dunia</span>
                  </li>
                  <li className="flex items-start">
                    <MapPinIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Lokasi Strategik:</strong> UNESCO World Heritage Site George Town</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Prestasi 2024</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <UserGroupIcon className="h-5 w-5 text-green-600 mt-1 mr-3" />
                    <span><strong>Penumpang:</strong> 1,046,165 penumpang (2024)</span>
                  </li>
                  <li className="flex items-start">
                    <BuildingOfficeIcon className="h-5 w-5 text-green-600 mt-1 mr-3" />
                    <span><strong>Kapal Cruise:</strong> 280+ kapal sepanjang tahun</span>
                  </li>
                  <li className="flex items-start">
                    <StarIcon className="h-5 w-5 text-green-600 mt-1 mr-3" />
                    <span><strong>Rating:</strong> 5 bintang dari kebanyakan syarikat cruise</span>
                  </li>
                  <li className="flex items-start">
                    <GlobeAltIcon className="h-5 w-5 text-green-600 mt-1 mr-3" />
                    <span><strong>Destinasi:</strong> Hub utama cruise Asia Tenggara</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Expansion and Development */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pembangunan dan Kemajuan</h3>
              <p className="text-gray-600 mb-4">
                SPCT terus dinaik taraf untuk menampung kapal cruise generasi baharu dengan kemudahan world-class yang 
                memenuhi standard antarabangsa industri cruise.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded p-4">
                  <div className="font-semibold text-blue-600">Terminal Building</div>
                  <div className="text-sm text-gray-600">15,000m² dengan kemudahan mewah</div>
                </div>
                <div className="bg-white rounded p-4">
                  <div className="font-semibold text-blue-600">Parking</div>
                  <div className="text-sm text-gray-600">2,000+ ruang parkir</div>
                </div>
                <div className="bg-white rounded p-4">
                  <div className="font-semibold text-blue-600">Shopping Area</div>
                  <div className="text-sm text-gray-600">50+ kedai dan restoran</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terminal Facilities */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Kemudahan Terminal Mewah</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <UserGroupIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Immigration & Customs</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 20 kaunter imigresen</li>
                  <li>• Sistem e-passport</li>
                  <li>• Customs clearance</li>
                  <li>• VIP lounge</li>
                </ul>
              </div>
              <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <ShoppingBagIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Duty Free & Shopping</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Duty free store</li>
                  <li>• Local handicrafts</li>
                  <li>• Souvenir shops</li>
                  <li>• Brand outlets</li>
                </ul>
              </div>
              <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <HeartIcon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">F&B & Leisure</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Food court</li>
                  <li>• Halal restaurants</li>
                  <li>• Cafes & bars</li>
                  <li>• Entertainment area</li>
                </ul>
              </div>
              <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <CameraIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Turisme & Info</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tourism information</li>
                  <li>• City tour booking</li>
                  <li>• Transport services</li>
                  <li>• Heritage gallery</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* George Town Heritage Experience */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pengalaman Warisan George Town</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">UNESCO World Heritage Site</h3>
                <p className="text-gray-600 mb-4">
                  SPCT terletak di tengah-tengah George Town yang diiktiraf sebagai Tapak Warisan Dunia UNESCO, 
                  menawarkan pengalaman budaya dan sejarah yang unik kepada penumpang cruise.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Walking distance ke Clan Houses bersejarah</li>
                  <li>• Street art dan mural terkenal</li>
                  <li>• Kuil-kuil dan masjid bersejarah</li>
                  <li>• Warisan makanan Peranakan dan tempatan</li>
                  <li>• Shopping di UNESCO Core Zone</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Pakej Shore Excursion</h3>
                <div className="space-y-3">
                  <div className="border rounded-lg p-4">
                    <div className="font-semibold text-blue-600 mb-2">George Town Heritage Walk</div>
                    <p className="text-sm text-gray-600">Lawatan berpandukan ke tapak-tapak bersejarah utama</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="font-semibold text-blue-600 mb-2">Penang Hill & Kek Lok Si</div>
                    <p className="text-sm text-gray-600">Pemandangan panorama dan kuil Buddha terbesar</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="font-semibold text-blue-600 mb-2">Food & Cultural Tour</div>
                    <p className="text-sm text-gray-600">Menikmati kuliner street food Penang yang terkenal</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="font-semibold text-blue-600 mb-2">Tropical Spice Garden</div>
                    <p className="text-sm text-gray-600">Taman rempah tropika dan alam semula jadi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Cruise Lines */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Perkhidmatan untuk Syarikat Cruise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Port Operations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 24/7 port operations</li>
                  <li>• Dedicated cruise berths</li>
                  <li>• Fast turnaround times</li>
                  <li>• Ship supply services</li>
                  <li>• Waste management</li>
                  <li>• Fresh water and provisions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Guest Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Baggage handling</li>
                  <li>• Ground transportation</li>
                  <li>• Medical facilities</li>
                  <li>• Emergency services</li>
                  <li>• WiFi and communication</li>
                  <li>• Currency exchange</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Partnership Opportunities</h3>
              <p className="text-gray-600 mb-4">
                SPPP bekerja rapat dengan syarikat cruise antarabangsa untuk menyediakan pengalaman yang luar biasa 
                kepada penumpang sambil memastikan operasi yang cekap dan selamat.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded">
                  <div className="font-semibold text-blue-600">Home Port Services</div>
                  <div className="text-sm text-gray-600">Kemudahan pelabuhan asal</div>
                </div>
                <div className="text-center p-4 bg-white rounded">
                  <div className="font-semibold text-green-600">Transit Port</div>
                  <div className="text-sm text-gray-600">Persinggahan sementara</div>
                </div>
                <div className="text-center p-4 bg-white rounded">
                  <div className="font-semibold text-purple-600">Turnaround</div>
                  <div className="text-sm text-gray-600">Pertukaran penumpang</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Hubungi Kami untuk Perkhidmatan Cruise
          </h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Untuk maklumat lanjut tentang perkhidmatan cruise terminal atau kerjasama dengan syarikat cruise, 
            sila hubungi pasukan SPCT kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/hubungi"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Hubungi SPCT
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