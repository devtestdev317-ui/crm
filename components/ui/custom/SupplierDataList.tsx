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
import { DateFormat } from "@/utils/DateFormat"

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value)
    addMeta({
        itemRank,
    })
    return itemRank.passed
}


export type DataTable = {
    order_id: string;
    supplier_company: string;
    importer_company: string;
    third_party: string;
    item_name: string;
    combined_item_name: string;
    country_of_origin: string;
    purchase_currency: string;
    purchase_rate_per_kg: number;
    brands: string;
    no_of_boxes: number;
    per_bag_size: number;
    total_weight: number;
    total_amount: number;
    invoice_1_rate: number;
    invoice_2_rate: number;
    total_invoice_1_amount: number;
    total_invoice_2_amount: number;
    grand_total: number;
    exchange_rate_invoice_1: number;
    exchange_rate_invoice_2: number;
    result_box: number;
    contract_no: string;
    contract_date: Date;
    indenter_broker: string;
    clearing_agent: string;
    expected_shipment: Date;
    destination_port: string;
    estimated_time_of_arrival: Date;
    status: "close" | "open" | "pending";
}


export const columns: ColumnDef<DataTable>[] = [
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
        accessorKey: "order_id",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Order ID
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("order_id")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "supplier_company",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Exporter Name
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("supplier_company")}</div>,
    },
    {
        accessorKey: "importer_company",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Importer Name
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("importer_company")}</div>,
    },
    {
        accessorKey: "third_party",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Third Party
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("third_party")}</div>,
    },
    {
        accessorKey: "combined_item_name",
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
        cell: ({ row }) => <div className="capitalize">{row.getValue("combined_item_name")}</div>,
    },
    {
        accessorKey: "country_of_origin",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Country of Origin
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("country_of_origin")}</div>,
    },
    {
        accessorKey: "purchase_currency",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Purchase Currency
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("purchase_currency")}</div>,
    },
    {
        accessorKey: "purchase_rate_per_kg",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Purchase Rate (per kg)
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("purchase_rate_per_kg")}</div>,
    },
    {
        accessorKey: "brands",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Brands
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => {
            const brands = row.getValue("brands") as string[] | undefined;
            return <div className="capitalize">{brands ? brands.join(", ") : ""}</div>;
        },
    },
    {
        accessorKey: "no_of_boxes",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    No. of Boxes/Package (Order)
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("no_of_boxes")}</div>,
    },
    {
        accessorKey: "per_bag_size",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Per Bag Size
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("per_bag_size")}</div>,
    },
    {
        accessorKey: "total_weight",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Total Weight (kg)
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("total_weight")}</div>,
    },
    {
        accessorKey: "total_amount",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Total Amount
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("total_amount")}</div>,
    },
    {
        accessorKey: "invoice_1_rate",
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
        cell: ({ row }) => <div className="capitalize">{row.getValue("invoice_1_rate")}</div>,
    },
    {
        accessorKey: "invoice_2_rate",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Invoice 2 Rate
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("invoice_2_rate")}</div>,
    },
    {
        accessorKey: "total_invoice_1_amount",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Total Invoice 1 Amount
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("total_invoice_1_amount")}</div>,
    },
    {
        accessorKey: "total_invoice_2_amount",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Total Invoice 2 Amount
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("total_invoice_2_amount")}</div>,
    },
    {
        accessorKey: "grand_total",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Grand Total
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("grand_total")}</div>,
    },
    {
        accessorKey: "exchange_rate_invoice_1",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Exchange Rate Invoice 1
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("exchange_rate_invoice_1")}</div>,
    },
    {
        accessorKey: "exchange_rate_invoice_2",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Exchange Rate Invoice 2
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("exchange_rate_invoice_2")}</div>,
    },
    {
        accessorKey: "result_box",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Approx Costing.
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("result_box")}</div>,
    },
    {
        accessorKey: "contract_no",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Contract No
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("contract_no")}</div>,
    },
    {
        accessorKey: "contract_date",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Contract Date
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{
            DateFormat(row.getValue("contract_date") as Date)
        }</div>,
    },
    {
        accessorKey: "indenter_broker",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Indenter/Broker
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("indenter_broker")}</div>,
    },
    {
        accessorKey: "clearing_agent",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Custom House Agent
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("clearing_agent")}</div>,
    },
    {
        accessorKey: "expected_shipment",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Expected Shipment
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{DateFormat(row.getValue("expected_shipment") as Date)}</div>,
    },
    {
        accessorKey: "destination_port",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Destination Port
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("destination_port")}</div>,
    },
    {
        accessorKey: "estimated_time_of_arrival",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Estimated Time of Arrival
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{String(
            DateFormat(row.getValue("estimated_time_of_arrival") as Date)
        )}</div>,
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            row.getValue("status") === "close" ? (
                <Badge variant="default" className="bg-green-100 border-green-500 text-green-700" >Closed</Badge>
            ) : row.getValue("status") === "open" ? (
                <Badge variant="destructive" className="bg-red-100 border-red-500 text-red-700" >Open</Badge>
            ) : <Badge variant="destructive" className="bg-yellow-100 border-yellow-500 text-yellow-700" >Pending</Badge>
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
                            onClick={() => navigator.clipboard.writeText(payment.order_id)}
                        >
                            Copy Order ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><Link href={`/dashboard/supplier-order/${payment.order_id}`}>View Order</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href={`/dashboard/supplier-order/update/${payment.order_id}`}>Edit Order</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href={`/dashboard/supplier-order/${payment.order_id}/delete`}>Delete Order</Link></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]


export function SupplierDataTable({ data }: { data: DataTable[] }) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [globalFilter, setGlobalFilter] = React.useState("")
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({
            order_id: true,
            supplier_company: true,
            importer_company: true,
            third_party: true,
            combined_item_name: true,
            country_of_origin: false,
            purchase_currency: true,
            purchase_rate_per_kg: true,
            brands: false,
            no_of_boxes: false,
            per_bag_size: true,
            total_weight: true,
            total_amount: false,
            invoice_1_rate: false,
            invoice_2_rate: false,
            total_invoice_1_amount: false,
            total_invoice_2_amount: false,
            grand_total: false,
            exchange_rate_invoice_1: false,
            exchange_rate_invoice_2: false,
            result_box: false,
            contract_no: false,
            contract_date: true,
            indenter_broker: false,
            clearing_agent: false,
            expected_shipment: false,
            destination_port: true,
            estimated_time_of_arrival: true,
            status: true,
        })
    const [rowSelection, setRowSelection] = React.useState({
    })

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
                    <Link href="/dashboard/supplier-order/add" className={buttonVariants({
                        variant: "outline",
                        className: "h-[40px] ml-auto text-white font-semibold bg-blue-500 hover:bg-blue-600 hover:text-white"
                    })}>Add New Supplier Order</Link>
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