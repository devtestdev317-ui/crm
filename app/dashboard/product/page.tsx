import { Card } from "@/components/ui/card";
import { DashboardStrip } from "@/components/ui/custom/DashboardStrip";
import { ProductDataTable } from "@/components/ui/custom/ProductDataTable";


export default function ProductPage() {
    return (
        <>
            <DashboardStrip title="Product List" />
            <Card className="mt-4 px-4 py-[8px]">
                <ProductDataTable />
            </Card>
        </>
    );
}