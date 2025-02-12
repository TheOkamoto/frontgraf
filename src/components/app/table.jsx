import { ColumnSizing, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet-async";
import Pagination from "./pagination";

export function DataTable(title, fetchData, columns, rowRenderer) {
    const [globalFilter, setGlobalFilter] = useState("");
    const [searchParams, setSearchParams] = useSearchParams({});
    const pageIndex = parseInt(searchParams.get("page") || "1", 10) - 1;

    const {data: result, isFetched, isLoading} = useQuery({
        queryKey: ["data", pageIndex],
        queryFn: async () => fetchData({ pageIndex})
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
        <div>
            <Helmet title={title} />
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold text-primary"> {title} </h1> 
                <Input
                    type="text"
                    placeholder="Filtrar.."
                    value={globalFilter}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    className="w-full border text-primary"
                />  

                <div className="rounded-md border-muted-foreground text-muted-foreground">  
                    <table className="min-w-full">
                        <thead>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id} className="text-left">
                                    {headerGroup.headers.map((header) => (
                                        <th key={header.id} className="py-2 px-4">
                                            {flexRender(header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            {isLoading && !result && (
                            <tr>
                                <td colSpan={columns.length}>
                                    Carregando, missão impossível...!
                                </td>
                            </tr>
                            )}

     
                                {result && table.getRowModel().rows.map((row => rowRenderer(row.original)))}
                                   

                            {result && result.items.length === 0 && (
                            <tr>
                                <td colSpan={columns.length}>
                                Nada foi encontrado "(╯°□°)╯︵ ┻━┻:"
                                </td>
                            </tr>                                         
                            )}

                            {result && 
                                <Pagination
                                    pageIndex={table.getState.pagination.pageIndex}
                                    totalCount={result.meta.totalCount}
                                    perPage={result.meta.perPage}
                                    onPageChange={handlePageChange}
                                />
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}