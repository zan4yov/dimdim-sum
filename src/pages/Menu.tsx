import { useState, useMemo } from 'react';
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
        const [min, max] = filters.priceRange.split('-').map(p => parseInt(p) || Infinity);
        if (filters.priceRange.endsWith('+')) {
          if (item.price < min) return false;
        } else {
          if (item.price < min || item.price > max) return false;
        }
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
      {/* Hero Section */}
      <section className="bg-gradient-brand text-white py-16">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Menu Lengkap
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Temukan berbagai varian dim sum halal dengan cita rasa autentik
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-8">
            {/* Filter */}
            <MenuFilter 
              onFilterChange={handleFilterChange}
              onReset={handleReset}
            />

            {/* Results Info */}
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground">
                Menampilkan {filteredAndSortedMenu.length} dari {menuData.length} menu
              </p>
            </div>

            {/* Menu Grid */}
            {filteredAndSortedMenu.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredAndSortedMenu.map((item) => (
                  <MenuCard
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                    badges={item.badges}
                    available={item.available}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🥟</span>
                  </div>
                  <h3 className="font-heading text-xl text-accent-800 mb-2">
                    Tidak ada menu yang sesuai
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Coba ubah filter pencarian untuk menemukan menu yang Anda inginkan
                  </p>
                  <button
                    onClick={handleReset}
                    className="btn-brand"
                  >
                    Reset Filter
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;