import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from '@/shared/ui/components/sheet';
import { TenButton } from './TenButton';

const SHEET_SIDES = ['top', 'right', 'bottom', 'left'] as const;

interface Props {
  side?: (typeof SHEET_SIDES)[number];
  title?: string;
  label?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  open?: boolean;
  handleOpenChange?: (state: boolean) => void;
}

export const TenDrawer = ({
  side = 'right',
  label,
  title,
  description,
  children,
  footer,
  open: initialOpen,
  handleOpenChange,
}: Props) => {
  return (
    <Sheet open={initialOpen} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        {label && <TenButton label={label} />}
      </SheetTrigger>
      <SheetContent className="w-[760px] sm:w-[540px]" side={side}>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
          {children}
          <div className="absolute flex gap-4 justify-end items-center w-full left-0 bottom-0 px-6 py-4 border-t border-gray-200">
            {footer}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
