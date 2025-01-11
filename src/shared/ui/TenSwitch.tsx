import { Switch } from '@/shared/ui/components/switch';
import { cn } from '@/shared/lib/utils';

type Props = {
  className?: string;
};

export const TenSwitch = ({ className }: Props) => {
  return <Switch className={cn(className)} />;
};
