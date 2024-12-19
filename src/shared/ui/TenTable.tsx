import { Table, TableBody } from '@/shared/ui/components/table';
import useTable, { UseTableOptions } from '../hooks/useTable';
import { TableRowItem } from '../types/table';

export const TenTable = <T extends TableRowItem>({
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
