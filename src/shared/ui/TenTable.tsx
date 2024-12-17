import { Table, TableBody } from 'src/이전 파일들/components/ui/table';
import useTable, { UseTableOptions } from '../hooks/useTable';
import { TableRowItem } from '../types/table';

const TenTable = <T extends TableRowItem>({
  data,
  columns,
  rowSelection,
}: UseTableOptions<T>) => {
  const table = useTable({
    data,
    columns,
    rowSelection,
  });

  return (
    <Table>
      {table.getHeaderGroups()}
      <TableBody>{table.getRows()}</TableBody>
    </Table>
  );
};

export default TenTable;
