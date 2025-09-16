"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { MultiSelect } from "@/components/ui/custom/MultiSelect";
import { CustomerSchema } from "@/schema/CustomerSchema";
import { DropdownSearch, DropDOwnSehOption } from "@/components/ui/custom/DropddownSearch";
import { PortCaterOption } from "@/components/ui/custom/MultiSelect";
import { useState } from "react";
export default function AddCustomer() {
    const form = useForm<z.infer<typeof CustomerSchema>>({
        resolver: zodResolver(CustomerSchema),
        defaultValues: {
            customerId: "1454785265878956",
            companyName: "Company ABC",
            ownerName: "Ranjan Singh",
            locatName: "Item ABC A",
            ownerNumber: "9856589875",
            staffName: "Rahul Kumar",
            staffNumber: "8754587854",
            gst: "123456Gr453",
            address: "Pload 360 B Noida Sec 105",
            city: "Gurgaon",
            state: "Haryana",
            pincode: "122022",
            country: "India",
            email: "test@test.in",
            msme: "54852DDSDAS",
            fssai: "5459FSSAI",
            bankName: "BOB",
            bankAccountNumber: "98565878545",
            ifsc: "DSLK8548855",
            bankLocation: "Sector 49",
            debit: "150",
            credit: "350",
            transactionLimitAmount: "500",
            item: ["Item ABC A", "Item ABC C"],
            citiesCover: ["Delhi", "Gurugram"],
            paymentFrequency: ["Next Day", "Next 15 Day"],
            collectorName: "Ramesh",
            paymentDays: ["Sunday", "Monday"],
            duplicatePurchi: "no",
            duplicatePurchiDays: [],
            customerType: "regular",
            nameTransporter: "",
            packingMaterial: "JUTE",
            status: "inactive"
        }
    });

    function onSubmit(data: z.infer<typeof CustomerSchema>) {
        console.log(data);
    }


    const data: PortCaterOption[] = [
        {
            id: "1",
            label: "Item ABC A",
            value: "Item ABC A"
        },
        {
            id: "2",
            label: "Item ABC B",
            value: "Item ABC B"
        },
        {
            id: "3",
            label: "Item ABC C",
            value: "Item ABC C"
        },
    ];

    const CityList: PortCaterOption[] = [
        { id: "1", label: "Delhi", value: "Delhi" },
        { id: "2", label: "Gurugram", value: "Gurugram" },
        { id: "3", label: "Gaziabad", value: "Gaziabad" },
    ];

    const PAYMENTFREQ: PortCaterOption[] = [
        { id: "1", label: "Next Day", value: "Next Day" },
        { id: "2", label: "Next 15 Day", value: "Next 15 Day" },
        { id: "3", label: "Monthly", value: "Monthly" },
        { id: "4", label: "Overdue", value: "Overdue" },
    ]
    const dataMaymentDay: PortCaterOption[] = [
        { id: "1", label: "Sunday", value: "Sunday" },
        { id: "2", label: "Monday", value: "Monday" },
        { id: "3", label: "Tuesday", value: "Tuesday" },
        { id: "4", label: "Wednesday", value: "Wednesday" },
        { id: "5", label: "Thursday", value: "Thursday" },
        { id: "6", label: "Friday", value: "Friday" },
        { id: "7", label: "Satarday", value: "Satarday" },
    ];

    const CollectorName: DropDOwnSehOption[] = [
        { id: "1", label: "Ram", value: "Ram" },
        { id: "2", label: "Ramesh", value: "Ramesh" },
        { id: "3", label: "Babu Lal", value: "Babu Lal" },
    ];
    const languages: DropDOwnSehOption[] = [
        { id: "1", label: "English", value: "en" },
        { id: "2", label: "French", value: "fr" },
        { id: "3", label: "German", value: "de" },
        { id: "4", label: "Spanish", value: "es" },
        { id: "5", label: "Portuguese", value: "pt" },
        { id: "6", label: "Russian", value: "ru" },
        { id: "7", label: "Japanese", value: "ja" },
        { id: "9", label: "Korean", value: "ko" },
        { id: "10", label: "Chinese", value: "zh" },
    ];
    const TransPorterList: DropDOwnSehOption[] = [
        { id: "1", label: "Transporter A", value: "Transporter A" }, { id: "2", label: "Transporter B", value: "Transporter B" }
    ]
    const PackagingMaterial: DropDOwnSehOption[] = [
        { id: "1", label: "JUTE", value: "JUTE" },
        { id: "2", label: "PLASTIC", value: "PLASTIC" },
        { id: "3", label: "SINGLE", value: "SINGLE" },
    ]
    const [isPurchi, setPurchi] = useState("no");
    const [istypeCustmer, setTypeCustomer] = useState("regular");
    return (
        <>
            <div className="text-[18px] text-black/80 font-semibold mt-2">Add Customer</div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap space-y-4.5">
                    <FormField
                        control={form.control}
                        name="customerId"
                        render={({ field }) => (
                            <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                <FormLabel>Customer ID <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter 16-digit alphanumeric ID" {...field} className="h-[45px]" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                            <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                <FormLabel>Company Name <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Company Name" {...field} className="h-[45px]" />
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
                        name="locatName"
                        render={({ field }) => (
                            <DropdownSearch field={{ ...field }} data={data} label="Local Name" />
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
                        name="staffName"
                        render={({ field }) => (
                            <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                <FormLabel>Staff Name <span className="text-red-500">*</span></FormLabel>
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
                                <FormLabel>Staff Number <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Staff Number" {...field} className="h-[45px]" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="gst"
                        render={({ field }) => (
                            <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                <FormLabel>GST Number <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter GST Number" {...field} className="h-[45px]" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                <FormLabel>Address <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Address" {...field} className="h-[45px]" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                <FormLabel>City <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter City" {...field} className="h-[45px]" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                            <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                <FormLabel>State <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter State" {...field} className="h-[45px]" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="pincode"
                        render={({ field }) => (
                            <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                <FormLabel>Pincode <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Pincode" {...field} className="h-[45px]" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                            <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                <FormLabel>Country <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Country" {...field} className="h-[45px]" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Email" {...field} className="h-[45px]" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="msme"
                        render={({ field }) => (
                            <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                <FormLabel>MSME/UDYAM Number <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter MSME/UDYAM Number" {...field} className="h-[45px]" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="fssai"
                        render={({ field }) => (
                            <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                <FormLabel>FSSAI Number <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter FSSAI Number" {...field} className="h-[45px]" />
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
                                <FormLabel>Bank Name <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Bank Name" {...field} className="h-[45px]" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="bankAccountNumber"
                        render={({ field }) => (
                            <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                <FormLabel>Bank Account Number <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Bank Account Number" {...field} className="h-[45px]" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="ifsc"
                        render={({ field }) => (
                            <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                <FormLabel>Bank IFSC <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Bank IFSC" {...field} className="h-[45px]" />
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
                                <FormLabel>Bank Location <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Bank Location" {...field} className="h-[45px]" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="debit"
                        render={({ field }) => (
                            <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                <FormLabel>Debit <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Debit" {...field} className="h-[45px]" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="credit"
                        render={({ field }) => (
                            <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                <FormLabel>Credit <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Credit" {...field} className="h-[45px]" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="transactionLimitAmount"
                        render={({ field }) => (
                            <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                <FormLabel>Transaction limit amount <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Transaction limit amount" {...field} className="h-[45px]" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="item"
                        render={({ field, fieldState }) => (
                            <MultiSelect
                                field={{ ...field }}
                                data={data}
                                placeholder="Select Items"
                                label="Which Items They Must Buy"
                                required={true}
                                error={!!fieldState.error}
                                errorMessage={fieldState.error?.message}
                            />
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="citiesCover"
                        render={({ field, fieldState }) => (
                            <MultiSelect
                                field={{ ...field }}
                                data={CityList}
                                placeholder="Select Items"
                                label="Which Cites to They Cover"
                                required={true}
                                error={!!fieldState.error}
                                errorMessage={fieldState.error?.message}
                            />
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="paymentFrequency"
                        render={({ field, fieldState }) => (
                            <MultiSelect
                                field={{ ...field }}
                                data={PAYMENTFREQ}
                                placeholder="Select Items"
                                label="Payment Frequency"
                                required={true}
                                error={!!fieldState.error}
                                errorMessage={fieldState.error?.message}
                            />
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="collectorName"
                        render={({ field }) => (
                            <DropdownSearch field={{ ...field }} data={CollectorName} label="Select Collectro Staff" />
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="paymentDays"
                        render={({ field, fieldState }) => (
                            <MultiSelect
                                field={{ ...field }}
                                data={dataMaymentDay}
                                placeholder="Select Items"
                                label="Payment Days"
                                required={true}
                                error={!!fieldState.error}
                                errorMessage={fieldState.error?.message}
                            />
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="duplicatePurchi"
                        render={({ field }) => (
                            <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                <FormLabel>Duplicate Parchi required</FormLabel>
                                <Select
                                    onValueChange={(value) => {
                                        field.onChange(value);
                                        setPurchi(value);
                                    }}
                                    defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="w-full min-h-[45px]">
                                            <SelectValue placeholder="Select a verified email to display" />
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
                        isPurchi === "yes" ? (
                            <FormField
                                control={form.control}
                                name="duplicatePurchiDays"
                                render={({ field }) => (
                                    <div className="w-1/4">
                                        <MultiSelect
                                            field={{ ...field }}
                                            data={dataMaymentDay}
                                            placeholder="Select Duplicate Purchi Days"
                                            label="Duplicate Purchi Days"
                                            required={true}
                                        />

                                    </div>
                                )}
                            />
                        ) : null
                    }
                    <FormField
                        control={form.control}
                        name="customerType"
                        render={({ field }) => (
                            <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                <FormLabel>Type of Customer</FormLabel>
                                <Select
                                    onValueChange={(value) => {
                                        field.onChange(value);
                                        setTypeCustomer(value);
                                    }}
                                    defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="w-full min-h-[45px]">
                                            <SelectValue placeholder="Select a verified email to display" />
                                        </SelectTrigger>
                                    </FormControl>

                                    <SelectContent>
                                        <SelectItem value="cash">Cash</SelectItem>
                                        <SelectItem value="regular">Regular</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {
                        istypeCustmer === "cash" ? (
                            <>
                                <FormField
                                    control={form.control}
                                    name="nameTransporter"
                                    render={({ field }) => (
                                        <DropdownSearch field={{ ...field }} data={TransPorterList} label="Name of Transporter" />
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="packingMaterial"
                                    render={({ field }) => (
                                        <DropdownSearch field={{ ...field }} data={PackagingMaterial} label="Order packing material" />
                                    )}
                                />
                            </>
                        ) : null
                    }
                    <div className="w-full flex flex-row items-center justify-end gap-x-2">
                        <Button type="reset" className="cursor-pointer bg-gray-600 hover:bg-gray-700">Reset</Button>
                        <Button type="submit" className="cursor-pointer bg-blue-600 hover:bg-blue-700">Submit</Button>
                    </div>
                </form>
            </Form>
        </>
    )
}

// isPurchi istypeCustmer, setTypeCustomer