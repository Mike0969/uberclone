import React from "react";
import { Stack } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";

// Make sure your .env has EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

export default function RootLayout() {
  if (!publishableKey) {
    throw new Error("Missing Clerk publishable key. Did you set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env?");
  }

  return (
    <ClerkProvider publishableKey={publishableKey}>
      {/* This Stack controls navigation */}
      <Stack screenOptions={{ headerShown: false }} />
    </ClerkProvider>
  );
}