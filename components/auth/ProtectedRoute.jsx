import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";


export default function ProtectedRoute({children}){
  const router = useRouter();
  const { user,loading } = useAuth();

  useEffect(()=>{
    if(!loading && !user){
      router.replace("/login");
    }
  },[loading,user,router])

  if(loading){
     return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

    if (!user) {
    return null;
  }

  return children;
}