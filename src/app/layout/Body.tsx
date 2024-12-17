import { cn } from 'src/이전 파일들/lib/utils';
import { PropsWithChildren, ReactNode } from 'react';

type Props = {
  title?: string;
  isGoBack?: boolean;
  toolbar?: ReactNode;
  className?: string;
  utilityChildren?: ReactNode;
} & PropsWithChildren;

const Body = ({
  title,
  isGoBack = false,
  toolbar,
  className,
  children,
  utilityChildren,
}: Props) => {
  const bodyClassName = cn(
    'relative',
    utilityChildren ? 'w-[calc(100%-280px)]' : 'w-full',
    className,
  );
  return (
    <div className="relative w-full">
      {title && (
        <div className="flex items-center justify-between text-xl font-medium mb-4 ml-5">
          {title}
          {toolbar && <>{toolbar}</>}
        </div>
      )}
      <div className="flex w-full">
        <div className={bodyClassName}>{children}</div>
        {utilityChildren && (
          <div className="w-[280px] h-auto ml-4">{utilityChildren}</div>
        )}
      </div>
    </div>
  );
};

export default Body;
