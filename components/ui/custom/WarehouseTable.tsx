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

export type PerBagSize = {
    weight: string;
    Tempo: number;
    Rent: number;
    Loading: number;
    Unloding: number;
    Labour: number;
    Tulaai: number;
    Bardana: number;
};
export type DataTable = {
    warehouseID: string;
    warehouseName: string,
    warehouseInitial: string,
    ownerName: string,
    ownerNumber: string,
    staffNameGE: string,
    staffNumberGE: string,
    staffnameDE: string,
    staffNumberDE: string,
    warehouseAddress: string,
    openingBalanceD: string,
    openingBalanceC: string,
    perBagSize: PerBagSize[],
    pendingSettlement: string,
    status: "active" | "inactive";
};
const data: DataTable[] = [
    {
        warehouseID: "WID-1001",
        warehouseName: "Chang-Fisher",
        warehouseInitial: "CF",
        ownerName: "Jorge Sullivan",
        ownerNumber: "759-382-4219x4892",
        staffNameGE: "Nicholas Nolan",
        staffNumberGE: "+1-578-156-5938x77840",
        staffnameDE: "Kimberly Smith",
        staffNumberDE: "001-609-753-5139x3328",
        warehouseAddress: "8714 Mann Plaza, Lisaside, PA 72227",
        openingBalanceD: "42221.09",
        openingBalanceC: "37897.72",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1002",
        warehouseName: "Roberts, Davis and Yates",
        warehouseInitial: "RDY",
        ownerName: "David White",
        ownerNumber: "(094)711-2201",
        staffNameGE: "Tammy Fernandez",
        staffNumberGE: "(848)339-6947x7515",
        staffnameDE: "Katelyn Mccoy",
        staffNumberDE: "304.135.2560",
        warehouseAddress: "309 Anthony Roads, New Maria, MO 12498",
        openingBalanceD: "4663.59",
        openingBalanceC: "42004.56",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1003",
        warehouseName: "Bass-Wilson",
        warehouseInitial: "RDY",
        ownerName: "Chloe Arellano",
        ownerNumber: "001-173-008-6914x131",
        staffNameGE: "Hayley White",
        staffNumberGE: "709.163.4579x23022",
        staffnameDE: "David Carlson",
        staffNumberDE: "207.698.4564x280",
        warehouseAddress: "0842 Kathleen Orchard, Chelseastad, SC 81906",
        openingBalanceD: "40158.97",
        openingBalanceC: "22398.48",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1004",
        warehouseName: "Baldwin Group",
        warehouseInitial: "RDY",
        ownerName: "Sandra Miller",
        ownerNumber: "+1-352-337-6960x696",
        staffNameGE: "Michelle Martin",
        staffNumberGE: "427-878-9007",
        staffnameDE: "Ryan Williams",
        staffNumberDE: "(381)206-6503x00891",
        warehouseAddress: "4217 Burton Brooks, Robinville, KS 17988",
        openingBalanceD: "48191.93",
        openingBalanceC: "30159.28",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "inactive"
    },
    {
        warehouseID: "WID-1005",
        warehouseName: "Meyer, Curtis and Reed",
        warehouseInitial: "RDY",
        ownerName: "Diana Smith",
        ownerNumber: "3485590977",
        staffNameGE: "Jacqueline Medina",
        staffNumberGE: "694.022.4555",
        staffnameDE: "Gina Oliver",
        staffNumberDE: "4229456824",
        warehouseAddress: "42814 Houston Hills, Rodriguezside, NJ 62629",
        openingBalanceD: "28984.75",
        openingBalanceC: "22528.16",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1006",
        warehouseName: "Randall-Cherry",
        warehouseInitial: "RDY",
        ownerName: "John Lyons",
        ownerNumber: "(045)229-6111x33060",
        staffNameGE: "Justin Roberts",
        staffNumberGE: "936.153.4926x3511",
        staffnameDE: "Sarah Johnson",
        staffNumberDE: "731.764.3039x21376",
        warehouseAddress: "97296 Rich Park, Marthafort, TN 26976",
        openingBalanceD: "19560.47",
        openingBalanceC: "18507.0",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1007",
        warehouseName: "Lynch, Robinson and Peterson",
        warehouseInitial: "RDY",
        ownerName: "Stephanie Meyers",
        ownerNumber: "8249269471",
        staffNameGE: "Kellie Sexton",
        staffNumberGE: "320-407-5227",
        staffnameDE: "Kathy Santana",
        staffNumberDE: "091.891.6348x96769",
        warehouseAddress: "024 Cook Park, Sherriport, MT 50853",
        openingBalanceD: "27211.77",
        openingBalanceC: "31030.0",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "inactive"
    },
    {
        warehouseID: "WID-1008",
        warehouseName: "Brown-Davidson",
        warehouseInitial: "RDY",
        ownerName: "Dustin Greer",
        ownerNumber: "0762791256",
        staffNameGE: "John Ellis",
        staffNumberGE: "720-099-2518",
        staffnameDE: "Chloe Logan",
        staffNumberDE: "001-710-979-5194x26418",
        warehouseAddress: "67537 Clarke Club, North Toddtown, TN 75114",
        openingBalanceD: "33280.29",
        openingBalanceC: "660.19",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "inactive"
    },
    {
        warehouseID: "WID-1009",
        warehouseName: "Liu, Hall and Frank",
        warehouseInitial: "RDY",
        ownerName: "Lori Shaw",
        ownerNumber: "684.126.9611x61162",
        staffNameGE: "Amanda Griffin",
        staffNumberGE: "+1-607-541-5115x05520",
        staffnameDE: "Crystal Diaz",
        staffNumberDE: "+1-230-310-4509x322",
        warehouseAddress: "4203 Rogers Highway Suite 852, North Amandaport, MS 19758",
        openingBalanceD: "1577.27",
        openingBalanceC: "43584.41",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1010",
        warehouseName: "Brock LLC",
        warehouseInitial: "RDY",
        ownerName: "Cynthia White",
        ownerNumber: "(602)906-1126x486",
        staffNameGE: "Brenda Henderson",
        staffNumberGE: "+1-513-758-0660x6573",
        staffnameDE: "Tristan Davis",
        staffNumberDE: "(141)892-7626",
        warehouseAddress: "5825 Welch Corners, Fischerport, UT 59363",
        openingBalanceD: "30417.98",
        openingBalanceC: "9925.82",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1011",
        warehouseName: "Murray, Robinson and Wilson",
        warehouseInitial: "RDY",
        ownerName: "Elizabeth Lynch",
        ownerNumber: "(717)386-4014x00468",
        staffNameGE: "Michelle Wallace",
        staffNumberGE: "001-454-391-0144x8518",
        staffnameDE: "Stephanie Gill",
        staffNumberDE: "644-829-8381",
        warehouseAddress: "447 Carroll Dam Apt. 116, Garzaberg, TN 39686",
        openingBalanceD: "42318.0",
        openingBalanceC: "48060.15",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "inactive"
    },
    {
        warehouseID: "WID-1012",
        warehouseName: "Chen-Newton",
        warehouseInitial: "RDY",
        ownerName: "John Mason",
        ownerNumber: "074.270.9305x7608",
        staffNameGE: "Melissa Miller",
        staffNumberGE: "001-605-019-0443x2943",
        staffnameDE: "Joel Rivera",
        staffNumberDE: "(566)272-8523",
        warehouseAddress: "PSC 7566, Box 7633, APO AA 27274",
        openingBalanceD: "23700.23",
        openingBalanceC: "42042.42",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "inactive"
    },
    {
        warehouseID: "WID-1013",
        warehouseName: "Mckinney, Bullock and Johnson",
        warehouseInitial: "RDY",
        ownerName: "Shelby Cox",
        ownerNumber: "001-239-491-8456x7088",
        staffNameGE: "Taylor Carpenter",
        staffNumberGE: "473.540.0025x0402",
        staffnameDE: "Jeffrey Walker",
        staffNumberDE: "+1-683-735-9191x558",
        warehouseAddress: "0803 Miller Ways Suite 334, Larryfurt, NJ 45581",
        openingBalanceD: "4183.16",
        openingBalanceC: "11006.89",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "inactive"
    },
    {
        warehouseID: "WID-1014",
        warehouseName: "Allen, Torres and Arnold",
        warehouseInitial: "RDY",
        ownerName: "Jon Kim",
        ownerNumber: "(777)111-3126x37916",
        staffNameGE: "Stacie Foster",
        staffNumberGE: "(373)245-5618",
        staffnameDE: "Lisa Mccormick",
        staffNumberDE: "001-478-978-4430x191",
        warehouseAddress: "34088 Trevino Crossing Suite 419, Jeromeside, LA 29541",
        openingBalanceD: "31918.18",
        openingBalanceC: "21161.94",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "inactive"
    },
    {
        warehouseID: "WID-1015",
        warehouseName: "Decker, Allen and Holmes",
        warehouseInitial: "RDY",
        ownerName: "Cynthia Fuller",
        ownerNumber: "922-088-5590x2622",
        staffNameGE: "Angela Hubbard",
        staffNumberGE: "001-793-323-6599x27190",
        staffnameDE: "Heather Bryant",
        staffNumberDE: "3827785142",
        warehouseAddress: "4603 Leslie Summit, West Michelle, VA 86978",
        openingBalanceD: "45054.52",
        openingBalanceC: "25121.43",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "inactive"
    },
    {
        warehouseID: "WID-1016",
        warehouseName: "Perez, Cooper and Martin",
        warehouseInitial: "RDY",
        ownerName: "Kenneth Brown",
        ownerNumber: "+1-250-700-3003x5105",
        staffNameGE: "Jenny Stafford",
        staffNumberGE: "762.542.5660",
        staffnameDE: "Dennis Schmidt",
        staffNumberDE: "001-709-166-2082x9821",
        warehouseAddress: "02821 Pennington Rapid, New Courtneyberg, PA 05750",
        openingBalanceD: "30371.5",
        openingBalanceC: "11678.55",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "inactive"
    },
    {
        warehouseID: "WID-1017",
        warehouseName: "Peterson-Rojas",
        warehouseInitial: "RDY",
        ownerName: "Mario Preston",
        ownerNumber: "154.273.8526x5476",
        staffNameGE: "Joseph Roberts",
        staffNumberGE: "089.840.7616x5700",
        staffnameDE: "Zachary King",
        staffNumberDE: "+1-943-885-6431x95398",
        warehouseAddress: "25090 Stephanie Lake Suite 457, Burkeburgh, WY 18950",
        openingBalanceD: "19207.99",
        openingBalanceC: "19183.97",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1018",
        warehouseName: "Williams, Martinez and Noble",
        warehouseInitial: "RDY",
        ownerName: "Karen Arroyo",
        ownerNumber: "+1-493-186-4282x12918",
        staffNameGE: "Kimberly Cruz",
        staffNumberGE: "(444)064-4888x55362",
        staffnameDE: "Nicole Moore",
        staffNumberDE: "+1-965-708-6930x58235",
        warehouseAddress: "39342 Miller Mission Apt. 781, East Scott, NE 83698",
        openingBalanceD: "5074.03",
        openingBalanceC: "38907.42",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "inactive"
    },
    {
        warehouseID: "WID-1019",
        warehouseName: "Shepard-King",
        warehouseInitial: "RDY",
        ownerName: "Patricia Lynch",
        ownerNumber: "407-043-6666",
        staffNameGE: "Samantha Aguilar",
        staffNumberGE: "(929)450-6782x019",
        staffnameDE: "Heather Jones",
        staffNumberDE: "001-187-050-5624x629",
        warehouseAddress: "022 Renee Squares Apt. 808, Herringstad, OR 11353",
        openingBalanceD: "5549.85",
        openingBalanceC: "3008.04",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "inactive"
    },
    {
        warehouseID: "WID-1020",
        warehouseName: "Castro LLC",
        warehouseInitial: "RDY",
        ownerName: "Dean Graves",
        ownerNumber: "487-278-2092x805",
        staffNameGE: "Andrea Wong",
        staffNumberGE: "937.825.2780x818",
        staffnameDE: "Robert Miller",
        staffNumberDE: "(959)756-8512x50220",
        warehouseAddress: "60460 Michael Village, South Brianstad, RI 99652",
        openingBalanceD: "25355.34",
        openingBalanceC: "47274.28",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "inactive"
    },
    {
        warehouseID: "WID-1021",
        warehouseName: "Chambers-Hart",
        warehouseInitial: "RDY",
        ownerName: "Jennifer Johnson",
        ownerNumber: "361-511-0502x690",
        staffNameGE: "Richard Reese",
        staffNumberGE: "001-771-086-4081x155",
        staffnameDE: "Kaitlin Johnson",
        staffNumberDE: "400.652.8222x23950",
        warehouseAddress: "33452 Michael Estates Suite 759, South Annette, GA 77001",
        openingBalanceD: "3516.47",
        openingBalanceC: "17962.67",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1022",
        warehouseName: "Mcdaniel Ltd",
        warehouseInitial: "RDY",
        ownerName: "Zoe Smith",
        ownerNumber: "800-019-9226x06695",
        staffNameGE: "Tammy Cox",
        staffNumberGE: "861.269.5166",
        staffnameDE: "James Hendricks",
        staffNumberDE: "769.144.8580",
        warehouseAddress: "40956 Amanda Walk Apt. 260, Simonfurt, CT 93980",
        openingBalanceD: "32950.92",
        openingBalanceC: "36605.07",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "inactive"
    },
    {
        warehouseID: "WID-1023",
        warehouseName: "Munoz-Martin",
        warehouseInitial: "RDY",
        ownerName: "Jason Lawrence",
        ownerNumber: "815-525-7803x4295",
        staffNameGE: "Mark Carter",
        staffNumberGE: "(064)635-2219x52069",
        staffnameDE: "Billy Page",
        staffNumberDE: "+1-168-822-2323x08275",
        warehouseAddress: "PSC 9451, Box 6425, APO AP 66241",
        openingBalanceD: "6507.88",
        openingBalanceC: "48325.96",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1024",
        warehouseName: "Patel-Thomas",
        warehouseInitial: "RDY",
        ownerName: "Patrick Peters",
        ownerNumber: "656.784.6612",
        staffNameGE: "Kevin Walters",
        staffNumberGE: "139.981.4926x10015",
        staffnameDE: "Karen Rodriguez",
        staffNumberDE: "594.732.8818x202",
        warehouseAddress: "376 Smith Dale Suite 279, South Sarahland, OR 53609",
        openingBalanceD: "21011.59",
        openingBalanceC: "27538.86",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1025",
        warehouseName: "Hall-Marks",
        warehouseInitial: "RDY",
        ownerName: "Manuel Adams",
        ownerNumber: "786.742.3852x49271",
        staffNameGE: "Karen Knight",
        staffNumberGE: "(814)731-4251x20298",
        staffnameDE: "Andrew Sullivan",
        staffNumberDE: "001-971-785-5103x374",
        warehouseAddress: "5851 Kevin Manors, Lake Michael, WV 19568",
        openingBalanceD: "13848.51",
        openingBalanceC: "27909.08",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1026",
        warehouseName: "Roberts and Sons",
        warehouseInitial: "RDY",
        ownerName: "Karen Gilmore",
        ownerNumber: "(469)216-5873x556",
        staffNameGE: "William Saunders",
        staffNumberGE: "001-417-417-2532x573",
        staffnameDE: "James Price",
        staffNumberDE: "799.368.4735x80175",
        warehouseAddress: "0906 Joseph Stream, Gregoryburgh, UT 48231",
        openingBalanceD: "14928.01",
        openingBalanceC: "38431.71",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "inactive"
    },
    {
        warehouseID: "WID-1027",
        warehouseName: "Hall Inc",
        warehouseInitial: "RDY",
        ownerName: "Joseph Anderson",
        ownerNumber: "+1-931-730-8961x823",
        staffNameGE: "Jason Wells",
        staffNumberGE: "6360940955",
        staffnameDE: "Megan Davidson",
        staffNumberDE: "+1-814-114-0292x639",
        warehouseAddress: "Unit 5368 Box 8181, DPO AP 62709",
        openingBalanceD: "15280.2",
        openingBalanceC: "16994.52",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1028",
        warehouseName: "Hicks Group",
        warehouseInitial: "RDY",
        ownerName: "Jesse Morgan",
        ownerNumber: "(461)985-3735x76070",
        staffNameGE: "Tina Rowe",
        staffNumberGE: "634.772.3745",
        staffnameDE: "Linda Noble",
        staffNumberDE: "134.810.2505x92763",
        warehouseAddress: "60583 White Plains, Hernandezfort, TN 75308",
        openingBalanceD: "6164.91",
        openingBalanceC: "6025.89",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1029",
        warehouseName: "George Inc",
        warehouseInitial: "RDY",
        ownerName: "Taylor Bridges",
        ownerNumber: "+1-300-023-7931",
        staffNameGE: "Nicole Coleman",
        staffNumberGE: "+1-457-325-8576x7571",
        staffnameDE: "Paul Walton",
        staffNumberDE: "(783)500-6316x9968",
        warehouseAddress: "287 James Plain, North Cassidyfort, AL 27233",
        openingBalanceD: "7033.99",
        openingBalanceC: "28642.52",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "inactive"
    },
    {
        warehouseID: "WID-1030",
        warehouseName: "Jensen-Ward",
        warehouseInitial: "RDY",
        ownerName: "Alexander Stokes",
        ownerNumber: "+1-098-527-4197x436",
        staffNameGE: "Jonathon Morgan",
        staffNumberGE: "001-410-259-9718",
        staffnameDE: "Francisco Daniel",
        staffNumberDE: "1692201630",
        warehouseAddress: "1545 Julie Plains Apt. 588, East Rebeccatown, KS 43961",
        openingBalanceD: "19476.82",
        openingBalanceC: "11007.98",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "inactive"
    },
    {
        warehouseID: "WID-1031",
        warehouseName: "Cooper Inc",
        warehouseInitial: "RDY",
        ownerName: "Jennifer Gibbs",
        ownerNumber: "491-819-2708",
        staffNameGE: "Courtney Davis",
        staffNumberGE: "001-323-639-7524x583",
        staffnameDE: "Ronald Terrell",
        staffNumberDE: "801-545-0190x412",
        warehouseAddress: "857 Robert Place, Martinezshire, MD 23325",
        openingBalanceD: "20571.62",
        openingBalanceC: "2697.0",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "inactive"
    },
    {
        warehouseID: "WID-1032",
        warehouseName: "Allen-Kim",
        warehouseInitial: "RDY",
        ownerName: "Amanda Houston",
        ownerNumber: "+1-415-584-0382x4906",
        staffNameGE: "Kevin King",
        staffNumberGE: "877-165-2803x76031",
        staffnameDE: "Roger Strong",
        staffNumberDE: "058.618.3744x667",
        warehouseAddress: "85332 Lauren Turnpike, East Andrea, ND 04072",
        openingBalanceD: "15611.6",
        openingBalanceC: "42999.72",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1033",
        warehouseName: "Hall Ltd",
        warehouseInitial: "RDY",
        ownerName: "Stephen Acevedo",
        ownerNumber: "829.238.4073",
        staffNameGE: "Christopher Wagner",
        staffNumberGE: "688.712.1801",
        staffnameDE: "Paul Sanchez",
        staffNumberDE: "(746)564-1293x3008",
        warehouseAddress: "72984 Carmen Keys Suite 548, Dennisfort, VA 26663",
        openingBalanceD: "12486.41",
        openingBalanceC: "11002.52",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1034",
        warehouseName: "Sanders, Wells and Alexander",
        warehouseInitial: "RDY",
        ownerName: "Edward Stokes",
        ownerNumber: "596-696-8493x36348",
        staffNameGE: "Charles Harper",
        staffNumberGE: "001-887-546-4780x34710",
        staffnameDE: "Brian Scott",
        staffNumberDE: "3292594000",
        warehouseAddress: "3675 Miller Meadows, Lake Angelburgh, PA 70191",
        openingBalanceD: "6089.69",
        openingBalanceC: "32259.85",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "inactive"
    },
    {
        warehouseID: "WID-1035",
        warehouseName: "Gomez-Clark",
        warehouseInitial: "RDY",
        ownerName: "Christina Lopez",
        ownerNumber: "(729)986-9300",
        staffNameGE: "Larry Lucas",
        staffNumberGE: "+1-281-645-9305x2547",
        staffnameDE: "Lisa Rivera",
        staffNumberDE: "+1-172-184-8697x6296",
        warehouseAddress: "127 Parks Courts, Bakerville, MI 67226",
        openingBalanceD: "33732.29",
        openingBalanceC: "11680.16",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1036",
        warehouseName: "Pham, Smith and Franklin",
        warehouseInitial: "RDY",
        ownerName: "Tiffany Beasley",
        ownerNumber: "(670)521-6930x36009",
        staffNameGE: "Brandi Simon",
        staffNumberGE: "668-078-2823x9219",
        staffnameDE: "Derek Lewis",
        staffNumberDE: "+1-008-104-2282x15052",
        warehouseAddress: "53475 Ruiz Pine, North Lesliefurt, MO 71569",
        openingBalanceD: "47931.51",
        openingBalanceC: "27776.12",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "inactive"
    },
    {
        warehouseID: "WID-1037",
        warehouseName: "Arnold-Stone",
        warehouseInitial: "RDY",
        ownerName: "Briana Ross",
        ownerNumber: "521.220.6911x84945",
        staffNameGE: "Sheila Woods",
        staffNumberGE: "001-597-853-8065",
        staffnameDE: "Jose Wright",
        staffNumberDE: "715-693-8088",
        warehouseAddress: "505 Matthew Oval, Avilachester, SD 31454",
        openingBalanceD: "33421.63",
        openingBalanceC: "32988.48",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "inactive"
    },
    {
        warehouseID: "WID-1038",
        warehouseName: "Pena, Newton and Eaton",
        warehouseInitial: "RDY",
        ownerName: "Sarah Mueller",
        ownerNumber: "(078)264-9730",
        staffNameGE: "Yvonne Greene",
        staffNumberGE: "+1-297-595-6928x66356",
        staffnameDE: "Daniel Estes",
        staffNumberDE: "+1-957-395-9253",
        warehouseAddress: "289 Patricia Mission Suite 329, Catherineland, NM 28064",
        openingBalanceD: "6792.54",
        openingBalanceC: "46099.18",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1039",
        warehouseName: "Price-Hunt",
        warehouseInitial: "RDY",
        ownerName: "Jason Simon",
        ownerNumber: "3392871484",
        staffNameGE: "Jennifer Edwards",
        staffNumberGE: "+1-601-052-4987x48675",
        staffnameDE: "Michael Barber",
        staffNumberDE: "+1-180-985-9193x0014",
        warehouseAddress: "299 Joshua Estate Apt. 932, East Jonathan, ME 19541",
        openingBalanceD: "35889.64",
        openingBalanceC: "21358.86",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1040",
        warehouseName: "Jensen, Harris and Taylor",
        warehouseInitial: "RDY",
        ownerName: "Jennifer Farley",
        ownerNumber: "905.872.4194",
        staffNameGE: "Nancy Smith",
        staffNumberGE: "(390)622-7808",
        staffnameDE: "Daniel Thompson",
        staffNumberDE: "734-315-7458x94348",
        warehouseAddress: "1918 Jennifer Mount, South Jose, ND 26070",
        openingBalanceD: "24817.25",
        openingBalanceC: "17918.26",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1041",
        warehouseName: "Stevenson LLC",
        warehouseInitial: "RDY",
        ownerName: "Gabriel Hunt",
        ownerNumber: "(668)289-2049x789",
        staffNameGE: "Christine Harris DVM",
        staffNumberGE: "861-872-0333",
        staffnameDE: "James Jones",
        staffNumberDE: "+1-383-371-3182",
        warehouseAddress: "647 Michael Trafficway Apt. 037, New Evelyn, AL 19289",
        openingBalanceD: "22795.89",
        openingBalanceC: "36069.39",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1042",
        warehouseName: "Chavez Inc",
        warehouseInitial: "RDY",
        ownerName: "Sara Roberts",
        ownerNumber: "419-175-9913x26307",
        staffNameGE: "Joseph Schultz",
        staffNumberGE: "001-218-551-5334x8666",
        staffnameDE: "Jeremiah Roberts",
        staffNumberDE: "+1-283-975-2929x64312",
        warehouseAddress: "04791 Holland Courts Apt. 738, North Michelleshire, NH 34585",
        openingBalanceD: "47615.34",
        openingBalanceC: "18159.65",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1043",
        warehouseName: "Willis, Park and Mcguire",
        warehouseInitial: "RDY",
        ownerName: "Mario Shelton",
        ownerNumber: "001-827-303-2922",
        staffNameGE: "Rita Vargas",
        staffNumberGE: "(114)149-7949",
        staffnameDE: "Andrew Jones",
        staffNumberDE: "055.466.0433x192",
        warehouseAddress: "5046 Jennifer Stravenue, Bradshawport, NV 85572",
        openingBalanceD: "47082.69",
        openingBalanceC: "31606.46",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "inactive"
    },
    {
        warehouseID: "WID-1044",
        warehouseName: "Nelson, Owen and Green",
        warehouseInitial: "RDY",
        ownerName: "Angela Thomas",
        ownerNumber: "6704896799",
        staffNameGE: "Chloe Monroe",
        staffNumberGE: "164-377-4862x974",
        staffnameDE: "Carolyn Smith",
        staffNumberDE: "410-645-9356x21357",
        warehouseAddress: "6659 Valerie Point Suite 210, Penabury, SC 94980",
        openingBalanceD: "31390.76",
        openingBalanceC: "24849.49",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "inactive"
    },
    {
        warehouseID: "WID-1045",
        warehouseName: "Henderson Ltd",
        warehouseInitial: "RDY",
        ownerName: "Lindsay Turner",
        ownerNumber: "185.020.1557x33597",
        staffNameGE: "Christopher Cole",
        staffNumberGE: "1015348184",
        staffnameDE: "Ashley Jensen",
        staffNumberDE: "001-031-272-2742x7908",
        warehouseAddress: "41634 Perez Rue, Jacobtown, MT 79468",
        openingBalanceD: "47019.54",
        openingBalanceC: "12634.28",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1046",
        warehouseName: "Campbell PLC",
        warehouseInitial: "RDY",
        ownerName: "Mark Hines",
        ownerNumber: "454.223.7505x794",
        staffNameGE: "Alisha Garcia",
        staffNumberGE: "001-823-695-8207x6775",
        staffnameDE: "Keith Jones",
        staffNumberDE: "(188)694-3160",
        warehouseAddress: "039 Decker Way Suite 784, North Christopherfurt, MT 50435",
        openingBalanceD: "3468.66",
        openingBalanceC: "35864.39",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "inactive"
    },
    {
        warehouseID: "WID-1047",
        warehouseName: "Dominguez, Bowman and Hall",
        warehouseInitial: "RDY",
        ownerName: "Mr. Aaron Graham",
        ownerNumber: "726-669-9478x5469",
        staffNameGE: "Carolyn Johnson",
        staffNumberGE: "741.353.6095x227",
        staffnameDE: "Patricia Thompson",
        staffNumberDE: "+1-032-086-6246x748",
        warehouseAddress: "11744 Myers Radial Suite 571, Port Debraport, NH 83547",
        openingBalanceD: "35020.28",
        openingBalanceC: "12694.1",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1048",
        warehouseName: "Kelley-Harris",
        warehouseInitial: "RDY",
        ownerName: "Jessica Williams",
        ownerNumber: "504-400-0902",
        staffNameGE: "Shawna Harrison",
        staffNumberGE: "920-821-1191",
        staffnameDE: "Brett Freeman",
        staffNumberDE: "177-828-1256",
        warehouseAddress: "808 Clinton Turnpike, Kemphaven, MD 74123",
        openingBalanceD: "5199.07",
        openingBalanceC: "30377.04",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1049",
        warehouseName: "Armstrong, Long and Parker",
        warehouseInitial: "RDY",
        ownerName: "Anna Jacobs",
        ownerNumber: "001-545-850-0024x32217",
        staffNameGE: "Mary Hill",
        staffNumberGE: "202-553-1872x453",
        staffnameDE: "Lisa Vaughn",
        staffNumberDE: "(614)685-0536x068",
        warehouseAddress: "0415 Smith Springs, Jeremyburgh, MN 69154",
        openingBalanceD: "17880.47",
        openingBalanceC: "6168.28",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "inactive"
    },
    {
        warehouseID: "WID-1050",
        warehouseName: "Wilson, Jimenez and Savage",
        warehouseInitial: "RDY",
        ownerName: "Angela Mitchell",
        ownerNumber: "001-040-092-5263x983",
        staffNameGE: "Amanda Daniels",
        staffNumberGE: "787.995.5510",
        staffnameDE: "Cody Booth",
        staffNumberDE: "690.397.6622",
        warehouseAddress: "3412 Kevin Summit Apt. 124, South Jonathan, SD 55705",
        openingBalanceD: "47991.53",
        openingBalanceC: "36.33",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1051",
        warehouseName: "Ryan-Coleman",
        warehouseInitial: "RDY",
        ownerName: "David Edwards",
        ownerNumber: "469-807-8836x460",
        staffNameGE: "Jennifer Miller",
        staffNumberGE: "007-685-8787x879",
        staffnameDE: "Kevin Johnson",
        staffNumberDE: "(346)131-2972x757",
        warehouseAddress: "4758 Kimberly Lake, Phillipside, PA 13109",
        openingBalanceD: "8107.04",
        openingBalanceC: "29182.57",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1052",
        warehouseName: "Shannon-Gordon",
        warehouseInitial: "RDY",
        ownerName: "Timothy Lee",
        ownerNumber: "7719802792",
        staffNameGE: "Angela Kelly",
        staffNumberGE: "(750)511-9144",
        staffnameDE: "Holly Townsend DDS",
        staffNumberDE: "663.164.7676x2636",
        warehouseAddress: "1275 Carter Valleys, Cooperburgh, DC 92892",
        openingBalanceD: "41779.11",
        openingBalanceC: "49898.38",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "inactive"
    },
    {
        warehouseID: "WID-1053",
        warehouseName: "Pratt-Crawford",
        warehouseInitial: "RDY",
        ownerName: "Kevin Wallace",
        ownerNumber: "215-245-1165x54503",
        staffNameGE: "Elizabeth Lopez",
        staffNumberGE: "+1-273-184-1061",
        staffnameDE: "John Taylor",
        staffNumberDE: "(012)169-1419",
        warehouseAddress: "462 Park Track, Courtneyfurt, HI 21713",
        openingBalanceD: "38091.55",
        openingBalanceC: "5625.78",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1054",
        warehouseName: "Miller, Walsh and Montoya",
        warehouseInitial: "RDY",
        ownerName: "Megan Bryant",
        ownerNumber: "+1-158-647-0252x73312",
        staffNameGE: "Jessica Garcia",
        staffNumberGE: "001-315-233-9857x59784",
        staffnameDE: "Alicia Cohen",
        staffNumberDE: "(438)814-7210",
        warehouseAddress: "5953 Braun Drive Apt. 720, New Melissaberg, DE 07704",
        openingBalanceD: "38889.75",
        openingBalanceC: "27245.66",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1055",
        warehouseName: "Solomon-Contreras",
        warehouseInitial: "RDY",
        ownerName: "Megan Chang",
        ownerNumber: "001-256-895-6360x9390",
        staffNameGE: "Nancy Perry",
        staffNumberGE: "001-319-254-4758x67548",
        staffnameDE: "Jill Ferguson",
        staffNumberDE: "(564)037-4662x2732",
        warehouseAddress: "48829 Doris Crossing, Gileschester, DE 07631",
        openingBalanceD: "17123.68",
        openingBalanceC: "25078.07",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "inactive"
    },
    {
        warehouseID: "WID-1056",
        warehouseName: "Johnson, Mclaughlin and Davis",
        warehouseInitial: "RDY",
        ownerName: "Anna Ayers",
        ownerNumber: "(293)551-1672",
        staffNameGE: "Steven Harris",
        staffNumberGE: "997.941.2613",
        staffnameDE: "Bianca Middleton",
        staffNumberDE: "452-758-1160x035",
        warehouseAddress: "6915 Timothy Park, Johnton, MA 22654",
        openingBalanceD: "34427.16",
        openingBalanceC: "30715.26",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1057",
        warehouseName: "Castro Group",
        warehouseInitial: "RDY",
        ownerName: "Robert Garrett",
        ownerNumber: "(895)716-4740",
        staffNameGE: "Alexander Stein",
        staffNumberGE: "245-492-7709",
        staffnameDE: "Christopher Aguirre",
        staffNumberDE: "292-168-7826x5285",
        warehouseAddress: "Unit 2113 Box 1373, DPO AE 49812",
        openingBalanceD: "45812.85",
        openingBalanceC: "46474.19",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "inactive"
    },
    {
        warehouseID: "WID-1058",
        warehouseName: "Baker-Lawrence",
        warehouseInitial: "RDY",
        ownerName: "Joseph Waller",
        ownerNumber: "4763708965",
        staffNameGE: "Wesley Bailey",
        staffNumberGE: "(243)156-2449",
        staffnameDE: "Sharon Johnson",
        staffNumberDE: "266-119-3813",
        warehouseAddress: "912 Katie Radial Apt. 743, South Charleston, ID 22958",
        openingBalanceD: "23633.94",
        openingBalanceC: "9050.92",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1059",
        warehouseName: "Fischer-Gonzalez",
        warehouseInitial: "RDY",
        ownerName: "Patrick Bradley",
        ownerNumber: "(580)954-8394",
        staffNameGE: "Jason Jones",
        staffNumberGE: "514-925-0096x063",
        staffnameDE: "Laura Carter",
        staffNumberDE: "2978100126",
        warehouseAddress: "381 Michelle Lock, Velasquezburgh, MS 03948",
        openingBalanceD: "46561.96",
        openingBalanceC: "27977.29",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    },
    {
        warehouseID: "WID-1060",
        warehouseName: "Flores, Fisher and Harris",
        warehouseInitial: "RDY",
        ownerName: "Heather Sanchez",
        ownerNumber: "6780357293",
        staffNameGE: "Curtis Carter",
        staffNumberGE: "542-296-4061x97263",
        staffnameDE: "James Castro",
        staffNumberDE: "950.983.3867x391",
        warehouseAddress: "40512 Amy Glens, Port Kristinaberg, NY 28834",
        openingBalanceD: "41557.62",
        openingBalanceC: "5972.99",
        perBagSize: [
            {
                weight: "25kg",
                Tempo: 92.64,
                Rent: 84.69,
                Loading: 97.1,
                Unloding: 42.22,
                Labour: 90.25,
                Tulaai: 29.66,
                Bardana: 22.53,
            },
            {
                weight: "50kg",
                Tempo: 22.58,
                Rent: 18.53,
                Loading: 81.95,
                Unloding: 98.85,
                Labour: 57.93,
                Tulaai: 73.47,
                Bardana: 64.17
            },
            {
                weight: "50kg",
                Tempo: 23.23,
                Rent: 18.89,
                Loading: 16.64,
                Unloding: 86.54,
                Labour: 39.72,
                Tulaai: 60.38,
                Bardana: 41.84

            },
            {
                weight: "50kg",
                Tempo: 38.46,
                Rent: 67.64,
                Loading: 28.4,
                Unloding: 59.73,
                Labour: 49.84,
                Tulaai: 56.92,
                Bardana: 15.61
            },
        ],
        pendingSettlement: "5000",
        status: "active"
    }
];

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
        accessorKey: "warehouseID",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Warehouse ID
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("warehouseID")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "warehouseName",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Warehouse Name
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("warehouseName")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "warehouseInitial",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Warehouse Initial
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("warehouseInitial")).toLocaleUpperCase()}</div>,
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
        accessorKey: "staffNameGE",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Staff Name (General Enquiry)
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("staffNameGE")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "staffNumberGE",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Staff Number (General Enquiry)
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("staffNumberGE")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "staffnameDE",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Staff Name (Demand Enquiry)
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("staffnameDE")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "staffNumberDE",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Staff Number (Demand Enquiry)
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("staffNumberDE")).toLocaleUpperCase()}</div>,
    },

    {
        accessorKey: "openingBalanceD",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Opening Balance (Debit)
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("openingBalanceD")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "openingBalanceC",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Opening Balance (Credit)
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("openingBalanceC")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "warehouseAddress",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Warehouse Address
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("warehouseAddress")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "perBagSize",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Per Bag Size Rates
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const perBagSize = row.getValue("perBagSize") as PerBagSize[];
            return (
                <div className="uppercase flex flex-row gap-x-0.5">
                    {perBagSize.map((bag, index) => (
                        <Badge variant={"outline"} key={index}>{String(bag.weight)}</Badge>

                    ))}
                </div>
            )
        },
    },
    {
        accessorKey: "pendingSettlement",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Pending Settlement
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("pendingSettlement")).toLocaleUpperCase()}</div>,
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
                            onClick={() => navigator.clipboard.writeText(payment.warehouseID)}
                        >
                            Copy Warehouse ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><Link href={`/dashboard/warehouse/${payment.warehouseID}`}>View Warehouse</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href={`/dashboard/warehouse/update/${payment.warehouseID}`}>Edit Warehouse</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href={`/dashboard/warehouse/${payment.warehouseID}/delete`}>Delete Warehouse</Link></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
];

export function WarehouseTable() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [globalFilter, setGlobalFilter] = React.useState("")
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({
            warehouseID: true,
            warehouseName: true,
            openingBalanceC: true,
            warehouseAddress: true,
            perBagSize: true,
            pendingSettlement: true,
            status: true,
        });
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