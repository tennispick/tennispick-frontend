import { Table, TableBody } from 'src/이전 파일들/components/ui/table';
import useTable, { UseTableOptions } from '../hooks/useTable';
import { TableRowItem } from '../types/table';

const TenTable = <T extends TableRowItem>({
  data,
  columns,
  handleRowClick,
}: UseTableOptions<T>) => {
  const table = useTable({
    data,
    columns,
    handleRowClick,
  });

  return (
    <Table>
      {table.getHeaderGroups()}
      <TableBody>{table.getRows()}</TableBody>
    </Table>
  );
};

export default TenTable;
