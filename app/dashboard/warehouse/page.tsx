import { Card } from "@/components/ui/card";
import { DashboardStrip } from "@/components/ui/custom/DashboardStrip";
import { WarehouseTable } from "@/components/ui/custom/WarehouseTable";

export default function WarehousePage() {
    return (
        <>
            <DashboardStrip title="Warehouse" />
            <Card className="mt-4 px-4 py-[8px]">
                <WarehouseTable />
            </Card>
        </>
    );
}