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
};
export type DataTypeCustomer = {
    customerId: string;
    companyName: string;
    ownerName: string;
    locatName: string;
    ownerNumber: string;
    staffName: string;
    staffNumber: string;
    gst: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    email: string;
    msme: string;
    fssai: string;
    bankName: string;
    bankAccountNumber: string;
    ifsc: string;
    bankLocation: string;
    debit: string;
    credit: string;
    transactionLimitAmount: string;
    item: string[];
    citiesCover: string[];
    paymentFrequency: string[];
    collectorName: string,
    paymentDays: string[];
    duplicatePurchi: "yes" | "no";
    duplicatePurchiDays: string[];
    customerType: "regular" | "cash";
    nameTransporter: string;
    packingMaterial: "JUTE" | "PLASTIC" | "SINGLE";
    status: "active" | "inactive";
};

const data: DataTypeCustomer[] = [
    {
        "customerId": "1454785265878956",
        "companyName": "Company ABC",
        "ownerName": "Ranjan Singh",
        "locatName": "French",
        "ownerNumber": "9856589875",
        "staffName": "Rahul Kumar",
        "staffNumber": "8754587854",
        "gst": "123456Gr453",
        "address": "Pload 360 B Noida Sec 105",
        "city": "Gurgaon",
        "state": "Haryana",
        "pincode": "122022",
        "country": "India",
        "email": "test@test.in",
        "msme": "54852DDSDAS",
        "fssai": "5459FSSAI",
        "bankName": "BOB",
        "bankAccountNumber": "98565878545",
        "ifsc": "DSLK8548855",
        "bankLocation": "Sector 49",
        "debit": "150",
        "credit": "350",
        "transactionLimitAmount": "500",
        "item": ["Item ABC A", "Item ABC C"],
        "citiesCover": ["Delhi", "Gurugram"],
        "paymentFrequency": ["Next Day", "Next 15 Day"],
        "collectorName": "Ramesh",
        "paymentDays": ["Sunday", "Monday"],
        "duplicatePurchi": "no",
        "duplicatePurchiDays": [],
        "customerType": "regular",
        "nameTransporter": "",
        "packingMaterial": "JUTE",
        "status": "inactive"
    },
    {
        "customerId": "9876543210123456",
        "companyName": "Delhi Traders",
        "ownerName": "Vikram Malhotra",
        "locatName": "Main Market",
        "ownerNumber": "9876543210",
        "staffName": "Sunil Verma",
        "staffNumber": "8765432109",
        "gst": "GSTIN987654321",
        "address": "Shop No 45, Connaught Place",
        "city": "New Delhi",
        "state": "Delhi",
        "pincode": "110001",
        "country": "India",
        "email": "delhitraders@email.com",
        "msme": "UDYAM-DL-1234",
        "fssai": "FSSAI987654",
        "bankName": "HDFC Bank",
        "bankAccountNumber": "12345678901234",
        "ifsc": "HDFC0000123",
        "bankLocation": "Connaught Place",
        "debit": "200",
        "credit": "500",
        "transactionLimitAmount": "700",
        "item": ["Groceries", "Electronics"],
        "citiesCover": ["Delhi", "Noida", "Faridabad"],
        "paymentFrequency": ["Weekly", "Monthly"],
        "collectorName": "Amit Sharma",
        "paymentDays": ["Monday", "Wednesday", "Friday"],
        "duplicatePurchi": "yes",
        "duplicatePurchiDays": ["Tuesday", "Thursday"],
        "customerType": "cash",
        "nameTransporter": "Gati Express",
        "packingMaterial": "PLASTIC",
        "status": "active"
    },
    {
        "customerId": "4567890123456789",
        "companyName": "Mumbai Enterprises",
        "ownerName": "Rajesh Patel",
        "locatName": "Marine Lines",
        "ownerNumber": "9123456780",
        "staffName": "Priya Desai",
        "staffNumber": "8234567890",
        "gst": "GSTIN456789012",
        "address": "Floor 3, Nariman Point",
        "city": "Mumbai",
        "state": "Maharashtra",
        "pincode": "400021",
        "country": "India",
        "email": "mumbai.ent@business.com",
        "msme": "UDYAM-MH-5678",
        "fssai": "FSSAI456789",
        "bankName": "ICICI Bank",
        "bankAccountNumber": "56789012345678",
        "ifsc": "ICIC0000567",
        "bankLocation": "Nariman Point",
        "debit": "300",
        "credit": "600",
        "transactionLimitAmount": "900",
        "item": ["Textiles", "Handicrafts"],
        "citiesCover": ["Mumbai", "Pune", "Nashik"],
        "paymentFrequency": ["Bi-weekly"],
        "collectorName": "Neha Joshi",
        "paymentDays": ["Tuesday", "Thursday"],
        "duplicatePurchi": "no",
        "duplicatePurchiDays": [],
        "customerType": "regular",
        "nameTransporter": "",
        "packingMaterial": "SINGLE",
        "status": "active"
    },
    {
        "customerId": "3210987654321098",
        "companyName": "Bangalore Imports",
        "ownerName": "Suresh Iyer",
        "locatName": "Electronic City",
        "ownerNumber": "9345678901",
        "staffName": "Ananya Reddy",
        "staffNumber": "8456789012",
        "gst": "GSTIN321098765",
        "address": "Plot No 78, Phase 2",
        "city": "Bangalore",
        "state": "Karnataka",
        "pincode": "560100",
        "country": "India",
        "email": "bang.imports@mail.com",
        "msme": "UDYAM-KA-9012",
        "fssai": "FSSAI321098",
        "bankName": "Axis Bank",
        "bankAccountNumber": "98765432109876",
        "ifsc": "UTIB0000987",
        "bankLocation": "Electronic City",
        "debit": "250",
        "credit": "450",
        "transactionLimitAmount": "700",
        "item": ["Software", "Hardware"],
        "citiesCover": ["Bangalore", "Mysore"],
        "paymentFrequency": ["Monthly", "Quarterly"],
        "collectorName": "Karthik Nair",
        "paymentDays": ["Friday"],
        "duplicatePurchi": "yes",
        "duplicatePurchiDays": ["Monday"],
        "customerType": "cash",
        "nameTransporter": "Blue Dart",
        "packingMaterial": "PLASTIC",
        "status": "active"
    },
    {
        "customerId": "6543210987654321",
        "companyName": "Chennai Exports",
        "ownerName": "Lakshmi Narayanan",
        "locatName": "T Nagar",
        "ownerNumber": "9456789012",
        "staffName": "Mohan Kumar",
        "staffNumber": "8567890123",
        "gst": "GSTIN654321098",
        "address": "No 123, Main Road",
        "city": "Chennai",
        "state": "Tamil Nadu",
        "pincode": "600017",
        "country": "India",
        "email": "chennaiexports@trade.com",
        "msme": "UDYAM-TN-3456",
        "fssai": "FSSAI654321",
        "bankName": "SBI",
        "bankAccountNumber": "12349876543210",
        "ifsc": "SBIN0000123",
        "bankLocation": "T Nagar",
        "debit": "400",
        "credit": "800",
        "transactionLimitAmount": "1200",
        "item": ["Spices", "Tea", "Coffee"],
        "citiesCover": ["Chennai", "Coimbatore", "Madurai"],
        "paymentFrequency": ["Weekly"],
        "collectorName": "Rajiv Menon",
        "paymentDays": ["Wednesday", "Saturday"],
        "duplicatePurchi": "no",
        "duplicatePurchiDays": [],
        "customerType": "regular",
        "nameTransporter": "",
        "packingMaterial": "JUTE",
        "status": "inactive"
    }
];

