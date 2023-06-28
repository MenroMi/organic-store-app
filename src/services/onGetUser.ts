import supabase from "@/configs/supabaseConfig";

export const onGetUser = async () => {
  const { data: user, error } = await supabase.auth.getUser();

  console.log(user);
};
