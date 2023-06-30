"use client";

// libs
import { useDispatch } from "react-redux";

// hook
import useSupabaseAuth from "@/hooks/useSupabaseAuth";

// slice
import { setOpenLoginForm } from "@/redux/slices/authSlice";

const LogInBtnInBurger = () => {
  const { user, onLogOut } = useSupabaseAuth();
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => (!user ? dispatch(setOpenLoginForm()) : onLogOut())}
      className="sm:ml-auto rounded-full border-2 px-6 py-2 bg-white hover:bg-gray-200 hover:text-white transition"
    >
      {user ? "Log out" : "Log in"}
    </button>
  );
};

export default LogInBtnInBurger;
