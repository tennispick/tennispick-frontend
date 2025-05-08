import { ReactNode } from "react";
import CheckIcon from '@/public/icons/checkbox/note_check.svg';

type NoteType = "info" | "warning" | "error";

interface Props {
  type: NoteType;
  items: ReactNode[];
}

export const TenInfoNote = ({ type, items }: Props) => {
  return (
    <div className="bg-white-400 p-3 break-keep rounded-sm">
      {items.map((item, index) => {
        return (
          <div key={index} className="flex gap-1 text-sm">
            <div className="relative w-4 h-4 top-0.5 flex items-center justify-center">
              <CheckIcon />
            </div>
            {item}
          </div>
        )
      })}
    </div>
  )
};