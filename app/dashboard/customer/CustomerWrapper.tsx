import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type LinkType = {
    href: string;
    name: string;
    count: number;
    icon: string;
};
export default function CustomerLayoutWrapper({ children }: { children: React.ReactNode }) {
    const LinkCustomer: LinkType[] = [
        {
            name: "Add Customer",
            href: "/dashboard/customer/add",
            count: 1500,
            icon: "customer-review.png"
        },
        {
            name: "View All Customers",
            href: "/dashboard/customer/",
            count: 1500,
            icon: "customer-review.png"
        },
        {
            name: "Add Customers Order",
            href: "/dashboard/customer/order/add",
            count: 1650,
            icon: "products-b.png"
        },
        {
            name: "Customers Order List",
            href: "/dashboard/customer/order",
            count: 1650,
            icon: "order-b.png"
        },
        {
            name: "Demand Management",
            href: "/dashboard/customer/order-demand-management",
            count: 7650,
            icon: "checklist.png"
        },
        {
            name: "Collection Parchi",
            href: "/dashboard/customer/collection-parchi",
            count: 120,
            icon: "shopping-list.png"
        },
        {
            name: "Account Clear",
            href: "/dashboard/customer/account-clear",
            count: 2560,
            icon: "pending.png"
        },
        {
            name: "Customer Ledger",
            href: "/dashboard/customer/customer-ledger",
            count: 2560,
            icon: "products-b.png"
        },
        {
            name: "Cancel Order",
            href: "/dashboard/customer/cancel-order",
            count: 2560,
            icon: "cancel-order.png"
        },
        {
            name: "Parchi Management",
            href: "/dashboard/customer/parchi-management",
            count: 2560,
            icon: "cancel-order.png"
        },
    ]
    return (
        <>
            <div className=" mt-3 flex flex-wrap">
                {
                    LinkCustomer.map((link, index) => (
                        <div className="w-1/5 p-1" key={index}>
                            <Card className="p-3 py-3 gap-0 relative border-gray-300 rounded-sm bg-gradient-to-r from-[#ebf4ff] to-white hover:from-blue-100 transition-all hover:to-white ">
                                <Link href={link.href} className="stretched-link" >
                                    <CardTitle className="text-sm font-medium text-gray-500 text-[12px] mb-[2px]">{link.name}</CardTitle>
                                    <CardDescription className="text-sm text-black/70 font-bold">{Intl.NumberFormat().format(link.count)}</CardDescription>
                                    <Image src={`/icons/${link.icon}`} alt={link.name} width={40} height={40} className="absolute top-[50%] translate-y-[-50%] right-2" />
                                </Link>
                            </Card>
                        </div>
                    ))
                }

            </div>
            <Card className="mt-4 px-4 py-2">
                {children}

            </Card>
        </>
    );
}