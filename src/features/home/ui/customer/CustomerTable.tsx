import { Customer } from "@/shared/types";
import { Columns } from "@/shared/types/table";

export const columns: Columns<Customer> = [
  {
    accessorKey: 'name',
    header: () => '회원명',
    cell: ({ name }) => name,
  },
  {
    accessorKey: 'sex',
    header: () => '성별',
    cell: ({ sex }) => sex,
  },
  {
    accessorKey: 'age',
    header: () => '나이',
    cell: ({ age }) => age,
  },
  {
    accessorKey: 'birth',
    header: () => '생년월일',
    cell: ({ birth }) => birth,
  },
  {
    accessorKey: 'email',
    header: () => '이메일',
    cell: ({ email }) => email,
  },
  {
    accessorKey: 'createdAt',
    header: () => '가입일',
    cell: ({ createdAt }) => createdAt,
  },
  {
    accessorKey: 'updatedAt',
    header: () => '수정일',
    cell: ({ updatedAt }) => updatedAt,
  },
];