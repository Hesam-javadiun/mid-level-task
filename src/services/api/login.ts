import http from "@/services/http";

type LoginInputType = {
  username: string;
  password: string;
};

type LoginResponseType = {
  success: boolean;
  data: {
    token: string;
    refreshToken: string;
    user: {
      id: number;
      username: string;
      email: string;
      role: string;
      permissions: string[];
    };
  };
};

const path = "/auth/login";

const login = async function({
  username,
  password,
}: LoginInputType) {
  console.log("login api called with username and password : ",username, password);
  const response = await http.get<LoginResponseType>(path, {
    // username,
    // password,
  });

  return response.data
};

export default login;
