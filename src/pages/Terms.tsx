import Layout from '@/components/Layout/Layout';

const Terms = () => {
  return (
    <Layout 
      title="Syarat & Ketentuan - DimDim Sum"
      description="Syarat dan ketentuan penggunaan layanan DimDim Sum untuk pemesanan dan layanan pelanggan."
    >
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="font-display text-4xl md:text-5xl text-accent-800 mb-4">
                Syarat & Ketentuan
              </h1>
              <p className="text-xl text-muted-foreground">
                Terakhir diperbarui: 1 Januari 2024
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="font-heading text-2xl text-accent-800 mb-4">1. Penerimaan Ketentuan</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Dengan menggunakan layanan DimDim Sum, Anda menyetujui untuk terikat oleh syarat dan ketentuan ini. 
                  Jika Anda tidak menyetujui ketentuan ini, mohon untuk tidak menggunakan layanan kami.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-accent-800 mb-4">2. Layanan Kami</h2>
                <p className="text-muted-foreground leading-relaxed">
                  DimDim Sum menyediakan layanan:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Penjualan dim sum dan makanan terkait</li>
                  <li>Layanan delivery dan takeaway</li>
                  <li>Konsultasi menu dan pemesanan</li>
                  <li>Layanan catering untuk acara khusus</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-accent-800 mb-4">3. Pemesanan dan Pembayaran</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg text-accent-700 mb-2">Pemesanan</h3>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Pesanan dapat dilakukan melalui WhatsApp atau telepon</li>
                      <li>Konfirmasi pesanan akan diberikan dalam waktu 15 menit</li>
                      <li>Pesanan dapat dibatalkan maksimal 30 menit setelah konfirmasi</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-accent-700 mb-2">Pembayaran</h3>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Pembayaran dapat dilakukan tunai atau transfer bank</li>
                      <li>Untuk delivery, pembayaran dilakukan saat pengiriman</li>
                      <li>Harga sudah termasuk PPN sesuai ketentuan yang berlaku</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-accent-800 mb-4">4. Delivery dan Pengiriman</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Waktu pengiriman estimasi 30-60 menit tergantung lokasi</li>
                  <li>Biaya pengiriman akan diberitahukan saat pemesanan</li>
                  <li>Kami tidak bertanggung jawab atas keterlambatan akibat faktor eksternal</li>
                  <li>Pastikan alamat pengiriman lengkap dan benar</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-accent-800 mb-4">5. Kualitas dan Keamanan Produk</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Semua produk dijamin halal dan menggunakan bahan segar</li>
                  <li>Produk sebaiknya dikonsumsi dalam waktu 24 jam</li>
                  <li>Simpan produk dalam lemari pendingin jika tidak langsung dikonsumsi</li>
                  <li>Laporkan segera jika ada masalah dengan kualitas produk</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-accent-800 mb-4">6. Kebijakan Pengembalian</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Pengembalian dana hanya berlaku untuk produk yang rusak atau salah pesanan</li>
                  <li>Klaim harus dilaporkan maksimal 2 jam setelah pengiriman</li>
                  <li>Foto bukti produk diperlukan untuk proses klaim</li>
                  <li>Pengembalian dana akan diproses dalam 1-3 hari kerja</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-accent-800 mb-4">7. Kontak</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Untuk pertanyaan mengenai syarat dan ketentuan ini, hubungi kami:
                </p>
                <div className="bg-secondary-50 p-6 rounded-xl mt-4">
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>WhatsApp:</strong> +62 812-3456-7890</p>
                    <p><strong>Email:</strong> cs@dimdimsumid.com</p>
                    <p><strong>Alamat:</strong> Jl. Raya Kelapa Gading No. 123, Jakarta Utara, 14240</p>
                    <p><strong>Jam Operasional:</strong> Senin-Jumat 10:00-21:00, Sabtu-Minggu 09:00-22:00</p>
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

export default Terms;