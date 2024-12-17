import { PropsWithChildren } from 'react';
import Image from 'next/image';
import { flex } from 'styled-system/patterns';
import { css } from 'styled-system/css';

type Props = {
  imgSrc?: string;
  label: string;
  value?: string;
} & PropsWithChildren;

const ItemRow = ({ imgSrc, label, children, value = '' }: Props) => {
  return (
    <div
      className={flex({
        alignItems: 'center',
        height: '36px',
        margin: '0 0 12px 0',
      })}
    >
      <div
        className={flex({
          alignItems: 'center',
          width: '140px',
          margin: '0 12px 0 0',
        })}
      >
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={label}
            width={20}
            height={20}
            className={css({ margin: '0 8px 0 0' })}
          />
        )}
        {label}
      </div>
      {children ?? (
        <input
          type="text"
          value={value}
          className={css({
            width: 'calc(100% - 152px)',
            height: '100%',
            padding: '10px 0 10px 10px',
            fontSize: '0.875rem',
            marginRight: 0,
            border: '1px solid var(--grey300)',
            borderRadius: '8px',
            outline: 0,
            zIndex: '1',
          })}
          readOnly
        />
      )}
    </div>
  );
};

export default ItemRow;
