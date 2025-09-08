import Layout from '@/components/Layout/Layout';
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram } from 'lucide-react';

const Kontak = () => {
  const whatsappNumber = "6281234567890";
  const email = "hello@dimdimsumid.com";
  const address = "Jl. Raya Kelapa Gading No. 123, Jakarta Utara, 14240";
  
  const whatsappMessage = encodeURIComponent("Halo DimDim Sum! Saya ingin bertanya tentang menu dan pemesanan.");

  return (
    <Layout 
      title="Kontak & Lokasi - DimDim Sum"
      description="Hubungi DimDim Sum untuk pemesanan atau informasi lebih lanjut. Temukan lokasi dan jam operasional kami."
    >
      {/* Hero Section */}
      <section className="bg-gradient-brand text-white py-16">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Kontak & Lokasi
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Hubungi kami untuk pemesanan atau kunjungi langsung toko kami
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl text-accent-800 mb-6">
                  Hubungi Kami
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Tim kami siap melayani dan menjawab semua pertanyaan Anda
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-card rounded-xl shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
                    <MessageCircle className="w-6 h-6 text-green-600 group-hover:text-white" />
                  </div>
                  <h3 className="font-heading text-lg text-accent-800 mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground mb-3">Pesan langsung via WhatsApp</p>
                  <p className="font-semibold text-brand-600">+62 812-3456-7890</p>
                </a>

                {/* Phone */}
                <a
                  href={`tel:+${whatsappNumber}`}
                  className="group p-6 bg-card rounded-xl shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border"
                >
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-500 transition-colors">
                    <Phone className="w-6 h-6 text-brand-600 group-hover:text-white" />
                  </div>
                  <h3 className="font-heading text-lg text-accent-800 mb-2">Telepon</h3>
                  <p className="text-muted-foreground mb-3">Hubungi langsung via telepon</p>
                  <p className="font-semibold text-brand-600">+62 812-3456-7890</p>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${email}`}
                  className="group p-6 bg-card rounded-xl shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                    <Mail className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <h3 className="font-heading text-lg text-accent-800 mb-2">Email</h3>
                  <p className="text-muted-foreground mb-3">Kirim pertanyaan via email</p>
                  <p className="font-semibold text-brand-600">{email}</p>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/dimdimsumid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-card rounded-xl shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border"
                >
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-500 transition-colors">
                    <Instagram className="w-6 h-6 text-pink-600 group-hover:text-white" />
                  </div>
                  <h3 className="font-heading text-lg text-accent-800 mb-2">Instagram</h3>
                  <p className="text-muted-foreground mb-3">Follow untuk update terbaru</p>
                  <p className="font-semibold text-brand-600">@dimdimsumid</p>
                </a>
              </div>
            </div>

            {/* Location & Hours */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl text-accent-800 mb-6">
                  Lokasi & Jam Buka
                </h2>
              </div>

              {/* Address */}
              <div className="p-6 bg-card rounded-xl shadow-card border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-accent-800 mb-2">Alamat Toko</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {address}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Dekat dengan Mall Kelapa Gading dan stasiun MRT
                    </p>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="p-6 bg-card rounded-xl shadow-card border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg text-accent-800 mb-4">Jam Operasional</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="font-medium text-accent-700">Senin - Jumat</span>
                        <span className="text-muted-foreground">10:00 - 21:00 WIB</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="font-medium text-accent-700">Sabtu - Minggu</span>
                        <span className="text-muted-foreground">09:00 - 22:00 WIB</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="font-medium text-accent-700">Hari Libur Nasional</span>
                        <span className="text-muted-foreground">11:00 - 20:00 WIB</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Order CTA */}
              <div className="p-6 bg-gradient-brand rounded-xl text-white">
                <h3 className="font-heading text-xl mb-3">Pesan Sekarang Juga!</h3>
                <p className="text-white/90 mb-4">
                  Tidak perlu antri, pesan langsung via WhatsApp dan ambil di toko
                </p>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp bg-white/20 hover:bg-white/30 border-white/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="bg-card rounded-xl shadow-card overflow-hidden">
            <div className="p-6 border-b border-border">
              <h2 className="font-display text-2xl text-accent-800 mb-2">
                Peta Lokasi
              </h2>
              <p className="text-muted-foreground">
                Temukan lokasi DimDim Sum dengan mudah menggunakan peta di bawah ini
              </p>
            </div>
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666!2d106.900587!3d-6.158086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e7a5b8!2sKelapa%20Gading%2C%20North%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1635123456789!5m2!1sen!2sid"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi DimDim Sum"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontak;