import { useState } from "react";
import { useRouter } from "next/router";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import MainLayout from "@/components/layouts/MainLayout";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CreateBPGroup() {
  const router = useRouter();

  const [groupCode, setGroupCode] =
    useState("");

  const [groupName, setGroupName] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleSave(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "/api/business-partner-groups/create",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            groupCode,
            groupName,
            description,
            isActive: true,
          }),
        }
      );

      const data =
        await response.json();

      if (!data.success) {
        setError(data.message);
        return;
      }

      router.push(
        "/business-partner-groups"
      );
    } catch (error) {
      setError("Save Failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <ProtectedRoute>
      <MainLayout>
        <div className="max-w-2xl">
          <h1 className="mb-6 text-2xl font-bold">
            Create Business Partner Group
          </h1>

          <form
            onSubmit={handleSave}
            className="space-y-4"
          >
            <Input
              placeholder="Group Code"
              value={groupCode}
              onChange={(e) =>
                setGroupCode(
                  e.target.value
                )
              }
            />

            <Input
              placeholder="Group Name"
              value={groupName}
              onChange={(e) =>
                setGroupName(
                  e.target.value
                )
              }
            />

            <Input
              placeholder="Description"
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
            />

            {error && (
              <p className="text-red-500">
                {error}
              </p>
            )}

            <Button
              disabled={loading}
              type="submit"
            >
              {loading
                ? "Saving..."
                : "Save"}
            </Button>
          </form>
        </div>
      </MainLayout>
    </ProtectedRoute>
  );
}