import { Card } from "@/components/ui/card";
import { CHADataTable } from "@/components/ui/custom/CHADataTable";
import { DashboardStrip } from "@/components/ui/custom/DashboardStrip";


export default function CustomHouseAgentPage() {
    return (
        <>
            <DashboardStrip title="Custom House Agent (CHA) List" />
            <Card className="mt-4 px-4 py-[8px]">
                <CHADataTable />
            </Card>
        </>
    );
}