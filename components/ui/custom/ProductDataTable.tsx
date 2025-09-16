
"use client"
import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState,
    FilterFn
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal, Search, MoveLeft, MoveRight } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Link from "next/link"
import { Badge } from "../badge"
import { rankItem } from "@tanstack/match-sorter-utils"

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value)
    addMeta({
        itemRank,
    })
    return itemRank.passed
}

export type ProductTable = {
    itemCode: string,
    CombItemName: string,
    itemName: string,
    itemType: string,
    quality: string,
    itemNameInvoice: string,
    hsnCode: string,
    brand: string,
    gst: string,
    itemLocalName: string,
    sellingPrice: number,
    countryOrigin: string,
    adCode: string,
    invoice1Rate: number,
    customDuty: string,
    customDutyType: string,
    socialWelfare: string,
    port: string,
    balanceOQ: number,
    invoice1OQ: number,
    invoice2OQ: number,
    fixedExpenses: number,
    kiran: string,
    discount: number,
    brokerage: number,
    casDiscount: number,
    bardanaWeight: number,
    status: boolean
}
const data: ProductTable[] = [
    {
        itemCode: "CD40YLVVUFPO098T",
        CombItemName: "greenraisins-ranga-regular",
        itemName: "Green Raisins",
        itemType: "Ranga",
        quality: "Regular",
        itemNameInvoice: "",
        hsnCode: "42004338",
        brand: "Brand A",
        gst: "123456Gr453",
        itemLocalName: "Green Raisins",
        sellingPrice: 1250,
        countryOrigin: "USA",
        adCode: "1254685",
        invoice1Rate: 1254685,
        customDuty: "1256",
        customDutyType: "Bulk",
        socialWelfare: "Bulk",
        port: "Banglore",
        balanceOQ: 6520,
        invoice1OQ: 6520,
        invoice2OQ: 6520,
        fixedExpenses: 6520,
        kiran: "Dry fruits",
        discount: 0,
        brokerage: 120,
        casDiscount: 120,
        bardanaWeight: 120,
        status: true
    }
];

export const columns: ColumnDef<ProductTable>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "itemCode",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Item Code
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("itemCode")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "CombItemName",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Combined Name
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("CombItemName")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "itemName",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Item Name
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("itemName")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "itemType",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Item Type
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("itemType")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "quality",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Quality
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("quality")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "itemNameInvoice",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Item Name As Per Invioce
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("itemNameInvoice")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "hsnCode",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    HSN Code
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("hsnCode")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "brand",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Brand
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("brand")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "gst",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    GST
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("gst")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "itemLocalName",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Item Local Name
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("itemLocalName")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "sellingPrice",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Selling Price
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("sellingPrice")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "countryOrigin",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Country of Origion
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("countryOrigin")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "adCode",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    AD Code
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("adCode")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "invoice1Rate",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Invoice 1 Rate
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("invoice1Rate")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "customDuty",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Custom Duty
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("customDuty")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "customDutyType",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Custom Duty Type
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("customDutyType")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "socialWelfare",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Social Welfare
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("socialWelfare")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "port",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Port
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("port")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "balanceOQ",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Balance Open Quantity
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("balanceOQ")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "invoice1OQ",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Balance 1 Open Quantity
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("invoice1OQ")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "invoice2OQ",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Balance 2 Open Quantity
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("invoice2OQ")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "fixedExpenses",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Historical Fixed Expenses
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("fixedExpenses")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "kiran",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Dry Fruit or Kirana
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("kiran")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "discount",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Discounta
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("discount")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "brokerage",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Brokerage
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("brokerage")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "casDiscount",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Cash Discount
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("casDiscount")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "bardanaWeight",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Bardana Weight
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("bardanaWeight")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            row.getValue("status") ? (
                <Badge variant="default" className="bg-green-100 border-green-500 text-green-700" >Active</Badge>
            ) : (
                <Badge variant="destructive" className="bg-red-100 border-red-500 text-red-700" >Inactive</Badge>
            )
        ),
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment.itemCode)}
                        >
                            Copy Supplier ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><Link href={`/dashboard/product/${payment.itemCode}`}>View Product</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href={`/dashboard/product/update/${payment.itemCode}`}>Edit Product</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href={`/dashboard/product/${payment.itemCode}/delete`}>Delete Product</Link></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
