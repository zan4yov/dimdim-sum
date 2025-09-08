import { Instagram, MessageCircle, Clock, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-accent-800 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center">
                <span className="font-display text-white font-bold text-lg">DD</span>
              </div>
              <span className="font-display text-xl">DimDim Sum</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Menyajikan dim sum berkualitas dengan cita rasa autentik dan halal. 
              Dibuat dengan bahan-bahan segar pilihan untuk kepuasan pelanggan.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/dimdimsumid"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-brand-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg">Menu Utama</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-brand-400 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-brand-400 transition-colors">
                  Menu Lengkap
                </Link>
              </li>
              <li>
                <Link to="/testimoni" className="hover:text-brand-400 transition-colors">
                  Testimoni
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="hover:text-brand-400 transition-colors">
                  Kontak Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg">Kontak</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-400" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-400" />
                <span>hello@dimdimsumid.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-400 mt-0.5" />
                <span>
                  Jl. Raya Kelapa Gading No. 123<br />
                  Jakarta Utara, 14240
                </span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg">Jam Operasional</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-brand-400" />
                <div>
                  <div className="font-medium">Senin - Jumat</div>
                  <div>10:00 - 21:00 WIB</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-brand-400" />
                <div>
                  <div className="font-medium">Sabtu - Minggu</div>
                  <div>09:00 - 22:00 WIB</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 DimDim Sum. Semua hak cipta dilindungi.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-brand-400 transition-colors">
                Kebijakan Privasi
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-brand-400 transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;