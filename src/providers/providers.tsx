"use client";

import React, { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useUser } from "@clerk/nextjs";
import { createNewUser } from "@/actions/users.actions";
import {
  UserDetailContext,
  UserDetailContextType,
  UserDetailType,
} from "@/context/UserDetailContext";

const ThemeProviders = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
  const [userDetail, setUserDetail] = useState<UserDetailType | undefined>(
    undefined
  );
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
      setUserDetail(result?.data);
    };

    syncUser();
  }, [user]);

  return (
    <NextThemesProvider {...props}>
      <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
        {children}
      </UserDetailContext.Provider>
    </NextThemesProvider>
  );
};

export default ThemeProviders;
