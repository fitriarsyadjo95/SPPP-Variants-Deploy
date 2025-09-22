import { Metadata } from 'next';
import { Layout } from '@/components/layout/layout';
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Users, 
  Building,
  Package,
  Shield,
  ExternalLink,
  Calendar
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Piagam Pelanggan | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Piagam pelanggan dan komitmen perkhidmatan Suruhanjaya Pelabuhan Pulau Pinang',
};

interface ServiceCommitment {
  id: string;
  department: string;
  service: string;
  timeframe: string;
  description: string;
  icon: React.ElementType;
  category: 'simple' | 'complex' | 'immediate';
}

const serviceCommitments: ServiceCommitment[] = [
  {
    id: 'corporate-complaints',
    department: 'Bahagian Korporat',
    service: 'Pengendalian Aduan',
    timeframe: '24 jam (akuan) / 15 hari bekerja (mudah) / 365 hari (kompleks)',
    description: 'Akuan penerimaan aduan kepada pengadu akan dibuat dalam 24 jam dari tarikh penerimaan aduan. Maklum balas kepada pengadu mengenai tindakan/siasatan aduan akan diberi dalam tempoh 15 hari bekerja bagi aduan kategori mudah manakala 365 hari bagi aduan kategori kompleks.',
    icon: Users,
    category: 'complex'
  },
  {
    id: 'license-issuance',
    department: 'Pengeluaran Lesen',
    service: 'Lesen Pengendalian Kargo dan Stevedore',
    timeframe: '2 hari bekerja',
    description: 'Pemakluman kelulusan lesen kepada pihak pemohon dibuat dalam tempoh dua (2) hari bekerja selepas pembayaran lesen dibuat.',
    icon: FileText,
    category: 'simple'
  },
  {
    id: 'transport-permit',
    department: 'Pengeluaran Permit',
    service: 'Permit Mengangkut Dalam Pelabuhan',
    timeframe: '1 hari bekerja',
    description: 'Pengeluaran permit dibuat dalam tempoh satu (1) hari bekerja selepas tarikh kelulusan oleh Pegawai Yang Diberi Kuasa dan setelah caj permit dijelaskan.',
    icon: Package,
    category: 'simple'
  },
  {
    id: 'commercial-zone',
    department: 'Unit Zon Bebas Komersil',
    service: 'Kelulusan Pergerakan Barangan',
    timeframe: '4 jam',
    description: 'Kelulusan pergerakan barangan Zon Bebas Komersil diberi dalam tempoh empat (4) jam tertakluk kepada proses permohonan yang lengkap.',
    icon: Building,
    category: 'immediate'
  },
  {
    id: 'financial-payment',
    department: 'Bahagian Khidmat Pengurusan dan Kewangan',
    service: 'Pembayaran',
    timeframe: '7 hari',
    description: 'Pembayaran akan dibuat dalam tempoh tujuh (7) hari dari tarikh dokumen lengkap diterima oleh Unit Kewangan.',
    icon: CheckCircle,
    category: 'simple'
  },
  {
    id: 'dangerous-cargo',
    department: 'Unit Kargo Berbahaya',
    service: 'Pengendalian Kargo Berbahaya',
    timeframe: '2 jam',
    description: 'Setiap permohonan pengendalian kargo berbahaya secara atas talian yang dilampirkan bersama dokumen sokongan berkaitan yang lengkap di dalam waktu pejabat akan diluluskan dalam tempoh dua (2) jam selepas penerimaan dokumen tersebut.',
    icon: AlertTriangle,
    category: 'immediate'
  }
];

export default function CustomerCharterPage() {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'immediate': return 'bg-green-100 text-green-800 border-green-200';
      case 'simple': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'complex': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'immediate': return 'Segera';
      case 'simple': return 'Mudah';
      case 'complex': return 'Kompleks';
      default: return 'Standard';
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <FileText className="h-16 w-16 mx-auto mb-4 text-blue-200" />
              <h1 className="text-4xl font-bold mb-4">Piagam Pelanggan</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Komitmen kami terhadap kualiti perkhidmatan dan masa respons yang berkesan
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Piagam Pelanggan Yang Telah Dikemaskini
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                SPPP komited untuk memberikan perkhidmatan yang berkualiti dengan masa respons yang ditetapkan. 
                Berikut adalah standard perkhidmatan yang kami janjikan kepada semua pelanggan kami.
              </p>
            </div>
          </section>

          {/* Service Commitments Grid */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Standard Perkhidmatan
              </h3>
              <p className="text-gray-600">
                Komitmen masa respons untuk setiap perkhidmatan utama
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceCommitments.map((commitment) => {
                const IconComponent = commitment.icon;
                
                return (
                  <div 
                    key={commitment.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="p-3 rounded-lg bg-blue-100 mr-4">
                            <IconComponent className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900">
                              {commitment.department}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {commitment.service}
                            </p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getCategoryColor(commitment.category)}`}>
                          {getCategoryLabel(commitment.category)}
                        </span>
                      </div>

                      {/* Time Commitment */}
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <div className="flex items-center mb-2">
                          <Clock className="h-5 w-5 text-green-600 mr-2" />
                          <span className="font-semibold text-gray-900">Komitmen Masa:</span>
                        </div>
                        <p className="text-lg font-bold text-green-600">
                          {commitment.timeframe}
                        </p>
                      </div>

                      {/* Description */}
                      <div className="text-sm text-gray-700 leading-relaxed">
                        {commitment.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Performance Metrics */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Pencapaian Piagam Pelanggan
                </h3>
                <p className="text-gray-600 mb-6">
                  Lihat prestasi terkini kami dalam memenuhi komitmen perkhidmatan
                </p>
                
                <a 
                  href="https://www.penangport.gov.my/ms/piagam-pelanggan/pencapaian-piagam-pelanggan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Lihat Pencapaian Terkini
                </a>
              </div>
            </div>
          </section>

          {/* Quality Assurance */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Jaminan Kualiti Perkhidmatan
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Masa Respons Tepat</h4>
                  <p className="text-sm text-gray-600">
                    Kami komited untuk memenuhi semua masa respons yang ditetapkan
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Standard Kualiti</h4>
                  <p className="text-sm text-gray-600">
                    Perkhidmatan berkualiti tinggi mengikut standard antarabangsa
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Kepuasan Pelanggan</h4>
                  <p className="text-sm text-gray-600">
                    Fokus kepada kepuasan dan keperluan pelanggan
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Feedback Section */}
          <section className="bg-blue-50 rounded-lg p-8 text-center">
            <FileText className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Maklum Balas Anda Penting
            </h3>
            <p className="text-gray-600 mb-6">
              Bantu kami meningkatkan perkhidmatan dengan memberikan maklum balas anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Hantar Aduan/Cadangan
              </a>
              <a 
                href="mailto:sppp@penangport.gov.my"
                className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                E-mel Terus
              </a>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}