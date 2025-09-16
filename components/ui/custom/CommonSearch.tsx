import { Input } from "../input";
import { Search } from "lucide-react";
export function CommonSearch() {
    return (
        <div className="flex-grow flex flex-row items-center justify-between relative">
            <Input placeholder="Search Keywords..." className="border p-2 rounded h-[45px] w-[300px] pl-[40px]" />
            <div className="absolute left-[10px]">
                <Search className="text-gray-600 size-5" />
            </div>
        </div>
    );
}