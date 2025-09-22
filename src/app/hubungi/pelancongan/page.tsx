import { Metadata } from 'next';
import { PageTemplate } from '@/components/PageTemplate';
import {
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  CameraIcon,
  TruckIcon,
  UserGroupIcon,
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Pelancongan Maritim | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Perkhidmatan pelancongan maritim, kemudahan kapal persiaran dan maklumat lawatan ke Swettenham Pier Cruise Terminal',
  keywords: 'pelancongan maritim, kapal persiaran, cruise terminal, Swettenham Pier, maritime tourism'
};

const cruiseServices = [
  {
    title: "Swettenham Pier Cruise Terminal",
    description: "Terminal kapal persiaran moden untuk melayani pelancong antarabangsa",
    icon: TruckIcon,
    color: "blue",
    features: ["Check-in & Immigration", "Duty-free Shopping", "Tourist Information", "Transport Hub"]
  },
  {
    title: "Perkhidmatan Pelancong",
    description: "Kemudahan komprehensif untuk pengalaman pelancong yang selesa",
    icon: UserGroupIcon,
    color: "green",
    features: ["Tourist Guide", "Transportation", "Local Tours", "Cultural Experience"]
  },
  {
    title: "Kemudahan Pelabuhan",
    description: "Infrastruktur moden untuk menyokong operasi kapal persiaran",
    icon: BuildingOfficeIcon,
    color: "orange",
    features: ["Modern Berths", "Security Systems", "Passenger Facilities", "Baggage Handling"]
  }
];

const attractions = [
  { name: "George Town UNESCO World Heritage Site", distance: "5 min", type: "Cultural" },
  { name: "Penang Hill", distance: "20 min", type: "Nature" },
  { name: "Kek Lok Si Temple", distance: "25 min", type: "Religious" },
  { name: "Gurney Plaza", distance: "15 min", type: "Shopping" },
  { name: "Clan Houses", distance: "10 min", type: "Cultural" },
  { name: "Street Art", distance: "5 min", type: "Art" }
];

