import { useAuth } from "@/context/AuthContext";
import LogoutButton from "@/components/auth/LogoutButton";

export default function HomePage() {
  const { user } = useAuth();

  return (
    <>
      <div className="p-8">
        <h1 className="text-3xl font-bold">Welcome</h1>

        <p className="mt-4">{user?.userName}</p>

        <p>Role : {user?.role}</p>
        <LogoutButton />
      </div>
    </>
  );
}