export function ProductDataTable() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [globalFilter, setGlobalFilter] = React.useState("")
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({
            itemCode: true,
            CombItemName: true,
            itemName: true,
            itemType: true,
            quality: true,
            itemNameInvoice: true,
            hsnCode: true,
            brand: true,
            gst: false,
            itemLocalName: false,
            sellingPrice: false,
            countryOrigin: false,
            adCode: false,
            invoice1Rate: false,
            customDuty: false,
            customDutyType: false,
            socialWelfare: false,
            port: false,
            balanceOQ: false,
            invoice1OQ: false,
            invoice2OQ: false,
            fixedExpenses: false,
            kiran: false,
            discount: false,
            brokerage: false,
            casDiscount: false,
            bardanaWeight: false,
            status: true
        })
    const [rowSelection, setRowSelection] = React.useState({
    });
    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        globalFilterFn: fuzzyFilter,
        state: {
            sorting,
            columnFilters,
            globalFilter,
            columnVisibility,
            rowSelection,
        },
    })

    // Calculate page numbers to display
    const currentPage = table.getState().pagination.pageIndex + 1;
    const pageCount = table.getPageCount();
    const maxVisiblePages = 5; // Number of page buttons to show

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(pageCount, startPage + maxVisiblePages - 1);

    // Adjust if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="w-full">
            <div className="flex items-center justify-between py-4">
                <div className="relative">
                    <Input
                        placeholder="Search across all fields..."
                        value={globalFilter ?? ""}
                        onChange={(event) =>
                            setGlobalFilter(event.target.value)
                        }
                        className="max-w-sm h-[40px] w-[320px] pl-[40px]"
                    />
                    <Search className="size-[20px] absolute left-3 top-[12px]" stroke="#808080" />
                </div>
                <div className="flex items-center space-x-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="h-[40px] ml-auto text-[#6d7a86] font-semibold cursor-pointer">
                                <span className="font-medium">Show</span>: Table Columns <ChevronDown />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="h-[220px]">
                            {table
                                .getAllColumns()
                                .filter((column) => column.getCanHide())
                                .map((column) => {
                                    return (
                                        <DropdownMenuCheckboxItem
                                            key={column.id}
                                            className="capitalize  cursor-pointer"
                                            checked={column.getIsVisible()}
                                            onCheckedChange={(value) =>
                                                column.toggleVisibility(!!value)
                                            }
                                        >
                                            {column.id}
                                        </DropdownMenuCheckboxItem>
                                    )
                                })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Link href="/" className={buttonVariants({
                        variant: "outline",
                        className: "h-[40px] ml-auto text-white font-semibold bg-blue-500 hover:bg-blue-600 hover:text-white"
                    })}>Add New Supplier</Link>
                </div>
            </div>
            <div className="overflow-hidden rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-between py-4">
                <div className="text-muted-foreground flex-1 text-sm">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="flex items-center space-x-2">
                    <Button
                        variant="outline"
                        className="h-8 w-8 p-0 border-0 rounded-0 cursor-pointer shadow-none"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <span className="sr-only">Go to previous page</span>
                        <MoveLeft className="h-4 w-4" />
                    </Button>

                    {pageNumbers.map(page => (
                        <Button
                            key={page}
                            variant={"outline"}
                            className={`h-8 w-8 p-0 rounded-[4px] cursor-pointer hover:bg-blue-100 hover:border-blue-600 hover:text-blue-600 ${currentPage === page ? "bg-blue-100 border-blue-600 text-blue-600" : ""}`}
                            onClick={() => table.setPageIndex(page - 1)}
                        >
                            {page}
                        </Button>
                    ))}

                    <Button
                        variant="outline"
                        className="h-8 w-8 p-0 border-0 rounded-0 cursor-pointer shadow-none"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        <span className="sr-only">Go to next page</span>
                        <MoveRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}