import Link from "next/link";
import { CommonSearch } from "./CommonSearch";
import { Logo } from "./Logo";
import { NotificationComponent } from "./Notification";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { CustomLink } from "@/utils/CustomLinks";
import { ModeToggle } from "./ToggleTheame";
export function Header() {
    const DataUserNav = [{
        title: "Profile",
        href: "/profile"
    },
    {
        title: "Update Password",
        href: "/update-password"
    },
    {
        title: "Logout",
        href: "/logout"
    },
    {
        title: "Add New User",
        href: "/add-user"
    }]
    return (
        <header className="custom-header flex flex-row items-center border-b justify-between py-[3px] px-[15px] bg-white text-black">
            {/* Logo */}
            <Logo />
            <div className="flex-grow flex flex-row items-center justify-between">
                {/* Search */}
                <div className="pl-4 w-[380px]"><CommonSearch /></div>
                <div className="flex flex-row gap-x-2">
                    <ModeToggle />
                    <NotificationComponent />
                    <div className="flex flex-col pl-3.5 border-l">
                        <div className="flex flex-colo">
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex flex-row items-center gap-x-1.5 outline-none cursor-pointer">
                                    <Avatar className="size-11">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col">
                                        <span className="text-[16px] font-semibold">Master Admin</span>
                                        <span className="text-xs text-gray-500 block mt-[-2px]">admin@example.com</span>
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-[164px]">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    {
                                        DataUserNav.map((item) => (
                                            <DropdownMenuItem key={item.title}>
                                                <CustomLink href={item.href}>{item.title}</CustomLink>
                                            </DropdownMenuItem>
                                        ))
                                    }


                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}