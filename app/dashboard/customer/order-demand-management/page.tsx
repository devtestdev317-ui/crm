"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator"
import { Card } from "@/components/ui/card"
import { DemanSelectionComp } from "@/components/ui/custom/DemanSelectionComp";
import { TODOLISTCOMP } from "@/components/ui/custom/TodoListComp";
import { WAREHOUSELISTCOMP } from "@/components/ui/custom/WarehouseListComp";
import { LABOURBHUGTAILISTCOMP } from "@/components/ui/custom/LabourBhugtaiListComp";
type TablList = {
    id: string,
    label: string,
    tab: string
}
export default function RaiseCustomerOrderPage() {
    const tablList: TablList[] = [
        { id: "1", label: "Demand Selection", tab: "demand-selection" },
        { id: "2", label: "Todo List", tab: "todo-list" },
        { id: "3", label: "Warehouse", tab: "warehouse" },
        { id: "4", label: "Labour Bhugtai", tab: "labour-bhugtai" },
        { id: "5", label: "Make Purchi Detail", tab: "make-parchi" },
        { id: "6", label: "Order Status", tab: "order-status" }
    ];
    // Demand Selection
    return (
        <>
            <div className="text-[18px] text-black/80 font-semibold mt-2">Order Demand Management</div>
            <Separator className="mt-[-8px]" />
            <Tabs defaultValue={tablList[0].tab} className="w-full">
                <TabsList className="bg-white border-b rounded-[0] border-gray-200 h-auto p-0 w-full">
                    {
                        tablList.map((item) => (
                            <TabsTrigger key={item.id} value={item.tab} className="bg-white rounded-[5px] border border-white rounded-bl-[0] rounded-br-[0] border-b-0 shadow-none px-2.5 py-3 h-auto data-[state=active]:shadow-none data-[state=active]:text-blue-700 data-[state=active]:border-gray-200 cursor-pointer">{item.label}</TabsTrigger>
                        ))
                    }
                </TabsList>
                <TabsContent value={tablList[0].tab}>
                    <Card className="p-2 rounded-[5px] shadow-none">
                        <DemanSelectionComp />
                    </Card>
                </TabsContent>
                <TabsContent value={tablList[1].tab}>
                    <Card className="p-2 rounded-[5px] shadow-none">
                        <TODOLISTCOMP />
                    </Card>
                </TabsContent>
                <TabsContent value={tablList[2].tab}><Card className="p-2 rounded-[5px] shadow-none"><WAREHOUSELISTCOMP /></Card></TabsContent>
                <TabsContent value={tablList[3].tab}><Card className="p-2 rounded-[5px] shadow-none"><LABOURBHUGTAILISTCOMP /></Card></TabsContent>
                <TabsContent value={tablList[4].tab}><Card className="p-2 rounded-[5px] shadow-none">{tablList[4].label}</Card></TabsContent>
                <TabsContent value={tablList[5].tab}><Card className="p-2 rounded-[5px] shadow-none">{tablList[5].label}</Card></TabsContent>
            </Tabs>
        </>
    )
}