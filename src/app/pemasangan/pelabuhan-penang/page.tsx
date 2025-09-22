import { Metadata } from 'next';
import { 
  Building2, 
  Anchor, 
  Building, 
  MapPin,
  Clock,
  Truck,
  Package,
  Activity,
  BarChart3
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pelabuhan Pulau Pinang | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Pemasangan dan infrastruktur utama Pelabuhan Pulau Pinang',
};

export default function PelabuhanPulauPinangPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Building2 className="h-16 w-16 mx-auto mb-4 text-blue-200" />
            <h1 className="text-4xl font-bold mb-4">Pelabuhan Pulau Pinang</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Pemasangan dan infrastruktur utama Pelabuhan Pulau Pinang
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Content */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Maklumat Kemudahan</h2>
            <div className="prose max-w-none text-gray-600">
              <p>SELAMAT DATANG KE PORTAL RASMI PENANG PORT Statistik Kendalian Kargo Eksport Di Pelabuhan Pulau Pinang /*Mobile Apps*/ MYHRMIS MOBILE /*Publication*/ Annual Report 2020 /*Broadcast*/ News & Announcement /*About Us*/ Background /*News*/ News Clipping /*FAQ*/ Frequently Asked Questions /*Piagam Pelanggan*/ Client's Charter /*Butiran Perhubungan*/ Location /*CIO*/ Chief Information Officer /*online e-participation*/ Polisi E-Participation Policy | | | UtamaProfilLatar BelakangSPPPTeluk EwaVisi & Mi...</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Maklumat Lanjut
          </h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Untuk maklumat terperinci tentang kemudahan ini, sila hubungi kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/hubungi"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Hubungi Kami
            </a>
            <a 
              href="/kemudahan"
              className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Semua Kemudahan
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}