'use client';

import { Body, Section } from "@/app/layout"
import { LessonTicket } from "@/entities/lessonTicket/type";
import { useLessonTicketsInfiniteQuery } from "@/features/lessonTicket/api/queries";
import { columns } from "@/features/lessonTicket/ui/LessonTicketTable";
import TenDrawer from "@/shared/ui/TenDrawer";
import TenTable from "@/shared/ui/TenTable";
import Loading from "@/이전 파일들/components/common/Loading";
import { useState } from "react";

export const LessonTicketScreen = () => {

  const [openDrawer, setOpenDrawer] = useState(false);
  const { data } = useLessonTicketsInfiniteQuery();

  if (!data) return <Loading />;

  const handleRowClick = (row: LessonTicket) => {
    console.log(row)
    setOpenDrawer(true);
  }

  return (
    <Body title="레슨권 관리">
      <Section>
        <TenTable
          data={data?.pages}
          columns={columns}
          handleRowClick={handleRowClick}
        />
      </Section>
      <TenDrawer
        title="레슨권 상세"
        open={openDrawer}
        handleOpenChange={() => setOpenDrawer(false)}
      />
    </Body>
  )
}