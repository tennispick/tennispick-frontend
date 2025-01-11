export type TableRowItem = Record<string, any>;

export type Column<TableRowItem> = {
  accessorKey: string;
  header: (row?: TableRowItem) => React.ReactNode;
  cell: (row: TableRowItem) => React.ReactNode;
};

export type Columns<TableRowItem> = Array<Column<TableRowItem>>;
