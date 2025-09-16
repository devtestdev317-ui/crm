"use client";
import { useState, useEffect, useCallback } from "react";
import { Input } from "../input";
import { ChevronDown, Check } from 'lucide-react';
import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";
import { Checkbox } from "../checkbox";

interface MultiselectDropdownProps<T extends FieldValues> {
    field: ControllerRenderProps<T>;
    options: string[];
}

export function MultiselectDropdown<T extends FieldValues>({ field, options }: MultiselectDropdownProps<T>) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string[]>([]);

    useEffect(() => {
        if (field.value && typeof field.value === 'string') {
            setSelectedValue(field.value.split(', ').filter(Boolean));
        }
    }, [field.value]);

    const handleDropDownSelect = useCallback((option: string) => {
        const newSelectedValue = selectedValue.includes(option)
            ? selectedValue.filter(item => item !== option)
            : [...selectedValue, option];

        setSelectedValue(newSelectedValue);
        field.onChange(newSelectedValue.join(", "));
        setIsOpen(false);
        console.log(selectedValue)
    }, [selectedValue, field]);

    const toggleDropdown = useCallback(() => setIsOpen(prev => !prev), []);

    return (
        <div className="w-full relative">
            <Input
                type="hidden"
                {...field}
                value={selectedValue.join(", ")}
            />
            
            <div className="w-full h-[45px] border rounded-sm relative">
                <button
                    type="button"
                    className="text-gray-500 px-3 py-3 font-normal text-sm cursor-pointer w-full h-full text-left"
                    onClick={toggleDropdown}
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                >
                    {selectedValue.length === 0 ? "Select options" : selectedValue.join(", ")}
                </button>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2" />
                {isOpen && (
                    <div
                        className="absolute left-0 right-0 top-full bg-white border border-t-0 rounded-b-md shadow-lg z-10"
                        role="listbox"
                        aria-multiselectable="true"
                    >
                        <div className="p-2">
                            {options.map((option) => (
                                <div
                                    key={option}
                                    role="option"
                                    aria-selected={selectedValue.includes(option)}
                                    className="py-2 px-3 hover:bg-gray-100 cursor-pointer flex flex-row items-center"
                                    onClick={() => handleDropDownSelect(option)}
                                >
                                    <div className={`w-5 h-5 border rounded-[2px] flex items-center justify-center mr-2 ${selectedValue.includes(option)
                                        ? 'bg-blue-600 border-blue-600'
                                        : 'border-gray-300'
                                        }`}>
                                        {selectedValue.includes(option) && <Check className="w-3 h-3 text-white" />}
                                    </div>
                                    {option}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}