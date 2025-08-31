import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const dividerVariants = cva('text-center', {
  variants: {
    variant: {
      horizontal: 'h-0 border-t border-gray-200',
      vertical: 'w-px bg-gray-200 m-0',
    },
  },
  defaultVariants: {
    variant: 'horizontal',
  },
});

export interface DividerProps extends VariantProps<typeof dividerVariants> {
  width?: string;
  height?: string;
  margin?: string;
  content?: string;
  className?: string;
}

const Divider = ({
  variant,
  width = '100%',
  height,
  margin = '8 auto',
  content,
  className,
}: DividerProps) => {
  const style = {
    width,
    height,
    margin,
  };

  return (
    <div
      className={twMerge(dividerVariants({ variant }), className)}
      style={style}
      data-content={content}
    >
      {content && (
        <span className="relative text-base font-semibold bg-white text-blue-600 px-5 -top-2.5">
          {content}
        </span>
      )}
    </div>
  );
};

export default Divider;
