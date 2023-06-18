// basic
import Image from "next/image";

// components
import {
  AboutUs,
  BannersList,
  Categories,
  EcoFriendly,
  ExploreNature,
  News,
  Newsletter,
  Offers,
  Organic,
  Testimonial,
} from "@/components";

export default function Home() {
  return (
    <main>
      <ExploreNature />
      <BannersList />
      <AboutUs />
      <Organic />
      <Testimonial />
      <Offers />
      <EcoFriendly />
      <Categories />
      <News />
      <Newsletter />
    </main>
  );
}
