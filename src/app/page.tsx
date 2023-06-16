// basic
import Image from "next/image";

// components
import {
  AboutUs,
  BannersList,
  ExploreNature,
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
    </main>
  );
}
