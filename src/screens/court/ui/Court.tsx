'use client';

import { Body, Section } from "@/app/layout";
import { Toolbar } from "./Toolbar";
import { useCourtsInfiniteQuery } from "@/features/court/api/queries";
import Loading from "@/이전 파일들/components/common/Loading";
import TenTable from "@/shared/ui/TenTable";
import { columns } from "@/features/court/ui/CourtTable";
import { Court } from "@/entities/court/type";
import TenDrawer from "@/shared/ui/TenDrawer";
import { useState } from "react";

export const CourtScreen = () => {

  const { data, isFetching } = useCourtsInfiniteQuery();
  const [openDrawer, setOpenDrawer] = useState(false);

  if (!data || isFetching) return <Loading />;

  const handleRowClick = (row: Court) => setOpenDrawer(true);

  const handleOpenChange = (state: boolean) => setOpenDrawer(state);

  return (
    <Body title="코트 관리" toolbar={<Toolbar />}>
      <Section>
        <TenTable
          data={data?.pages}
          columns={columns}
          rowSelection={handleRowClick}
        />
      </Section>
      <TenDrawer
        title="코트 상세"
        open={openDrawer}
        handleOpenChange={handleOpenChange}
      >
      </TenDrawer>
    </Body>
  )
};