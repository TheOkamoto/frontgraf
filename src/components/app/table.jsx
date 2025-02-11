import { getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "react-query";

export function DataTable(columns) {
    const [globalFilter, setGlobalFilter] = useState("");
    const [searchParams, setSearchParams] = useSearchParams({});
    const pageIndex = parseInt(searchParams.get("page") || "1", 10) - 1;

    const {data: result, isFetched, isLoading} = useQuery({
        queryKey: ["data", pageIndex],
        queryFn: async () => fetch({ pageIndex})
    });

    const table = useReactTable({
        data: result ? result.items : [],
        columns,
        state: { globalFilter , pagination: { pageIndex: 0, pageSize: 10 } },
        getCoreRowModel : getCoreRowModel(),
        getPaginationRowModel : getPaginationRowModel(),
        onGlobalFilterChange: setSearchParams,
        getFilteredRowModel : getPaginationRowModel(),
        manualPagination: true,
    })

    function handlePageChange(pageIndex){
        setSearchParams((prev) => {
            prev.set("page", (pageIndex + 1).toString());
            return prev;
        });
        table.setPageIndex(pageIndex);
    }

    return (
        <>  </>
    );
}