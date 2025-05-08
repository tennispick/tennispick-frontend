'use client';

import { TenButton, TenDrawer } from '@/shared/ui';

export const Toolbar = () => {
  return (
    <div className="flex gap-2">
      <TenDrawer
        label="레슨권 생성하기"
        title="레슨권 생성"
        footer={
          <>
            <TenButton label="닫기" />
            <TenButton label="레슨권 생성" />
          </>
        }
      ></TenDrawer>
    </div>
  );
};
