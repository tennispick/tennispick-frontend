// 각 퍼널 단계에 맞는 컴포넌트를 입력해야함
// 그럼 결국 Funnel.Step 으로 컴포넌트를 호출해야 함
// 그 스탭은 각 key값과 순서값을 가지고 있겠지
// 그리고 전체 퍼널값에 맞는 현재 스탭의 순서를 알려주기

import { createContext, useContext, Dispatch, SetStateAction } from "react";

const defaultFunnelContext = {
  currentStep: '',
  handleCurrentStep: (step: string) => { }
};

const FunnelContext = createContext<typeof defaultFunnelContext>(defaultFunnelContext);

interface Props {
  steps: {
    key: string;
  }[]
}

export const useFunnel = ({ steps }: Props) => {
  return {
    Funnel: ({ currentStep, handleCurrentStep, children }: { currentStep: string, handleCurrentStep: (step: string) => void, children: React.ReactNode }) => {
      return (
        <FunnelContext.Provider value={{ currentStep, handleCurrentStep }}>
          {children}
        </FunnelContext.Provider>)
    },
    Step: ({ children, name }: { children: React.ReactNode, name: string }) => {
      const { currentStep, handleCurrentStep } = useContext(FunnelContext);

      if (currentStep !== name) return null;

      return (
        <>
          {children}
        </>
      )
    },
  }
}