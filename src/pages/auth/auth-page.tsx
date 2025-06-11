import useAuthContext from "@/hooks/use-auth-context";
import { useLayoutEffect, useEffect } from "react";
import { login as sendRequestToLogin } from "@/services/api";
import { useMutation } from "@tanstack/react-query";
import Form from "./components/form";
import Typography from "@/components/ui/typography";
import { useNavigate } from "react-router";


export default function AuthPage() {
  const { isLoggedIn, setAuth } = useAuthContext();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (isLoggedIn) {
      //redirect to dashboard
    }
  }, []);

  const { mutate, data, error, isPending } = useMutation({
    mutationFn: sendRequestToLogin,
  });

  useEffect(() => {
    console.log("data", data);
    if (!data) {
      return;
    }

    setAuth({
      user: data.data.user.username,
      token: data.data.token,
      refreshToken: data.data.refreshToken,
    });
    navigate('./dashboard')
  }, [data]);

  const onSubmitHandler = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    mutate({ username, password });
  };

  const form = (
    <Form
      onSubmit={onSubmitHandler}
      isSubmitActionPending={isPending}
      serverError={error ? error.message : ""}
    />
  );

  return (
    <section className="w-screen h-screen flex justify-center items-center bg-slate-700 text-white">
      <div className="flex flex-col gap-4 border border-solid border-gray-600 min-h-[24rem] rounded max-w-md w-md m-4 p-4 bg-zinc-800">
        <header className="w-full">
          <Typography as="h1">Login</Typography>
        </header>
        {form}
      </div>
    </section>
  );
}
