import { Metadata } from 'next';
import {
  FileText,
  Shield,
  Users,
  Building2,
  CheckCircle,
  Eye,
  Download,
  Search,
  Scale,
  Lock,
  Heart,
  Award,
  BookOpen,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dasar & Prosedur | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Senarai dasar, prosedur operasi standard (SOP), dan garis panduan SPPP',
};

interface PolicyLean {
  id: string;
  title: string;
  category: 'operational' | 'safety' | 'hr' | 'governance' | 'compliance' | 'quality' | 'environment' | 'security';
  version: string;
  lastUpdated: string;
  isPublic: boolean;
}

const policies: PolicyLean[] = [
  {
    id: 'OP001',
    title: 'Prosedur Operasi Terminal Kontena',
    category: 'operational',
    version: '3.2',
    lastUpdated: '15 Mac 2024',
    isPublic: true,
  },
  {
    id: 'SF001',
    title: 'Dasar Keselamatan dan Kesihatan Pekerjaan',
    category: 'safety',
    version: '2.8',
    lastUpdated: '20 Februari 2024',
    isPublic: true,
  },
  {
    id: 'HR001',
    title: 'Polisi Sumber Manusia',
    category: 'hr',
    version: '4.1',
    lastUpdated: '10 Mei 2024',
    isPublic: false,
  },
  {
    id: 'GV001',
    title: 'Kod Tatakelakuan Korporat',
    category: 'governance',
    version: '1.5',
    lastUpdated: '5 September 2024',
    isPublic: true,
  },
  {
    id: 'CP001',
    title: 'Prosedur Kepatuhan Regulatori',
    category: 'compliance',
    version: '2.3',
    lastUpdated: '30 Ogos 2024',
    isPublic: false,
  },
  {
    id: 'QL001',
    title: 'Sistem Pengurusan Kualiti ISO 9001:2015',
    category: 'quality',
    version: '3.0',
    lastUpdated: '12 Januari 2024',
    isPublic: false,
  },
  {
    id: 'EN001',
    title: 'Dasar Pengurusan Alam Sekitar',
    category: 'environment',
    version: '1.8',
    lastUpdated: '15 Julai 2024',
    isPublic: true,
  },
  {
    id: 'SC001',
    title: 'Polisi Keselamatan Siber',
    category: 'security',
    version: '2.1',
    lastUpdated: '25 Jun 2024',
    isPublic: false,
  }
];

const categoryNames = {
  operational: 'Operasi',
  safety: 'Keselamatan',
  hr: 'Sumber Manusia',
  governance: 'Tadbir Urus',
  compliance: 'Kepatuhan',
  quality: 'Kualiti',
  environment: 'Alam Sekitar',
  security: 'Keselamatan Siber'
};

const categoryColors = {
  operational: 'bg-blue-500',
  safety: 'bg-red-500',
  hr: 'bg-purple-500',
  governance: 'bg-indigo-500',
  compliance: 'bg-orange-500',
  quality: 'bg-green-500',
  environment: 'bg-emerald-500',
  security: 'bg-gray-600'
};

const categoryIcons = {
  operational: Building2,
  safety: Shield,
  hr: Users,
  governance: Scale,
  compliance: CheckCircle,
  quality: Award,
  environment: Heart,
  security: Lock
};

export default function PoliciesLeanPage() {
  const publicPolicies = policies.filter(p => p.isPublic);
  const internalPolicies = policies.filter(p => !p.isPublic);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section - Minimalist */}
      <div className="bg-sppp-dark-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <FileText className="h-12 w-12 mx-auto mb-4 text-sppp-accent" />
            <h1 className="text-3xl font-bold mb-2">Dasar & Prosedur</h1>
            <p className="text-blue-200">
              Senarai dasar dan prosedur operasi standard SPPP
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Stats */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-2xl font-bold text-sppp-dark-blue mb-1">{policies.length}</div>
              <div className="text-gray-600 text-sm">Total Dokumen</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">{publicPolicies.length}</div>
              <div className="text-gray-600 text-sm">Akses Awam</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">{internalPolicies.length}</div>
              <div className="text-gray-600 text-sm">Akses Dalaman</div>
            </div>
          </div>
        </section>

        {/* Search */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Cari dasar..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded text-gray-900 focus:ring-2 focus:ring-sppp-blue focus:border-transparent"
                />
              </div>
              <select className="px-4 py-2 border border-gray-300 rounded text-gray-900 focus:ring-2 focus:ring-sppp-blue">
                <option value="">Semua Kategori</option>
                {Object.entries(categoryNames).map(([key, name]) => (
                  <option key={key} value={key}>{name}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Public Policies - Title Only Format */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-sppp-dark-blue mb-6">Dasar Akses Awam</h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kod
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tajuk Dasar
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kategori
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Versi
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kemaskini
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tindakan
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {publicPolicies.map((policy) => {
                    const categoryKey = policy.category as keyof typeof categoryIcons;
                    const IconComponent = categoryIcons[categoryKey];

                    return (
                      <tr key={policy.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {policy.id}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          <div className="font-medium">{policy.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className={`p-1 rounded ${categoryColors[categoryKey]} bg-opacity-20 mr-2`}>
                              <IconComponent className={`h-4 w-4 text-${categoryColors[categoryKey].split('-')[1]}-600`} />
                            </div>
                            <span className="text-sm text-gray-900">{categoryNames[categoryKey]}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {policy.version}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {policy.lastUpdated}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-sppp-blue hover:text-sppp-dark-blue" title="Lihat">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="text-green-600 hover:text-green-800" title="Muat Turun">
                              <Download className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Internal Policies - Title Only Format */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-sppp-dark-blue mb-6">Dasar Dalaman</h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b">
              <div className="flex items-center">
                <Lock className="h-5 w-5 text-gray-600 mr-2" />
                <span className="text-sm text-gray-600">Akses dalaman sahaja</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kod
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tajuk Dasar
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kategori
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Versi
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {internalPolicies.map((policy) => {
                    const categoryKey = policy.category as keyof typeof categoryIcons;
                    const IconComponent = categoryIcons[categoryKey];

                    return (
                      <tr key={policy.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {policy.id}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          <div className="font-medium">{policy.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className={`p-1 rounded ${categoryColors[categoryKey]} bg-opacity-20 mr-2`}>
                              <IconComponent className={`h-4 w-4 text-${categoryColors[categoryKey].split('-')[1]}-600`} />
                            </div>
                            <span className="text-sm text-gray-900">{categoryNames[categoryKey]}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {policy.version}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="flex items-center text-sm text-gray-500">
                            <Lock className="h-3 w-3 mr-1" />
                            Dalaman
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="bg-sppp-blue rounded-lg text-white p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Perlukan Bantuan?</h3>
          <p className="mb-4 text-blue-200">
            Hubungi kami untuk penjelasan lanjut mengenai dasar dan prosedur.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-sppp-blue px-6 py-2 rounded font-medium hover:bg-gray-50 transition-colors"
          >
            <ArrowRight className="h-4 w-4 mr-2" />
            Hubungi Kami
          </a>
        </section>
      </div>
    </div>
  );
}