import { TableCell, TableHead, TableHeader, TableRow } from "app/src/components/ui/table";
import { Column, Columns, TableRowItem } from "../types/table";

export type UseTableOptions<T extends TableRowItem> = {
  data: T[];
  columns: Columns<T>;
}

type UseTable = <T extends TableRowItem>(options: UseTableOptions<T>) => {
  getHeaderGroups: () => React.ReactNode;
  getRows: () => React.ReactNode;
};

const useTable: UseTable = ({
  data,
  columns
}) => {

  console.log(data);
  console.log(columns);

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
              )
            })}
          </TableRow>
        </TableHeader>
      )
    },
    getRows: () =>
      data.map((row) => (
        <TableRow key={row.id}>
          {columns.map((column) => (
            <TableCell key={column.accessorKey}>
              {column.cell(row)}
            </TableCell>
          ))}
        </TableRow>
      ))
  }
}

export default useTable;