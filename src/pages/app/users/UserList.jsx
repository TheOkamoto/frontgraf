const { TableRow } = require("@/components/ui/table");
const { Table } = require("lucide-react");

async function fetchUsers({ pageIndex }) {
    const items = [];
    const perPage = 10;

    for(let i = 0; i < perPage; i++){
        const id = pageIndex * perPage + i + 1;
        items.push({
            id,
            name: "Usuário" + id})
    }

    return{
        items : items,
        meta :{
            totalCount: 25,
            perPage : perPage
        }
    }
}

function rowRenderer(item){
    <TableRow key={item.id}>
        <Table.Cell>{item.id}</Table.Cell>
        <Table.Cell>{item.name}</Table.Cell>
    </TableRow>


}

function columns(){
    return[
        {id: "id", header: "Identifier", width: "w=[140px]"},
        {header: "Nome", header: "nome", accesorKey: "nome", width: "w=[140px]"}
    ]
}

export default function UserList() {
    return(
        <DataTable 
        title="Usuários"
        fectData = { fetchUsers}
        columns = { columns}

        rowRenderer = { rowRenderer}
        />
    )
}