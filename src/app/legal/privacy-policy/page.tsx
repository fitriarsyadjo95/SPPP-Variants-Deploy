import { Metadata } from 'next';
import { Layout } from '@/components/layout/layout';
import { Shield, Lock, FileText, AlertCircle, Eye, Database, Globe, RefreshCw } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dasar Privasi | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Dasar privasi dan perlindungan data peribadi Suruhanjaya Pelabuhan Pulau Pinang',
};

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <Shield className="h-16 w-16 mx-auto mb-4 text-blue-200" />
              <h1 className="text-4xl font-bold mb-4">Dasar Privasi</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Komitmen kami terhadap perlindungan privasi dan data peribadi pengunjung
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Privasi Anda</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="leading-relaxed">
                  Halaman ini menerangkan dasar privasi yang merangkumi penggunaan dan perlindungan 
                  maklumat yang dikemukakan oleh pengunjung.
                </p>
                <p className="leading-relaxed">
                  Sekiranya anda membuat transaksi atau menghantar e-mel yang mengandungi maklumat peribadi, 
                  maklumat ini mungkin akan dikongsi bersama dengan agensi awam lain untuk membantu penyediaan 
                  perkhidmatan yang lebih berkesan dan efektif. Contohnya seperti di dalam menyelesaikan aduan 
                  yang memerlukan maklum balas dari agensi-agensi lain.
                </p>
              </div>
            </div>
          </section>

          {/* Data Collection */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Database className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Maklumat Yang Dikumpul</h2>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <AlertCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div className="text-gray-700">
                    <p className="font-semibold mb-2">Pengumpulan Data Minimal</p>
                    <p className="leading-relaxed">
                      Tiada maklumat peribadi akan dikumpul semasa anda melayari laman web ini kecuali 
                      maklumat yang dikemukakan oleh anda melalui e-mel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* External Links */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Pautan Kepada Laman Web Yang Lain
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="leading-relaxed">
                  Laman web ini mempunyai pautan ke laman web lain. Dasar privasi ini hanya terpakai 
                  untuk laman web ini sahaja.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mt-6">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-yellow-800 mb-1">Amaran Penting</p>
                      <p className="text-yellow-700 text-sm">
                        Laman web yang terdapat dalam pautan mungkin mempunyai dasar privasi yang berbeza 
                        dan pengunjung dinasihatkan supaya meneliti dan memahami dasar privasi bagi setiap 
                        laman web yang dilayari.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Policy Updates */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <RefreshCw className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Pindaan Dasar</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="leading-relaxed">
                  Sekiranya dasar privasi ini dipinda, pindaan akan dikemas kini di halaman ini. 
                  Dengan sering melayari halaman ini, anda akan dikemas kini dengan maklumat yang 
                  dikumpul, cara ia digunakan dan dalam keadaan tertentu, bagaimana maklumat dikongsi 
                  bersama pihak yang lain.
                </p>
              </div>
            </div>
          </section>

          {/* Security Policy */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Lock className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Dasar Keselamatan</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Teknologi Terkini</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Teknologi terkini termasuk penyulitan data adalah digunakan untuk melindungi 
                    data yang diberikan kepada kami dan pematuhan kepada standard keselamatan yang 
                    ketat adalah terpakai untuk menghalang capaian yang tidak dibenarkan.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <Database className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Keselamatan Storan</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Untuk melindungi data peribadi anda, semua storan elektronik dan penghantaran 
                    data peribadi akan dilindungi dan disimpan dengan menggunakan teknologi keselamatan 
                    yang sesuai.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-blue-50 rounded-lg p-8 text-center">
            <FileText className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ada Pertanyaan Mengenai Privasi?
            </h3>
            <p className="text-gray-600 mb-6">
              Jika anda mempunyai sebarang pertanyaan mengenai dasar privasi ini, sila hubungi kami
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Hubungi Kami
              </a>
              <a 
                href="mailto:sppp@penangport.gov.my"
                className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                E-mel Rasmi
              </a>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}