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

import { Button } from "@/components/ui/button"

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

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value)
    addMeta({
        itemRank,
    })
    return itemRank.passed
};

export type DataTypeOrder = {
    id: string,
    orderId: string,
    orderDate: string,
    localName: string,
    itemName: string,
    noOfBoxes: number,
    qtyDelivered: number,
    status: 'Pending' | 'In Progress' | 'Completed' | 'Cancelled',
};

const data: DataTypeOrder[] = [
    {
        id: 'ORDER--001',
        orderId: 'ORD-1001',
        orderDate: '15/07/2025',
        localName: 'Party A',
        itemName: 'Item X',
        noOfBoxes: 10,
        qtyDelivered: 2,
        status: 'Pending'
    },
    {
        id: 'ORDER--002',
        orderId: 'ORD-1001',
        orderDate: '15/07/2025',
        localName: 'Party A',
        itemName: 'Item Y',
        noOfBoxes: 5,
        qtyDelivered: 0,
        status: 'In Progress'
    },
    {
        id: 'ORDER--003',
        orderId: 'ORD-1002',
        orderDate: '15/07/2025',
        localName: 'Party B',
        itemName: 'Item Z',
        noOfBoxes: 8,
        qtyDelivered: 0,
        status: 'Pending'
    }
];


export function DemanSelectionComp() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [globalFilter, setGlobalFilter] = React.useState("")
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({
        orderId: true,
        orderDate: true,
        localName: true,
        itemName: true,
        noOfBoxes: true,
        qtyDelivered: true,
        status: false,
    })
    const [rowSelection, setRowSelection] = React.useState({})
    const [demandValues, setDemandValues] = React.useState<Record<string, string>>({})

    const [open, setOpen] = React.useState(false);
    const handleInputChange = (id: string, value: string) => {
        setDemandValues(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleRise = (id: string, orderId: string) => {
        const value = demandValues[id] || "";

        if (!value.trim()) {
            toast.error("Enter Demand", {
                description: "Demand input can't be empty!",
                action: {
                    label: "Close",
                    onClick: () => console.log("Close"),
                },
            })
            return false;
        }

        console.log({ id, orderId, value });
        // Here you would typically make an API call or update state
    };

    const columns = React.useMemo<ColumnDef<DataTypeOrder>[]>(() => [
        {
            accessorKey: "orderId",
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
            cell: ({ row }) => <div className="uppercase">{String(row.getValue("orderId")).toLocaleUpperCase()}</div>,
        },
        {
            accessorKey: "orderDate",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Order Date
                        <ArrowUpDown />
                    </Button>
                )
            },
            cell: ({ row }) => <div className="uppercase">{String(row.getValue("orderDate")).toLocaleUpperCase()}</div>,
        },
        {
            accessorKey: "localName",
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
            cell: ({ row }) => <div className="uppercase">{String(row.getValue("localName")).toLocaleUpperCase()}</div>,
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
            accessorKey: "noOfBoxes",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        No. of Boxes
                        <ArrowUpDown />
                    </Button>
                )
            },
            cell: ({ row }) => <div className="uppercase">{String(row.getValue("noOfBoxes")).toLocaleUpperCase()}</div>,
        },
        {
            accessorKey: "qtyDelivered",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Quantity Delivered
                        <ArrowUpDown />
                    </Button>
                )
            },
            cell: ({ row }) => <div className="uppercase">{String(row.getValue("qtyDelivered")).toLocaleUpperCase()}</div>,
        },
        {
            id: "balanceQty",
            header: "Balance Qty",
            cell: ({ row }) => {
                const payment = row.original
                return (
                    <>{payment.noOfBoxes - payment.qtyDelivered}</>
                )
            },
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => (
                row.getValue("status") === "Completed" ? (
                    <Badge variant="default" className="bg-green-100 border-green-500 text-green-700" >Completed</Badge>
                ) : row.getValue("status") === "Cancelled" ? (
                    <Badge variant="destructive" className="bg-red-100 border-red-500 text-red-700" >Cancelled</Badge>
                ) : row.getValue("status") === "Pending" ? (
                    <Badge variant="default" className="bg-fuchsia-100 border-fuchsia-500 text-fuchsia-700" >Pending</Badge>
                ) : <Badge variant="default" className="bg-yellow-100 border-yellow-500 text-yellow-700" >In Progress</Badge>
            ),
        },
        {
            id: "raisedeman",
            header: "Create Demand",
            cell: ({ row }) => {
                const payment = row.original
                const inputValue = demandValues[payment.id] || "";

                return (
                    <div className="flex flex-nowrap gap-x-1">
                        <Input
                            className="w-[60px] h-[25px] rounded-none bg-white"
                            value={inputValue}
                            onChange={(e) => handleInputChange(payment.id, e.target.value)}
                        />
                        <Button
                            onClick={() => handleRise(payment.id, payment.orderId)}
                            className="p-0 h-[25px] text-[13px] px-3.5 font-medium bg-blue-100 border border-blue-500 text-blue-500 rounded-[15px] hover:bg-blue-200 cursor-pointer"
                        >
                            Raise
                        </Button>
                    </div>
                )
            },
        },
        {
            id: "action",
            header: "Action",
            cell: ({ row }) => {
                return (
                    <div className="flex flex-nowrap gap-x-1">
                        <Button onClick={() => setOpen(!open)} className="p-0 h-[25px] text-[13px] px-3.5 font-medium bg-blue-500 border border-blue-500 text-white rounded-[5px] cursor-pointer hover:bg-blue-700">
                            Close
                        </Button>
                    </div>
                )
            },
        },
    ], [demandValues]);

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
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}