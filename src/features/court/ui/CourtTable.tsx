import { Court } from "@/entities/court/type";
import { Columns } from "@/shared/types/table";

export const columns: Columns<Court> = [
  {
    accessorKey: 'image',
    header: () => '',
    cell: () => 'COURT',
  },
  {
    accessorKey: 'name',
    header: () => '코트명',
    cell: ({ name }) => name,
  },
  {
    accessorKey: 'floor',
    header: () => '층',
    cell: ({ floor }) => `${floor}층`,
  },
  {
    accessorKey: 'description',
    header: () => '설명',
    cell: ({ description }) => description,
  },
  {
    accessorKey: 'created_at',
    header: () => '생성일',
    cell: ({ createdAt }) => createdAt,
  },
  {
    accessorKey: 'updated_at',
    header: () => '수정일',
    cell: ({ updatedAt }) => updatedAt,
  },
];
