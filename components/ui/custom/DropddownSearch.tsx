"use client";
import * as React from "react"
import { Check, CheckIcon, ChevronsUpDownIcon } from "lucide-react"
import { ControllerRenderProps } from "react-hook-form";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
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
} from "@/components/ui/popover"
import { FormControl, FormItem, FormLabel } from "@/components/ui/form"
export interface DropDOwnSehOption {
    id: string;
    label: string;
    value: string;
}
interface CustomerDropProp {
    field: ControllerRenderProps,
    label: string,
    data: DropDOwnSehOption[]
}

export function DropdownSearch({ data, field, label }: CustomerDropProp) {
    return (
        <FormItem className="flex flex-col space-y-1 w-1/4 px-2">
            <FormLabel>{label} <span className="text-red-500">*</span></FormLabel>
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
                                ? data.find(
                                    (language) => language.value === field.value
                                )?.label
                                : label}
                            <ChevronsUpDownIcon className="opacity-50" />
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
                                {data.map((language) => (
                                    <CommandItem
                                        value={language.label}
                                        key={language.value}
                                        onSelect={() => {
                                            field.onChange(language.value)
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

        </FormItem>
    )
}