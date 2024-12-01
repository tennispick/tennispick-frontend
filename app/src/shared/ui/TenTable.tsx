import { Table, TableBody } from "app/src/components/ui/table";
import useTable, { UseTableOptions } from "../hooks/useTable";
import { TableRowItem } from "../types/table";

const TenTable = <T extends TableRowItem>({
  data,
  columns
}: UseTableOptions<T>) => {

  const table = useTable({
    data,
    columns
  })

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