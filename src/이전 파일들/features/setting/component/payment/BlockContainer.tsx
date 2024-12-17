import { PropsWithChildren } from 'react';
import { css } from 'styled-system/css';

type Props = {
  title: string;
  subTitle: string;
} & PropsWithChildren;

const BlockContainer = ({ title, subTitle, children }: Props) => {
  return (
    <div className={css({ margin: '0 0 4rem 0' })}>
      <div className={css({ fontSize: '1.25rem', fontWeight: 'bold' })}>
        {title}
      </div>
      <div
        className={css({ color: 'var(--grey1600)', margin: '8px 0 24px 0' })}
      >
        {subTitle}
      </div>
      {children}
    </div>
  );
};

export default BlockContainer;