export const columns: ColumnDef<DataTypeCustomer>[] = [
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
        accessorKey: "customerId",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Customer ID
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("customerId")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "companyName",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Company Name
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("companyName")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "ownerName",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Owner Name
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("ownerName")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "locatName",
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
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("locatName")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "ownerNumber",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Owner Number
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("ownerNumber")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "staffName",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Staff Name
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("staffName")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "staffNumber",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Staff Number
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("staffNumber")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "gst",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    GST Number
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("gst")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "address",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Address
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("address")).toLocaleUpperCase() + String(row.getValue("city")).toLocaleUpperCase() + String(row.getValue("state")).toLocaleUpperCase() + String(row.getValue("pincode")).toLocaleUpperCase() + String(row.getValue("country")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("email")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "msme",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    MSME/UDYAM Number
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("msme")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "fssai",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    FSSAI Number
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("fssai")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "bankName",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Bank Name
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("bankName")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "bankAccountNumber",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Bank AN
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("bankAccountNumber")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "ifsc",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    IFSC
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("ifsc")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "bankLocation",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Bank Location
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("bankLocation")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "debit",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Debit
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("debit")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "credit",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Credit
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("credit")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "transactionLimitAmount",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Transaction limit amount
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("transactionLimitAmount")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "item",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Which Items They Must Buy
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("item")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "citiesCover",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Which Cites to They Cover
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("citiesCover")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "paymentFrequency",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Payment Frequency
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("paymentFrequency")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "collectorName",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Collector Satff
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("collectorName")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "paymentDays",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Payment Days
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("paymentDays")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "duplicatePurchiDays",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Duplicate Purchi Days
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("duplicatePurchiDays")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "customerType",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Customer Type
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("customerType")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "nameTransporter",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Tranfprter Name
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("nameTransporter")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "packingMaterial",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Packaging Material
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("packingMaterial")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            row.getValue("status") === "active" ? (
                <Badge variant="default" className="bg-green-100 border-green-500 text-green-700" >Active</Badge>
            ) : < Badge variant="destructive" className="bg-red-100 border-red-500 text-red-700" > Inactive</Badge>),
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
                            onClick={() => navigator.clipboard.writeText(payment.customerId)}
                        >
                            Copy Customer ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><Link href={`/dashboard/customer/${payment.customerId}`}>View Customer</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href={`/dashboard/customer/update/${payment.customerId}`}>Edit Customer</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href={`/dashboard/customer/${payment.customerId}/delete`}>Delete Customer</Link></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
];

export function DataTableCustomer() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [globalFilter, setGlobalFilter] = React.useState("")
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({
            customerId: true,
            companyName: true,
            ownerName: true,
            locatName: true,
            ownerNumber: true,
            staffName: true,
            staffNumber: true,
            gst: false,
            address: false,
            city: false,
            state: false,
            pincode: false,
            country: false,
            email: false,
            msme: false,
            fssai: false,
            bankName: false,
            bankAccountNumber: false,
            ifsc: false,
            bankLocation: false,
            debit: false,
            credit: false,
            transactionLimitAmount: false,
            item: false,
            citiesCover: false,
            paymentFrequency: false,
            collectorName: false,
            paymentDays: false,
            duplicatePurchi: false,
            duplicatePurchiDays: false,
            customerType: false,
            nameTransporter: false,
            packingMaterial: false,
            status: false
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
            <div className="text-[18px] text-black/80 font-semibold mt-2">Customer Order List</div>
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
                    <Link href="customer/add" className={buttonVariants({
                        variant: "outline",
                        className: "h-[40px] ml-auto text-white font-semibold bg-blue-500 hover:bg-blue-600 hover:text-white"
                    })}>Add New Customer</Link>
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