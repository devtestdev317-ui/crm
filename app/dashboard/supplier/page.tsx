import { Card } from "@/components/ui/card";
import { DashboardStrip } from "@/components/ui/custom/DashboardStrip";
import { DataTable } from "@/components/ui/custom/DataTable";


export default function SupplierList() {
    return (
        <>
            <DashboardStrip title="Supplier" />
            <Card className="mt-4 px-4 py-[8px]">
                <DataTable />
            </Card>
        </>
    )
}