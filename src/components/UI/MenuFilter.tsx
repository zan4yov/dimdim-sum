import { useState } from 'react';
import { Filter, X, ChevronDown } from 'lucide-react';

interface FilterOptions {
  category: string;
  spiceLevel: string;
  priceRange: string;
  sortBy: string;
}

interface MenuFilterProps {
  onFilterChange: (filters: FilterOptions) => void;
  onReset: () => void;
}

const MenuFilter = ({ onFilterChange, onReset }: MenuFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'all',
    spiceLevel: 'all',
    priceRange: 'all',
    sortBy: 'name'
  });

  const categories = [
    { value: 'all', label: 'Semua Jenis' },
    { value: 'kukus', label: 'Kukus' },
    { value: 'goreng', label: 'Goreng' }
  ];

  const spiceLevels = [
    { value: 'all', label: 'Semua Tingkat' },
    { value: 'mild', label: 'Tidak Pedas' },
    { value: 'mentai', label: 'Mentai' }
  ];

  const priceRanges = [
    { value: 'all', label: 'Semua Harga' },
    { value: '0-15000', label: 'Di bawah Rp 15.000' },
    { value: '15000-20000', label: 'Rp 15.000 - Rp 20.000' },
    { value: '20000+', label: 'Di atas Rp 20.000' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Nama A-Z' },
    { value: 'price-low', label: 'Harga Terendah' },
    { value: 'price-high', label: 'Harga Tertinggi' }
  ];

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const resetFilters: FilterOptions = {
      category: 'all',
      spiceLevel: 'all',
      priceRange: 'all',
      sortBy: 'name'
    };
    setFilters(resetFilters);
    onReset();
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== 'all' && value !== 'name');

  return (
    <div className="bg-white rounded-xl shadow-card p-4 sticky top-20 z-40">
      {/* Mobile Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full py-2"
        >
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-brand-600" />
            <span className="font-semibold text-accent-800">Filter Menu</span>
            {hasActiveFilters && (
              <span className="bg-brand-500 text-white text-xs px-2 py-1 rounded-full">
                Aktif
              </span>
            )}
          </div>
          <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Filter Content */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0 space-y-4`}>
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-brand-600" />
            <span className="font-semibold text-accent-800">Filter Menu</span>
          </div>
          {hasActiveFilters && (
            <button
              onClick={handleReset}
              className="flex items-center space-x-1 text-sm text-brand-600 hover:text-brand-700 transition-colors"
            >
              <X className="w-4 h-4" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Filter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-accent-700 mb-2">
              Jenis
            </label>
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="w-full p-2 border border-border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          {/* Spice Level */}
          <div>
            <label className="block text-sm font-medium text-accent-700 mb-2">
              Tingkat Pedas
            </label>
            <select
              value={filters.spiceLevel}
              onChange={(e) => handleFilterChange('spiceLevel', e.target.value)}
              className="w-full p-2 border border-border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors"
            >
              {spiceLevels.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-accent-700 mb-2">
              Rentang Harga
            </label>
            <select
              value={filters.priceRange}
              onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              className="w-full p-2 border border-border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors"
            >
              {priceRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-sm font-medium text-accent-700 mb-2">
              Urutkan
            </label>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="w-full p-2 border border-border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile Reset Button */}
        {hasActiveFilters && (
          <div className="md:hidden pt-2">
            <button
              onClick={handleReset}
              className="flex items-center justify-center space-x-2 w-full py-2 text-brand-600 hover:text-brand-700 transition-colors"
            >
              <X className="w-4 h-4" />
              <span>Reset Filter</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuFilter;