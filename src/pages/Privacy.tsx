import Layout from '@/components/Layout/Layout';

const Privacy = () => {
  return (
    <Layout 
      title="Kebijakan Privasi - DimDim Sum"
      description="Kebijakan privasi DimDim Sum mengenai pengumpulan, penggunaan, dan perlindungan data pribadi pelanggan."
    >
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="font-display text-4xl md:text-5xl text-accent-800 mb-4">
                Kebijakan Privasi
              </h1>
              <p className="text-xl text-muted-foreground">
                Terakhir diperbarui: 1 Januari 2024
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="font-heading text-2xl text-accent-800 mb-4">1. Informasi yang Kami Kumpulkan</h2>
                <p className="text-muted-foreground leading-relaxed">
                  DimDim Sum mengumpulkan informasi yang Anda berikan secara langsung kepada kami, seperti:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Nama dan informasi kontak (nomor telepon, alamat email)</li>
                  <li>Alamat pengiriman untuk layanan delivery</li>
                  <li>Preferensi makanan dan riwayat pesanan</li>
                  <li>Feedback dan testimoni yang Anda berikan</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-accent-800 mb-4">2. Penggunaan Informasi</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kami menggunakan informasi yang dikumpulkan untuk:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Memproses dan memenuhi pesanan Anda</li>
                  <li>Berkomunikasi dengan Anda mengenai pesanan dan layanan</li>
                  <li>Meningkatkan kualitas produk dan layanan kami</li>
                  <li>Mengirimkan informasi promosi (dengan persetujuan Anda)</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-accent-800 mb-4">3. Perlindungan Data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kami berkomitmen untuk melindungi informasi pribadi Anda dengan:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Menggunakan teknologi enkripsi untuk data sensitif</li>
                  <li>Membatasi akses data hanya kepada karyawan yang berwenang</li>
                  <li>Tidak membagikan data kepada pihak ketiga tanpa persetujuan</li>
                  <li>Mematuhi peraturan perlindungan data yang berlaku</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-accent-800 mb-4">4. Hak Anda</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Anda memiliki hak untuk:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Mengakses dan memperbarui informasi pribadi Anda</li>
                  <li>Meminta penghapusan data pribadi Anda</li>
                  <li>Menolak penggunaan data untuk tujuan pemasaran</li>
                  <li>Mengajukan keluhan terkait penggunaan data pribadi</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-accent-800 mb-4">5. Kontak</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini, silakan hubungi kami:
                </p>
                <div className="bg-secondary-50 p-6 rounded-xl mt-4">
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> privacy@dimdimsumid.com</p>
                    <p><strong>WhatsApp:</strong> +62 812-3456-7890</p>
                    <p><strong>Alamat:</strong> Jl. Raya Kelapa Gading No. 123, Jakarta Utara, 14240</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;