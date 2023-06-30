import Image from "next/image";
import CustomButton from "@/components/Buttons/CustomButton";

interface INewProps {
  article: {
    title: string;
    bgImage: string;
    alt: string;
    user: string;
    description: string;
  };
}

const New: React.FC<INewProps> = ({ article }) => {
  const { alt, bgImage, description, title, user } = article;

  return (
    <div key={title} className="new group">
      <Image
        src={bgImage}
        alt={alt}
        width={670}
        height={515}
        className="new__bg-image"
      />
      <article className="new__article cursor-pointer custom-trans group-hover:translate-y-[-20px]">
        <div className="flex gap-2 items-center">
          <Image
            src="/icons/user.svg"
            alt=""
            width={18}
            height={20}
            className="object-contain"
          />
          <p className="text-[17px] text-primary-green">{user}</p>
        </div>
        <h3 className="new__article-title">{title}</h3>
        <p className="new__article-descr">{description}</p>
        <CustomButton
          title="View More"
          classNameContainer="w-full h-[50px] mt-auto "
          classNameContent="flex pl-0 pr-0 justify-start gap-3"
          classNameText="text-lg text-primary-green"
          classNameArrow="p-2"
        />
      </article>
    </div>
  );
};

export default New;
