import supabase from "@/configs/supabaseConfig";

export const onRegister = async (
  name: string,
  email: string,
  password: string
) => {
  const { data: userForm, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });

  if (userForm?.user && userForm?.user?.identities.length > 0) {
    return {
      success: true,
      response: "Great! Now check your email for further work with account.",
    };
  }

  if (userForm && !error && userForm?.user?.identities.length === 0) {
    return {
      success: false,
      response:
        "Oh no. This email already exists. Please log in or rember your password.",
    };
  }

  if (error) {
    console.log(error.message);
    return {
      success: false,
      response: "Error",
    };
  }
};
