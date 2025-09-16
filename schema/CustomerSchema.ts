import { z } from "zod";

const STATUS = z.enum(["active", "inactive"]);
export const DUPLICATEPURCHI = z.enum(["yes", "no"]);
export const CUSTOMERTYPE = z.enum(["regular", "cash"]);
export const PACKINGMATERIAL = z.enum(["JUTE", "PLASTIC", "SINGLE"]);

export const CustomerSchema = z.object({
    customerId: z.string()
        .min(16, "Minimum 16 characters required")
        .max(16, "Maximum 16 characters required"),

    companyName: z.string().min(1, "Required"),
    ownerName: z.string().min(1, "Required"),
    locatName: z.string().min(1, "Required"),
    ownerNumber: z.string().min(1, "Required"),
    staffName: z.string().min(1, "Required"),
    staffNumber: z.string().min(1, "Required"),

    gst: z.string()
        .min(1, "Required")
        .max(15, "Invalid GST Number"),

    address: z.string().min(1, "Required"),
    city: z.string().min(1, "Required"),
    state: z.string().min(1, "Required"),

    pincode: z.string()
        .min(1, "Required")
        .length(6, "Pin code must be exactly 6 digits"),

    country: z.string().min(1, "Required"),

    email: z.string()
        .min(1, "Required")
        .email("Invalid Email"),

    msme: z.string()
        .min(1, "Required")
        .max(15, "Invalid MSME/UDYAM Number"),

    fssai: z.string()
        .min(1, "Required")
        .max(15, "Invalid FSSAI Number"),

    bankName: z.string().min(1, "Required"),

    bankAccountNumber: z.string()
        .min(1, "Required")
        .min(8, "Invalid Account Number (min 8 digits)")
        .max(17, "Invalid Account Number (max 17 digits)"),

    ifsc: z.string()
        .min(1, "Required")
        .length(11, "IFSC code must be exactly 11 characters"),

    bankLocation: z.string().min(1, "Required"),
    debit: z.string().min(1, "Required"),
    credit: z.string().min(1, "Required"),
    transactionLimitAmount: z.string().min(1, "Required"),

    item: z.array(z.string().min(1, "Required"))
        .min(1, "At least one item must be selected"),

    citiesCover: z.array(z.string().min(1, "Required"))
        .min(1, "At least one city must be selected"),

    paymentFrequency: z.array(z.string().min(1, "Required"))
        .min(1, "At least one payment frequency must be selected"),

    collectorName: z.string().min(1, "Required"),

    paymentDays: z.array(z.string().min(1, "Required"))
        .min(1, "At least one payment day must be selected"),

    duplicatePurchi: DUPLICATEPURCHI,

    duplicatePurchiDays: z.array(z.string().min(1, "Required")),

    customerType: CUSTOMERTYPE,

    nameTransporter: z.string(),

    packingMaterial: PACKINGMATERIAL,
    status: STATUS
})
    .refine((data) => {
        // Condition: If duplicatePurchi is "yes", then duplicatePurchiDays is required
        if (data.duplicatePurchi === "yes") {
            return data.duplicatePurchiDays && data.duplicatePurchiDays.length > 0;
        }
        return true;
    }, {
        message: "Duplicate purchase days are required when duplicate purchase is enabled",
        path: ["duplicatePurchiDays"]
    })
    .refine((data) => {
        // Condition: If customerType is "cash", then nameTransporter is required
        if (data.customerType === "cash") {
            return data.nameTransporter && data.nameTransporter.length > 0;
        }
        return true;
    }, {
        message: "Transporter name is required for cash customers",
        path: ["nameTransporter"]
    });