"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { Card } from "@/components/ui/card";
import { DashboardStrip } from "@/components/ui/custom/DashboardStrip";
import { MultiselectDropdown } from "@/components/ui/custom/MultiselectDropdown";
import { SupplierSchema } from "@/schema/Supplier";

export default function AddNewSupplier() {
    const form = useForm<z.infer<typeof SupplierSchema>>({
        resolver: zodResolver(SupplierSchema),
        defaultValues: {
            supplierId: "",
            exporterName: "",
            brandName: "",
            ownerName: "",
            ownerNumber: "",
            supplierEmail: "",
            staffName: "",
            staffNumber: "",
            address: "",
            bankName: "",
            accountNumber: "",
            ifscCode: "",
            bankLocation: "",
            panNumber: "",
            gstNumber: "",
        }
    });

    function onSubmit(data: z.infer<typeof SupplierSchema>) {
        console.log(data);
    }

    return (
        <>
            <DashboardStrip title="Add New Supplier" />
            <Card className="mt-4 px-4 py-[8px]">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap space-y-4.5">
                        <FormField
                            control={form.control}
                            name="supplierId"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Supplier ID</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Supplier ID" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="exporterName"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Exporter Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Exporter Name" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="brandName"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Brand Name</FormLabel>
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
                            name="ownerName"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Owner Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Owner Name" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ownerNumber"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Owner Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Owner Number" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="supplierEmail"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Supplier Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Supplier Email" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="staffName"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Staff Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Staff Name" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="staffNumber"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Staff Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Staff Number" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-full px-2">
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>

                                        <Textarea placeholder="Enter Address" {...field} className="h-[130px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="bankName"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Bank Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Bank Name" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="accountNumber"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Account Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Account Number" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ifscCode"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>IFSC Code</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter IFSC Code" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="bankLocation"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Bank Location</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Bank Location" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="panNumber"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>PAN Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter PAN Number" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="gstNumber"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>GST Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter GST Number" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="w-full flex flex-row items-center justify-end gap-x-2">
                            <Button type="reset" className="cursor-pointer bg-gray-600 hover:bg-gray-700">Reset</Button>
                            <Button type="submit" className="cursor-pointer bg-blue-600 hover:bg-blue-700">Submit</Button>
                        </div>
                    </form>
                </Form>
            </Card>
        </>
    );
}