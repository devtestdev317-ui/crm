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


export type DataTable = {
    partyName: string;
    brand: string;
    ownerName: string;
    ownerNumber: string;
    supplierEmail: string;
    status: string;
    supplierId: string;
    staffName: string;
    staffNumber: string;
    address: string;
    bankName: string;
    accountNumber: string;
    ibanIfsc: string;
    bankLocation: string;
    panNo: string;
    gstNo: string;
}

const data: DataTable[] = [
    {
        "partyName": "Name XYZ 1",
        "brand": "Brand 1",
        "ownerName": "Owner 1",
        "ownerNumber": "9856589001",
        "supplierEmail": "contact1@domain.in",
        "status": "active",
        "supplierId": "SUP001",
        "staffName": "Staff Member 1",
        "staffNumber": "9876543210",
        "address": "123 Supplier Street, City 1, State 1, Country 1",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678901",
        "ibanIfsc": "IBAN001IFSC001",
        "bankLocation": "City 1 Main Branch",
        "panNo": "ABCDE1234F",
        "gstNo": "22ABCDE1234F1Z5"
    },
    {
        "partyName": "Name XYZ 2",
        "brand": "Brand 2",
        "ownerName": "Owner 2",
        "ownerNumber": "9856589002",
        "supplierEmail": "contact2@domain.in",
        "status": "active",
        "supplierId": "SUP002",
        "staffName": "Staff Member 2",
        "staffNumber": "9876543211",
        "address": "124 Supplier Street, City 2, State 2, Country 2",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678902",
        "ibanIfsc": "IBAN002IFSC002",
        "bankLocation": "City 2 Main Branch",
        "panNo": "ABCDE1235F",
        "gstNo": "22ABCDE1235F1Z5"
    },
    {
        "partyName": "Name XYZ 3",
        "brand": "Brand 3",
        "ownerName": "Owner 3",
        "ownerNumber": "9856589003",
        "supplierEmail": "contact3@domain.in",
        "status": "active",
        "supplierId": "SUP003",
        "staffName": "Staff Member 3",
        "staffNumber": "9876543212",
        "address": "125 Supplier Street, City 3, State 3, Country 3",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678903",
        "ibanIfsc": "IBAN003IFSC003",
        "bankLocation": "City 3 Main Branch",
        "panNo": "ABCDE1236F",
        "gstNo": "22ABCDE1236F1Z5"
    },
    {
        "partyName": "Name XYZ 4",
        "brand": "Brand 4",
        "ownerName": "Owner 4",
        "ownerNumber": "9856589004",
        "supplierEmail": "contact4@domain.in",
        "status": "active",
        "supplierId": "SUP004",
        "staffName": "Staff Member 4",
        "staffNumber": "9876543213",
        "address": "126 Supplier Street, City 4, State 4, Country 4",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678904",
        "ibanIfsc": "IBAN004IFSC004",
        "bankLocation": "City 4 Main Branch",
        "panNo": "ABCDE1237F",
        "gstNo": "22ABCDE1237F1Z5"
    },
    {
        "partyName": "Name XYZ 5",
        "brand": "Brand 5",
        "ownerName": "Owner 5",
        "ownerNumber": "9856589005",
        "supplierEmail": "contact5@domain.in",
        "status": "active",
        "supplierId": "SUP005",
        "staffName": "Staff Member 5",
        "staffNumber": "9876543214",
        "address": "127 Supplier Street, City 5, State 5, Country 5",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678905",
        "ibanIfsc": "IBAN005IFSC005",
        "bankLocation": "City 5 Main Branch",
        "panNo": "ABCDE1238F",
        "gstNo": "22ABCDE1238F1Z5"
    },
    {
        "partyName": "Name XYZ 6",
        "brand": "Brand 6",
        "ownerName": "Owner 6",
        "ownerNumber": "9856589006",
        "supplierEmail": "contact6@domain.in",
        "status": "Inactive",
        "supplierId": "SUP006",
        "staffName": "Staff Member 6",
        "staffNumber": "9876543215",
        "address": "128 Supplier Street, City 6, State 6, Country 6",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678906",
        "ibanIfsc": "IBAN006IFSC006",
        "bankLocation": "City 6 Main Branch",
        "panNo": "ABCDE1239F",
        "gstNo": "22ABCDE1239F1Z5"
    },
    {
        "partyName": "Name XYZ 7",
        "brand": "Brand 7",
        "ownerName": "Owner 7",
        "ownerNumber": "9856589007",
        "supplierEmail": "contact7@domain.in",
        "status": "active",
        "supplierId": "SUP007",
        "staffName": "Staff Member 7",
        "staffNumber": "9876543216",
        "address": "129 Supplier Street, City 7, State 7, Country 7",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678907",
        "ibanIfsc": "IBAN007IFSC007",
        "bankLocation": "City 7 Main Branch",
        "panNo": "ABCDE1240F",
        "gstNo": "22ABCDE1240F1Z5"
    },
    {
        "partyName": "Name XYZ 8",
        "brand": "Brand 8",
        "ownerName": "Owner 8",
        "ownerNumber": "9856589008",
        "supplierEmail": "contact8@domain.in",
        "status": "active",
        "supplierId": "SUP008",
        "staffName": "Staff Member 8",
        "staffNumber": "9876543217",
        "address": "130 Supplier Street, City 8, State 8, Country 8",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678908",
        "ibanIfsc": "IBAN008IFSC008",
        "bankLocation": "City 8 Main Branch",
        "panNo": "ABCDE1241F",
        "gstNo": "22ABCDE1241F1Z5"
    },
    {
        "partyName": "Name XYZ 9",
        "brand": "Brand 9",
        "ownerName": "Owner 9",
        "ownerNumber": "9856589009",
        "supplierEmail": "contact9@domain.in",
        "status": "Inactive",
        "supplierId": "SUP009",
        "staffName": "Staff Member 9",
        "staffNumber": "9876543218",
        "address": "131 Supplier Street, City 9, State 9, Country 9",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678909",
        "ibanIfsc": "IBAN009IFSC009",
        "bankLocation": "City 9 Main Branch",
        "panNo": "ABCDE1242F",
        "gstNo": "22ABCDE1242F1Z5"
    },
    {
        "partyName": "Name XYZ 10",
        "brand": "Brand 10",
        "ownerName": "Owner 10",
        "ownerNumber": "9856589010",
        "supplierEmail": "contact10@domain.in",
        "status": "active",
        "supplierId": "SUP010",
        "staffName": "Staff Member 10",
        "staffNumber": "9876543219",
        "address": "132 Supplier Street, City 10, State 10, Country 10",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678910",
        "ibanIfsc": "IBAN010IFSC010",
        "bankLocation": "City 10 Main Branch",
        "panNo": "ABCDE1243F",
        "gstNo": "22ABCDE1243F1Z5"
    },
    {
        "partyName": "Name XYZ 11",
        "brand": "Brand 11",
        "ownerName": "Owner 11",
        "ownerNumber": "9856589011",
        "supplierEmail": "contact11@domain.in",
        "status": "active",
        "supplierId": "SUP011",
        "staffName": "Staff Member 11",
        "staffNumber": "9876543220",
        "address": "133 Supplier Street, City 11, State 11, Country 11",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678911",
        "ibanIfsc": "IBAN011IFSC011",
        "bankLocation": "City 11 Main Branch",
        "panNo": "ABCDE1244F",
        "gstNo": "22ABCDE1244F1Z5"
    },
    {
        "partyName": "Name XYZ 12",
        "brand": "Brand 12",
        "ownerName": "Owner 12",
        "ownerNumber": "9856589012",
        "supplierEmail": "contact12@domain.in",
        "status": "Inactive",
        "supplierId": "SUP012",
        "staffName": "Staff Member 12",
        "staffNumber": "9876543221",
        "address": "134 Supplier Street, City 12, State 12, Country 12",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678912",
        "ibanIfsc": "IBAN012IFSC012",
        "bankLocation": "City 12 Main Branch",
        "panNo": "ABCDE1245F",
        "gstNo": "22ABCDE1245F1Z5"
    },
    {
        "partyName": "Name XYZ 13",
        "brand": "Brand 13",
        "ownerName": "Owner 13",
        "ownerNumber": "9856589013",
        "supplierEmail": "contact13@domain.in",
        "status": "active",
        "supplierId": "SUP013",
        "staffName": "Staff Member 13",
        "staffNumber": "9876543222",
        "address": "135 Supplier Street, City 13, State 13, Country 13",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678913",
        "ibanIfsc": "IBAN013IFSC013",
        "bankLocation": "City 13 Main Branch",
        "panNo": "ABCDE1246F",
        "gstNo": "22ABCDE1246F1Z5"
    },
    {
        "partyName": "Name XYZ 14",
        "brand": "Brand 14",
        "ownerName": "Owner 14",
        "ownerNumber": "9856589014",
        "supplierEmail": "contact14@domain.in",
        "status": "active",
        "supplierId": "SUP014",
        "staffName": "Staff Member 14",
        "staffNumber": "9876543223",
        "address": "136 Supplier Street, City 14, State 14, Country 14",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678914",
        "ibanIfsc": "IBAN014IFSC014",
        "bankLocation": "City 14 Main Branch",
        "panNo": "ABCDE1247F",
        "gstNo": "22ABCDE1247F1Z5"
    },
    {
        "partyName": "Name XYZ 15",
        "brand": "Brand 15",
        "ownerName": "Owner 15",
        "ownerNumber": "9856589015",
        "supplierEmail": "contact15@domain.in",
        "status": "active",
        "supplierId": "SUP015",
        "staffName": "Staff Member 15",
        "staffNumber": "9876543224",
        "address": "137 Supplier Street, City 15, State 15, Country 15",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678915",
        "ibanIfsc": "IBAN015IFSC015",
        "bankLocation": "City 15 Main Branch",
        "panNo": "ABCDE1248F",
        "gstNo": "22ABCDE1248F1Z5"
    },
    {
        "partyName": "Name XYZ 16",
        "brand": "Brand 16",
        "ownerName": "Owner 16",
        "ownerNumber": "9856589016",
        "supplierEmail": "contact16@domain.in",
        "status": "Inactive",
        "supplierId": "SUP016",
        "staffName": "Staff Member 16",
        "staffNumber": "9876543225",
        "address": "138 Supplier Street, City 16, State 16, Country 16",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678916",
        "ibanIfsc": "IBAN016IFSC016",
        "bankLocation": "City 16 Main Branch",
        "panNo": "ABCDE1249F",
        "gstNo": "22ABCDE1249F1Z5"
    },
    {
        "partyName": "Name XYZ 17",
        "brand": "Brand 17",
        "ownerName": "Owner 17",
        "ownerNumber": "9856589017",
        "supplierEmail": "contact17@domain.in",
        "status": "active",
        "supplierId": "SUP017",
        "staffName": "Staff Member 17",
        "staffNumber": "9876543226",
        "address": "139 Supplier Street, City 17, State 17, Country 17",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678917",
        "ibanIfsc": "IBAN017IFSC017",
        "bankLocation": "City 17 Main Branch",
        "panNo": "ABCDE1250F",
        "gstNo": "22ABCDE1250F1Z5"
    },
    {
        "partyName": "Name XYZ 18",
        "brand": "Brand 18",
        "ownerName": "Owner 18",
        "ownerNumber": "9856589018",
        "supplierEmail": "contact18@domain.in",
        "status": "active",
        "supplierId": "SUP018",
        "staffName": "Staff Member 18",
        "staffNumber": "9876543227",
        "address": "140 Supplier Street, City 18, State 18, Country 18",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678918",
        "ibanIfsc": "IBAN018IFSC018",
        "bankLocation": "City 18 Main Branch",
        "panNo": "ABCDE1251F",
        "gstNo": "22ABCDE1251F1Z5"
    },
    {
        "partyName": "Name XYZ 19",
        "brand": "Brand 19",
        "ownerName": "Owner 19",
        "ownerNumber": "9856589019",
        "supplierEmail": "contact19@domain.in",
        "status": "active",
        "supplierId": "SUP019",
        "staffName": "Staff Member 19",
        "staffNumber": "9876543228",
        "address": "141 Supplier Street, City 19, State 19, Country 19",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678919",
        "ibanIfsc": "IBAN019IFSC019",
        "bankLocation": "City 19 Main Branch",
        "panNo": "ABCDE1252F",
        "gstNo": "22ABCDE1252F1Z5"
    },
    {
        "partyName": "Name XYZ 20",
        "brand": "Brand 20",
        "ownerName": "Owner 20",
        "ownerNumber": "9856589020",
        "supplierEmail": "contact20@domain.in",
        "status": "Inactive",
        "supplierId": "SUP020",
        "staffName": "Staff Member 20",
        "staffNumber": "9876543229",
        "address": "142 Supplier Street, City 20, State 20, Country 20",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678920",
        "ibanIfsc": "IBAN020IFSC020",
        "bankLocation": "City 20 Main Branch",
        "panNo": "ABCDE1253F",
        "gstNo": "22ABCDE1253F1Z5"
    },
    {
        "partyName": "Name XYZ 21",
        "brand": "Brand 21",
        "ownerName": "Owner 21",
        "ownerNumber": "9856589021",
        "supplierEmail": "contact21@domain.in",
        "status": "active",
        "supplierId": "SUP021",
        "staffName": "Staff Member 21",
        "staffNumber": "9876543230",
        "address": "143 Supplier Street, City 21, State 21, Country 21",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678921",
        "ibanIfsc": "IBAN021IFSC021",
        "bankLocation": "City 21 Main Branch",
        "panNo": "ABCDE1254F",
        "gstNo": "22ABCDE1254F1Z5"
    },
    {
        "partyName": "Name XYZ 22",
        "brand": "Brand 22",
        "ownerName": "Owner 22",
        "ownerNumber": "9856589022",
        "supplierEmail": "contact22@domain.in",
        "status": "active",
        "supplierId": "SUP022",
        "staffName": "Staff Member 22",
        "staffNumber": "9876543231",
        "address": "144 Supplier Street, City 22, State 22, Country 22",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678922",
        "ibanIfsc": "IBAN022IFSC022",
        "bankLocation": "City 22 Main Branch",
        "panNo": "ABCDE1255F",
        "gstNo": "22ABCDE1255F1Z5"
    },
    {
        "partyName": "Name XYZ 23",
        "brand": "Brand 23",
        "ownerName": "Owner 23",
        "ownerNumber": "9856589023",
        "supplierEmail": "contact23@domain.in",
        "status": "Inactive",
        "supplierId": "SUP023",
        "staffName": "Staff Member 23",
        "staffNumber": "9876543232",
        "address": "145 Supplier Street, City 23, State 23, Country 23",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678923",
        "ibanIfsc": "IBAN023IFSC023",
        "bankLocation": "City 23 Main Branch",
        "panNo": "ABCDE1256F",
        "gstNo": "22ABCDE1256F1Z5"
    },
    {
        "partyName": "Name XYZ 24",
        "brand": "Brand 24",
        "ownerName": "Owner 24",
        "ownerNumber": "9856589024",
        "supplierEmail": "contact24@domain.in",
        "status": "Inactive",
        "supplierId": "SUP024",
        "staffName": "Staff Member 24",
        "staffNumber": "9876543233",
        "address": "146 Supplier Street, City 24, State 24, Country 24",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678924",
        "ibanIfsc": "IBAN024IFSC024",
        "bankLocation": "City 24 Main Branch",
        "panNo": "ABCDE1257F",
        "gstNo": "22ABCDE1257F1Z5"
    },
    {
        "partyName": "Name XYZ 25",
        "brand": "Brand 25",
        "ownerName": "Owner 25",
        "ownerNumber": "9856589025",
        "supplierEmail": "contact25@domain.in",
        "status": "Inactive",
        "supplierId": "SUP025",
        "staffName": "Staff Member 25",
        "staffNumber": "9876543234",
        "address": "147 Supplier Street, City 25, State 25, Country 25",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678925",
        "ibanIfsc": "IBAN025IFSC025",
        "bankLocation": "City 25 Main Branch",
        "panNo": "ABCDE1258F",
        "gstNo": "22ABCDE1258F1Z5"
    },
    {
        "partyName": "Name XYZ 26",
        "brand": "Brand 26",
        "ownerName": "Owner 26",
        "ownerNumber": "9856589026",
        "supplierEmail": "contact26@domain.in",
        "status": "active",
        "supplierId": "SUP026",
        "staffName": "Staff Member 26",
        "staffNumber": "9876543235",
        "address": "148 Supplier Street, City 26, State 26, Country 26",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678926",
        "ibanIfsc": "IBAN026IFSC026",
        "bankLocation": "City 26 Main Branch",
        "panNo": "ABCDE1259F",
        "gstNo": "22ABCDE1259F1Z5"
    },
    {
        "partyName": "Name XYZ 27",
        "brand": "Brand 27",
        "ownerName": "Owner 27",
        "ownerNumber": "9856589027",
        "supplierEmail": "contact27@domain.in",
        "status": "active",
        "supplierId": "SUP027",
        "staffName": "Staff Member 27",
        "staffNumber": "9876543236",
        "address": "149 Supplier Street, City 27, State 27, Country 27",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678927",
        "ibanIfsc": "IBAN027IFSC027",
        "bankLocation": "City 27 Main Branch",
        "panNo": "ABCDE1260F",
        "gstNo": "22ABCDE1260F1Z5"
    },
    {
        "partyName": "Name XYZ 28",
        "brand": "Brand 28",
        "ownerName": "Owner 28",
        "ownerNumber": "9856589028",
        "supplierEmail": "contact28@domain.in",
        "status": "Inactive",
        "supplierId": "SUP028",
        "staffName": "Staff Member 28",
        "staffNumber": "9876543237",
        "address": "150 Supplier Street, City 28, State 28, Country 28",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678928",
        "ibanIfsc": "IBAN028IFSC028",
        "bankLocation": "City 28 Main Branch",
        "panNo": "ABCDE1261F",
        "gstNo": "22ABCDE1261F1Z5"
    },
    {
        "partyName": "Name XYZ 29",
        "brand": "Brand 29",
        "ownerName": "Owner 29",
        "ownerNumber": "9856589029",
        "supplierEmail": "contact29@domain.in",
        "status": "active",
        "supplierId": "SUP029",
        "staffName": "Staff Member 29",
        "staffNumber": "9876543238",
        "address": "151 Supplier Street, City 29, State 29, Country 29",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678929",
        "ibanIfsc": "IBAN029IFSC029",
        "bankLocation": "City 29 Main Branch",
        "panNo": "ABCDE1262F",
        "gstNo": "22ABCDE1262F1Z5"
    },
    {
        "partyName": "Name XYZ 30",
        "brand": "Brand 30",
        "ownerName": "Owner 30",
        "ownerNumber": "9856589030",
        "supplierEmail": "contact30@domain.in",
        "status": "active",
        "supplierId": "SUP030",
        "staffName": "Staff Member 30",
        "staffNumber": "9876543239",
        "address": "152 Supplier Street, City 30, State 30, Country 30",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678930",
        "ibanIfsc": "IBAN030IFSC030",
        "bankLocation": "City 30 Main Branch",
        "panNo": "ABCDE1263F",
        "gstNo": "22ABCDE1263F1Z5"
    },
    {
        "partyName": "Name XYZ 31",
        "brand": "Brand 31",
        "ownerName": "Owner 31",
        "ownerNumber": "9856589031",
        "supplierEmail": "contact31@domain.in",
        "status": "Inactive",
        "supplierId": "SUP031",
        "staffName": "Staff Member 31",
        "staffNumber": "9876543240",
        "address": "153 Supplier Street, City 31, State 31, Country 31",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678931",
        "ibanIfsc": "IBAN031IFSC031",
        "bankLocation": "City 31 Main Branch",
        "panNo": "ABCDE1264F",
        "gstNo": "22ABCDE1264F1Z5"
    },
    {
        "partyName": "Name XYZ 32",
        "brand": "Brand 32",
        "ownerName": "Owner 32",
        "ownerNumber": "9856589032",
        "supplierEmail": "contact32@domain.in",
        "status": "active",
        "supplierId": "SUP032",
        "staffName": "Staff Member 32",
        "staffNumber": "9876543241",
        "address": "154 Supplier Street, City 32, State 32, Country 32",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678932",
        "ibanIfsc": "IBAN032IFSC032",
        "bankLocation": "City 32 Main Branch",
        "panNo": "ABCDE1265F",
        "gstNo": "22ABCDE1265F1Z5"
    },
    {
        "partyName": "Name XYZ 33",
        "brand": "Brand 33",
        "ownerName": "Owner 33",
        "ownerNumber": "9856589033",
        "supplierEmail": "contact33@domain.in",
        "status": "Inactive",
        "supplierId": "SUP033",
        "staffName": "Staff Member 33",
        "staffNumber": "9876543242",
        "address": "155 Supplier Street, City 33, State 33, Country 33",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678933",
        "ibanIfsc": "IBAN033IFSC033",
        "bankLocation": "City 33 Main Branch",
        "panNo": "ABCDE1266F",
        "gstNo": "22ABCDE1266F1Z5"
    },
    {
        "partyName": "Name XYZ 34",
        "brand": "Brand 34",
        "ownerName": "Owner 34",
        "ownerNumber": "9856589034",
        "supplierEmail": "contact34@domain.in",
        "status": "Inactive",
        "supplierId": "SUP034",
        "staffName": "Staff Member 34",
        "staffNumber": "9876543243",
        "address": "156 Supplier Street, City 34, State 34, Country 34",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678934",
        "ibanIfsc": "IBAN034IFSC034",
        "bankLocation": "City 34 Main Branch",
        "panNo": "ABCDE1267F",
        "gstNo": "22ABCDE1267F1Z5"
    },
    {
        "partyName": "Name XYZ 35",
        "brand": "Brand 35",
        "ownerName": "Owner 35",
        "ownerNumber": "9856589035",
        "supplierEmail": "contact35@domain.in",
        "status": "active",
        "supplierId": "SUP035",
        "staffName": "Staff Member 35",
        "staffNumber": "9876543244",
        "address": "157 Supplier Street, City 35, State 35, Country 35",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678935",
        "ibanIfsc": "IBAN035IFSC035",
        "bankLocation": "City 35 Main Branch",
        "panNo": "ABCDE1268F",
        "gstNo": "22ABCDE1268F1Z5"
    },
    {
        "partyName": "Name XYZ 36",
        "brand": "Brand 36",
        "ownerName": "Owner 36",
        "ownerNumber": "9856589036",
        "supplierEmail": "contact36@domain.in",
        "status": "Inactive",
        "supplierId": "SUP036",
        "staffName": "Staff Member 36",
        "staffNumber": "9876543245",
        "address": "158 Supplier Street, City 36, State 36, Country 36",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678936",
        "ibanIfsc": "IBAN036IFSC036",
        "bankLocation": "City 36 Main Branch",
        "panNo": "ABCDE1269F",
        "gstNo": "22ABCDE1269F1Z5"
    },
    {
        "partyName": "Name XYZ 37",
        "brand": "Brand 37",
        "ownerName": "Owner 37",
        "ownerNumber": "9856589037",
        "supplierEmail": "contact37@domain.in",
        "status": "Inactive",
        "supplierId": "SUP037",
        "staffName": "Staff Member 37",
        "staffNumber": "9876543246",
        "address": "159 Supplier Street, City 37, State 37, Country 37",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678937",
        "ibanIfsc": "IBAN037IFSC037",
        "bankLocation": "City 37 Main Branch",
        "panNo": "ABCDE1270F",
        "gstNo": "22ABCDE1270F1Z5"
    },
    {
        "partyName": "Name XYZ 38",
        "brand": "Brand 38",
        "ownerName": "Owner 38",
        "ownerNumber": "9856589038",
        "supplierEmail": "contact38@domain.in",
        "status": "Inactive",
        "supplierId": "SUP038",
        "staffName": "Staff Member 38",
        "staffNumber": "9876543247",
        "address": "160 Supplier Street, City 38, State 38, Country 38",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678938",
        "ibanIfsc": "IBAN038IFSC038",
        "bankLocation": "City 38 Main Branch",
        "panNo": "ABCDE1271F",
        "gstNo": "22ABCDE1271F1Z5"
    },
    {
        "partyName": "Name XYZ 39",
        "brand": "Brand 39",
        "ownerName": "Owner 39",
        "ownerNumber": "9856589039",
        "supplierEmail": "contact39@domain.in",
        "status": "active",
        "supplierId": "SUP039",
        "staffName": "Staff Member 39",
        "staffNumber": "9876543248",
        "address": "161 Supplier Street, City 39, State 39, Country 39",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678939",
        "ibanIfsc": "IBAN039IFSC039",
        "bankLocation": "City 39 Main Branch",
        "panNo": "ABCDE1272F",
        "gstNo": "22ABCDE1272F1Z5"
    },
    {
        "partyName": "Name XYZ 40",
        "brand": "Brand 40",
        "ownerName": "Owner 40",
        "ownerNumber": "9856589040",
        "supplierEmail": "contact40@domain.in",
        "status": "active",
        "supplierId": "SUP040",
        "staffName": "Staff Member 40",
        "staffNumber": "9876543249",
        "address": "162 Supplier Street, City 40, State 40, Country 40",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678940",
        "ibanIfsc": "IBAN040IFSC040",
        "bankLocation": "City 40 Main Branch",
        "panNo": "ABCDE1273F",
        "gstNo": "22ABCDE1273F1Z5"
    },
    {
        "partyName": "Name XYZ 41",
        "brand": "Brand 41",
        "ownerName": "Owner 41",
        "ownerNumber": "9856589041",
        "supplierEmail": "contact41@domain.in",
        "status": "active",
        "supplierId": "SUP041",
        "staffName": "Staff Member 41",
        "staffNumber": "9876543250",
        "address": "163 Supplier Street, City 41, State 41, Country 41",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678941",
        "ibanIfsc": "IBAN041IFSC041",
        "bankLocation": "City 41 Main Branch",
        "panNo": "ABCDE1274F",
        "gstNo": "22ABCDE1274F1Z5"
    },
    {
        "partyName": "Name XYZ 42",
        "brand": "Brand 42",
        "ownerName": "Owner 42",
        "ownerNumber": "9856589042",
        "supplierEmail": "contact42@domain.in",
        "status": "Inactive",
        "supplierId": "SUP042",
        "staffName": "Staff Member 42",
        "staffNumber": "9876543251",
        "address": "164 Supplier Street, City 42, State 42, Country 42",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678942",
        "ibanIfsc": "IBAN042IFSC042",
        "bankLocation": "City 42 Main Branch",
        "panNo": "ABCDE1275F",
        "gstNo": "22ABCDE1275F1Z5"
    },
    {
        "partyName": "Name XYZ 43",
        "brand": "Brand 43",
        "ownerName": "Owner 43",
        "ownerNumber": "9856589043",
        "supplierEmail": "contact43@domain.in",
        "status": "Inactive",
        "supplierId": "SUP043",
        "staffName": "Staff Member 43",
        "staffNumber": "9876543252",
        "address": "165 Supplier Street, City 43, State 43, Country 43",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678943",
        "ibanIfsc": "IBAN043IFSC043",
        "bankLocation": "City 43 Main Branch",
        "panNo": "ABCDE1276F",
        "gstNo": "22ABCDE1276F1Z5"
    },
    {
        "partyName": "Name XYZ 44",
        "brand": "Brand 44",
        "ownerName": "Owner 44",
        "ownerNumber": "9856589044",
        "supplierEmail": "contact44@domain.in",
        "status": "Inactive",
        "supplierId": "SUP044",
        "staffName": "Staff Member 44",
        "staffNumber": "9876543253",
        "address": "166 Supplier Street, City 44, State 44, Country 44",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678944",
        "ibanIfsc": "IBAN044IFSC044",
        "bankLocation": "City 44 Main Branch",
        "panNo": "ABCDE1277F",
        "gstNo": "22ABCDE1277F1Z5"
    },
    {
        "partyName": "Name XYZ 45",
        "brand": "Brand 45",
        "ownerName": "Owner 45",
        "ownerNumber": "9856589045",
        "supplierEmail": "contact45@domain.in",
        "status": "active",
        "supplierId": "SUP045",
        "staffName": "Staff Member 45",
        "staffNumber": "9876543254",
        "address": "167 Supplier Street, City 45, State 45, Country 45",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678945",
        "ibanIfsc": "IBAN045IFSC045",
        "bankLocation": "City 45 Main Branch",
        "panNo": "ABCDE1278F",
        "gstNo": "22ABCDE1278F1Z5"
    },
    {
        "partyName": "Name XYZ 46",
        "brand": "Brand 46",
        "ownerName": "Owner 46",
        "ownerNumber": "9856589046",
        "supplierEmail": "contact46@domain.in",
        "status": "active",
        "supplierId": "SUP046",
        "staffName": "Staff Member 46",
        "staffNumber": "9876543255",
        "address": "168 Supplier Street, City 46, State 46, Country 46",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678946",
        "ibanIfsc": "IBAN046IFSC046",
        "bankLocation": "City 46 Main Branch",
        "panNo": "ABCDE1279F",
        "gstNo": "22ABCDE1279F1Z5"
    },
    {
        "partyName": "Name XYZ 47",
        "brand": "Brand 47",
        "ownerName": "Owner 47",
        "ownerNumber": "9856589047",
        "supplierEmail": "contact47@domain.in",
        "status": "Inactive",
        "supplierId": "SUP047",
        "staffName": "Staff Member 47",
        "staffNumber": "9876543256",
        "address": "169 Supplier Street, City 47, State 47, Country 47",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678947",
        "ibanIfsc": "IBAN047IFSC047",
        "bankLocation": "City 47 Main Branch",
        "panNo": "ABCDE1280F",
        "gstNo": "22ABCDE1280F1Z5"
    },
    {
        "partyName": "Name XYZ 48",
        "brand": "Brand 48",
        "ownerName": "Owner 48",
        "ownerNumber": "9856589048",
        "supplierEmail": "contact48@domain.in",
        "status": "Inactive",
        "supplierId": "SUP048",
        "staffName": "Staff Member 48",
        "staffNumber": "9876543257",
        "address": "170 Supplier Street, City 48, State 48, Country 48",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678948",
        "ibanIfsc": "IBAN048IFSC048",
        "bankLocation": "City 48 Main Branch",
        "panNo": "ABCDE1281F",
        "gstNo": "22ABCDE1281F1Z5"
    },
    {
        "partyName": "Name XYZ 49",
        "brand": "Brand 49",
        "ownerName": "Owner 49",
        "ownerNumber": "9856589049",
        "supplierEmail": "contact49@domain.in",
        "status": "active",
        "supplierId": "SUP049",
        "staffName": "Staff Member 49",
        "staffNumber": "9876543258",
        "address": "171 Supplier Street, City 49, State 49, Country 49",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678949",
        "ibanIfsc": "IBAN049IFSC049",
        "bankLocation": "City 49 Main Branch",
        "panNo": "ABCDE1282F",
        "gstNo": "22ABCDE1282F1Z5"
    },
    {
        "partyName": "Name XYZ 50",
        "brand": "Brand 50",
        "ownerName": "Owner 50",
        "ownerNumber": "9856589050",
        "supplierEmail": "contact50@domain.in",
        "status": "Inactive",
        "supplierId": "SUP050",
        "staffName": "Staff Member 50",
        "staffNumber": "9876543259",
        "address": "172 Supplier Street, City 50, State 50, Country 50",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678950",
        "ibanIfsc": "IBAN050IFSC050",
        "bankLocation": "City 50 Main Branch",
        "panNo": "ABCDE1283F",
        "gstNo": "22ABCDE1283F1Z5"
    },
    {
        "partyName": "Name XYZ 51",
        "brand": "Brand 51",
        "ownerName": "Owner 51",
        "ownerNumber": "9856589051",
        "supplierEmail": "contact51@domain.in",
        "status": "Inactive",
        "supplierId": "SUP051",
        "staffName": "Staff Member 51",
        "staffNumber": "9876543260",
        "address": "173 Supplier Street, City 51, State 51, Country 51",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678951",
        "ibanIfsc": "IBAN051IFSC051",
        "bankLocation": "City 51 Main Branch",
        "panNo": "ABCDE1284F",
        "gstNo": "22ABCDE1284F1Z5"
    },
    {
        "partyName": "Name XYZ 52",
        "brand": "Brand 52",
        "ownerName": "Owner 52",
        "ownerNumber": "9856589052",
        "supplierEmail": "contact52@domain.in",
        "status": "Inactive",
        "supplierId": "SUP052",
        "staffName": "Staff Member 52",
        "staffNumber": "9876543261",
        "address": "174 Supplier Street, City 52, State 52, Country 52",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678952",
        "ibanIfsc": "IBAN052IFSC052",
        "bankLocation": "City 52 Main Branch",
        "panNo": "ABCDE1285F",
        "gstNo": "22ABCDE1285F1Z5"
    },
    {
        "partyName": "Name XYZ 53",
        "brand": "Brand 53",
        "ownerName": "Owner 53",
        "ownerNumber": "9856589053",
        "supplierEmail": "contact53@domain.in",
        "status": "Inactive",
        "supplierId": "SUP053",
        "staffName": "Staff Member 53",
        "staffNumber": "9876543262",
        "address": "175 Supplier Street, City 53, State 53, Country 53",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678953",
        "ibanIfsc": "IBAN053IFSC053",
        "bankLocation": "City 53 Main Branch",
        "panNo": "ABCDE1286F",
        "gstNo": "22ABCDE1286F1Z5"
    },
    {
        "partyName": "Name XYZ 54",
        "brand": "Brand 54",
        "ownerName": "Owner 54",
        "ownerNumber": "9856589054",
        "supplierEmail": "contact54@domain.in",
        "status": "Inactive",
        "supplierId": "SUP054",
        "staffName": "Staff Member 54",
        "staffNumber": "9876543263",
        "address": "176 Supplier Street, City 54, State 54, Country 54",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678954",
        "ibanIfsc": "IBAN054IFSC054",
        "bankLocation": "City 54 Main Branch",
        "panNo": "ABCDE1287F",
        "gstNo": "22ABCDE1287F1Z5"
    },
    {
        "partyName": "Name XYZ 55",
        "brand": "Brand 55",
        "ownerName": "Owner 55",
        "ownerNumber": "9856589055",
        "supplierEmail": "contact55@domain.in",
        "status": "Inactive",
        "supplierId": "SUP055",
        "staffName": "Staff Member 55",
        "staffNumber": "9876543264",
        "address": "177 Supplier Street, City 55, State 55, Country 55",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678955",
        "ibanIfsc": "IBAN055IFSC055",
        "bankLocation": "City 55 Main Branch",
        "panNo": "ABCDE1288F",
        "gstNo": "22ABCDE1288F1Z5"
    },
    {
        "partyName": "Name XYZ 56",
        "brand": "Brand 56",
        "ownerName": "Owner 56",
        "ownerNumber": "9856589056",
        "supplierEmail": "contact56@domain.in",
        "status": "active",
        "supplierId": "SUP056",
        "staffName": "Staff Member 56",
        "staffNumber": "9876543265",
        "address": "178 Supplier Street, City 56, State 56, Country 56",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678956",
        "ibanIfsc": "IBAN056IFSC056",
        "bankLocation": "City 56 Main Branch",
        "panNo": "ABCDE1289F",
        "gstNo": "22ABCDE1289F1Z5"
    },
    {
        "partyName": "Name XYZ 57",
        "brand": "Brand 57",
        "ownerName": "Owner 57",
        "ownerNumber": "9856589057",
        "supplierEmail": "contact57@domain.in",
        "status": "active",
        "supplierId": "SUP057",
        "staffName": "Staff Member 57",
        "staffNumber": "9876543266",
        "address": "179 Supplier Street, City 57, State 57, Country 57",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678957",
        "ibanIfsc": "IBAN057IFSC057",
        "bankLocation": "City 57 Main Branch",
        "panNo": "ABCDE1290F",
        "gstNo": "22ABCDE1290F1Z5"
    },
    {
        "partyName": "Name XYZ 58",
        "brand": "Brand 58",
        "ownerName": "Owner 58",
        "ownerNumber": "9856589058",
        "supplierEmail": "contact58@domain.in",
        "status": "Inactive",
        "supplierId": "SUP058",
        "staffName": "Staff Member 58",
        "staffNumber": "9876543267",
        "address": "180 Supplier Street, City 58, State 58, Country 58",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678958",
        "ibanIfsc": "IBAN058IFSC058",
        "bankLocation": "City 58 Main Branch",
        "panNo": "ABCDE1291F",
        "gstNo": "22ABCDE1291F1Z5"
    },
    {
        "partyName": "Name XYZ 59",
        "brand": "Brand 59",
        "ownerName": "Owner 59",
        "ownerNumber": "9856589059",
        "supplierEmail": "contact59@domain.in",
        "status": "active",
        "supplierId": "SUP059",
        "staffName": "Staff Member 59",
        "staffNumber": "9876543268",
        "address": "181 Supplier Street, City 59, State 59, Country 59",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678959",
        "ibanIfsc": "IBAN059IFSC059",
        "bankLocation": "City 59 Main Branch",
        "panNo": "ABCDE1292F",
        "gstNo": "22ABCDE1292F1Z5"
    },
    {
        "partyName": "Name XYZ 60",
        "brand": "Brand 60",
        "ownerName": "Owner 60",
        "ownerNumber": "9856589060",
        "supplierEmail": "contact60@domain.in",
        "status": "active",
        "supplierId": "SUP060",
        "staffName": "Staff Member 60",
        "staffNumber": "9876543269",
        "address": "182 Supplier Street, City 60, State 60, Country 60",
        "bankName": "Bank of Suppliers",
        "accountNumber": "12345678960",
        "ibanIfsc": "IBAN060IFSC060",
        "bankLocation": "City 60 Main Branch",
        "panNo": "ABCDE1293F",
        "gstNo": "22ABCDE1293F1Z5"
    }
]



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
        accessorKey: "supplierId",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Supplier ID
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("supplierId")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "partyName",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Party Name
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("partyName")}</div>,
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
        cell: ({ row }) => <div className="capitalize">{row.getValue("brand")}</div>,
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
        cell: ({ row }) => <div className="capitalize">{row.getValue("ownerName")}</div>,
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
        cell: ({ row }) => <div className="capitalize">{row.getValue("ownerNumber")}</div>,
    },
    {
        accessorKey: "supplierEmail",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Supplier Email
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("supplierEmail")}</div>,
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
        cell: ({ row }) => <div className="capitalize">{row.getValue("staffName")}</div>,
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
        cell: ({ row }) => <div className="capitalize">{row.getValue("staffNumber")}</div>,
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
        cell: ({ row }) => <div className="capitalize">{row.getValue("address")}</div>,
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
        cell: ({ row }) => <div className="capitalize">{row.getValue("bankName")}</div>,
    },
    {
        accessorKey: "accountNumber",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Account Number
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("accountNumber")}</div>,
    },
    {
        accessorKey: "ibanIfsc",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    IBAN/IFSC
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("ibanIfsc")}</div>,
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
        cell: ({ row }) => <div className="capitalize">{row.getValue("bankLocation")}</div>,
    },
    {
        accessorKey: "panNo",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    PAN No
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("panNo")}</div>,
    },
    {
        accessorKey: "gstNo",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    GST No
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("gstNo")}</div>,
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            row.getValue("status") === "active" ? (
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
                            onClick={() => navigator.clipboard.writeText(payment.supplierId)}
                        >
                            Copy Supplier ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><Link href={`/dashboard/supplier/${payment.supplierId}`}>View Supplier</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href={`/dashboard/supplier/update/${payment.supplierId}`}>Edit Supplier</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href={`/dashboard/supplier/${payment.supplierId}/delete`}>Delete Supplier</Link></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]


export function DataTable() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [globalFilter, setGlobalFilter] = React.useState("")
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({
            partyName: true,
            brand: true,
            ownerName: true,
            ownerNumber: true,
            supplierEmail: true,
            status: true,
            supplierId: false,
            staffName: true,
            staffNumber: true,
            address: false,
            bankName: true,
            accountNumber: true,
            ibanIfsc: false,
            bankLocation: false,
            panNo: true,
            gstNo: true,
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