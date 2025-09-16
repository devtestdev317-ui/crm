import Image from "next/image"
export function DashboardWidget() {
    const Item = [{
        title: "Supplier",
        value: "1,500",
        icon: "supplier-b.png"
    },
    {
        title: "Supplier Orders",
        value: "2,000",
        icon: "order-b.png"
    },
    {
        title: "Customers",
        value: "1,200",
        icon: "pending.png"
    },
    {
        title: "Customer Orders",
        value: "300",
        icon: "order-b.png"
    },
    {
        title: "Warehouse",
        value: "256",
        icon: "warehouse-b.png"
    },
    {
        title: "Products",
        value: "2,256",
        icon: "products-b.png"
    }
    ]
    return (
        <div className="dashboard-widget flex flex-row gap-x-2 mt-[20px]">
            {
                Item.map((item, index) => (
                    <div className="card flex-1 border relative p-3.5 rounded-[8px] bg-gradient-to-r from-[#ebf4ff] to-white" key={index}>
                        <div className="icon absolute right-[15px] top-0 bottom-0 flex flex-col items-center justify-center">
                            <Image src={`/icons/${item.icon}`} alt="" width={24} height={24} className="w-auto h-[40px]" />
                        </div>
                        <div className="title text-[12px] text-gray-500">{item.title}</div>
                        <div className="count-li font-semibold">{item.value}</div>
                    </div>
                ))
            }
        </div>
    )
}