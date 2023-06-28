"use client";

// components
import CustomButton from "@/components/CustomButton";
import useVisible from "@/hooks/useVisible";

const ExploreNature = () => {
  const { elemRef, value } = useVisible();

  return (
    <div ref={elemRef} className={`nature max-sm:h-[700px]`}>
      <div
        className={`nature__bg-img  transition-all ease-in-out duration-1000 ${
          value ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="nature-txt-container">
          <h2
            className={`custom-trans font-['Yellowtail'] text-2xl text-green-light sm:text-4xl delay-500 ${
              value
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[-100px]"
            }`}
          >
            Made With Nature
          </h2>
          <p
            className={`custom-trans font-bold text-4xl leading-[1.15] text-primary-green mt-4 sm:text-7xl delay-1000 ${
              value
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[-100px]"
            }`}
          >
            Welcome to the <br /> world of nature <br /> and organic.
          </p>
          <CustomButton
            classNameContainer={`custom-trans w-[220px] h-[82px] bg-secondary-yellow rounded-2xl mt-8 shadow-xl delay-[1500ms] ${
              value ? "opacity-100" : "opacity-0"
            }`}
            classNameText="text-primary-green text-xl"
            title="Explore Now"
            route="/catalog"
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreNature;
