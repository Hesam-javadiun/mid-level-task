import { type ReactNode, useCallback, useState } from "react";
import authContext from "@/contexts/auth-context";
import storage from "@/services/storage";

type AuthFnHandlerType = ({
  user,
  token,
  refreshToken,
}: {
  user: string;
  token: string;
  refreshToken: string;
}) => void;

export type AuthStateType = {
  isLoggedIn: boolean;
  user: string;
  token: string;
  refreshToken: string;
  setAuth: AuthFnHandlerType;
  logout: () => void;
} | null;

type AuthProviderProps = {
  children: ReactNode;
};

type StateType = NonNullable<Omit<AuthStateType, "setAuth" | "logoutHandler">>;

const initialState: StateType = {
  isLoggedIn: false,
  user: "",
  token: "",
  refreshToken: "",
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const [authState, setAuth] = useState<StateType>(initialState);


  const setAuthHandler: AuthFnHandlerType = useCallback(
    ({ user, token, refreshToken }) => {
      setAuth({ isLoggedIn: !!user, user, token, refreshToken });
      storage.authTokens.set({ token, refreshToken });
    },
    []
  );

  const logoutHandler = useCallback(() => {
    setAuth(initialState);
    storage.authTokens.set(null);
  }, []);

  return (
    <authContext.Provider
      value={
        {
          ...authState,
          setAuth: setAuthHandler,
          logout: logoutHandler,
        } as AuthStateType
      }
    >
      {children}
    </authContext.Provider>
  );
}
