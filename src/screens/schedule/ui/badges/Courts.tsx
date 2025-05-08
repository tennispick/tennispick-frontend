import { Court } from "@/entities/court/type";
import { SearchConditionSkeleton } from "@/shared/ui/skeleton";

interface Props {
  data: Court[] | undefined;
}

export const CourtsBadges = ({ data }: Props) => {

  if (!data) return <SearchConditionSkeleton
    className="mb-3"
    rowHeaderClassName="w-[96px]"
    rowDataClassName="w-[calc(100%-96px)]"
  />

  // TODO 코트 색상
  return (
    <div className="flex items-center gap-4 h-8 mb-3">
      <div className="w-[96px]">
        코트 목록
      </div>
      <div className="flex items-center gap-2">
        {data.map((court) => (
          <div key={court.id} className="flex items-center gap-1.5">
            <div className="w-4 h-4 bg-red-200 rounded-md" />
            <div>{court.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
};
