import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  MenubarSeparator,
} from "@/components/ui/menubar";

export default function AppMenubar() {
  const router = useRouter();

  const { user, logout } = useAuth();

  async function handleLogout() {
    await logout();
    router.push("/login");
  }

  return (
    <Menubar className="rounded-none border-0 py-6 gap-2">
      <MenubarMenu>
        <MenubarTrigger disabled className="font-bold text-2xl">
          ERP SYSTEM
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger onClick={() => router.push("/home")}>
          Home
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Modules</MenubarTrigger>

        <MenubarContent className="w-42">
          <MenubarSub>
            <MenubarSubTrigger>Business Partner</MenubarSubTrigger>

            <MenubarSubContent>
              <MenubarItem onClick={() => router.push("/business-partners")}>
                Business Partner
              </MenubarItem>

              <MenubarItem
                onClick={() => router.push("/business-partner-groups")}
              >
                Business Partner Groups
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>

          <MenubarSeparator />

          <MenubarSub>
            <MenubarSubTrigger>Sales Order</MenubarSubTrigger>

            <MenubarSubContent>
              <MenubarItem onClick={() => router.push("/home")}>
                Sales Order
              </MenubarItem>

              <MenubarItem onClick={() => router.push("/home")}>
                Delivery
              </MenubarItem>

              <MenubarItem onClick={() => router.push("/home")}>
                AR Invoice
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>

      {user?.role === "SUPERADMIN" && (
        <MenubarMenu>
          <MenubarTrigger>Administration</MenubarTrigger>

          <MenubarContent>
            <MenubarItem onClick={() => router.push("/users")}>
              User Management
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      )}

      <MenubarMenu>
        <MenubarTrigger onClick={handleLogout}>Logout</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
