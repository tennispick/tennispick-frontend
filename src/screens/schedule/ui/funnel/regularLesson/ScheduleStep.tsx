import { TenButton } from "@/shared/ui";

interface Props {
  onNext: () => void;
}

export const ScheduleStep = ({ onNext }: Props) => {
  return (
    <section className="relative h-[calc(100%-24px)]">
      <div className="mt-4 text-right">
        <TenButton
          type="button"
          label="다음"
          onClick={onNext}
        />
      </div>
    </section>
  )
}