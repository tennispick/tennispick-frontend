'use client';

import { Body, Section } from '@/app/layout';
import { columns } from '@/features/coach/ui/CoachTable';
import { useCoachsInfiniteQuery } from '@/features/customer/api/queries';
import { DEFAULT_PAGE_SIZE } from '@/shared/constants/pagination';
import { Coach } from '@/shared/types';
import TenTable from '@/shared/ui/TenTable';
import Loading from '@/이전 파일들/components/common/Loading';
import { useRouter } from 'next/navigation';
import { Toolbar } from './Toolbar';

const CoachScreen = () => {

  const router = useRouter();
  const { isLoading, data } = useCoachsInfiniteQuery({
    pageSize: DEFAULT_PAGE_SIZE,
  });

  const handleRowClick = (row: Coach) => router.push(`/coach/${row.id}`);

  if (isLoading || !data) return <Loading />;

  return (
    <Body title="코치 관리" toolbar={<Toolbar />}>
      <Section>
        <TenTable
          data={data?.pages}
          columns={columns}
          handleRowClick={handleRowClick}
        />
      </Section>
    </Body>
  );
};

export default CoachScreen;
