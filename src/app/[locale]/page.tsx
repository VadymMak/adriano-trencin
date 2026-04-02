import HeroSection        from '@/components/sections/HeroSection/HeroSection';
import FeaturedSection    from '@/components/sections/FeaturedSection/FeaturedSection';
import AboutSection       from '@/components/sections/AboutSection/AboutSection';
import ReviewsSection     from '@/components/sections/ReviewsSection/ReviewsSection';
import ReservationSection from '@/components/sections/ReservationSection/ReservationSection';
import GallerySection     from '@/components/sections/GallerySection/GallerySection';
import InstagramSection   from '@/components/sections/InstagramSection/InstagramSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <AboutSection />
      <ReviewsSection />
      <GallerySection />
      <InstagramSection />
      <ReservationSection />
    </>
  );
}
