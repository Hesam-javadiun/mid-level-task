import { createContext } from "react";
import { type AuthStateType } from "@/components/auth-provider";

const defaultValue : AuthStateType = null;

const authContext = createContext<AuthStateType>(defaultValue);

export default authContext;

