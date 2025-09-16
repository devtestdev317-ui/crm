import { DashboardStrip } from "@/components/ui/custom/DashboardStrip";
import DashboardWrapper from "./CustomerWrapper";

type Props = {
    children: React.ReactNode;
};


export default function CustomerLayout({ children }: Props) {

    return (
        <>
            <DashboardStrip title="Customer Dashboard" />
            <DashboardWrapper>
                {children}
            </DashboardWrapper>
        </>
    );
}