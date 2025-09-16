"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
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
import { CHASchema } from "@/schema/CHASchema";
import { Textarea } from "@/components/ui/textarea";
import { MultiSelect } from "@/components/ui/custom/MultiSelect";
export default function UpdateCHA({ pramas }: { pramas: Promise<{ id: string }> }) {
    // const { id } = use(pramas);
    const form = useForm<z.infer<typeof CHASchema>>({
        resolver: zodResolver(CHASchema),
        defaultValues: {
            agentName: "John Doe",
            portCater: ["East South"],
            satffNameDTDU: "Mike Johnson",
            satffNumberDTDU: "123-456-7890",
            satffNameD: "Sarah Williams",
            satffNumberD: "987-654-3210",
            debit: "1500.50",
            credit: "2000.75",
            item: ["Fry Fuits", "Pulse"],
            address: "123 Main St, Anytown, USA",
        }
    });
    function onSubmit(data: z.infer<typeof CHASchema>) {
        console.log(data);
    }
    const data = [
        { id: "1", label: "East South", value: "East South" },
        { id: "2", label: "North West", value: "North West" }
    ];
    const DataItem = [
        {
            id: "1", label: "Fry Fuits", value: "Fry Fuits",
        },
        {
            id: "2", label: "Grains", value: "Grains",
        },
        {
            id: "3", label: "Spices", value: "Spices",
        },
        {
            id: "4", label: "Pulse", value: "Pulse",
        },
        {
            id: "5", label: "Oil", value: "Oil",
        }
    ]
    return (
        <>
            <DashboardStrip title="Update Custom House Agent" />
            <Card className="mt-4 px-4 py-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap space-y-4.5">
                        <FormField
                            control={form.control}
                            name="agentName"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Agent Name <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Agent Name" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="portCater"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Which Port Cater <span className="text-red-500">*</span></FormLabel>
                                    <MultiSelect field={{ ...field }} data={data} placeholder="Select Port Cater" />

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="satffNameDTDU"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Staff Name (Day to Day Update) <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Staff Name" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="satffNumberDTDU"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Staff Number (Day to Day Update) <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Staff Number" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="satffNameD"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Staff Name (Dispatch) <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Staff Name" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="satffNumberD"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Staff Number (Dispatch) <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Staff Number" {...field} className="h-[45px]" />
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
                                        <Input placeholder="Enter Staff Number" {...field} className="h-[45px]" />
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
                                        <Input placeholder="Enter Staff Number" {...field} className="h-[45px]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                        <FormField
                            control={form.control}
                            name="item"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
                                    <FormLabel>Which Items Handled <span className="text-red-500">*</span></FormLabel>
                                    <MultiSelect field={{ ...field }} data={DataItem} placeholder="Select Items Handled" />

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-1 w-1/2 px-2">
                                    <FormLabel>Address <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Enter Address" className="h-[110px]"  {...field} />
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
    )
}