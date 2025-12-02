"use client";

import React, { useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useUser } from "@clerk/nextjs";
import { createNewUser } from "@/actions/users.actions";

const ThemeProviders = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
  const { user } = useUser();

  useEffect(() => {
    const syncUser = async () => {
      if (!user) return;

      const result = await createNewUser({
        clerkId: user.id,
        name: user.fullName ?? "",
        email: user.primaryEmailAddress?.emailAddress ?? "",
      });

      console.log("Sync user result:", result);
    };

    syncUser();
  }, [user]);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProviders;
