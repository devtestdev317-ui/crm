import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
export function Logo() {
    return (
        <div className="w-[270px] flex flex-row items-center border-r">
            <div className="flex flex-none gap-x-1 items-center" >
                <Avatar className="w-15 h-15 flex items-center justify-center bg-gray-100 rounded-full">
                    <AvatarImage src="/icons/shield.png" className="size-10" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="text-[20px] font-bold text-black/75">Brand</div>
            </div>
        </div>
    )
}