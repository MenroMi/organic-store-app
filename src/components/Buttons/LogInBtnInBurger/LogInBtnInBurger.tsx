"use client";

// libs
import { useDispatch, useSelector } from "react-redux";

// thunk
import { onLogOutThunk } from "@/redux/thunks/auth";

// selector
import { memoAuthSelector } from "@/redux/selectors";

// slice
import { setOpenLoginForm } from "@/redux/slices/authSlice";

// interface/types
import { AppDispatch } from "@/redux/provider/ReduxProvider";

const LogInBtnInBurger = () => {
  const { user } = useSelector(memoAuthSelector);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <button
      onClick={() =>
        !user ? dispatch(setOpenLoginForm()) : dispatch(onLogOutThunk())
      }
      className="sm:ml-auto rounded-full border-2 px-6 py-2 bg-white hover:bg-gray-200 hover:text-white transition"
    >
      {user ? "Log out" : "Log in"}
    </button>
  );
};

export default LogInBtnInBurger;
