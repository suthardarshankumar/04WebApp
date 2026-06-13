import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function BPGroupPage() {
  const router = useRouter();
  const [groups, setGroups] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadGroups() {
    try {
      const response = await fetch("/api/business-partner-groups");
      const data = await response.json();
      if (data.success) {
        setGroups(data.groups);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadGroups();
  }, []);

  return (
    <ProtectedRoute>
      <MainLayout>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Business Partner Groups</h1>

          <Button
            variant="amber"
            onClick={() => router.push("/business-partner-groups/create")}
          >
            Create Group
          </Button>
        </div>
         <div className="mt-4">
            <Input
              className="w-full rounded-sm border p-2 bg-white"
              placeholder="Search Group Code or Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

        <div className="mt-6 rounded-sm border bg-white p-6">
          {loading ? (
            <div className="p-6">Loading...</div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="border-b bg-slate-100">
                  <th className="p-3 text-left">Group Code</th>

                  <th className="p-3 text-left">Group Name</th>

                  <th className="p-3 text-left">Description</th>

                  <th className="p-3 text-left">Status</th>

                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>

              <tbody>
                {groups
                  .filter((group) => {
                    const value = search.toLowerCase();
                    return (
                      group.groupCode.toLowerCase().includes(value) ||
                      group.groupName.toLowerCase().includes(value)
                    );
                  })
                  .map((group) => (
                    <tr key={group._id} className="border-b">
                      <td className="p-3">{group.groupCode}</td>

                      <td className="p-3">{group.groupName}</td>

                      <td className="p-3">{group.description}</td>

                      <td className="p-3">
                        <Badge variant={group.isActive ? "default" : "destructive"}>
                        {group.isActive ? "Active" : "Inactive"}
                        </Badge>
                      </td>

                      <td className="p-3">
                        <Button
                          variant="amber"
                          onClick={() =>
                            router.push(
                              `/business-partner-groups/edit/${group._id}`,
                            )
                          }
                        >
                          Edit
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </MainLayout>
    </ProtectedRoute>
  );
}
