import { Card } from "@/components/ui/card";
import { DashboardStrip } from "@/components/ui/custom/DashboardStrip";
import { DashboardWidget } from "@/components/ui/custom/DashboardWidget";
import { DataTable } from "@/components/ui/custom/DataTable";

export default function DashboardPage() {
    return (
        <>
            <DashboardStrip title="Dashboard" />
            <DashboardWidget />
            <Card className="mt-4 px-4 py-[8px]">
                <DataTable />
            </Card>
        </>
    );
}
