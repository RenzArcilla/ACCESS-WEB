"use server";

import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {createSupabaseServerClient} from "@/lib/supabase/server-client";
import { logInService, registerOrganization } from "../services/auth.services";

export const signIn = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await logInService({email, password});
  } catch (err: unknown) {
    const errorMessage = err instanceof Error
    ? err. message
    : "An unexpected error occured";

    return { error: errorMessage }
  }

  revalidatePath("/", "layout");
  redirect("/")
}

export const signUp = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const organizationName = formData.get("organization_name") as string;

  try {
    await registerOrganization({
      email,
      password,
      organizationName,
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error 
      ? err.message 
      : "An unexpected error occurred";

    return { error: errorMessage };
  }

  revalidatePath("/", "layout");
  redirect("/");
};

export const signOut = async () => {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/auth/login")
}
