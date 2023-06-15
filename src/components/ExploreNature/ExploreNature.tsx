// components
import CustomButton from "@/components/CustomButton";

const ExploreNature = () => {
  return (
    <div className="nature max-sm:h-[700px]">
      <div className="nature__bg-img">
        <div className="nature-txt-container">
          <h2 className="font-['Yellowtail'] text-2xl text-green-light sm:text-4xl">
            Made With Nature
          </h2>
          <p className="font-bold text-4xl leading-[1.15] text-primary-green mt-4 sm:text-7xl">
            Welcome to the <br /> world of nature <br /> and organic.
          </p>
          <CustomButton
            classNameContainer="w-[220px] h-[82px] bg-secondary-yellow rounded-2xl mt-8 shadow-xl"
            classNameText="text-primary-green text-xl"
            title="Explore Now"
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreNature;
