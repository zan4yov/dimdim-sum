import Layout from '@/components/Layout/Layout';
import TestimonialCard from '@/components/UI/TestimonialCard';
import testimoniData from '@/data/testimonials.json';
import { Star, Users, Heart, Award, Instagram } from 'lucide-react';

const Testimoni = () => {
  const averageRating =
    testimoniData.reduce((sum, testimonial) => sum + testimonial.rating, 0) /
    testimoniData.length;
  const totalReviews = testimoniData.length;
  const fiveStarReviews = testimoniData.filter((t) => t.rating === 5).length;

  return (
    <Layout
      title="Testimoni Pelanggan - DimDim Sum"
      description="Baca review dan testimoni dari pelanggan setia DimDim Sum tentang kualitas dan rasa dim sum halal kami."
    >
      {/* Hero Section */}
      <section className="bg-gradient-brand py-8">
  <div className="container-custom text-center space-y-2">
    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-2 text-black">
      Testimoni Pelanggan
    </h1>
    <p className="text-lg md:text-xl max-w-xl mx-auto text-black mb-4">
      Dengarkan cerita kepuasan dari pelanggan setia DimDim Sum
    </p>
  </div>
</section>

      {/* Stats Section */}
      <section className="pt-6 pb-12 bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Average Rating */}
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-800">
                  {averageRating.toFixed(1)}
                </div>
                <div className="text-sm text-muted-foreground">Rating Rata-rata</div>
              </div>
            </div>

            {/* Total Reviews */}
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-800">{totalReviews}+</div>
                <div className="text-sm text-muted-foreground">Total Review</div>
              </div>
            </div>

            {/* Five Star Reviews */}
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-800">
                  {Math.round((fiveStarReviews / totalReviews) * 100)}%
                </div>
                <div className="text-sm text-muted-foreground">Review 5 Bintang</div>
              </div>
            </div>

            {/* Customer Satisfaction */}
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-800">98%</div>
                <div className="text-sm text-muted-foreground">Kepuasan Pelanggan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="pt-6 pb-12">
        <div className="container-custom space-y-6">
          <div className="text-center space-y-2">
            <h2 className="font-display text-3xl md:text-4xl text-accent-800">
              Apa Kata Mereka?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Testimoni nyata dari pelanggan yang telah merasakan kelezatan dim sum kami
            </p>
          </div>

          {testimoniData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimoniData.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  name={testimonial.name}
                  initials={testimonial.initials}
                  rating={testimonial.rating}
                  text={testimonial.text}
                  date={testimonial.date}
                  source={testimonial.source}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              Belum ada testimoni yang ditampilkan.
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-6 pb-12 bg-gradient-brand">
        <div className="container-custom text-center space-y-4">
          <h2 className="font-display text-3xl md:text-4xl text-black">
            Ingin Berbagi Pengalaman Anda?
          </h2>
          <p className="text-lg max-w-xl mx-auto text-black">
            Kami sangat menghargai feedback dari setiap pelanggan untuk terus meningkatkan kualitas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281234567890?text=Halo%20DimDim%20Sum!%20Saya%20ingin%20memberikan%20testimoni"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp bg-white/20 hover:bg-white/30 border-white/20 text-black"
            >
              Kirim Testimoni
            </a>
            <a
              href="https://instagram.com/dimdimsumid"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full 
                     px-6 py-3 font-semibold bg-white text-black 
                     border border-gray-300 shadow-sm 
                     transition-all duration-200 
                     hover:bg-orange-500 hover:text-white hover:scale-105 active:scale-95"
            >
              <Instagram className="w-5 h-5" />
              Follow Instagram
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimoni;
