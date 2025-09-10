import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import MenuCard from '@/components/UI/MenuCard';
import MenuFilter from '@/components/UI/MenuFilter';
import menuData from '@/data/menu.json';

interface FilterOptions {
  category: string;
  spiceLevel: string;
  priceRange: string;
  sortBy: string;
}

// Map semua gambar di src/assets ke URL final (Vite-only)
const imageModules = import.meta.glob('@/assets/**/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const getImageUrl = (jsonPath: string): string => {
  if (!jsonPath) return '/placeholder-menu.png';
  // jsonPath contoh: "/src/assets/DIMSUM-MENTAI-6.jpeg"
  const basename = jsonPath.split('/').pop()!; // "DIMSUM-MENTAI-6.jpeg"
  const found = Object.entries(imageModules).find(([key]) => key.endsWith(basename));
  return found?.[1] ?? '/placeholder-menu.png';
};

const Menu = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'all',
    spiceLevel: 'all',
    priceRange: 'all',
    sortBy: 'name'
  });

  const filteredAndSortedMenu = useMemo(() => {
    let filtered = menuData.filter(item => {
      // Category filter
      if (filters.category !== 'all' && item.category !== filters.category) {
        return false;
      }

      // Spice level filter
      if (filters.spiceLevel !== 'all' && item.spiceLevel !== filters.spiceLevel) {
        return false;
      }

      // Price range filter
      if (filters.priceRange !== 'all') {
        const [minRaw, maxRaw] = filters.priceRange.split('-');
        const min = parseInt(minRaw);
        const max = maxRaw?.endsWith('+') ? Infinity : parseInt(maxRaw);
        if (Number.isFinite(min) && item.price < min) return false;
        if (Number.isFinite(max) && item.price > (max as number)) return false;
      }

      return true;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [filters]);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  const handleReset = () => {
    setFilters({
      category: 'all',
      spiceLevel: 'all',
      priceRange: 'all',
      sortBy: 'name'
    });
  };

  return (
    <Layout
      title="Menu Lengkap - DimDim Sum"
      description="Jelajahi menu lengkap dim sum halal kami dengan berbagai varian kukus dan goreng yang lezat."
    >
      {/* Hero Section (lebih rapat) */}
      <motion.section
        className="bg-gradient-brand py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-2 text-black">
            Menu Lengkap
          </h1>
          <p className="text-lg md:text-xl text-black/90 max-w-2xl mx-auto">
            Temukan berbagai varian dim sum halal dengan cita rasa autentik
          </p>
        </div>
      </motion.section>

      {/* Menu Section */}
      <section className="section-padding pt-6">{/* kurangi jarak atas section */}
        <div className="container-custom">
          <motion.div
            className="space-y-4" // dari 8 jadi 4 agar lebih rapat
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Filter */}
            <MenuFilter onFilterChange={handleFilterChange} onReset={handleReset} />

            {/* Results Info (lebih rapat) */}
            <div className="flex items-center justify-between mt-1">
              <p className="text-muted-foreground">
                Menampilkan {filteredAndSortedMenu.length} dari {menuData.length} menu
              </p>
            </div>

            {/* Menu Grid dengan animasi ringan */}
            {filteredAndSortedMenu.length > 0 ? (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 1 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
                  }
                }}
              >
                {filteredAndSortedMenu.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
                    }}
                  >
                    <MenuCard
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      image={getImageUrl(item.image)}  {/* <- penting */}
                      badges={item.badges}
                      available={item.available}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12">{/* kurangi dari 16 ke 12 */}
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-4xl">🥟</span>
                  </div>
                  <h3 className="font-heading text-xl text-accent-800 mb-2">
                    Tidak ada menu yang sesuai
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Coba ubah filter pencarian untuk menemukan menu yang Anda inginkan
                  </p>
                  <button onClick={handleReset} className="btn-brand">
                    Reset Filter
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
