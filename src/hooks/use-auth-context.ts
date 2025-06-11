import { useContext } from "react";
import authContext from "@/contexts/auth-context";

export default function useAuthContext() {
  const authState = useContext(authContext)!;

  return authState;
}
