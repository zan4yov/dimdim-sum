import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  initials: string;
  rating: number;
  text: string;
  date: string;
  source: string;
}

const TestimonialCard = ({ name, initials, rating, text, date, source }: TestimonialCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="card-testimonial">
      <div className="flex items-start space-x-4">
        {/* Avatar */}
        <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
          {initials}
        </div>

        {/* Content */}
        <div className="flex-1 space-y-3">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-accent-800">{name}</h4>
              <div className="flex items-center space-x-2 mt-1">
                <div className="flex space-x-1">
                  {renderStars(rating)}
                </div>
                <span className="text-sm text-muted-foreground">
                  via {source}
                </span>
              </div>
            </div>
          </div>

          {/* Review Text */}
          <p className="text-accent-700 leading-relaxed">
            "{text}"
          </p>

          {/* Date */}
          <p className="text-sm text-muted-foreground">
            {formatDate(date)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;