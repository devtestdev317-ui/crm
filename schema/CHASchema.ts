import { z } from "zod";

export const CHASchema = z.object({
    agentName: z.string().min(1, "Require"),
    portCater: z.array(z.string().min(1, "Required"))
        .min(1, "Select at least one "),
    satffNameDTDU: z.string().min(1, "Require"),
    satffNumberDTDU: z.string().min(1, "Require").min(10, "Invalid Number").max(15, "Invalid Number"),
    satffNameD: z.string().min(1, "Require"),
    satffNumberD: z.string().min(1, "Require").min(10, "Invalid Number").max(15, "Invalid Number"),
    debit: z.string().min(1, "Require"),
    credit: z.string().min(1, "Require"),
    item: z.array(z.string().min(1, "Required"))
        .min(1, "Select at least one "),
    address: z.string().min(1, 'Require')
})