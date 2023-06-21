// basic
import Slider from "react-slick";

// constants
import { sliderOptions } from "@/constants";

// styles for slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderCarousel = ({ children }: { children: React.ReactNode }) => {
  return (
    <Slider className="w-full max-w-[85vw]" {...sliderOptions}>
      {children}
    </Slider>
  );
};

export default SliderCarousel;
