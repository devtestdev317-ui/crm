import { z } from "zod";
export const SupplierSchema = z.object({
    supplierId: z.string().min(1, "Required"),
    exporterName: z.string().min(1, "Required").max(30, "Must be 30 characters or less"),
    brandName: z.string().min(1, "Required"), // Comma separated values
    ownerName: z.string().min(1, "Required").max(20, "Must be 20 characters or less"),
    ownerNumber: z.string().min(1, "Required").min(10, "Must be at least 10 characters").max(15, "Must be 15 characters or less"),
    supplierEmail: z.string().min(1, "Required").email("Invalid email"),
    staffName: z.string().min(1, "Required").max(30, "Must be 30 characters or less"),
    staffNumber: z.string().min(1, "Required").min(10, "Must be at least 10 characters").max(15, "Must be 15 characters or less"),
    address: z.string().min(1, "Required").max(100, "Must be 100 characters or less"),
    bankName: z.string().min(1, "Required").max(50, "Must be 50 characters or less"),
    accountNumber: z.string().min(1, "Required").min(10, "Must be at least 10 characters").max(15, "Must be 15 characters or less"),
    ifscCode: z.string().min(1, "Required").min(11, "Must be at least 11 characters").max(11, "Must be 11 characters"),
    bankLocation: z.string().min(1, "Required").max(100, "Must be 100 characters or less"),
    panNumber: z.string().min(1, "Required").min(10, "Must be at least 10 characters").max(15, "Must be 15 characters or less"),
    gstNumber: z.string().min(1, "Required").min(15, "Must be at least 15 characters").max(15, "Must be 15 characters"),
})