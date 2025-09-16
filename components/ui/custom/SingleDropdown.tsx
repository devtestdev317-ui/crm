"use client";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Check } from "lucide-react";
import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";

interface SingleDropdownProps<T extends FieldValues> {
    field: ControllerRenderProps<T>;
    options: { value: string; label: string }[];
    label: string;
    onChange: (value: string) => void;
}

export function SingleDropdown<T extends FieldValues>({ options, label, field, onChange }: SingleDropdownProps<T>) {
    const handleChange = (value: string) => {
        field.onChange(value);
        onChange(value);
    };

    return (
        <Select onValueChange={handleChange} value={field.value}>
            <SelectTrigger className="w-full h-[45px] min-h-[45px]">
                <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            <div className="flex items-center">
                                <div className={`w-5 h-5 border rounded-[2px] flex items-center justify-center mr-2 ${field.value === option.value
                                        ? 'bg-blue-600 border-blue-600'
                                        : 'border-gray-300'
                                    }`}>
                                    {field.value === option.value && <Check className="w-3 h-3 text-white" />}
                                </div>
                                {option.label}
                            </div>
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}