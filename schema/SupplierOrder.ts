import { z } from "zod";

export const STATUS = z.enum(['close', 'open', 'pending']);

// Helper function for numeric string validation
const numericString = (message?: string) =>
    z.string().min(1, "Required").regex(/^\d*\.?\d+$/, message || "Must be a number");

export const SupplierOrderSchema = z.object({
    order_id: z.string().optional(),
    supplier_company: z.string().min(1, "Required"),
    importer_company: z.string().min(1, "Required"),
    third_party: z.string().min(1, "Required"),
    item_name: z.string().min(1, "Required"),
    combined_item_name: z.string().min(1, "Required"),
    country_of_origin: z.string().min(1, "Required").min(2, "Minimum 2 characters"),
    purchase_currency: z.string().min(1, "Required"),
    purchase_rate_per_kg: numericString("Must be a valid number"),
    brands: z.string().min(1, "Required"),
    no_of_boxes: numericString("Must be a valid number"),
    per_bag_size: numericString("Must be a valid number"),
    total_weight: numericString("Must be a valid number"),
    total_amount: z.string().min(1, "Required"),
    invoice_1_rate: numericString("Must be a valid number"),
    invoice_2_rate: numericString("Must be a valid number"),
    total_invoice_1_amount: z.string().min(1, "Required"),
    total_invoice_2_amount: z.string().min(1, "Required"),
    grand_total: z.string().min(1, "Required"),
    exchange_rate_invoice_1: numericString("Must be a valid number"),
    exchange_rate_invoice_2: numericString("Must be a valid number"),
    result_box: z.string().min(1, "Required"),
    contract_no: z.string().min(1, "Required"),
    contract_date: z.date().min(1, "Required"),
    indenter_broker: z.string().min(1, "Required"),
    clearing_agent: z.string().min(1, "Required"),
    expected_shipment: z.date().min(1, "Required"),
    destination_port: z.string().min(1, "Required"),
    estimated_time_of_arrival: z.date().min(1, "Required"),
    status: STATUS,
});