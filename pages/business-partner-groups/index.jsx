import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import MainLayout from "@/components/layouts/MainLayout";

export default function BPGroupPage() {
  const router = useRouter();
  const [groups, setGroups]= useState([])
  const [loading, setLoading] = useState(true);

  async function loadGroups(){
    try {
      const response = await fetch("/api/business-partner-groups");
      const data = await response.json()
      if(data.success){
        setGroups(data.groups)
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=>{ loadGroups()},[])

  return (
    <ProtectedRoute>
      <MainLayout>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            Business Partner Groups
          </h1>

          <button
            className="rounded bg-black px-4 py-2 text-white"
             onClick={() =>router.push("/business-partner-groups/create")}
          >
            Create Group
          </button>
        </div>

        <div className="mt-6 rounded border bg-white p-6">
             {loading ? (
            <div className="p-6">
              Loading...
            </div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="border-b bg-slate-100">
                  <th className="p-3 text-left">
                    Group Code
                  </th>

                  <th className="p-3 text-left">
                    Group Name
                  </th>

                  <th className="p-3 text-left">
                    Description
                  </th>

                  <th className="p-3 text-left">
                    Status
                  </th>

                  <th className="p-3 text-left">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {groups.map((group) => (
                  <tr
                    key={group._id}
                    className="border-b"
                  >
                    <td className="p-3">
                      {group.groupCode}
                    </td>

                    <td className="p-3">
                      {group.groupName}
                    </td>

                    <td className="p-3">
                      {group.description}
                    </td>

                    <td className="p-3">
                      {group.isActive
                        ? "Active"
                        : "Inactive"}
                    </td>

                    <td className="p-3">
                      Edit
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