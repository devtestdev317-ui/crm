"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, ChevronDown, X } from 'lucide-react';
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const bagSizeSchema = z.object({
    weight: z.number().min(1, { message: "Required" }),
    tempo: z.number().min(1, { message: "Required" }),
    rent: z.number().min(1, { message: "Required" }),
    loading: z.number().min(1, { message: "Required" }),
    unloading: z.number().min(1, { message: "Required" }),
    labour: z.number().min(1, { message: "Required" }),
    tulaai: z.number().min(1, { message: "Required" }),
    bardana: z.number().min(1, { message: "Required" }),
});


export default function TestPage() {
    const formSchema = z.record(z.string(), bagSizeSchema);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {}
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
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

            form.unregister(value as any);
        } else {
            setSelectedSizes([...selectedSizes, value]);

            form.setValue(value as any, {
                weight: 0,
                tempo: 0,
                rent: 0,
                loading: 0,
                unloading: 0,
                labour: 0,
                tulaai: 0,
                bardana: 0,
            });
        }
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
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
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-0">
                        {selectedSizes.map((size) => (
                            <Card key={size} className="mb-4 p-4 gap-0">
                                <h3 className="font-semibold mb-3">Rate for {size} bags</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <FormField
                                        control={form.control}
                                        name={`${size}.weight`}
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
                                        name={`${size}.tempo`}
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
                                        name={`${size}.rent`}
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
                                        name={`${size}.loading`}
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
                                        name={`${size}.unloading`}
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
                                        name={`${size}.labour`}
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
                                        name={`${size}.tulaai`}
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
                                        name={`${size}.bardana`}
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

                        <div className="w-full mt-4">
                            <Button type="submit">Submit</Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}