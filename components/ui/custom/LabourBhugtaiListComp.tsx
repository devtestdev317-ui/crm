"use client"
import * as React from "react";
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
} from "@tanstack/react-table";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowUpDown, Search, MoveLeft, MoveRight } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "../badge"
import { rankItem } from "@tanstack/match-sorter-utils"
import { toast } from "sonner";
import { Checkbox } from "../checkbox";
import Link from "next/link";

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value)
    addMeta({
        itemRank,
    })
    return itemRank.passed
};


export type DATATYPETODOLIST = {
    orderId: string,
    warehouse: string,
    importer_company: string,
    item_name: string,
    hsn_code: string,
    wh_receipt_no: string,
    qty_demanded: string,
    lot_no: string,
    brand: string,
    combined_item: string,
    local_name: string,
    delivery_date: string,
    broker_name: string,
    main_item: string,
    selling_price: string,
    per_bag_size: string,
    status: string
}

const data: DATATYPETODOLIST[] = [
    {
        orderId: "ORDER--001",
        warehouse: "Warehouse A",
        importer_company: "Importer Co.",
        item_name: "Item X",
        hsn_code: "1234",
        wh_receipt_no: "WH-RCPT-9477",
        qty_demanded: "5",
        lot_no: "LOT-47",
        brand: "Brand X",
        combined_item: "Item X Combo",
        local_name: "Party A",
        delivery_date: "2025-07-16",
        broker_name: "Broker W",
        main_item: "Item Y",
        selling_price: "126.48",
        per_bag_size: "40kg",
        status: 'completed'
    },
    {
        orderId: "ORDER--002",
        warehouse: "Warehouse B",
        importer_company: "Importer Co.",
        item_name: "Item Y",
        hsn_code: "1234",
        wh_receipt_no: "WH-RCPT-4031",
        qty_demanded: "3",
        lot_no: "LOT-658",
        brand: "Brand X",
        combined_item: "Item Y Combo",
        local_name: "Party A",
        delivery_date: "2025-07-16",
        broker_name: "Broker L",
        main_item: "Item X",
        selling_price: "56.50",
        per_bag_size: "40kg",
        status: "partial completed"
    },
    {
        orderId: "ORDER--003",
        warehouse: "Warehouse C",
        importer_company: "Importer Co.",
        item_name: "Item Z",
        hsn_code: "1234",
        wh_receipt_no: "WH-RCPT-768",
        qty_demanded: "8",
        lot_no: "LOT-704",
        brand: "Brand X",
        combined_item: "Item Z Combo",
        local_name: "Party B",
        delivery_date: "2025-07-16",
        broker_name: "Item Y",
        main_item: "Item Z",
        selling_price: "88.35",
        per_bag_size: "40kg",
        status: "cancelled"
    }
]
export function LABOURBHUGTAILISTCOMP() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [globalFilter, setGlobalFilter] = React.useState("")
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({
        orderId: true,
        warehouse: true,
        importer_company: true,
        item_name: true,
        hsn_code: true,
        wh_receipt_no: true,
        qty_demanded: true,
        lot_no: true,
        brand: true,
        combined_item: true,
        local_name: true,
        delivery_date: true,
        broker_name: true,
        main_item: true,
        selling_price: true,
        per_bag_size: true,
        status: true,
    })
    const [rowSelection, setRowSelection] = React.useState({});

    const columns = React.useMemo<ColumnDef<DATATYPETODOLIST>[]>(() => [
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
            accessorKey: "warehouse",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Warehouse
                        <ArrowUpDown />
                    </Button>
                )
            },
            cell: ({ row }) => <div className="uppercase">{String(row.getValue("warehouse")).toLocaleUpperCase()}</div>,
        },
        {
            accessorKey: "lot_no",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Lot Number
                        <ArrowUpDown />
                    </Button>
                )
            },
            cell: ({ row }) => <div className="uppercase">{String(row.getValue("lot_no")).toLocaleUpperCase()}</div>,
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
            accessorKey: "combined_item",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Combined Item Name
                        <ArrowUpDown />
                    </Button>
                )
            },
            cell: ({ row }) => <div className="uppercase">{String(row.getValue("combined_item")).toLocaleUpperCase()}</div>,
        },
        {
            accessorKey: "local_name",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Local Name
                        <ArrowUpDown />
                    </Button>
                )
            },
            cell: ({ row }) => <div className="uppercase">{String(row.getValue("local_name")).toLocaleUpperCase()}</div>,
        },
        {
            accessorKey: "delivery_date",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Delivery Date
                        <ArrowUpDown />
                    </Button>
                )
            },
            cell: ({ row }) => <div className="uppercase">{String(row.getValue("delivery_date")).toLocaleUpperCase()}</div>,
        },
        {
            accessorKey: "selling_price",
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
            cell: ({ row }) => <div className="uppercase">{String(row.getValue("selling_price")).toLocaleUpperCase()}</div>,
        },
        {
            accessorKey: "per_bag_size",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Bag Size
                        <ArrowUpDown />
                    </Button>
                )
            },
            cell: ({ row }) => <div className="uppercase">{String(row.getValue("per_bag_size")).toLocaleUpperCase()}</div>,
        },

    ], []);
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
        <>
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
                        <Button className="cursor-pointer h-[40px] ml-auto text-white font-semibold bg-blue-500 hover:bg-blue-600 hover:text-white">Move to Warehouse</Button>

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
        </>
    )
}