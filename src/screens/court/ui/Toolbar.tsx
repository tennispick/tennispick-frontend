'use client';

import TenButton from '@/shared/ui/TenButton';
import TenDrawer from '@/shared/ui/TenDrawer';

export const Toolbar = () => {
  return (
    <div className="flex gap-2">
      <TenDrawer
        label="코트 생성하기"
        title="코트 생성"
        footer={
          <>
            <TenButton label="닫기" />
            <TenButton label="코트 생성" />
          </>
        }
      ></TenDrawer>
    </div>
  );
};
