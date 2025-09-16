import DashboardWrapper from "./DashbordWrapper";
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <DashboardWrapper>
            {children}
        </DashboardWrapper>
    );
}