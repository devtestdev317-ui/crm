"use client";

import { ControllerRenderProps } from "react-hook-form";
import {
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Check } from "lucide-react";
import { Badge } from "../badge";
import { cn } from "@/lib/utils"; // Import your cn utility if available

interface PortCaterDropdownProps {
    field: ControllerRenderProps;
    data: PortCaterOption[];
    placeholder?: string;
    label?: string;
    required?: boolean;
    error?: boolean;
    errorMessage?: string;
}

export interface PortCaterOption {
    id: string;
    label: string;
    value: string;
}

export function MultiSelect({
    field,
    data,
    placeholder,
    label,
    required,
    error = false,
    errorMessage
}: PortCaterDropdownProps) {
    const portCaterOptions: PortCaterOption[] = data;

    const handleSelect = (itemId: string, e: Event) => {
        e.preventDefault();
        const currentValue = Array.isArray(field.value) ? field.value : [];
        const newValue = currentValue.includes(itemId)
            ? currentValue.filter((value: string) => value !== itemId)
            : [...currentValue, itemId];
        field.onChange(newValue);
    };

    return (
        <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
            {label && (
                <FormLabel>
                    {label} {required && <span className="text-red-500">*</span>}
                </FormLabel>
            )}
            <DropdownMenu>
                <DropdownMenuTrigger
                    className={cn(
                        "h-[45px] border rounded-md text-left px-4 text-sm relative flex items-center justify-between w-full",
                        error ? "border-red-500" : "border-gray-300 text-gray-500"
                    )}
                >
                    {field.value && field.value.length > 0
                        ? `${field.value.length} selected`
                        : placeholder || "Select"}
                    <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[270px] max-h-60 overflow-y-auto">
                    {portCaterOptions.map((item) => (
                        <DropdownMenuItem
                            key={item.id}
                            onSelect={(e) => handleSelect(item.value, e)}
                            className="flex flex-row items-center gap-2 py-1.5 px-1 cursor-pointer"
                        >
                            <div className={`w-5 h-5 border rounded flex items-center justify-center ${field.value?.includes(item.value)
                                ? 'bg-blue-500 border-blue-500'
                                : 'border-gray-300'
                                }`}>
                                {field.value?.includes(item.value) && (
                                    <Check className="w-3 h-3 text-white" />
                                )}
                            </div>
                            <span className="text-sm font-normal">
                                {item.label}
                            </span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex flex-wrap gap-1">
                {!field.value || field.value.length === 0 ? (
                    error ? <FormMessage /> :
                        <div className="text-sm text-gray-500">No selections</div>

                ) : (
                    field.value.map((value: string) => {
                        const selectedOption = portCaterOptions.find((option) => option.value === value);
                        return selectedOption ? (
                            <Badge
                                variant='outline'
                                key={value}
                                className="text-sm text-gray-500 bg-blue-200 border-blue-500 text-[10px] font-medium"
                            >
                                {selectedOption.label}
                            </Badge>
                        ) : null;
                    })
                )}

            </div>


        </FormItem>
    );
}