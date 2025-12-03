import { createContext } from "react";

export interface UserDetailType {
  clerkId: string;
  name: string;
  email: string;
  id: string;
  points: number | null;
  subscription: string | null;
}

export interface UserDetailContextType {
  userDetail: UserDetailType | undefined;
  setUserDetail: (detail: UserDetailType | undefined) => void;
}

export const UserDetailContext = createContext<UserDetailContextType>({
  userDetail: undefined,
  setUserDetail: () => {},
});
