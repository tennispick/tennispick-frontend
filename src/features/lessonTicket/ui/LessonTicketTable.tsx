import { Columns } from '@/shared/types/table';
import { LessonTicket } from '@/entities/lessonTicket/type';

export const columns: Columns<LessonTicket> = [
  {
    accessorKey: 'type',
    header: () => '유형',
    cell: ({ type }) => {
      // return <Badge label={type} />;
      return <div>{type}</div>;
    },
  },
  {
    accessorKey: 'name',
    header: () => '이름',
    cell: ({ name }) => name,
  },
  {
    accessorKey: 'lessonCount',
    header: () => '레슨 횟수',
    cell: ({ lessonCount }) => `${lessonCount}회`,
  },
  {
    accessorKey: 'price',
    header: () => '가격',
    cell: ({ price }) => `${price}원`,
  },
  {
    accessorKey: 'createdAt',
    header: () => '생성일',
    cell: ({ createdAt }) => createdAt,
  },
  {
    accessorKey: 'updatedAt',
    header: () => '수정일',
    cell: ({ updatedAt }) => updatedAt,
  },
];
