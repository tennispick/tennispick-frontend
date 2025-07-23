import { css, cx } from 'styled-system/css';

type Props = {
  error: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const FormError = ({ error, ...rest }: Props) => {
  const { className } = rest;

  const defaultStyle = css({
    color: 'var(--red100)',
    fontSize: '0.925rem',
  });

  const style = cx(defaultStyle, className);

  return <div className={style}>{error}</div>;
};
