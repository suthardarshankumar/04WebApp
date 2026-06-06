import { useAuth } from "@/context/AuthContext";

export default function ContextTest() {
  const { user, login, logout } = useAuth();

  return (
    <div className="p-5">
      <h1>Context Test</h1>

      <pre>{JSON.stringify(user, null, 2)}</pre>

      <button
      className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() =>
          login({
            userId: "SUPER0001",
            role: "SUPERADMIN",
          })
        }
      >
        Login Test
      </button>

      <button onClick={logout}>
        Logout Test
      </button>
    </div>
  );
}