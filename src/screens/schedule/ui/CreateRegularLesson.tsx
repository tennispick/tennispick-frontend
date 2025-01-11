import { useState } from "react";
import { Customer } from "@/shared/types";
import { useFunnel } from "@/shared/hooks";
import { CustomerStep } from "./funnel/regularLesson/CustomerStep";
import { ScheduleStep } from "./funnel/regularLesson/ScheduleStep";
import { AnimatePresence, motion } from "framer-motion";

const STEPS = {
  CUSTOMER: "customer",
  SCHEDULE: "schedule",
}

interface Props {

}

export const CreateRegularLesson = ({ }: Props) => {

  const [currentStep, currentSetStep] = useState(STEPS.CUSTOMER);
  const { Funnel, Step } = useFunnel({
    steps: [
      {
        key: "customer",
      },
      {
        key: "schedule",
      }
    ]
  });
  const [selectedCustomers, setSelectedCustomers] = useState<Customer[]>([]);
  const totalSteps = Object.keys(STEPS).length;
  const currentStepIndex = Object.values(STEPS).findIndex(step => step === currentStep) + 1;

  const handleClickStep = (step: string) => currentSetStep(step);

  const stepComponents = {
    [STEPS.CUSTOMER]: (
      <CustomerStep
        key={STEPS.CUSTOMER}
        onNext={() => handleClickStep(STEPS.SCHEDULE)}
      />
    ),
    [STEPS.SCHEDULE]: <ScheduleStep key={STEPS.SCHEDULE} onNext={() => { }} />,
  };

  return (
    <form className="relative h-full">
      {/* <Funnel
        currentStep={currentStep}
        handleCurrentStep={handleClickStep}
      >
        <Step name="customer">
          <CustomerStep
            onNext={() => handleClickStep(STEPS.SCHEDULE)}
          />
        </Step>
        <Step name="schedule">
          <ScheduleStep />
        </Step>
      </Funnel> */}
      <div className="text-right h-6">{`(${currentStepIndex} / ${totalSteps})`}</div>
      <Funnel currentStep={currentStep} handleCurrentStep={handleClickStep}>
        <AnimatePresence mode="wait">
          <motion.div
            className="h-full"
            key={currentStep} // 단계별로 고유 키를 설정
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {stepComponents[currentStep]}
          </motion.div>
        </AnimatePresence>
      </Funnel>
    </form>
  );
};