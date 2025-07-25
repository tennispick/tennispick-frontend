import { ForwardedRef, PropsWithChildren, ReactNode, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  label: string;
  defaultValue?: string;
  value?: string;
  className?: string;
  disabled?: boolean;
  Error?: ReactNode;
  readOnly?: boolean;
} & PropsWithChildren;

const CustomerDetailDrawerInputContainer = forwardRef(
  (
    {
      label,
      defaultValue,
      value,
      children,
      disabled = false,
      Error,
      className,
      ...props
    }: Props,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className="mb-3">
        <div className="font-semibold h-6 text-sm pl-1">{label}</div>
        {children ?? (
          <div className="flex items-center">
            <input
              ref={ref}
              type="text"
              value={value ?? undefined}
              defaultValue={defaultValue ?? undefined}
              className={twMerge(
                'w-[280px] h-full py-2.5 pl-2 mt-2 text-xs mr-0 border border-gray-300 rounded-lg outline-none z-10',
                className,
              )}
              disabled={disabled}
              {...props}
            />
            {Error && <div className="mt-2 ml-3">{Error}</div>}
          </div>
        )}
      </div>
    );
  },
);

CustomerDetailDrawerInputContainer.displayName =
  'CustomerDetailDrawerInputContainer';
export default CustomerDetailDrawerInputContainer;
