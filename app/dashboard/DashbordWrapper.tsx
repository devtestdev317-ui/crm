import { Header } from "@/components/ui/custom/Header";
import { SideBar } from "@/components/ui/custom/SideBar";

export default function DashboardWrapper({ children }: { children: React.ReactNode }) {

    return (
        <>
            {/* Header */}
            <Header />
            <main className="dashboard-wrapper flex min-h-[calc(100vh-66.8px)]">
                {/* Sidebar */}
                <SideBar />

                <div className="w-[calc(100vw-301px)] p-4">{children}</div>
            </main>
        </>
    );
}
