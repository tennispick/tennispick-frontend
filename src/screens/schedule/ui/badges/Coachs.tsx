import { Coach } from "@/shared/types";
import { SearchConditionSkeleton } from "@/shared/ui/skeleton";

interface Props {
  data: Coach[] | undefined;
}

export const CoachsBadges = ({ data }: Props) => {

  if (!data) return <SearchConditionSkeleton
    className="mb-3"
    rowHeaderClassName="w-[96px]"
    rowDataClassName="w-[calc(100%-96px)]"
  />

  // TODO 코치 색상
  return (
    <div className="flex items-center gap-4 h-8 mb-3">
      <div className="w-[96px]">
        코치 목록
      </div>
      <div className="flex items-center gap-2">
        {data.map((coach) => (
          <div key={coach.id} className="flex items-center gap-1.5">
            <div className="w-4 h-4 bg-gray-200 rounded-md" />
            <div>{coach.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
};
