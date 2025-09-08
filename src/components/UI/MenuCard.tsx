import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface MenuCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  badges: string[];
  available: boolean;
}

const MenuCard = ({ name, description, price, image, badges, available }: MenuCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case 'bestseller':
        return 'default';
      case 'new':
        return 'secondary';
      case 'halal':
        return 'outline';
      default:
        return 'default';
    }
  };

  const getBadgeText = (badge: string) => {
    switch (badge) {
      case 'bestseller':
        return 'Terlaris';
      case 'new':
        return 'Baru';
      case 'halal':
        return 'Halal';
      default:
        return badge;
    }
  };

  const getBadgeStyles = (badge: string) => {
    switch (badge) {
      case 'bestseller':
        return 'badge-bestseller border-0';
      case 'new':
        return 'badge-new border-0';
      case 'halal':
        return 'badge-halal border-0';
      default:
        return '';
    }
  };

  return (
    <div className="card-menu group">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        
        {/* Badges */}
        {badges.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <Badge 
                key={badge} 
                variant={getBadgeVariant(badge)}
                className={cn(getBadgeStyles(badge))}
              >
                {getBadgeText(badge)}
              </Badge>
            ))}
          </div>
        )}

        {/* Availability Overlay */}
        {!available && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Habis
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-heading text-lg text-accent-800 group-hover:text-brand-600 transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-bold text-xl text-brand-600">
            {formatPrice(price)}
          </span>
          
          <button
            className="btn-brand text-sm px-4 py-2"
            disabled={!available}
          >
            {available ? 'Pesan' : 'Habis'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;