"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SupplierOrderSchema } from "@/schema/SupplierOrder";
import { toast } from "sonner"

import { Card } from "@/components/ui/card";
import { DashboardStrip } from "@/components/ui/custom/DashboardStrip";
import { SingleDropdown } from "@/components/ui/custom/SingleDropdown";
import { MultiselectDropdown } from "@/components/ui/custom/MultiselectDropdown";
import { DatePicker } from "@/components/ui/custom/DatePicker";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useMemo } from "react";

export default function SupplierOrderAddPage() {

    const form = useForm<z.infer<typeof SupplierOrderSchema>>({
        resolver: zodResolver(SupplierOrderSchema),
        defaultValues: {
            supplier_company: "",
            importer_company: "",
            third_party: "",
            item_name: "",
            combined_item_name: "",
            country_of_origin: "",
            purchase_currency: "",
            purchase_rate_per_kg: "",
            brands: "",
            no_of_boxes: "",
            per_bag_size: "",
            total_weight: "",
            total_amount: "",
            invoice_1_rate: "",
            invoice_2_rate: "",
            total_invoice_1_amount: "",
            total_invoice_2_amount: "",
            grand_total: "",
            exchange_rate_invoice_1: "",
            exchange_rate_invoice_2: "",
            result_box: "",
            contract_no: "",
            contract_date: new Date(),
            indenter_broker: "",
            clearing_agent: "",
            expected_shipment: new Date(),
            destination_port: "",
            estimated_time_of_arrival: new Date(),
            status: "open",
        }
    });
    const watchedFields = useWatch({
        control: form.control,
        name: ["no_of_boxes", "per_bag_size", "purchase_currency", "purchase_rate_per_kg",
            "invoice_1_rate", "invoice_2_rate", "exchange_rate_invoice_1", "exchange_rate_invoice_2"]
    });
    const onSubmit: (data: z.infer<typeof SupplierOrderSchema>) => void = (data) => {
        console.log(data);
        toast.success("Success", {
            description: "Supplier Order added successfully!",
            action: <Button onClick={() => toast.dismiss()}>Close</Button>
        });
    }

    const getTotalItemWeight = useCallback(() => {
        const [noOfBoxes, perBagSize, currency] = watchedFields;
        const numBoxes = parseFloat(noOfBoxes) || 0;
        const bagSize = parseFloat(perBagSize) || 0;

        if (!currency) {
            toast.warning("Warning", {
                description: "Please fill in the purchase currency.",
            });
            return 0;
        }

        if (!numBoxes) {
            toast.warning("Warning", {
                description: "Please fill in the number of boxes.",
            });
            return 0;
        }

        if (!bagSize) {
            toast.warning("Warning", {
                description: "Please fill in the per bag size.",
            });
            return 0;
        }

        const totalWeight = numBoxes * bagSize;
        form.setValue("total_weight", totalWeight.toString());

        const rate = parseFloat(form.getValues("purchase_rate_per_kg")) || 0;
        const totalAmount = totalWeight * rate;
        form.setValue("total_amount", `${totalAmount} ${currency}`);

        return totalWeight;
    }, [watchedFields, form]);

    const handleInvoiceA = useCallback((value: string) => {
        const totalWeight = parseFloat(form.getValues("total_weight")) || 0;
        const invoiceA = parseFloat(value) || 0;
        const currency = form.getValues("purchase_currency");

        const totalInvoiceA = totalWeight * invoiceA;
        form.setValue("invoice_1_rate", value);
        form.setValue("total_invoice_1_amount", `${totalInvoiceA} ${currency}`);
    }, [form]);

    const handleInvoiceB = useCallback((value: string) => {
        const totalWeight = parseFloat(form.getValues("total_weight")) || 0;
        const invoiceB = parseFloat(value) || 0;
        const currency = form.getValues("purchase_currency");

        const totalInvoiceB = totalWeight * invoiceB;
        form.setValue("invoice_2_rate", value);
        form.setValue("total_invoice_2_amount", `${totalInvoiceB} ${currency}`);

        // Calculate grand total correctly
        const invoice1Amount = parseFloat(form.getValues("total_invoice_1_amount").split(" ")[0]) || 0;
        form.setValue("grand_total", `${invoice1Amount + totalInvoiceB} ${currency}`);
    }, [form]);

    const approxCost = useCallback((value: string) => {
        const invoice1Rate = parseFloat(form.getValues("invoice_1_rate")) || 0;
        const invoice2Rate = parseFloat(form.getValues("invoice_2_rate")) || 0;
        const exchangeRate1 = parseFloat(form.getValues("exchange_rate_invoice_1")) || 0;
        const exchangeRate2 = parseFloat(value) || 0;
        const currency = form.getValues("purchase_currency");
        form.setValue("exchange_rate_invoice_2", value);
        const resultBox = (invoice1Rate * exchangeRate1) + (invoice2Rate * exchangeRate2);
        form.setValue("result_box", `${resultBox} ${currency}`);
    }, [form]);

    // Use useEffect to update derived values when dependencies change
    useEffect(() => {
        getTotalItemWeight();
    }, [watchedFields[0], watchedFields[1], getTotalItemWeight]);

    // Memoize option arrays to prevent unnecessary re-renders
    const exporterOptions = useMemo(() => [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
    ], []);

    const importerOptions = useMemo(() => [
        { value: "company a", label: "Company A" },
        { value: "company b", label: "Company B" },
    ], []);
    return (
        <>
            <DashboardStrip title="Add New Order (Supplier)" />
            <Card className="mt-4 px-4 py-[20px]">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap space-y-4.5">
                        <FormField
                            control={form.control}
                            name="supplier_company"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2 ">
                                    <FormLabel>Exporter Name <span className="text-red-600">*</span></FormLabel>
                                    <SingleDropdown
                                        field={{ ...field }}
                                        options={[
                                            { value: "option1", label: "Option 1" },
                                            { value: "option2", label: "Option 2" },
                                        ]}
                                        label="Exporter Name"
                                        onChange={() => { return null }}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="importer_company"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2 ">
                                    <FormLabel>Importer Name <span className="text-red-600">*</span></FormLabel>
                                    <SingleDropdown
                                        field={{ ...field }}
                                        options={[
                                            { value: "company a", label: "Company A" },
                                            { value: "company b", label: "Company B" },
                                        ]}
                                        label="Importer Name"
                                        onChange={() => { return null }}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="third_party"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2 ">
                                    <FormLabel>Third Party <span className="text-red-600">*</span></FormLabel>
                                    <SingleDropdown
                                        field={{ ...field }}
                                        options={[
                                            { value: "Third Party A", label: "Third Party A" },
                                            { value: "Third Party B", label: "Third Party B" },
                                        ]}
                                        label="Third Party"
                                        onChange={() => { return null }}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="item_name"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2 ">
                                    <FormLabel>Item Name as Per Invoice <span className="text-red-600">*</span></FormLabel>
                                    <SingleDropdown
                                        field={{ ...field }}
                                        options={[
                                            { value: "Item A", label: "Item A" },
                                            { value: "Item B", label: "Item B" },
                                        ]}
                                        label="Item Name as Per Invoice"
                                        onChange={() => { return null }}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="combined_item_name"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2 ">
                                    <FormLabel>Combined Item Name <span className="text-red-600">*</span></FormLabel>
                                    <SingleDropdown
                                        field={{ ...field }}
                                        options={[
                                            { value: "blackraisins-originalgold-Kalati", label: "blackraisins-originalgold-Kalati" },
                                            { value: "blackraisins-originalgold-KalatiA", label: "blackraisins-originalgold-KalatiA" },
                                        ]}
                                        label="Combined Item Name"
                                        onChange={() => { return null }}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="country_of_origin"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Country of Origin <span className="text-red-600">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Country of Origin" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="purchase_currency"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2 ">
                                    <FormLabel>Purchase Currency <span className="text-red-600">*</span></FormLabel>
                                    <SingleDropdown
                                        field={{ ...field }}
                                        options={[
                                            { value: "USD", label: "USD" },
                                            { value: "EUR", label: "EUR" },
                                            { value: "GBP", label: "GBP" },
                                        ]}
                                        label="Purchase Currency"
                                        onChange={() => { return null }}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="purchase_rate_per_kg"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Purchase Rate (per kg) <span className="text-red-600">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Rate (per kg)" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="brands"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Brand(s)<span className="text-red-600">*</span></FormLabel>
                                    <FormControl>
                                        <MultiselectDropdown
                                            field={{ ...field }}
                                            options={["Brand 1", "Brand 2", "Brand 3"]} // Add your actual options here
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="no_of_boxes"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>No. of Boxes/Package (Order) <span className="text-red-600">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter No. of Boxes" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="per_bag_size"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2 ">
                                    <FormLabel>Per Bag Size <span className="text-red-600">*</span></FormLabel>
                                    <SingleDropdown
                                        field={{ ...field }}
                                        options={[
                                            { value: "1", label: "1kg" },
                                            { value: "2", label: "2kg" },
                                            { value: "5", label: "5kg" },
                                        ]}
                                        label="Per Bag Size"
                                        onChange={() => { getTotalItemWeight(); }}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="total_weight"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Total Weight (kg) <span className="text-red-600">*</span></FormLabel>
                                    <FormControl>
                                        <Input readOnly placeholder="Enter Weight" {...field} className="h-[45px]" disabled />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="total_amount"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Total Amount <span className="text-red-600">*</span></FormLabel>
                                    <FormControl>
                                        <Input readOnly placeholder="Enter Amount" {...field} className="h-[45px]" disabled />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="invoice_1_rate"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Invoice 1 Rate <span className="text-red-600">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Invoice 1 Rate" {...field} className="h-[45px]" value={field.value} onChange={(e) => handleInvoiceA(e.target.value)} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="invoice_2_rate"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Invoice 2 Rate <span className="text-red-600">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Invoice 2 Rate" {...field} className="h-[45px]" value={field.value} onChange={(e) => handleInvoiceB(e.target.value)} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="total_invoice_1_amount"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Total Invoice 1 Amount <span className="text-red-600">*</span></FormLabel>
                                    <FormControl>
                                        <Input readOnly placeholder="Total Invoice 1 Amount" {...field} className="h-[45px]" disabled />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="total_invoice_2_amount"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Total Invoice 2 Amount <span className="text-red-600">*</span></FormLabel>
                                    <FormControl>
                                        <Input readOnly placeholder="Total Invoice 2 Amount" {...field} className="h-[45px]" disabled />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="grand_total"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Grand Total <span className="text-red-600">*</span></FormLabel>
                                    <FormControl>
                                        <Input readOnly placeholder="Grand Total" {...field} className="h-[45px]" disabled />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="exchange_rate_invoice_1"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Exchange Rate Invoice 1 <span className="text-red-600">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Exchange Rate Invoice 1" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="exchange_rate_invoice_2"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Exchange Rate Invoice 2 <span className="text-red-600">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Exchange Rate Invoice 2" {...field} className="h-[45px]" value={field.value} onChange={(e) => approxCost(e.target.value)} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="result_box"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Approx Costing<span className="text-red-600">*</span></FormLabel>
                                    <FormControl>
                                        <Input readOnly disabled placeholder="Approx Costing" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="contract_no"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Contract No.<span className="text-red-600">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Contract No." {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="contract_date"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Contract Date<span className="text-red-600">*</span></FormLabel>
                                    <DatePicker field={{ ...field }} />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="indenter_broker"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2 ">
                                    <FormLabel>Indenter/Broker<span className="text-red-600">*</span></FormLabel>
                                    <SingleDropdown
                                        field={{ ...field }}
                                        options={[
                                            { value: "Broker 1", label: "Broker 1" },
                                            { value: "Broker 2", label: "Broker 2" },
                                            { value: "Broker 5", label: "Broker 5" },
                                        ]}
                                        label="Indenter/Broker"
                                        onChange={() => { return null }}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="clearing_agent"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2 ">
                                    <FormLabel>Custom House Agent<span className="text-red-600">*</span></FormLabel>
                                    <SingleDropdown
                                        field={{ ...field }}
                                        options={[
                                            { value: "Agent 1", label: "Agent 1" },
                                            { value: "Agent 2", label: "Agent 2" },
                                            { value: "Agent 5", label: "Agent 5" },
                                        ]}
                                        label="Custom House Agent"
                                        onChange={() => { return null }}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="expected_shipment"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Expected Shipment<span className="text-red-600">*</span></FormLabel>
                                    <DatePicker field={{ ...field }} />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="destination_port"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2 ">
                                    <FormLabel>Destination Port<span className="text-red-600">*</span></FormLabel>
                                    <SingleDropdown
                                        field={{ ...field }}
                                        options={[
                                            { value: "Port 1", label: "Port 1" },
                                            { value: "Port 2", label: "Port 2" },
                                            { value: "Port 5", label: "Port 5" },
                                        ]}
                                        label="Destination Port"
                                        onChange={() => { return null }}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="estimated_time_of_arrival"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Estimated Time of Arrival<span className="text-red-600">*</span></FormLabel>
                                    <DatePicker field={{ ...field }} />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="w-full"><Button type="submit">Submit</Button></div>
                    </form>
                </Form>

            </Card>
        </>
    )
}