export default function PelanconganMaritimPage() {
  return (
    <PageTemplate
      title="Pelancongan Maritim"
      subtitle="Perkhidmatan pelancongan maritim, kemudahan kapal persiaran dan maklumat lawatan ke Swettenham Pier Cruise Terminal"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Hubungi', href: '/hubungi' }, { name: 'Pelancongan Maritim' }]}
    >
      <div className="max-w-none">
        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">1</div>
            <div className="text-sm text-sppp-gray">Terminal Persiaran</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">5min</div>
            <div className="text-sm text-sppp-gray">Ke Georgetown</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-1">24/7</div>
            <div className="text-sm text-sppp-gray">Operasi Pelabuhan</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">UNESCO</div>
            <div className="text-sm text-sppp-gray">World Heritage</div>
          </div>
        </div>

        {/* Swettenham Pier Cruise Terminal */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <TruckIcon className="h-7 w-7 mr-3 text-blue-600" />
            Swettenham Pier Cruise Terminal
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sppp-gray mb-4">
                Swettenham Pier Cruise Terminal adalah pusat utama pelancongan maritim di Pulau Pinang,
                menyediakan kemudahan moden untuk kapal persiaran antarabangsa dan pelancong yang berkunjung
                ke Tapak Warisan Dunia UNESCO George Town.
              </p>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Visi Pelabuhan:</h4>
              <p className="text-sppp-gray text-sm italic mb-4">
                "Northern Region Maritime Gateway Logistics and Cruise Hub"
              </p>
              <h4 className="font-semibold text-sppp-dark-blue mb-3">Lokasi Strategik:</h4>
              <ul className="space-y-2 text-sppp-gray text-sm">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-blue-600" />
                  Pusat Bandar Raya George Town
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-blue-600" />
                  5 minit berjalan kaki ke UNESCO World Heritage Site
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-blue-600" />
                  Akses mudah ke tarikan pelancongan utama
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">Kemudahan Terminal</h4>
              <div className="space-y-2 text-sm text-blue-700">
                <p>• Terminal cruise moden dengan kemudahan lengkap</p>
                <p>• Kawalan imigresen dan kastam</p>
                <p>• Pusat maklumat pelancong</p>
                <p>• Kemudahan parking dan transport</p>
                <p>• Kedai duty-free</p>
                <p>• Restoran dan kafe</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cruise Services */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <GlobeAltIcon className="h-7 w-7 mr-3 text-green-600" />
            Perkhidmatan Kapal Persiaran
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            {cruiseServices.map((service, index) => (
              <div key={index} className={`border border-${service.color}-200 rounded-lg p-6`}>
                <div className="flex items-center mb-3">
                  <service.icon className={`h-6 w-6 text-${service.color}-600 mr-3`} />
                  <h4 className="text-lg font-semibold text-sppp-dark-blue">{service.title}</h4>
                </div>
                <p className="text-sppp-gray mb-3 text-sm">{service.description}</p>
                <div className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className={`text-xs text-${service.color}-700 bg-${service.color}-50 px-2 py-1 rounded inline-block mr-1 mb-1`}>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tourist Attractions */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
            <CameraIcon className="h-7 w-7 mr-3 text-orange-600" />
            Tarikan Pelancongan Berdekatan
          </h3>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {attractions.map((attraction, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-sppp-dark-blue text-sm">{attraction.name}</h4>
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                    {attraction.type}
                  </span>
                </div>
                <div className="flex items-center text-sm text-sppp-gray">
                  <MapPinIcon className="h-4 w-4 mr-1 text-green-600" />
                  {attraction.distance} dari terminal
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">Panduan Lawatan</h4>
            <p className="text-green-800 text-sm">
              Sumber tersedia: "Guide to Cruise Activities at the Port of Penang"
              - panduan komprehensif untuk aktiviti pelancong yang berkunjung ke Pelabuhan Penang.
            </p>
          </div>
        </div>

        {/* Services for Tourists */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Perkhidmatan untuk Pelancong
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-4">Kemudahan Tersedia</h4>
              <ul className="space-y-2 text-sppp-gray text-sm">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Pusat maklumat pelancong 24 jam
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Perkhidmatan pemandu pelancong berlesen
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Shuttle bus ke tarikan utama
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Kemudahan WiFi percuma
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Pusat pertukaran mata wang
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                  Kedai cenderahmata tempatan
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-4">Pakej Lawatan Popular</h4>
              <div className="space-y-3">
                <div className="p-3 bg-orange-50 rounded-lg">
                  <h5 className="font-semibold text-orange-900 text-sm">Heritage Walking Tour</h5>
                  <p className="text-orange-700 text-xs">3-4 jam • UNESCO World Heritage • Clan Houses</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h5 className="font-semibold text-blue-900 text-sm">Cultural & Food Experience</h5>
                  <p className="text-blue-700 text-xs">Half day • Street food • Local markets</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <h5 className="font-semibold text-green-900 text-sm">Island Highlights Tour</h5>
                  <p className="text-green-700 text-xs">Full day • Temple • Hill • Beach</p>
                </div>
              </div>
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
              <h4 className="font-semibold text-sppp-dark-blue mb-4 flex items-center">
                <BuildingOfficeIcon className="h-5 w-5 mr-2 text-blue-600" />
                Swettenham Pier Cruise Terminal
              </h4>
              <div className="space-y-3 text-sppp-gray">
                <div className="flex items-start">
                  <MapPinIcon className="h-4 w-4 mt-1 mr-2 text-green-600" />
                  <div>
                    <p>Level 2, Swettenham Pier Cruise Terminal</p>
                    <p>No. 1A, King Edward Place</p>
                    <p>10300 George Town, Penang</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="h-4 w-4 mr-2 text-blue-600" />
                  <span>604.263.3211 | 604.262.6211</span>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="h-4 w-4 mr-2 text-orange-600" />
                  <span>sppp@penangport.gov.my</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-4 flex items-center">
                <ClockIcon className="h-5 w-5 mr-2 text-green-600" />
                Operasi & Perkhidmatan
              </h4>
              <div className="space-y-2 text-sppp-gray">
                <div className="flex justify-between">
                  <span>Operasi Pelabuhan:</span>
                  <span className="font-medium text-green-600">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span>Pejabat Pentadbiran:</span>
                  <span className="font-medium">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Pusat Maklumat:</span>
                  <span className="font-medium text-blue-600">Mengikut jadual kapal</span>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    🚢 Operasi kapal persiaran: Bergantung kepada jadual kedatangan
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-orange-50 border-l-4 border-orange-500 rounded-lg">
            <div className="flex items-start">
              <ExclamationCircleIcon className="h-5 w-5 text-orange-600 mr-3 mt-0.5" />
              <div>
                <h4 className="font-semibold text-orange-900 mb-1">Maklumat untuk Pelancong</h4>
                <div className="text-orange-800 text-sm space-y-1">
                  <p>• Sila daftar dengan pegawai terminal sebelum meninggalkan kapal</p>
                  <p>• Dokumen pengenalan mesti dibawa sepanjang masa</p>
                  <p>• Patuhi waktu kembali ke kapal yang ditetapkan</p>
                  <p>• Gunakan perkhidmatan pemandu pelancong yang berdaftar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}