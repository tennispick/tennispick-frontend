import { TableCell, TableHead, TableHeader, TableRow } from "app/src/components/ui/table";

type Props = {
  data: [],
  columns: any[],
}

type ReturnProps = {
  getHeaderGroups: () => React.ReactNode;
  getRows: () => React.ReactNode;
}

const useTable = ({ data, columns }: Props): ReturnProps => {

  console.log(data);
  console.log(columns);

  return {
    getHeaderGroups: () => {
      return (
        <TableHeader>
          <TableRow>
            {columns.map((column: any) => {
              console.log(column);
              return (
                <TableHead key={column.key}>

                </TableHead>
              )
            })}
          </TableRow>
        </TableHeader>
      )
    },
    getRows: () => {
      return (
        <TableRow>
          {columns.map((column: any) => {
            return (
              <TableCell key={column.key}>

              </TableCell>
            )
          })}
        </TableRow>
      )
    },
  }
}

export default useTable;