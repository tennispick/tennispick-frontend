import {
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'src/이전 파일들/components/ui/table';
import { Columns, TableRowItem } from '../types/table';
import { cn } from '@/이전 파일들/lib/utils';

export type UseTableOptions<T extends TableRowItem> = {
  data: T[];
  columns: Columns<T>;
  rowSelection?: (row: T) => void;
};

type UseTable = <T extends TableRowItem>(
  options: UseTableOptions<T>,
) => {
  getHeaderGroups: () => React.ReactNode;
  getRows: () => React.ReactNode;
};

const useTable: UseTable = ({ data, columns, rowSelection }) => {
  return {
    getHeaderGroups: () => {
      return (
        <TableHeader>
          <TableRow>
            {columns.map((column) => {
              return (
                <TableHead key={column.accessorKey} className="bg-[#F5F5F5]">
                  {column.header()}
                </TableHead>
              );
            })}
          </TableRow>
        </TableHeader>
      );
    },
    getRows: () =>
      data.map((row) => (
        <TableRow
          key={row.id}
          className={cn({
            'cursor-pointer': rowSelection,
          })}
          onClick={() => rowSelection?.(row)}
        >
          {columns.map((column) => (
            <TableCell key={column.accessorKey}>{column.cell(row)}</TableCell>
          ))}
        </TableRow>
      )),
  };
};

export default useTable;
