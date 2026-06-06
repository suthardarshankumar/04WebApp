import {useRouter} from "next/router";
import {useAuth} from "@/context/AuthContext";
import {Button} from "@/components/ui/button";

export default function LogoutButton(){
    const router = useRouter();
    const {logout} = useAuth();

    const handleLogout = async()=>{
        await logout();
        router.push("/login");
    }

    return(
        <Button variant="destructive" onClick={handleLogout}>
            Logout
        </Button>
    )
}