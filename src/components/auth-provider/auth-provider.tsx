import { type ReactNode } from "react";
import authContext from "@/contexts/auth-context";

export type AuthStateType = {
  isLoggedIn: boolean;
  user: string;
  token: string;
  refreshToken: string;
  login: () => void;
  logout: () => void;
  signup: () => void;
} | null;

type AuthProviderProps = {
  children: ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const login = () => {};
  const logout = () => {};
  const signup = () => {};

  const authState : AuthStateType = {
    isLoggedIn: false,
    user: "",
    token: "",
    refreshToken: "",
    login,
    logout,
    signup
  };

  return <authContext.Provider value={authState}>{children}</authContext.Provider>;
}
