import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Beranda', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Testimoni', href: '/testimoni' },
    { name: 'Kontak', href: '/kontak' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center">
              <span className="font-display text-white font-bold text-lg">DD</span>
            </div>
            <span className="font-display text-xl text-accent-800">DimDim Sum</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors hover:text-brand-600 ${
                  isActive(item.href) 
                    ? 'text-brand-600 border-b-2 border-brand-600 pb-1' 
                    : 'text-accent-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/6281234567890?text=Halo%20DimDim%20Sum!%20Saya%20ingin%20pesan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <Phone className="w-4 h-4" />
              Pesan Sekarang
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-accent-600 hover:text-brand-600 hover:bg-secondary-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium py-2 transition-colors hover:text-brand-600 ${
                    isActive(item.href) ? 'text-brand-600' : 'text-accent-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/6281234567890?text=Halo%20DimDim%20Sum!%20Saya%20ingin%20pesan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp justify-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                Pesan Sekarang
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;