"use client";
import { login } from "@/app/lib/actions/auth";

export const SignInButton = () => {
  return <button onClick={() => login()}> Sign in with GitHub</button>;
};
