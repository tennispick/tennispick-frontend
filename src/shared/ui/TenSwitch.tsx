import { Switch } from 'src/이전 파일들/components/ui/switch';
import { cn } from 'src/이전 파일들/lib/utils';

type Props = {
  className?: string;
};

const TenSwitch = ({ className }: Props) => {
  return <Switch className={cn(className)} />;
};

export default TenSwitch;
