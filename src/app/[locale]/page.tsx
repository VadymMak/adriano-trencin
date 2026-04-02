import HeroSection     from '@/components/sections/HeroSection/HeroSection';
import FeaturedSection from '@/components/sections/FeaturedSection/FeaturedSection';
import AboutSection    from '@/components/sections/AboutSection/AboutSection';
import ReviewsSection  from '@/components/sections/ReviewsSection/ReviewsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <AboutSection />
      <ReviewsSection />
    </>
  );
}
