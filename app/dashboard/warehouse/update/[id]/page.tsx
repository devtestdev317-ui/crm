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
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardStrip } from "@/components/ui/custom/DashboardStrip";
import { WarehouseSchema } from "@/schema/Warehouse";
import { Check, ChevronDown, X } from 'lucide-react';
import React, { use, useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function AddWarehousePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

    const form = useForm<z.infer<typeof WarehouseSchema>>({
        resolver: zodResolver(WarehouseSchema),
        defaultValues: {
            warehouseID: "",
            warehouseName: "",
            warehouseInitial: "",
            ownerName: "",
            ownerNumber: "",
            staffNameGE: "",
            staffNumberGE: "",
            staffNameDE: "",
            staffNumberDE: "",
            warehouseAddress: "",
            openingBalanceDE: "",
            openingBalanceC: "",
            pendingSettlement: "",
            perBagSize: {},
            status: "active"
        }
    });

    function onSubmit(data: z.infer<typeof WarehouseSchema>) {
        console.log(data);
    }

    const bagSizes = [
        { label: "1kg", value: "1kg" },
        { label: "2kg", value: "2kg" },
        { label: "3kg", value: "3kg" },
        { label: "4kg", value: "4kg" },
        { label: "5kg", value: "5kg" },
    ];

    const handleSizeSelection = (value: string) => {
        if (selectedSizes.includes(value)) {
            setSelectedSizes(selectedSizes.filter(size => size !== value));
            const currentValues = form.getValues("perBagSize") || {};
            delete currentValues[value as keyof typeof currentValues];
            form.setValue("perBagSize", currentValues);
        } else {
            setSelectedSizes([...selectedSizes, value]);
            const currentValues = form.getValues("perBagSize") || {};
            form.setValue("perBagSize", {
                ...currentValues,
                [value]: {
                    weight: 0,
                    Tempo: 0,
                    Rent: 0,
                    Loading: 0,
                    Unloading: 0,
                    Labour: 0,
                    Tulaai: 0,
                    Bardana: 0
                }
            });
        }
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <DashboardStrip title="Update Warehouse" />
            <Card className="mt-4 px-4 py-[25px]">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap space-y-4.5">
                        <FormField
                            control={form.control}
                            name="warehouseID"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Warehouse ID <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Warehouse ID" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="warehouseName"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Warehouse Name <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Warehouse Name" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="warehouseInitial"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Warehouse Initial <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Warehouse Initial" {...field} className="h-[45px]" />
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
                                    <FormLabel>Owner Name <span className="text-red-500">*</span></FormLabel>
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
                                    <FormLabel>Owner Number <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Owner Number" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="staffNameGE"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Staff Name (General Enquiry) <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Staff Name" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="staffNumberGE"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Staff Number (General Enquiry) <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Staff Number" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="staffNameDE"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Staff Name (Demand Enquiry) <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Staff Name" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="staffNumberDE"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Staff Number (Demand Enquiry) <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Staff Number" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="openingBalanceDE"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Opening Balance (Debit)  <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Opening Balance" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="openingBalanceC"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Opening Balance (Credit)  <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Opening Balance" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="warehouseAddress"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-full px-2">
                                    <FormLabel>Warehouse Address<span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Enter Warehouse Address" {...field} className="h-[102px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="w-full px-2">
                            <Card className="p-6 gap-0">
                                <CardHeader className="p-0 mb-3">
                                    <CardTitle className="mb-2">Per Bag Size Rates</CardTitle>
                                    <CardDescription className="text-black/80 font-medium">Select Bag Sizes (Multiple selection)</CardDescription>
                                </CardHeader>

                                <div className="mb-6">
                                    <div className="relative">
                                        <div
                                            className="w-full px-3.5 py-2 h-[45px] border rounded-md relative cursor-pointer flex items-center"
                                            onClick={toggleDropdown}
                                        >
                                            <span className="text-gray-500 font-normal text-sm">
                                                {selectedSizes.length > 0
                                                    ? `Selected Bag sizes: ${selectedSizes.length}`
                                                    : "Select bag sizes..."
                                                }
                                            </span>
                                            <ChevronDown
                                                size={16}
                                                className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                                            />
                                        </div>
                                        {selectedSizes.length > 0
                                            ? <div className="flex flex-wrap gap-x-1 mt-1">{selectedSizes.map(size => <Badge variant="outline" className="border-blue-500 bg-blue-100 text-gray-500" key={size}><span>{size}</span> <span onClick={() => handleSizeSelection(size)} className="relative top-[1px]"><X className="cursor-pointer" size={12} /></span></Badge>)}</div>
                                            : <span className="text-[12px] text-gray-600">No sizes selected</span>
                                        }

                                        {isDropdownOpen && (
                                            <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-md shadow-lg mt-1">
                                                <div className="p-3 grid grid-cols-10 gap-2">
                                                    {bagSizes.map((item) => (
                                                        <div key={item.value} className="flex items-center space-x-2">
                                                            <Checkbox
                                                                id={`key_${item.value}`}
                                                                checked={selectedSizes.includes(item.value)}
                                                                onCheckedChange={() => handleSizeSelection(item.value)}
                                                                className="absolute left-0 opacity-0 hidden"
                                                            />
                                                            <label
                                                                htmlFor={`key_${item.value}`}
                                                                className="flex items-center space-x-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                                                            >
                                                                <div className={`w-[25px] h-[23px] border flex flex-col items-center justify-center ${cn({ 'border-blue-500 bg-blue-500': selectedSizes.includes(item.value) })}`}>
                                                                    <Check className={cn("text-white mx-auto w-[18px] h-[18px]", { 'opacity-100': selectedSizes.includes(item.value), 'opacity-0': !selectedSizes.includes(item.value) })} />
                                                                </div>
                                                                <span>{item.label}</span>
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <CardContent className="p-0">
                                    <div className="space-0">
                                        {selectedSizes.map((size) => (
                                            <Card key={size} className="mb-4 p-4 gap-0">
                                                <h3 className="font-semibold mb-3">Rate for {size} bags</h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                                    <FormField
                                                        control={form.control}
                                                        name={`perBagSize.${size}.weight`}
                                                        render={({ field }) => {
                                                            // Convert the value to a number explicitly
                                                            const value = typeof field.value === 'number' ? field.value : 0;
                                                            return (
                                                                <FormItem>
                                                                    <FormLabel className="text-black/65 font-normal">Weight (KG)</FormLabel>
                                                                    <FormControl>
                                                                        <Input
                                                                            type="number"
                                                                            value={value}
                                                                            onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                                                            className="h-[45px]"
                                                                        />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            );
                                                        }}
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name={`perBagSize.${size}.Tempo`}
                                                        render={({ field }) => {
                                                            const value = typeof field.value === 'number' ? field.value : 0;
                                                            return (
                                                                <FormItem>
                                                                    <FormLabel className="text-black/65 font-normal">Tempo</FormLabel>
                                                                    <FormControl>
                                                                        <Input
                                                                            type="number"
                                                                            value={value}
                                                                            onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                                                            className="h-[45px]"
                                                                        />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            );
                                                        }}
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name={`perBagSize.${size}.Rent`}
                                                        render={({ field }) => {
                                                            const value = typeof field.value === 'number' ? field.value : 0;
                                                            return (
                                                                <FormItem>
                                                                    <FormLabel className="text-black/65 font-normal">Rent</FormLabel>
                                                                    <FormControl>
                                                                        <Input
                                                                            type="number"
                                                                            value={value}
                                                                            onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                                                            className="h-[45px]"
                                                                        />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            );
                                                        }}
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name={`perBagSize.${size}.Loading`}
                                                        render={({ field }) => {
                                                            const value = typeof field.value === 'number' ? field.value : 0;
                                                            return (
                                                                <FormItem>
                                                                    <FormLabel className="text-black/65 font-normal">Loading</FormLabel>
                                                                    <FormControl>
                                                                        <Input
                                                                            type="number"
                                                                            value={value}
                                                                            onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                                                            className="h-[45px]"
                                                                        />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            );
                                                        }}
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name={`perBagSize.${size}.Unloading`}
                                                        render={({ field }) => {
                                                            const value = typeof field.value === 'number' ? field.value : 0;
                                                            return (
                                                                <FormItem>
                                                                    <FormLabel className="text-black/65 font-normal">Unloading</FormLabel>
                                                                    <FormControl>
                                                                        <Input
                                                                            type="number"
                                                                            value={value}
                                                                            onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                                                            className="h-[45px]"
                                                                        />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            );
                                                        }}
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name={`perBagSize.${size}.Labour`}
                                                        render={({ field }) => {
                                                            const value = typeof field.value === 'number' ? field.value : 0;
                                                            return (
                                                                <FormItem>
                                                                    <FormLabel className="text-black/65 font-normal">Labour</FormLabel>
                                                                    <FormControl>
                                                                        <Input
                                                                            type="number"
                                                                            value={value}
                                                                            onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                                                            className="h-[45px]"
                                                                        />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            );
                                                        }}
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name={`perBagSize.${size}.Tulaai`}
                                                        render={({ field }) => {
                                                            const value = typeof field.value === 'number' ? field.value : 0;
                                                            return (
                                                                <FormItem>
                                                                    <FormLabel className="text-black/65 font-normal">Tulaai</FormLabel>
                                                                    <FormControl>
                                                                        <Input
                                                                            type="number"
                                                                            value={value}
                                                                            onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                                                            className="h-[45px]"
                                                                        />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            );
                                                        }}
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name={`perBagSize.${size}.Bardana`}
                                                        render={({ field }) => {
                                                            const value = typeof field.value === 'number' ? field.value : 0;
                                                            return (
                                                                <FormItem>
                                                                    <FormLabel className="text-black/65 font-normal">Bardana/Majuri</FormLabel>
                                                                    <FormControl>
                                                                        <Input
                                                                            type="number"
                                                                            value={value}
                                                                            onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                                                            className="h-[45px]"
                                                                        />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            );
                                                        }}
                                                    />
                                                </div>
                                            </Card>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <FormField
                            control={form.control}
                            name="pendingSettlement"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-full px-2">
                                    <FormLabel>Pending Settlement<span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="If any Settelment are pending like weight shortage, Rain damage, Wrong demand, Mixedup demand etc." {...field} className="h-[102px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="w-full flex flex-row gap-x-2.5 justify-end">
                            <Link href={`/dashboard/warehouse`} className={buttonVariants(
                                {
                                    variant: "outline",
                                    className: "bg-gray-100 text-black hover:bg-gray-200 hover:text-black cursor-pointer"
                                }
                            )}>Back to Warehouse</Link>
                            <Button variant="outline" className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white cursor-pointer" type="submit">Update</Button>
                        </div>
                    </form>
                </Form>
            </Card>
        </>
    )
}