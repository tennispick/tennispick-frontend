import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from '@/shared/ui/components/sheet';
import { TenButton } from './TenButton';
import { cn } from '@/shared/lib/utils';

const SHEET_SIDES = ['top', 'right', 'bottom', 'left'] as const;

interface Props {
  side?: (typeof SHEET_SIDES)[number];
  title?: string;
  label?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  open?: boolean;
  className?: string;
  handleOpenChange?: (state: boolean) => void;
  handleClose?: () => void;
}

export const TenDrawer = ({
  side = 'right',
  label,
  title,
  description,
  children,
  footer,
  className,
  open: initialOpen,
  handleOpenChange,
  handleClose,
}: Props) => {
  return (
    <Sheet open={initialOpen} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        {label && <TenButton label={label} />}
      </SheetTrigger>
      <SheetContent className="w-[760px] sm:w-[540px]" side={side} >
        <SheetHeader>
          <SheetTitle className="h-7">{title}</SheetTitle>
          <SheetDescription className="m-0 hidden" />
        </SheetHeader>
        <div className={cn("relative h-[calc(100%-84px)] overflow-y-auto", className)}>
          {children}
        </div>
        {footer && <div className="absolute h-[72px] flex gap-4 justify-end items-center w-full left-0 bottom-0 px-6 py-4 border-t border-white-600">
          <TenButton label="닫기" onClick={handleClose} />
          {footer}
        </div>}
      </SheetContent>
    </Sheet >
  );
};
