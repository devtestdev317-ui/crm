"use client"
import { useState } from "react";
import { usePathname } from "next/navigation";
import { LayoutDashboard, PackageCheck, LogOut, UsersRound, Network, PackageSearch, Warehouse, ChevronDown, ChevronRight } from "lucide-react";
import { CustomLink } from "@/utils/CustomLinks"

export function SideBar() {
    const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set());
    const pathname = usePathname();
    const LinkList = [{
        name: "Dashboard",
        href: "/dashboard",
        icon: <LayoutDashboard />
    },
    {
        name: "Supplier",
        href: "/dashboard/supplier",
        icon: <PackageCheck />,
        item: [
            {
                name: "View all Supplier",
                href: "/dashboard/supplier",
                icon: <PackageCheck />
            },
            {
                name: "Add New Supplier",
                href: "/dashboard/supplier/add",
                icon: <PackageCheck />
            },
            {
                name: "View Supplier Order",
                href: "/dashboard/supplier-order",
                icon: <PackageCheck />
            },
            {
                name: "Add New Supplier Order",
                href: "/dashboard/supplier-order/add",
                icon: <PackageCheck />
            }
        ]
    },
    {
        name: "Business Warehouse",
        href: "/dashboard/warehouse",
        icon: <Warehouse />,
        item: [
            {
                name: "View all Business Warehouse",
                href: "/dashboard/warehouse",
            },
            {
                name: "Add New Business Warehouse",
                href: "/dashboard/warehouse/add",
            }
        ]
    },
    {
        name: "Product",
        href: "/product",
        icon: <PackageSearch />,
        item: [
            {
                name: "View all Products",
                href: "/dashboard/product/",
            },
            {
                name: "Add New Product",
                href: "/dashboard/product/add",
            }
        ]
    },
    {
        name: "Custom House Agent",
        href: "/custom-house-agent",
        icon: <Network />,
        item: [
            {
                name: "View all CHA",
                href: "/dashboard/custom-house-agent",
            },
            {
                name: "Add New CHA",
                href: "/dashboard/custom-house-agent/add",
            }
        ]
    },
    {
        name: "Customer",
        href: "/dashboard/customer",
        icon: <UsersRound />
    },
    {
        name: "Signout",
        href: "/dashboard/signout",
        icon: <LogOut />
    }
    ];
    const toggleMenu = (menuName: string) => {
        setExpandedMenus(prev => {
            const newSet = new Set(prev);
            if (newSet.has(menuName)) {
                newSet.delete(menuName);
            } else {
                newSet.add(menuName);
            }
            return newSet
        });
    };

    const isLinkActive = (href: string) => {
        return pathname === href || pathname?.startsWith(href + "/");
    };

    const shouldMenuBeExpanded = (link: any) => {
        return link.item && link.item.some((subLink: any) => isLinkActive(subLink.href));
    };

    useState(() => {
        const initiallyExpanded = new Set<string>();
        LinkList.forEach(link => {
            if (link.item && shouldMenuBeExpanded(link)) {
                initiallyExpanded.add(link.name);
            }
        });
        setExpandedMenus(initiallyExpanded);
    });



    return (
        <div className="sidebar w-[285px] bg-white border-r p-4">
            <nav>
                <ul className="space-y-2">
                    {LinkList.map((link) => {
                        const isActive = isLinkActive(link.href);
                        const hasActiveChild = link.item && link.item.some((subLink: any) => isLinkActive(subLink.href));
                        const isExpanded = expandedMenus.has(link.name);

                        return (
                            <li key={link.name}>
                                {link.item ? (
                                    <div>
                                        <button
                                            onClick={() => toggleMenu(link.name)}
                                            className={`cursor-pointer flex items-center justify-between w-full border py-3 px-5 font-medium rounded-lg transition-colors ${isActive || hasActiveChild
                                                ? "bg-blue-100 border-blue-400 text-blue-700"
                                                : "border-white text-black/70 hover:bg-blue-50 hover:border-blue-400"
                                                }`}
                                        >
                                            <div className="flex items-center gap-x-3">
                                                {link.icon}
                                                {link.name}
                                            </div>
                                            {isExpanded ? (
                                                <ChevronDown size={16} />
                                            ) : (
                                                <ChevronRight size={16} />
                                            )}
                                        </button>

                                        {isExpanded && (
                                            <ul className="ml-6 mt-1">
                                                {link.item.map((subLink) => {
                                                    const isSubLinkActive = isLinkActive(subLink.href);
                                                    return (
                                                        <li key={subLink.name}>
                                                            <CustomLink href={subLink.href}>
                                                                <div className={`flex items-center text-[14px] gap-x-3 py-2 px-5 font-medium rounded-lg transition-colors ${isSubLinkActive
                                                                    ? "bg-gray-100 text-black"
                                                                    : "text-black/60 hover:bg-blue-50 hover:text-blue-600"
                                                                    }`}>
                                                                    {subLink.name}
                                                                </div>
                                                            </CustomLink>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        )}
                                    </div>
                                ) : (
                                    <CustomLink href={link.href}>
                                        <div className={`flex items-center gap-x-3 border py-3 px-5 font-medium rounded-lg transition-colors ${isActive
                                            ? "bg-blue-100 border-blue-400 text-blue-700"
                                            : "border-white text-black/70 hover:bg-blue-50 hover:border-blue-400"
                                            }`}>
                                            {link.icon}
                                            {link.name}
                                        </div>
                                    </CustomLink>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}