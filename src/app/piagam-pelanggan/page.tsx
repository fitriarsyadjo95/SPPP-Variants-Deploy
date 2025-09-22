import { Metadata } from 'next';
import { 
  ClockIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  TrophyIcon,
  UserGroupIcon,
  ChartBarIcon,
  ExclamationTriangleIcon,
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  TruckIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Piagam Pelanggan | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Komitmen perkhidmatan SPPP kepada pelanggan dengan standard kualiti yang ditetapkan',
};

const charterCommitments = [
  {
    id: 1,
    title: 'Bahagian Korporat',
    icon: BuildingOfficeIcon,
    commitments: [
      {
        service: 'Akuan Penerimaan Aduan',
        timeframe: '24 jam',
        description: 'Akuan penerimaan aduan kepada pengadu akan dibuat dalam 24 jam dari tarikh penerimaan aduan'
      },
      {
        service: 'Maklum Balas Aduan',
        timeframe: '15 hari bekerja (mudah) / 365 hari (kompleks)',
        description: 'Maklum balas kepada pengadu mengenai tindakan/siasatan aduan'
      }
    ]
  },
  {
    id: 2,
    title: 'Pengeluaran Lesen',
    icon: DocumentTextIcon,
    commitments: [
      {
        service: 'Lesen Pengendalian Kargo',
        timeframe: '2 hari bekerja',
        description: 'Pemakluman kelulusan lesen kepada pihak pemohon selepas pembayaran lesen dibuat'
      },
      {
        service: 'Lesen Stevedore',
        timeframe: '2 hari bekerja',
        description: 'Pemakluman kelulusan lesen kepada pihak pemohon selepas pembayaran lesen dibuat'
      }
    ]
  },
  {
    id: 3,
    title: 'Permit Mengangkut',
    icon: TruckIcon,
    commitments: [
      {
        service: 'Permit Mengangkut dalam Pelabuhan',
        timeframe: '1 hari bekerja',
        description: 'Pengeluaran permit selepas tarikh kelulusan oleh Pegawai Yang Diberi Kuasa dan setelah caj permit dijelaskan'
      }
    ]
  },
  {
    id: 4,
    title: 'Unit Zon Bebas Komersil',
    icon: ShieldCheckIcon,
    commitments: [
      {
        service: 'Kelulusan Pergerakan Barangan',
        timeframe: '4 jam',
        description: 'Kelulusan pergerakan barangan Zon Bebas Komersil tertakluk kepada proses permohonan yang lengkap'
      }
    ]
  },
  {
    id: 5,
    title: 'Khidmat Pengurusan dan Kewangan',
    icon: CurrencyDollarIcon,
    commitments: [
      {
        service: 'Pembayaran',
        timeframe: '7 hari',
        description: 'Pembayaran akan dibuat dari tarikh dokumen lengkap diterima oleh Unit Kewangan'
      }
    ]
  },
  {
    id: 6,
    title: 'Unit Kargo Berbahaya',
    icon: ExclamationTriangleIcon,
    commitments: [
      {
        service: 'Kelulusan Pengendalian Kargo Berbahaya',
        timeframe: '2 jam',
        description: 'Permohonan secara atas talian dengan dokumen sokongan lengkap dalam waktu pejabat'
      }
    ]
  }
];

const achievements = [
  {
    period: 'Jan - Mac 2024',
    categories: [
      { name: 'Lesen Stevedore', achievement: '100%', count: 2 },
      { name: 'Lesen Pengendalian Kargo', achievement: '100%', count: 2 },
      { name: 'Zon Bebas Komersil', achievement: '100%', count: 5658 },
      { name: 'Kargo Berbahaya', achievement: '100%', count: 2584 },
      { name: 'Pembayaran', achievement: '100%', count: 1262 }
    ]
  },
  {
    period: 'April - Jun 2024',
    categories: [
      { name: 'Lesen Stevedore', achievement: '100%', count: 2 },
      { name: 'Lesen Pengendalian Kargo', achievement: '100%', count: 2 },
      { name: 'Zon Bebas Komersil', achievement: '100%', count: 6967 },
      { name: 'Kargo Berbahaya', achievement: '100%', count: 2933 },
      { name: 'Pembayaran', achievement: '100%', count: 1487 }
    ]
  }
];

export default function ClientCharterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <TrophyIcon className="h-16 w-16 mx-auto mb-4 text-blue-200" />
            <h1 className="text-4xl font-bold mb-4">Piagam Pelanggan</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Komitmen perkhidmatan SPPP kepada pelanggan dengan standard kualiti yang ditetapkan dan prestasi cemerlang
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Komitmen Perkhidmatan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <ClockIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tepat Masa</h3>
                <p className="text-gray-600 text-sm">Standard masa perkhidmatan yang jelas dan boleh diukur</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <CheckCircleIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Kualiti Terjamin</h3>
                <p className="text-gray-600 text-sm">Prestasi 100% dalam memenuhi komitmen yang ditetapkan</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <UserGroupIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Kepuasan Pelanggan</h3>
                <p className="text-gray-600 text-sm">Fokus kepada keperluan dan kepuasan pelanggan</p>
              </div>
            </div>
          </div>
        </section>

        {/* Charter Commitments */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Standard Perkhidmatan</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              SPPP berkomitmen menyediakan perkhidmatan berkualiti dengan standard masa yang ditetapkan untuk setiap kategori perkhidmatan
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {charterCommitments.map((department) => {
              const IconComponent = department.icon;
              return (
                <div key={department.id} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{department.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {department.commitments.map((commitment, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-4 py-3">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-900">{commitment.service}</h4>
                          <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full ml-4">
                            {commitment.timeframe}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{commitment.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Achievement Statistics */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Pencapaian Piagam Pelanggan 2024</h2>
              <p className="text-gray-600">Prestasi cemerlang dengan pencapaian 100% dalam semua kategori perkhidmatan</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {achievements.map((period, periodIndex) => (
                <div key={periodIndex} className="border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{period.period}</h3>
                  <div className="space-y-4">
                    {period.categories.map((category, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{category.name}</div>
                          <div className="text-sm text-gray-600">{category.count.toLocaleString()} kes diproses</div>
                        </div>
                        <div className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                          <span className="font-bold text-green-600">{category.achievement}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Overall Statistics */}
            <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Prestasi Keseluruhan</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <ChartBarIcon className="h-12 w-12 text-green-600 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-green-600">100%</div>
                    <div className="text-sm text-gray-600">Pencapaian Standard</div>
                  </div>
                  <div className="text-center">
                    <DocumentTextIcon className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-blue-600">19K+</div>
                    <div className="text-sm text-gray-600">Permohonan Diproses</div>
                  </div>
                  <div className="text-center">
                    <ClockIcon className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-purple-600">24/7</div>
                    <div className="text-sm text-gray-600">Komitmen Perkhidmatan</div>
                  </div>
                  <div className="text-center">
                    <TrophyIcon className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-orange-600">6</div>
                    <div className="text-sm text-gray-600">Kategori Perkhidmatan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact and Feedback */}
        <section className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Maklum Balas dan Aduan
          </h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Kami menghargai maklum balas anda untuk memastikan standard perkhidmatan yang ditetapkan dalam Piagam Pelanggan dapat dicapai dan dipertingkatkan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/hubungi"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Hantar Maklum Balas
            </a>
            <a 
              href="/services"
              className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Lihat Perkhidmatan
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}