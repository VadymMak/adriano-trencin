import HeroSection        from '@/components/sections/HeroSection/HeroSection';
import FeaturedSection    from '@/components/sections/FeaturedSection/FeaturedSection';
import AboutSection       from '@/components/sections/AboutSection/AboutSection';
import ReviewsSection     from '@/components/sections/ReviewsSection/ReviewsSection';
import ReservationSection from '@/components/sections/ReservationSection/ReservationSection';
import CTASection         from '@/components/sections/CTASection/CTASection';
import GallerySection     from '@/components/sections/GallerySection/GallerySection';
import InstagramSection   from '@/components/sections/InstagramSection/InstagramSection';
import ContactSection     from '@/components/sections/ContactSection/ContactSection';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://adriano-trencin.vercel.app';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const restaurantJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Adriano Restaurant & Cafe',
    url: BASE_URL,
    image: `${BASE_URL}/images/og-image.jpg`,
    telephone: '+421949551553',
    email: 'adrianorestaurantcafe@gmail.com',
    priceRange: '€€',
    servesCuisine: ['Mediterranean', 'Italian', 'Seafood', 'Croatian'],
    inLanguage: locale,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Námestie sv. Anny 3',
      addressLocality: 'Trenčín',
      postalCode: '911 01',
      addressCountry: 'SK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.8942,
      longitude: 18.0442,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '11:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '11:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '12:00',
        closes: '21:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/adrianorestaurantcafe',
      'https://www.facebook.com/adrianorestaurant',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
      />
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
