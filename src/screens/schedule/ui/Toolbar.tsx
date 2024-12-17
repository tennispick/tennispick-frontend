'use client';

import TenButton from 'src/shared/ui/TenButton';
import TenDrawer from 'src/shared/ui/TenDrawer';
import CreateFunnel from './funnel/CreateFunnel';

export const Toolbar = () => {
  // 일정 등록하기
  /**
   * 회원명으로 검색
   * 회원 선택하면 아래 목록에 계속 노출되고,
   * 1명 이상 선택되면 그룹레슨인거임
   * 첫 회원을 검색하거나, 회원의 배열에서 같은 회원권인 사람만 검색
   * 일괄등록할 지, 개별등록할 지 선택해서 Funnel 진행
   * 1. 개별등록
   * 개별 등록이면, 회원권 총 n회중 m회를 진행할 지 확인하고
   * 그 갯수만큼 개별등록 일정 노출
   * 2. 일괄등록
   * 일괄등록이면, 입력받는 값 하나로 전체 진행
   */

  /**
   * 일정 등록하기(1/2)
   * 회원명 검색
   */

  return (
    <div className="flex gap-2">
      <TenDrawer
        label="일정 등록하기"
        title="일정 등록"
        footer={
          <>
            <TenButton label="닫기" />
            <TenButton label="일정 등록" />
          </>
        }
      >
        <CreateFunnel />
      </TenDrawer>
      <TenButton label="보강 등록하기" />
    </div>
  );
};
