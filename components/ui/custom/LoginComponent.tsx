"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const LoginSchema = z.object({
    email: z.string().min(1, "Email Require").email("Invalid email"),
    password: z.string().min(1, "Password Require").min(6, "Password must be at least 6 characters").max(100),
});

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link";

export function LoginComponent() {

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });
    function onSubmit(data: z.infer<typeof LoginSchema>) {
        console.log(data);
    }
    return (
        <div className="font-sans grid grid-cols-1 items-center justify-items-end min-h-screen">
            <Image src="/images/login_bg.jpg" className="background-cover object-cover" fill alt="Background Image" />
            <div className="w-[480px] relative z-10">
                <Card className="w-[400px] border-0 shadow-none bg-white">
                    <CardHeader className="flex flex-col items-center justify-center space-y-2">
                        <Avatar className="w-16 h-16 items-center justify-center bg-gray-100 rounded-full">
                            <AvatarImage src="/icons/shield.png" className="size-10" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-[22px] text-[#343a40] font-bold">Welcome back!</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-4">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col space-y-1">
                                            <FormLabel>User ID</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter User ID" {...field} className="h-[45px]" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col space-y-1">
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter Password" {...field} className="h-[45px]" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="remember" className="size-5 checked:bg-blue-700" />
                                        <label htmlFor="remember" className="text-sm font-normal text-gray-500">Remember me</label>
                                    </div>
                                    <Link href="#" className="text-sm text-blue-500 text-decoration-underline">Forgot password?</Link>
                                </div>
                                <div><Button className="w-full h-[45px] bg-blue-600 hover:bg-blue-700 cursor-pointer">Sign In</Button></div>
                            </form>

                        </Form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}