import clsx from 'clsx';

type Props = {
  error: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const FormError = ({ error, className, ...rest }: Props) => {
  const style = clsx(
    'text-[var(--red100)] text-[0.925rem]',
    className
  );

  return <div className={style} {...rest}>{error}</div>;
};
