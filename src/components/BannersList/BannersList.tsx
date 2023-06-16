// constants
import { banners } from "@/constants/banners";

// components
import Banner from "@/components/Banner/Banner";

const BannersList = () => {
  return (
    <section className="banner-list py-24 lg:flex-row lg:py-[140px]">
      {banners.map((banner) => (
        <Banner
          key={banner.name}
          title={banner.title}
          description1={banner.description1}
          description2={banner.description2}
          image={banner.image}
          alt={banner.alt}
          classNameDescr={banner.descrStyles}
          classNameTitle={banner.titleStyles}
        />
      ))}
    </section>
  );
};

export default BannersList;
