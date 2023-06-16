// basic
import Image from "next/image";

// components
import { BannersList, ExploreNature } from "@/components";

export default function Home() {
  return (
    <main>
      <ExploreNature />
      <BannersList />
    </main>
  );
}
