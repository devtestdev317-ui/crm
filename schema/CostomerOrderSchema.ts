import { z } from "zod";
export const InvioceENum = z.enum(["yes", "no"]);
export const CustomerOrderStatus = z.enum(["Deliverd", "Pending"]);
export const CustomerOrderSchema = z.object({
    orderDate: z.date(),
    locatName: z.string().min(1, "Required"),
    brokerName: z.string().min(1, "Required"),
    itemName: z.string().min(1, "Required"),
    noBox: z.string().min(1, "Required"),
    bagSize: z.string().min(1, "Required"),
    price: z.string().min(1, "Required"),
    invioce: InvioceENum,
    companyName: z.string().optional(),
    demandedDate: z.date().min(1, "Required"),
    deliveryPrefernce: z.string().min(1, "Required"),
    status: CustomerOrderStatus
}).refine((data) => {
    if (data.invioce === "yes") {
        return data.companyName && data.companyName.length > 0;
    }
    return true;
}, {
    message: "Company name is required when Invoice Preference is enabled",
    path: ["companyName"]
})