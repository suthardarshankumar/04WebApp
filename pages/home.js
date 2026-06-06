import { useAuth } from "@/context/AuthContext";
import LogoutButton from "@/components/auth/LogoutButton";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import MainLayout from "@/components/layouts/MainLayout";

export default function HomePage() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <MainLayout>
        <h1 className="text-3xl font-bold">Welcome To ERP</h1>

        <p className="mt-4">{user?.userName}</p>

        <p>Role : {user?.role}</p>
      </MainLayout>
    </ProtectedRoute>
  );
}
