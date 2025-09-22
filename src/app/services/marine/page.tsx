import { Metadata } from 'next';
import { 
  GlobeAltIcon, 
  MagnifyingGlassIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  ClockIcon,
  PhoneIcon,
  MapPinIcon,
  CpuChipIcon,
  DocumentTextIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Perkhidmatan Marin | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Perkhidmatan marin komprehensif termasuk VTMS, pemaliman, tunda kapal dan pengurusan lesen',
};

export default function MarineServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <GlobeAltIcon className="h-16 w-16 mx-auto mb-4 text-blue-200" />
            <h1 className="text-4xl font-bold mb-4">Perkhidmatan Marin</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Perkhidmatan marin komprehensif dengan teknologi canggih untuk keselamatan dan kecekapan maritim
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* VTMS Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Vessel Traffic Management System (VTMS)</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sistem Pemantauan Canggih</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <MagnifyingGlassIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Radar Surveillance:</strong> Pemantauan pergerakan kapal 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <CpuChipIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>AIS Monitoring:</strong> Sistem Identifikasi Automatik</span>
                  </li>
                  <li className="flex items-start">
                    <PhoneIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>VHF Communication:</strong> Komunikasi radio maritim</span>
                  </li>
                  <li className="flex items-start">
                    <MapPinIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Port Approach:</strong> Panduan masuk pelabuhan</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Kawalan Trafik</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <ShieldCheckIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Traffic Control:</strong> Kawalan pergerakan kapal</span>
                  </li>
                  <li className="flex items-start">
                    <ClockIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Berth Planning:</strong> Perancangan sandar kapal</span>
                  </li>
                  <li className="flex items-start">
                    <DocumentTextIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Documentation:</strong> Rekod pergerakan lengkap</span>
                  </li>
                  <li className="flex items-start">
                    <TruckIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Port Coordination:</strong> Koordinasi aktiviti pelabuhan</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pusat Kawalan VTMS</h3>
              <p className="text-gray-600 mb-4">
                Pusat kawalan VTMS beroperasi 24 jam sehari, 7 hari seminggu dengan pegawai terlatih yang memantau 
                semua pergerakan kapal dalam kawasan pelabuhan Pulau Pinang.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded p-4">
                  <div className="font-semibold text-blue-600">Kawasan Pantauan</div>
                  <div className="text-sm text-gray-600">15 nautical miles radius</div>
                </div>
                <div className="bg-white rounded p-4">
                  <div className="font-semibold text-blue-600">Kapal Dipantau</div>
                  <div className="text-sm text-gray-600">450+ kapal per bulan</div>
                </div>
                <div className="bg-white rounded p-4">
                  <div className="font-semibold text-blue-600">Operasi</div>
                  <div className="text-sm text-gray-600">24/7/365</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pilotage Services */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Perkhidmatan Pemaliman</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Pemali Berlesen</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Pemali berlesen dan berpengalaman</li>
                  <li>• Panduan masuk dan keluar pelabuhan</li>
                  <li>• Perkhidmatan 24 jam sehari</li>
                  <li>• Pengetahuan mendalam tentang perairan tempatan</li>
                  <li>• Komunikasi dengan VTMS dan kapal tunda</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Kawasan Perkhidmatan</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Terminal NBCT (North Butterworth)</li>
                  <li>• Terminal SPCT (Swettenham Pier)</li>
                  <li>• Butterworth Deep Water Wharf</li>
                  <li>• Prai Bulk Cargo Terminal</li>
                  <li>• Prai Wharves</li>
                  <li>• Terminal minyak dan kimia</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tug Services */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Perkhidmatan Bot Tunda</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <WrenchScrewdriverIcon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Bot Tunda Berkapasiti Tinggi</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Kapasiti tarikan hingga 60 ton</li>
                  <li>• Enjin berkuasa tinggi</li>
                  <li>• Sistem navigasi canggih</li>
                  <li>• Anak kapal berpengalaman</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                <TruckIcon className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Perkhidmatan Tambatan</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Bantuan sandar kapal</li>
                  <li>• Manuver dalam pelabuhan</li>
                  <li>• Operasi berth-to-berth</li>
                  <li>• Bantuan kecemasan</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                <ClockIcon className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Operasi 24/7</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Perkhidmatan sepanjang masa</li>
                  <li>• Respons pantas</li>
                  <li>• Koordinasi dengan VTMS</li>
                  <li>• Sokongan kecemasan</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Marine Waste Management */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pengurusan Sisa Buangan Kapal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Jenis Sisa Dikendalikan</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <ShieldCheckIcon className="h-5 w-5 text-green-600 mt-1 mr-3" />
                    <span><strong>Oily Water:</strong> Air berminyak dari ruang enjin</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheckIcon className="h-5 w-5 text-green-600 mt-1 mr-3" />
                    <span><strong>Sewage:</strong> Sisa kumbahan dari kapal</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheckIcon className="h-5 w-5 text-green-600 mt-1 mr-3" />
                    <span><strong>Garbage:</strong> Sisa pepejal domestik</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheckIcon className="h-5 w-5 text-green-600 mt-1 mr-3" />
                    <span><strong>Chemical Waste:</strong> Sisa kimia berbahaya</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Kemudahan Pemprosesan</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <WrenchScrewdriverIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Treatment Plant:</strong> Loji rawatan sisa cair</span>
                  </li>
                  <li className="flex items-start">
                    <DocumentTextIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Documentation:</strong> Rekod dan sijil pembuangan</span>
                  </li>
                  <li className="flex items-start">
                    <TruckIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Collection:</strong> Bot pengumpul sisa</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheckIcon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <span><strong>Compliance:</strong> Mematuhi MARPOL 73/78</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ship Repair Services */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Perkhidmatan Pembaikan Kapal</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 border rounded-lg">
                <WrenchScrewdriverIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Pembaikan Mekanikal</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Pembaikan enjin utama</li>
                  <li>• Sistem propulsi</li>
                  <li>• Peralatan dek</li>
                  <li>• Sistem hidraulik</li>
                </ul>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <TruckIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Pembaikan Hull</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Kimpalan dan fabrikasi</li>
                  <li>• Penggantian steel plate</li>
                  <li>• Pembaikan kerosakan</li>
                  <li>• Coating dan painting</li>
                </ul>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <CpuChipIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Sistem Elektronik</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Radar dan GPS</li>
                  <li>• Sistem komunikasi</li>
                  <li>• Peralatan navigasi</li>
                  <li>• Sistem kawalan automatik</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* License Management */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pengurusan Lesen dan Permit</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Jenis Lesen</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Lesen Operasi Pelabuhan</li>
                  <li>• Permit Import/Export</li>
                  <li>• Lesen Kawasan Bebas</li>
                  <li>• Permit Aktiviti Marin</li>
                  <li>• Sijil Keselamatan</li>
                  <li>• Lesen Pembekal Perkhidmatan</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Proses Permohonan</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Borang permohonan online</li>
                  <li>• Pemprosesan pantas</li>
                  <li>• Khidmat nasihat percuma</li>
                  <li>• Pembaharuan automatik</li>
                  <li>• Sistem tracking status</li>
                  <li>• Sokongan dokumentasi</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Charter Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Piagam Pelanggan - Komitmen Perkhidmatan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-center mb-3">
                  <ClockIcon className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">Pengurusan Sisa Buangan Kapal</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">Standard perkhidmatan mengikut <strong>MARPOL 73/78</strong></p>
                <p className="text-sm text-gray-600">Operasi 24/7 untuk semua jenis sisa maritim</p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                <div className="flex items-center mb-3">
                  <WrenchScrewdriverIcon className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">Permit Mengangkut dalam Pelabuhan</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">Standard perkhidmatan: <strong>1 hari bekerja</strong></p>
                <p className="text-sm text-gray-600">Selepas kelulusan dan pembayaran caj</p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <a 
                href="/piagam-pelanggan"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
              >
                Lihat Piagam Pelanggan Lengkap
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Hubungi Kami untuk Perkhidmatan Marin
          </h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Untuk maklumat lanjut tentang perkhidmatan marin atau untuk membuat tempahan, sila hubungi pasukan pakar kami.
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