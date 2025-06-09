import Storage from "./storage";

export type AuthTokensStorageType = {
  token: string;
  refreshToken: string;
};

const authTokens = new Storage<AuthTokensStorageType>("authTokens", "localStorage");

const storage = { authTokens };

export default storage;
