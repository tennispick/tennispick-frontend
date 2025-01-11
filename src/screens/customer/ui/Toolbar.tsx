'use client';

import { TenButton, TenDrawer } from "@/shared/ui";

export const Toolbar = () => {
  return (
    <div className="flex gap-2">
      <TenDrawer
        label="회원 등록하기"
        title="회원 등록"
        footer={
          <>
            <TenButton label="닫기" />
            <TenButton label="회원 등록" />
          </>
        }
      />
    </div>
  );
};
