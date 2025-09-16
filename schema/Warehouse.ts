import { z } from "zod";

export const STATUS = z.enum(['active', 'inactive']);

const BagSizeRateSchema = z.object({
    weight: z.number().min(1, "Weight is required"),
    Tempo: z.number().min(0, "Tempo must be a positive number"),
    Rent: z.number().min(0, "Rent must be a positive number"),
    Loading: z.number().min(0, "Loading must be a positive number"),
    Unloading: z.number().min(0, "Unloading must be a positive number"),
    Labour: z.number().min(0, "Labour must be a positive number"),
    Tulaai: z.number().min(0, "Tulaai must be a positive number"),
    Bardana: z.number().min(0, "Bardana must be a positive number"),
});

export const WarehouseSchema = z.object({
    warehouseID: z.string().min(1, "Warehouse ID is required"),
    warehouseName: z.string().min(2, "Warehouse Name is required"),
    warehouseInitial: z.string().min(2, "Warehouse Initial is required"),
    ownerName: z.string().min(2, "Owner Name is required"),
    ownerNumber: z.string().min(10, "Owner Number is required").max(15, "Owner Number must be between 10 and 15 characters"),
    staffNameGE: z.string().min(2, "Staff Name (GE) is required"),
    staffNumberGE: z.string().min(10, "Staff Number (GE) is required").max(15, "Staff Number (GE) must be between 10 and 15 characters"),
    staffNameDE: z.string().min(2, "Staff Name (DE) is required"),
    staffNumberDE: z.string().min(10, "Staff Number (DE) is required").max(15, "Staff Number (DE) must be between 10 and 15 characters"),
    warehouseAddress: z.string().min(5, "Warehouse Address is required"),
    openingBalanceDE: z.string().min(1, "Opening Balance (DE) is required"),
    openingBalanceC: z.string().min(1, "Opening Balance (C) is required"),
    perBagSize: z.record(z.string(), BagSizeRateSchema),
    pendingSettlement: z.string().optional(),
    status: STATUS
});