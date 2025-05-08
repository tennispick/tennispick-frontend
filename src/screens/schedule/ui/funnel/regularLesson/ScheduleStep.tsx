import { TenButton } from "@/shared/ui";
import { useFormContext } from "react-hook-form";

interface Props {
  handleBack?: () => void;
  handleNext?: () => void;
}

export const ScheduleStep = ({ handleBack, handleNext }: Props) => {

  const { } = useFormContext();

  return (
    <section className="relative h-[calc(100%-24px)]">
      <div className="h-[calc(100%-76px)]">
        스케줄 스텝
      </div>
      <div className="mt-4 text-right gap-2 flex justify-end">
        <TenButton
          type="button"
          label="이전"
          onClick={handleBack}
        />
        <TenButton
          type="button"
          label="다음"
          onClick={handleNext}
        />
      </div>
    </section>
  )
}