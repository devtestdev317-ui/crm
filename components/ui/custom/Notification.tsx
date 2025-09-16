import { Bell } from "lucide-react"
import { Avatar } from "@/components/ui/avatar"
export function NotificationComponent() {
    return (
        <div className="flex items-center">
            <Avatar className="bg-gray-100 flex flex-col items-center justify-center rounded-[6px] size-11 relative">
                <Bell stroke="#b4b4b4" fill="#b4b4b4" width={20} height={20} />
                <span className="absolute top-[10px] right-[15px] bg-red-500 rounded-full w-[6px] h-[6px]"></span>
            </Avatar>
        </div>
    );
}
