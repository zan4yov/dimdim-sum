import { useState, useEffect } from 'react';
import Layout from '@/components/Layout/Layout';
import MenuCard from '@/components/UI/MenuCard';
import TestimonialCard from '@/components/UI/TestimonialCard';
import { Badge } from '@/components/ui/badge';
import menuData from '@/data/menu.json';
import testimoniData from '@/data/testimonials.json';
import heroImage from '@/assets/1.jpeg';
import {
  Shield,
  Clock,
  ChefHat,
  Heart,
  ArrowRight,
  Phone,
  MessageCircle,
} from 'lucide-react';

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [count, setCount] = useState(0);

  const featuredMenu = menuData
    .filter((item) => item.badges.includes('bestseller'))
    .slice(0, 4);
  const recentTestimonials = testimoniData.slice(0, 3);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % recentTestimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [recentTestimonials.length]);

  // Count-up animation (0 -> 500)
  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 2000; // 2s
    const incrementTime = 20; // ms
    const step = Math.ceil(end / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  const usp = [
    {
      icon: Shield,
      title: 'Unik & Kreatif',
      description: 'Menyajikan Dimsum dengan Inovasi yang Bikin Momen Lebih Berkesan',
    },
    {
      icon: ChefHat,
      title: 'Resep Autentik',
      description: 'Dibuat dengan resep tradisional yang telah teruji',
    },
    {
      icon: Heart,
      title: 'Bahan Segar',
      description: 'Menggunakan bahan-bahan segar pilihan setiap hari',
    },
    {
      icon: Clock,
      title: 'Dibuat Fresh',
      description: 'Diproduksi segar setiap hari tanpa pengawet',
    },
  ];

  return (
    <Layout
      title="DimDim Sum - Dim Sum Mentai Terlezat Surabaya"
      description="Nikmati dim sum Mentai terlezat di Surabaya dengan berbagai varian kukus dan goreng. Dibuat segar setiap hari dengan bahan pilihan berkualitas."
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-brand overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="DimDim Sum - Berbagai varian dim sum mentai yang lezat"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-600/80 to-brand-500/60" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm font-semibold">Dijamin PUAS</span>
                </div>

                {/* Headline */}
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                  Dim Sum Mentai
                  <span className="block text-gradient-brand bg-white text-white">
                    Terlezat
                  </span>
                  di Surabaya
                </h1>

                {/* Subheading */}
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-xl">
                  Nikmati berbagai varian dim sum dengan cita rasa autentik,
                  dibuat segar setiap hari dengan bahan-bahan pilihan berkualitas.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/6281232255205?text=Halo%20DimDim%20Sum!%20Saya%20ingin%20pesan%20menu%20favorit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp bg-green-500 hover:bg-green-600 justify-center sm:justify-start"
                >
                  <MessageCircle className="w-5 h-5" />
                  Pesan Sekarang
                </a>
                <a
                  href="/Menu.tsx"
                  className="btn-ghost text-white border-white/50 hover:bg-white/10 justify-center sm:justify-start"
                >
                  Lihat Menu
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>

              {/* Social Proof (hapus rating & pengalaman, pakai count-up) */}
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-4xl font-extrabold">{count}+</div>
                  <div className="text-sm text-white/80">Pelanggan Puas</div>
                </div>
              </div>
            </div>

            {/* Featured Visual */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">🥟</div>
                    <h3 className="text-xl font-heading">Menu Terpopuler</h3>
                    <div className="space-y-2 text-sm text-white/90">
                      <div>✨ Dimsum Mentai Spesial</div>
                      <div>🔥 Siomay Ayam Terlaris</div>
                      <div>🥢 Hakao Udang Premium</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-accent-800 mb-4">
              Mengapa Pilih DimDim Sum?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Komitmen kami untuk memberikan yang terbaik dalam setiap gigitan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usp.map((item, index) => (
              <div key={index} className="text-center space-y-4 group hover-lift">
                <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-accent-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="badge-bestseller mb-4">Menu Terpopuler</Badge>
            <h2 className="font-display text-3xl md:text-4xl text-accent-800 mb-4">
              Menu Favorit Pelanggan
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Koleksi dim sum pilihan yang paling disukai dan sering dipesan
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredMenu.map((item) => (
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

          <div className="text-center">
            <a href="/menu" className="btn-brand inline-flex items-center justify-center">
              Lihat Semua Menu
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-accent-800 mb-4">
              Kata Pelanggan Kami
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Testimoni nyata dari pelanggan yang telah merasakan kelezatan dim sum kami
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentTestimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 ${
                    index === currentTestimonial ? 'scale-105 z-10' : 'scale-95 opacity-75'
                  }`}
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-2 mt-8">
              {recentTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-brand-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <a href="/testimoni" className="btn-ghost inline-flex items-center justify-center">
                Lihat Semua Testimoni
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-brand">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4 text-black">
            Siap Merasakan Kelezatannya?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-black">
            Jangan tunggu lagi! Pesan sekarang dan nikmati dimsum mentai terlezat
            dengan pengiriman cepat ke seluruh Surabaya.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281232255205?text=Halo%20DimDim%20Sum!%20Saya%20ingin%20pesan%20sekarang"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp bg-green-500 hover:bg-green-600 justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Pesan via WhatsApp
            </a>

            <a
              href="tel:+6281232255205"
              className="inline-flex items-center justify-center gap-2 rounded-full 
                         px-6 py-3 font-semibold bg-white text-black 
                         border border-gray-300 shadow-sm 
                         transition-all duration-200 
                         hover:bg-orange-500 hover:text-white hover:scale-105 active:scale-95"
            >
              <Phone className="w-5 h-5" />
              Hubungi Langsung
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
