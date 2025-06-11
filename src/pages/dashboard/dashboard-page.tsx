import Button from "@/components/ui/button";
import useAuthContext from "@/hooks/use-auth-context";
import Typography from "@/components/ui/typography";
import { useNavigate } from "react-router";
export default function DashboardPage() {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const logoutHandler = () => {
    logout();
    navigate("..");
  };

  return (
    <section className="w-screen h-screen flex justify-center items-center bg-slate-700 text-white">
      <div className="p-4 flex flex-col max-w-md w-md gap-4 bg-zinc-800 border-gray-600 border border-solid">
        <header>
          <Typography as="h1" className="text-center">Dashboard Page</Typography>
        </header>
        <Button onClick={logoutHandler}>Logout</Button>
      </div>
    </section>
  );
}
