import HeroSection        from '@/components/sections/HeroSection/HeroSection';
import FeaturedSection    from '@/components/sections/FeaturedSection/FeaturedSection';
import AboutSection       from '@/components/sections/AboutSection/AboutSection';
import ReviewsSection     from '@/components/sections/ReviewsSection/ReviewsSection';
import ReservationSection from '@/components/sections/ReservationSection/ReservationSection';
import CTASection         from '@/components/sections/CTASection/CTASection';
import GallerySection     from '@/components/sections/GallerySection/GallerySection';
import InstagramSection   from '@/components/sections/InstagramSection/InstagramSection';
import ContactSection     from '@/components/sections/ContactSection/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <AboutSection />
      <ReviewsSection />
      <ReservationSection />
      <CTASection />
      <GallerySection />
      <InstagramSection />
      <ContactSection />
    </>
  );
}
