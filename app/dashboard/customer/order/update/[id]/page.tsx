"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { DropdownSearch, DropDOwnSehOption } from "@/components/ui/custom/DropddownSearch";
import { CustomerOrderSchema } from "@/schema/CostomerOrderSchema";
import { DatePicker } from "@/components/ui/custom/DatePicker";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { use, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function UpdateCustomerOrder({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    type ItemDetailType = {
        id: string;
        itemName: string;
        qty: number;
        size: string;
        price: number;
    };
    const [ItemDetail, SetItemDetaild] = useState<ItemDetailType | null>(null);
    const validDate = new Date();
    const form = useForm<z.infer<typeof CustomerOrderSchema>>({
        resolver: zodResolver(CustomerOrderSchema),
        defaultValues: {
            orderDate: validDate,
            locatName: "Local Name A",
            brokerName: "Broker A",
            itemName: "Item A",
            noBox: "1",
            price: "1500",
            invioce: "yes",
            companyName: "Company ABC",
            demandedDate: validDate,
            deliveryPrefernce: "express",
            status: "Pending",
        },
    });
    function onSubmit(data: z.infer<typeof CustomerOrderSchema>) {
        console.log(data);
    }
    const data: DropDOwnSehOption[] = [
        {
            id: "1",
            label: "Local Name A",
            value: "Local Name A"
        },
        {
            id: "2",
            label: "Local Name B",
            value: "Local Name B"
        },
        {
            id: "3",
            label: "Local Name C",
            value: "Local Name C"
        },
    ];
    const BrokerData: DropDOwnSehOption[] = [
        { id: "1", label: "Broker A", value: "Broker A" },
        { id: "2", label: "Broker B", value: "Broker B" },
        { id: "3", label: "Broker C", value: "Broker C" },
        { id: "4", label: "Broker D", value: "Broker D" },
    ];
    const ItemList = [
        {
            id: "1",
            itemName: "Item A",
            qty: 100,
            size: "4kg",
            price: 1500
        },
        {
            id: "2",
            itemName: "Item B",
            qty: 50,
            size: "2kg",
            price: 1100
        }
    ];
    const ItemListDrop: DropDOwnSehOption[] = ItemList.map(({ id, itemName, qty, size, price }) => ({
        id: id,
        label: itemName + " " + `(Stock ${qty})`,
        value: itemName
    }));

    const DataCompanyList: DropDOwnSehOption[] = [
        {
            id: "1",
            value: "Company ABC",
            label: "Company ABC"
        },
        {
            id: "2",
            value: "Company CBA",
            label: "Company CBA"
        },
        {
            id: "3",
            value: "Company DCS",
            label: "Company DCS"
        },
        {
            id: "4",
            value: "Company EDF",
            label: "Company EDF"
        },

    ]
    function handleDetailedItem(value: string) {
        const result = ItemList.find(item => item.id === value);
        SetItemDetaild(result || null);

        if (result) {
            form.setValue("bagSize", result.size);
            form.setValue("price", result.price.toString());
        }
    }
    const [isInvioce, setInvioce] = useState("yes")
    return (
        <>
            <div className="text-[18px] text-black/80 font-semibold mt-2">Update Customer Order: {id}</div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap space-y-4.5">
                    <FormField
                        control={form.control}
                        name="orderDate"
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
                        name="locatName"
                        render={({ field }) => (
                            <DropdownSearch field={{ ...field }} data={data} label="Local Name" />
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="brokerName"
                        render={({ field }) => (
                            <DropdownSearch field={{ ...field }} data={BrokerData} label="Selec Broker" />
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="itemName"
                        render={({ field }) => (
                            <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                <FormLabel>Detailed Item Name</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                className={cn(
                                                    "w-full h-[45px] justify-between font-normal text-sm",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value
                                                    ? ItemListDrop.find(
                                                        (language) => language.value === field.value
                                                    )?.label
                                                    : "Select Item Name"}
                                                <ChevronsUpDown className="opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[200px] p-0">
                                        <Command>
                                            <CommandInput
                                                placeholder="Search framework..."
                                                className="h-9"
                                            />
                                            <CommandList>
                                                <CommandEmpty>No framework found.</CommandEmpty>
                                                <CommandGroup>
                                                    {ItemListDrop.map((language) => (
                                                        <CommandItem
                                                            value={language.label}
                                                            key={language.value}
                                                            onSelect={() => {
                                                                form.setValue("itemName", language.value);
                                                                handleDetailedItem(language.id); // Fixed function name
                                                            }}
                                                        >
                                                            {language.label}
                                                            <Check
                                                                className={cn(
                                                                    "ml-auto",
                                                                    language.value === field.value
                                                                        ? "opacity-100"
                                                                        : "opacity-0"
                                                                )}
                                                            />
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {ItemDetail?.id ? (
                        <div className="w-1/4 p-2">
                            <div className="w-full border rounded-sm bg-gray-50 py-2 px-3">
                                <div className="text-black/80 font-medium text-[14px]">{`${ItemDetail.itemName} (Stock: ${ItemDetail.qty})`}</div>
                                <FormField
                                    control={form.control}
                                    name="noBox"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-wrap">
                                            <FormLabel>No. of boxes/bags: <span className="text-red-600">*</span></FormLabel>
                                            <FormControl>
                                                <Input placeholder="" {...field} className="h-[35px] w-[55px] bg-white rounded-none" />
                                            </FormControl>
                                            <div className="text-[12px] text-gray-600">Bag size: {ItemDetail.size} Selling Price: {ItemDetail.price}</div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    ) : null}
                    <FormField
                        control={form.control}
                        name="invioce"
                        render={({ field }) => (
                            <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                <FormLabel>Invoice 1 Preference <span className="text-red-500">*</span></FormLabel>
                                <Select onValueChange={(value) => {
                                    field.onChange(value);
                                    setInvioce(value); // Fixed function name
                                }} defaultValue={field.value}>
                                    <FormControl >
                                        <SelectTrigger className="w-full  h-[45px] min-h-[45px]">
                                            <SelectValue placeholder="Select Main Item Name" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="yes">Yes</SelectItem>
                                        <SelectItem value="no">No</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {
                        isInvioce === "yes" ? (<FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => (
                                <DropdownSearch field={{ ...field }} data={DataCompanyList} label="Select Company Name" />
                            )}
                        />) : null
                    }

                    <FormField
                        control={form.control}
                        name="demandedDate"
                        render={({ field }) => (
                            <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                <FormLabel>Demand Date<span className="text-red-600">*</span></FormLabel>
                                <DatePicker field={{ ...field }} />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="deliveryPrefernce"
                        render={({ field }) => (
                            <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                <FormLabel>Delivery Preference</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl >
                                        <SelectTrigger className="w-full  h-[45px] min-h-[45px]">
                                            <SelectValue placeholder="Select Delivery Preference" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="express">Express</SelectItem>
                                        <SelectItem value="standard">Standard</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="w-full flex flex-row items-center justify-end gap-x-2">
                        <Button type="reset" className="cursor-pointer bg-gray-600 hover:bg-gray-700">Reset</Button>
                        <Button type="submit" className="cursor-pointer bg-blue-600 hover:bg-blue-700">Update</Button>
                    </div>
                </form>
            </Form>
        </>
    )
}
