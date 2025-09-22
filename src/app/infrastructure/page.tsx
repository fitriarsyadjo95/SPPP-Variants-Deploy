import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Building, 
  Server, 
  MapPin, 
  ArrowRight,
  Globe,
  Shield,
  Zap,
  BarChart3
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Infrastruktur & Perhubungan | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Infrastruktur pelabuhan dan sistem perhubungan yang moden untuk mendukung operasi pelabuhan yang cekap',
};

interface InfrastructureCategory {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
  highlights: string[];
  color: string;
}

const categories: InfrastructureCategory[] = [
  {
    title: 'Kemudahan Pelabuhan',
    description: 'Infrastruktur fizikal dan kemudahan pelabuhan yang lengkap untuk mengendalikan pelbagai jenis kargo dan kapal.',
    href: '/infrastructure/facilities',
    icon: Building,
    highlights: [
      '2.7M TEU kapasiti kontena tahunan',
      '13 posisi berth untuk kapal besar',
      '150,000 m² ruang gudang moden',
      '179 hektar kawasan pelabuhan'
    ],
    color: 'blue'
  },
  {
    title: 'Teknologi & Sistem',
    description: 'Sistem teknologi maklumat canggih dan infrastruktur digital untuk operasi pelabuhan yang cekap.',
    href: '/infrastructure/technology',
    icon: Server,
    highlights: [
      '15+ sistem operasi utama',
      '99.9% uptime kebolehpercayaan',
      '50TB kapasiti penyimpanan data',
      'Monitoring 24/7 automated'
    ],
    color: 'green'
  }
];

const profileInfrastructure = [
  {
    title: 'Infrastruktur SPPP',
    description: 'Kemudahan infrastruktur utama di Suruhanjaya Pelabuhan Pulau Pinang',
    href: '/profil/infrastruktur/sppp',
    icon: Building,
    color: 'purple'
  },
  {
    title: 'Infrastruktur Teluk Ewa',
    description: 'Kemudahan khusus di Jeti Teluk Ewa untuk kargo minyak dan pukal',
    href: '/profil/infrastruktur/teluk-ewa',
    icon: Globe,
    color: 'orange'
  }
];

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <Building className="h-20 w-20 mx-auto mb-6 text-blue-200" />
            <h1 className="text-5xl font-bold mb-6">Infrastruktur & Perhubungan</h1>
            <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
              Infrastruktur pelabuhan yang moden dan sistem perhubungan canggih untuk 
              menyokong operasi pelabuhan yang cekap, selamat dan berdaya saing tinggi 
              di Asia Tenggara.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Key Statistics */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">2.7M</div>
              <div className="text-gray-600">TEU Capacity</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600">System Uptime</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Security Monitoring</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">179</div>
              <div className="text-gray-600">Hectares Total</div>
            </div>
          </div>
        </section>

        {/* Main Infrastructure Categories */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kategori Infrastruktur Utama
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Infrastruktur pelabuhan yang komprehensif merangkumi kemudahan fizikal 
              dan sistem teknologi terkini.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              
              return (
                <div 
                  key={category.title}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`p-4 rounded-lg bg-${category.color}-100 mr-6`}>
                        <IconComponent className={`h-8 w-8 text-${category.color}-600`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {category.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-8 leading-relaxed">
                      {category.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-4">Pencapaian Utama:</h4>
                      <ul className="space-y-3">
                        {category.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <div className={`h-2 w-2 bg-${category.color}-500 rounded-full mr-3 flex-shrink-0`}></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={category.href}
                      className={`inline-flex items-center px-6 py-3 bg-${category.color}-600 text-white rounded-lg font-semibold hover:bg-${category.color}-700 transition-colors group-hover:translate-x-1 transform duration-300`}
                    >
                      Ketahui Lebih Lanjut
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Profile Infrastructure Links */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Infrastruktur Mengikut Lokasi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maklumat terperinci tentang infrastruktur di lokasi-lokasi utama pelabuhan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {profileInfrastructure.map((item) => {
              const IconComponent = item.icon;
              
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-${item.color}-100 mr-4`}>
                      <IconComponent className={`h-6 w-6 text-${item.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center text-blue-600 font-semibold">
                    Lihat Detail
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Strategic Advantages */}
        <section className="mb-20 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-12">
          <div className="text-center mb-12">
            <BarChart3 className="h-16 w-16 mx-auto mb-6 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kelebihan Strategik Infrastruktur
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Infrastruktur yang direka khas untuk memberikan kelebihan kompetitif 
              dan nilai tambah kepada operasi pelabuhan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">Lokasi Strategik</h3>
              <p className="text-gray-600 text-sm">
                Gateway utama di Selat Melaka dengan akses mudah ke pasaran Asia
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">Kemudahan Moden</h3>
              <p className="text-gray-600 text-sm">
                Infrastruktur terkini dengan teknologi automatik dan sistem canggih
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">Kecekapan Tinggi</h3>
              <p className="text-gray-600 text-sm">
                Operasi 24/7 dengan sistem pengurusan yang cekap dan responsif
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">Keselamatan Terjamin</h3>
              <p className="text-gray-600 text-sm">
                Sistem keselamatan berlapis dengan monitoring 24/7 dan respons pantas
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-xl shadow-lg p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Maklumat Lanjut Infrastruktur
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Untuk maklumat terperinci tentang infrastruktur pelabuhan, lawatan teknikal, 
            atau kerjasama strategik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/infrastructure/facilities"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center justify-center"
            >
              <Building className="h-5 w-5 mr-2" />
              Kemudahan Pelabuhan
            </Link>
            <Link 
              href="/infrastructure/technology"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 inline-flex items-center justify-center"
            >
              <Server className="h-5 w-5 mr-2" />
              Teknologi & Sistem
            </Link>
            <Link 
              href="/hubungi"
              className="bg-gray-100 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 inline-flex items-center justify-center"
            >
              Hubungi Kami
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}