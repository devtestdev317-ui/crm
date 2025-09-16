"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button, buttonVariants } from "@/components/ui/button"
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
import { ProductSchema } from "@/schema/ProductSchema";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Link from "next/link";
export default function AddProductPage() {
    const form = useForm<z.infer<typeof ProductSchema>>({
        resolver: zodResolver(ProductSchema),
        defaultValues: {
            itemCode: "",
            itemName: "",
            itemType: "",
            quality: "",
            itemNameInvoice: "",
            hsnCode: "",
            brand: "",
            gst: "",
            itemLocalName: "",
            sellingPrice: 0,
            countryOrigin: "",
            adCode: "",
            invoice1Rate: 0,
            customDuty: "",
            customDutyType: "",
            socialWelfare: "",
            port: "",
            balanceOQ: 0,
            invoice1OQ: 0,
            invoice2OQ: 0,
            fixedExpenses: 0,
            kiran: "",
            discount: 0,
            brokerage: 0,
            casDiscount: 0,
            bardanaWeight: 0

        }
    });
    function onSubmit(data: z.infer<typeof ProductSchema>) {
        console.log(data);
    }
    return (
        <>
            <DashboardStrip title="Add New Product" />
            <Card className="mt-4 px-4 py-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap space-y-4.5">
                        <FormField
                            control={form.control}
                            name="itemCode"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Item Code <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Item Code (Code must be 16 digit alphanumeric)" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="itemName"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Main Item Name <span className="text-red-500">*</span></FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl >
                                            <SelectTrigger className="w-full  h-[45px] min-h-[45px]">
                                                <SelectValue placeholder="Select Main Item Name" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Green Raisins">Green Raisins</SelectItem>
                                            <SelectItem value="Black Raisins">Black Raisins</SelectItem>
                                            <SelectItem value="Golden Raisins">Golden Raisins</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="itemType"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Type of Item <span className="text-red-500">*</span></FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl >
                                            <SelectTrigger className="w-full  h-[45px] min-h-[45px]">
                                                <SelectValue placeholder="Select Main Item Name" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Ranga">Ranga</SelectItem>
                                            <SelectItem value="Original Gold">Original Gold</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="quality"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Quality <span className="text-red-500">*</span></FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl >
                                            <SelectTrigger className="w-full  h-[45px] min-h-[45px]">
                                                <SelectValue placeholder="Select Quality" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Regular">Regular</SelectItem>
                                            <SelectItem value="Kalati">Kalati</SelectItem>
                                            <SelectItem value="Shaji">Shaji</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="itemNameInvoice"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Item Name as per Invoice <span className="text-red-500">*</span></FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl >
                                            <SelectTrigger className="w-full  h-[45px] min-h-[45px]">
                                                <SelectValue placeholder="Select Item Name" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Regular">Regular</SelectItem>
                                            <SelectItem value="Kalati">Kalati</SelectItem>
                                            <SelectItem value="Shaji">Shaji</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="hsnCode"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>HSN Code <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter HSN Code (Code must be 16 digit alphanumeric)" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="brand"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Brand <span className="text-red-500">*</span></FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl >
                                            <SelectTrigger className="w-full  h-[45px] min-h-[45px]">
                                                <SelectValue placeholder="Select Brand" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Brand A">Brand A</SelectItem>
                                            <SelectItem value="Brand B">Brand B</SelectItem>
                                            <SelectItem value="Brand C">Brand C</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="gst"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>GST <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter GST (Code must be 16 digit alphanumeric)" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="itemLocalName"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Item Local Name <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Item Local Name" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="sellingPrice"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Selling Price <span className="text-red-500">*</span></FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={String(field.value)}>
                                        <FormControl >
                                            <SelectTrigger className="w-full  h-[45px] min-h-[45px]">
                                                <SelectValue placeholder="Select Selling Price" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="100">100</SelectItem>
                                            <SelectItem value="200">200</SelectItem>
                                            <SelectItem value="300">300</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="countryOrigin"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Country of Origin <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Country of Origin" {...field} className="h-[45px]" readOnly disabled />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="brand"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>AD Code <span className="text-red-500">*</span></FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={String(field.value)}>
                                        <FormControl >
                                            <SelectTrigger className="w-full  h-[45px] min-h-[45px]">
                                                <SelectValue placeholder="Select AD Code" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="AD001">AD001</SelectItem>
                                            <SelectItem value="AD002">AD002</SelectItem>
                                            <SelectItem value="AD003">AD003</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="invoice1Rate"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Invoice 1 Rate <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Invoice 1 Rate" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="customDuty"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Custom Duty <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Custom Duty" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="customDutyType"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Select Custom Duty Type <span className="text-red-500">*</span></FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={String(field.value)}>
                                        <FormControl >
                                            <SelectTrigger className="w-full  h-[45px] min-h-[45px]">
                                                <SelectValue placeholder="Select Custom Duty Type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Value">Value</SelectItem>
                                            <SelectItem value="Percentage">Percentage</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="socialWelfare"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Social Welfare <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Social Welfare" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="port"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Select Which Port <span className="text-red-500">*</span></FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={String(field.value)}>
                                        <FormControl >
                                            <SelectTrigger className="w-full  h-[45px] min-h-[45px]">
                                                <SelectValue placeholder="Select Port" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Kandla">Kandla</SelectItem>
                                            <SelectItem value="Chennai">Chennai</SelectItem>
                                            <SelectItem value="Mumbai">Mumbai</SelectItem>
                                            <SelectItem value="Delhi">Delhi</SelectItem>
                                            <SelectItem value="Kolkata">Kolkata</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="balanceOQ"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Balance Opening Quantity <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Balance Opening Quantity" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="invoice1OQ"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Invoice 1 Opening Quantity <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Invoice 1 Opening Quantity" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="invoice2OQ"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Invoice 2 Opening Quantity <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Invoice 2 Opening Quantity" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="fixedExpenses"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Historical Fixed Expenses <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Fixed Expenses" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="kiran"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Dry Fruit or Kirana <span className="text-red-500">*</span></FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={String(field.value)}>
                                        <FormControl >
                                            <SelectTrigger className="w-full  h-[45px] min-h-[45px]">
                                                <SelectValue placeholder="Select Dry Fruit or Kirana" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Dry Fruit">Dry Fruit</SelectItem>
                                            <SelectItem value="Kirana">Kirana</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="discount"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Discount % <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input readOnly disabled placeholder="Enter Discount" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="brokerage"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Brokerage % <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input readOnly disabled placeholder="Enter Brokerage" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="casDiscount"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>CAS Discount % <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input readOnly disabled placeholder="Enter CAS Discount" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="bardanaWeight"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Bardana Weight % <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Bardana Weight" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="w-full flex flex-row gap-x-2.5 justify-end">
                            <Link href={`/dashboard/product`} className={buttonVariants(
                                {
                                    variant: "outline",
                                    className: "bg-gray-100 text-black hover:bg-gray-200 hover:text-black cursor-pointer"
                                }
                            )}>Back to Product</Link>
                            <Button variant="outline" className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white cursor-pointer" type="submit">Update</Button>
                        </div>
                    </form>
                </Form>
            </Card>
        </>
    );
}