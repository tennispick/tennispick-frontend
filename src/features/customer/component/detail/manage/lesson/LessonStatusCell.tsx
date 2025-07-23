import { twMerge } from 'tailwind-merge';

export const LessonStatusCell = (status: string) => {
  let className = "";

  if (status === '등록필요') {
    className = "bg-red-500 text-white";
  } else if (status === '수강종료') {
    className = "bg-gray-200 text-gray-500";
  } else if (status === '시작전') {
    className = "bg-green-500 text-white";
  } else if (status === '수강중') {
    className = "bg-blue-500 text-white";
  } else {
    className = "bg-blue-200 text-white";
  }

  return (
    <div
      className={twMerge(
        "w-[10%] font-medium py-2 rounded-md",
        className
      )}
    >
      {status}
    </div>
  );
};