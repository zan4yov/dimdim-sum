import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface MenuCardProps {
  name: string;
  description: string;
  price: number;
  image: string; // dari Menu.tsx: getImageUrl(item.image)
  badges: string[];
  available: boolean;
}

const MenuCard = ({
  name,
  description,
  price,
  image,
  badges = [],
  available,
}: MenuCardProps) => {
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

  // ==== WhatsApp redirect ====
  const number = '6281232255205';
  const waMessage = `Halo DimDim Sum! Saya mau pesan ${name} (${formatPrice(price)}). Apakah tersedia hari ini?`;
  const waUrl = `https://wa.me/${number}?text=${encodeURIComponent(waMessage)}`;
  // ===========================

  // ==== Image fallback helper ====
  const placeholder = '/placeholder-menu.png';
  const safeSrc = image || placeholder;
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img.src.endsWith(placeholder)) return; // sudah fallback
    img.src = placeholder;
    img.onerror = null; // cegah loop
  };
  // ==============================

  return (
    <div className="card-menu group">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={safeSrc}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          decoding="async"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          onError={handleImgError}
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

          {available ? (
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand text-sm px-4 py-2"
              aria-label={`Pesan ${name} via WhatsApp`}
            >
              Pesan
            </a>
          ) : (
            <span className="btn-brand text-sm px-4 py-2 opacity-60 cursor-not-allowed select-none">
              Habis
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
