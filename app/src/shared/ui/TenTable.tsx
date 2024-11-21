import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "app/src/components/ui/table";
import useTable from "../hooks/useTable";

type Props = {
  data: [],
  columns: any[],
}

const TenTable = ({ data, columns }: Props) => {

  const table = useTable({
    data,
    columns
  })

  console.log(table);

  return (
    <Table>
      {table.getHeaderGroups()}
      <TableBody>
        {table.getRows()}
      </TableBody>
    </Table>
  )
};

export default TenTable;