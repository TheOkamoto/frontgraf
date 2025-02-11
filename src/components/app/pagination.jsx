export default function Pagination( {
    pageIndex,
    totalCount,
    perPage,
    onPageChange,
}){
    const pages = Math.floor(totalCount / perPage) || 1;
    return (
        <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground"> 
                Total de {totalCount} de {pages} páginas
            </span>
        </div>
    );
}