import { PropsWithChildren } from 'react';

type Props = {
  title: string;
  subTitle: string;
} & PropsWithChildren;

const BlockContainer = ({ title, subTitle, children }: Props) => {
  return (
    <div className="mb-16">
      <div className="text-xl font-bold">{title}</div>
      <div className="text-[var(--grey1600)] my-2 mb-6">{subTitle}</div>
      {children}
    </div>
  );
};

export default BlockContainer;
