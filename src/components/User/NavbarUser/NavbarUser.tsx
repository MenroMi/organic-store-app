// basic
import Image from "next/image";

// libs
import { AnyAction, Dispatch } from "redux";
import { useSelector } from "react-redux";

// selector
import { memoAuthSelector } from "@/redux/selectors";

// slice
import { setOpenLoginForm } from "@/redux/slices/authSlice";

// interface
interface INavbarUser {
  width: number;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dispatch: Dispatch<AnyAction>;
}

const NavbarUser: React.FC<INavbarUser> = ({
  width,
  setIsOpen,
  dispatch,
  isOpen,
}) => {
  const { user } = useSelector(memoAuthSelector);

  return (
    <div className="cart max-sm:min-w-[40px] max-xl:min-w-[80px]">
      <button
        type="button"
        className="border rounded-full items-center gap-3 max-sm:p-1 max-lg:p-2 lg:p-2 active:scale-90 transition"
        onClick={() => {
          return width! < 1024
            ? setIsOpen(!isOpen)
            : dispatch(setOpenLoginForm());
        }}
      >
        <div
          className={`relative max-sm:p-2 p-4 w-14 h-14 rounded-full ${
            user ? "bg-transparent" : "bg-primary-green"
          }`}
        >
          <Image
            src={
              user
                ? user.user_metadata?.avatar
                  ? user?.user_metadata?.avatar
                  : "/woman-avatar.jpg"
                : "/icons/user.svg"
            }
            alt="user logo"
            width={40}
            height={40}
            priority
            className={`absolute object-cover top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-full ${
              user && "w-full h-full"
            }`}
          />
        </div>
      </button>
    </div>
  );
};

export default NavbarUser;
