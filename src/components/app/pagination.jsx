import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../ui/button";

export default function Pagination({
    pageIndex,
    totalCount,
    perPage,
    onPageChange,
}) {
    const pages = Math.floor(totalCount / perPage) || 1;
    return (
        <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
                Total de {totalCount} de {pages} páginas
            </span>
            <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="flex w-[100px] items-center justify-center text-sm text-primary">
                    Página {pageIndex + 1} de {pages}
                </div>
                <div className="flex items-center space-x-2 text-foreground">
                    <Button
                        className="h-8 w-8 p-0 lg:flex"
                        onClick={() => onPageChange(0)}
                        disabled={pageIndex === 0}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        className="h-8 w-8 p-0 lg:flex"
                        onClick={() => onPageChange(pageIndex - 1)}
                        disabled={pageIndex === 0}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        className="h-8 w-8 p-0 lg:flex"
                        onClick={() => onPageChange(pageIndex + 1)}
                        disabled={pages <= pageIndex + 1}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                    <Button
                        className="h-8 w-8 p-0 lg:flex"
                        onClick={() => onPageChange(pages - 1)}
                        disabled={pageIndex >= pages - 1}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
