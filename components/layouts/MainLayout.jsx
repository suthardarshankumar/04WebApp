import AppMenubar from "@/components/menubar/AppMenubar";

export default function MainLayout({
  children,
}) {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="border-b bg-white">
        <AppMenubar />
      </div>

      <div className="p-6">
        {children}
      </div>
    </div>
  );
}