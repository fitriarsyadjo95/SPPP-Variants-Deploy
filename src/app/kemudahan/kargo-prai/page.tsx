import { Metadata } from 'next';
import { PageTemplate } from '@/components/PageTemplate';
import {
  TruckIcon,
  BuildingOfficeIcon,
  ArchiveBoxIcon,
  CpuChipIcon,
  MapPinIcon,
  ShieldCheckIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Prai Bulk Cargo Terminal (PBCT) | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Terminal kargo pukal dengan dermaga 632m dan kemudahan khas untuk bahan berbahaya, kargo kering dan cecair',
  keywords: 'PBCT, Prai Bulk Cargo Terminal, kargo pukal, bahan berbahaya, pipeline, Gottwald crane',
};

export default function PengkalanKargoPukalPraiPage() {
  return (
    <PageTemplate
      title="Prai Bulk Cargo Terminal (PBCT)"
      subtitle="Terminal kargo pukal dengan kemudahan khusus untuk bahan berbahaya dan sambungan pipeline"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Kemudahan', href: '/kemudahan' }, { name: 'Kargo Prai' }]}
    >
      <div className="max-w-none">
        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">632m</div>
            <div className="text-sm text-sppp-gray">Dermaga Utama</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">154m</div>
            <div className="text-sm text-sppp-gray">Dermaga Dalaman</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-1">132m</div>
            <div className="text-sm text-sppp-gray">Dermaga DG</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">4</div>
            <div className="text-sm text-sppp-gray">Gottwald Cranes</div>
          </div>
        </div>

        {/* Cargo Types */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Jenis Kargo
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <ArchiveBoxIcon className="h-12 w-12 text-yellow-600 mx-auto mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Kargo Kering Pukal</h4>
              <p className="text-sm text-sppp-gray">Bijirin, kacang soya, gula mentah</p>
            </div>
            <div className="text-center">
              <ShieldCheckIcon className="h-12 w-12 text-red-600 mx-auto mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Kargo Berbahaya</h4>
              <p className="text-sm text-sppp-gray">Produk berasaskan cecair</p>
            </div>
            <div className="text-center">
              <CpuChipIcon className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Sambungan Pipeline</h4>
              <p className="text-sm text-sppp-gray">Terus ke kilang berhampiran</p>
            </div>
          </div>
        </div>

        {/* Kemudahan */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Kemudahan Utama
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-sppp-dark-blue mb-2">Peralatan</h4>
              <ul className="text-sm text-sppp-gray space-y-1">
                <li>• 4 Gottwald cranes</li>
                <li>• 8 Manifold Arms</li>
                <li>• Sistem automatik</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-sppp-dark-blue mb-2">Pipeline</h4>
              <ul className="text-sm text-sppp-gray space-y-1">
                <li>• Ke kilang berhampiran</li>
                <li>• Kawasan Perindustrian Prai</li>
                <li>• Pemindahan automatik</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-sppp-dark-blue mb-2">Keselamatan</h4>
              <ul className="text-sm text-sppp-gray space-y-1">
                <li>• CCTV 24/7</li>
                <li>• Fire suppression</li>
                <li>• Environmental monitoring</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
            Maklumat Hubungan
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Operasi</h4>
              <p className="text-sm text-sppp-gray">24 jam / 7 hari</p>
            </div>
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-2">Telefon</h4>
              <p className="text-sm text-sppp-gray">604-262-6211</p>
            </div>
            <div>
              <h4 className="font-semibold text-sppp-dark-blue mb-2">E-mel</h4>
              <p className="text-sm text-sppp-gray">operations@penangport.gov.my</p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}