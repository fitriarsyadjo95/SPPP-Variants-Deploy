import { PageTemplate } from '@/components/PageTemplate'

export default function VisiMisiPage() {
  return (
    <PageTemplate
      title="Visi & Misi"
      subtitle="Visi, misi dan objektif organisasi SPPP"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Profil', href: '/profil' }, { name: 'Visi & Misi' }]}
    >
      <div className="max-w-none">
        {/* Vision Section */}
        <div className="bg-gradient-to-r from-sppp-blue to-sppp-dark-blue rounded-lg p-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Visi Kami
          </h2>
          <blockquote className="text-xl italic text-center leading-relaxed">
            &ldquo;PELABUHAN PULAU PINANG SEBAGAI PINTU MASUK MARITIM, HAB LOGISTIK DAN KRUIS BAGI WILAYAH UTARA&rdquo;
          </blockquote>
        </div>

        {/* Mission Section */}
        <div className="bg-white border-2 border-sppp-blue rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-sppp-dark-blue">
            Misi Kami
          </h2>
          <blockquote className="text-xl italic text-center leading-relaxed text-sppp-dark-blue">
            &ldquo;MEMACU DAN MEMPERKASA PERSEKITARAN PELABUHAN YANG PINTAR, MAMPAN DAN BERDAYA SAING&rdquo;
          </blockquote>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-sppp-dark-blue">
            Nilai-nilai Organisasi
          </h2>
          <p className="text-center text-sppp-gray mb-8">
            Prinsip yang menjadi asas kepada semua aktiviti dan perkhidmatan kami
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center p-6 bg-sppp-light-gray rounded-lg">
              <div className="w-16 h-16 bg-sppp-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-sppp-dark-blue mb-2">Integriti</h3>
              <p className="text-sppp-gray">
                Menjalankan tugas dengan jujur, telus dan bertanggungjawab dalam semua aspek perkhidmatan.
              </p>
            </div>
            <div className="text-center p-6 bg-sppp-light-gray rounded-lg">
              <div className="w-16 h-16 bg-sppp-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-sppp-dark-blue mb-2">Kecemerlangan</h3>
              <p className="text-sppp-gray">
                Berusaha untuk memberikan perkhidmatan terbaik dengan standard kualiti yang tinggi secara berterusan.
              </p>
            </div>
            <div className="text-center p-6 bg-sppp-light-gray rounded-lg">
              <div className="w-16 h-16 bg-sppp-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💡</span>
              </div>
              <h3 className="text-xl font-bold text-sppp-dark-blue mb-2">Inovasi</h3>
              <p className="text-sppp-gray">
                Menggunakan teknologi terkini dan kaedah inovatif untuk meningkatkan kecekapan operasi.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-sppp-blue to-sppp-dark-blue rounded-lg p-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">
            SPPP dalam Angka
          </h2>
          <p className="text-center text-sppp-light mb-8">
            Pencapaian dan prestasi yang mencerminkan komitmen kami
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">60+</div>
              <div className="text-lg">Tahun Beroperasi</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-lg">Terminal Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <div className="text-lg">Kakitangan</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-lg">Destinasi Global</div>
            </div>
          </div>
        </div>

      </div>
    </PageTemplate>
  )
}
