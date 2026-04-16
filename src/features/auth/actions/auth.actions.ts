"use server";

import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import { SignUpSchema, LoginSchema, ForgotPasswordSchema, ResetPasswordSchema } from "../schemas";
import { forgotPasswordService, logInService, logOutService, registerOrganization, resetPasswordService } from "../services/auth.services";

export const signUpAction = async (formData: FormData) => {
  const rawData = Object.fromEntries(formData);
  const result = SignUpSchema.safeParse(rawData);
  
  if (!result.success) {
    // Return the first error
    const errorMessage = result.error.issues
    .map((issue) => issue.message)
    .at(0);
    
  return { error: errorMessage };
  }

  try {
    await registerOrganization(result.data);

    // Revalidate to clear any stale cache
    revalidatePath("/", "layout");
    return { success: true };

  } catch (err: unknown) {
    const errorMessage = err instanceof Error 
      ? err.message 
      : "An unexpected error occurred";

    return { error: errorMessage };
  }
};

export const signInAction = async (formData: FormData) => {
  const rawData = Object.fromEntries(formData);
  const result = LoginSchema.safeParse(rawData);
  
  if (!result.success) {
    // Return the first error
    const errorMessage = result.error.issues
    .map((issue) => issue.message)
    .at(0);
    
  return { error: errorMessage };
  }

  try {
    await logInService(result.data);
  } catch (err: unknown) {
    const errorMessage = err instanceof Error
    ? err. message
    : "An unexpected error occured";

    return { error: errorMessage }
  }

  // Clear cache before redirect
  revalidatePath("/", "layout");
  redirect("/")
};

export const signOut = async () => {
  try {
    await logOutService();
  } catch (error) {
    console.error("Sign out error:", error);
  }

  // Clear cache and send them back to login
  revalidatePath("/", "layout");
  redirect("/auth/login");
};

export async function ForgotPasswordAction(formData: FormData) {
  const rawData = Object.fromEntries(formData);
  const result = ForgotPasswordSchema.safeParse(rawData);

  if (!result.success) {
    // Return the first error
    const errorMessage = result.error.issues
    .map((issue) => issue.message)
    .at(0);
    
  return { error: errorMessage };
  }

  try {
      await forgotPasswordService(result.data.email);
      alert("Check your email for the reset link!");
    } catch (err: unknown) {
      const errorMessage = err instanceof Error 
        ? err.message 
        : "Failed to send reset link.";

      return { error: errorMessage  };
    }
}

export async function resetPasswordAction(formData: FormData) {
  const rawData = Object.fromEntries(formData);
  const result = ResetPasswordSchema.safeParse(rawData);

  if (!result.success) {
    // Return the first error
    const errorMessage = result.error.issues
    .map((issue) => issue.message)
    .at(0);
    
  return { error: errorMessage };
  }

  try {
      await resetPasswordService(result.data.password);
      alert("Check your email for the reset link!");
    } catch (err: unknown) {
      const errorMessage = err instanceof Error 
        ? err.message 
        : "Failed to send reset link.";

      return { error: errorMessage  };
    }
};