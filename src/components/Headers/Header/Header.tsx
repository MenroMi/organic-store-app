import Navbar from "@/components/Navbar";

const Header = async () => {
  return (
    <header
      className={`general-header max-sm:h-[100px] lg:fixed lg:top-0 lg:z-[12] lg:backdrop-blur-sm min-h-[50px] `}
    >
      <Navbar />
    </header>
  );
};

export default Header;
