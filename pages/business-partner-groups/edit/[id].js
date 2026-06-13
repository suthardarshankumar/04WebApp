import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MainLayout from "@/components/layouts/MainLayout";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function EditGroup() {
  const router = useRouter();
  const { id } = router.query;
  const [groupCode, setGroupCode] = useState("");
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState("true");

  async function loadGroup() {
    if (!id) return;

    const response = await fetch(`/api/business-partner-groups/${id}`);

    const data = await response.json();
    if (data.success) {
      setGroupCode(data.group.groupCode);
      setGroupName(data.group.groupName);
      setDescription(data.group.description);
      setIsActive(data.group.isActive);
    }
  }

  useEffect(() => {
    loadGroup();
  }, [id]);

  async function handleSave(e) {
    e.preventDefault();
    const response = await fetch(`/api/business-partner-groups/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        groupName,
        description,
        isActive,
      }),
    });
    const data = await response.json();

    if (data.success) {
      router.push("/business-partner-groups");
    }
  }

  return (
    <ProtectedRoute>
      <MainLayout>
        <h1 className="mb-6 text-2xl font-bold">Edit Group</h1>
        <form onSubmit={handleSave} className="space-y-4">
          <Input value={groupCode} disabled />
          <Input
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex items-center gap-3">
            <Switch
            checked={isActive}
            onCheckedChange={setIsActive} />
              <span className="text-slate-900">{isActive ? "Active" : "Inactive"}</span>

          </div>
          <Button type="Submit" variant="amber">
            Save
          </Button>
        </form>
      </MainLayout>
    </ProtectedRoute>
  );
}
