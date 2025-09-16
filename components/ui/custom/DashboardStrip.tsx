import { Copy, Grid2x2 } from 'lucide-react';
import { buttonVariants } from "../button";

export function DashboardStrip({ title }: { title: string }) {
    return (
        <div className="dashboard-strip flex flex-row items-center justify-between py-3">
            <div className="w-1/2">
                <div className="flex flex-row gap-x-5 items-center">
                    <Grid2x2 className="text-gray-500 size-7" stroke='#007bff' />
                    <div>
                        <h2 className="text-lg font-bold text-black/80 dark:text-white">{title}</h2>
                        <p className="text-sm text-gray-500 mt-[-3px]">Welcome Back to Brand</p>
                    </div>

                </div>
            </div>
            <div className="w-1/2 flex justify-end">
                <div className={buttonVariants({
                    variant: "outline",
                    size: "sm",
                    className: "w-[240px] text-gray-500 text-sm h-[40px]"
                })}>15 June 2025 - 17 June 2025
                </div>
            </div>
        </div>
    );
}
