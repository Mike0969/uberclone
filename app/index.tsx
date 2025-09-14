import React from "react";
import { Redirect } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

// Initial page (login or home redirect)
export default function Page() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    // If logged in, go to app home (adjust path if yours is different)
    return <Redirect href="/(root)/(tabs)/home" />;
  }

  // If not signed in, go to sign-in page
  return <Redirect href="/sign-in" />;
}