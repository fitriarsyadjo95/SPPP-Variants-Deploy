import { Metadata } from 'next';
import { 
  FileSearch, 
  Phone, 
  Mail, 
  Clock,
  Building,
  Navigation
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Permohonan Maklumat | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Permohonan maklumat di bawah Akta Kebebasan Maklumat',
};

export default function PermohonanMaklumatPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <FileSearch className="h-16 w-16 mx-auto mb-4 text-slate-200" />
            <h1 className="text-4xl font-bold mb-4">Permohonan Maklumat</h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Permohonan maklumat di bawah Akta Kebebasan Maklumat
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Information */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Maklumat Hubungan</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Building className="h-6 w-6 text-slate-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Pejabat Utama</h3>
                    <p className="text-gray-600">
                      Aras 2, Swettenham Pier Cruise Terminal<br />
                      No.1A, Pesara King Edward<br />
                      10300 George Town, Pulau Pinang
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-slate-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Telefon</h3>
                    <p className="text-gray-600">+60 4-263 3211</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-slate-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">E-mel</h3>
                    <p className="text-gray-600">sppp@penangport.gov.my</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-slate-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Waktu Operasi</h3>
                    <p className="text-gray-600">
                      Isnin - Jumaat: 8:00 AM - 5:00 PM<br />
                      Sabtu - Ahad: Tertutup
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Peta Lokasi</h2>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <Navigation className="h-12 w-12 mx-auto mb-2 text-gray-500" />
                  <p className="text-gray-600">Peta interaktif akan dipaparkan di sini</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}