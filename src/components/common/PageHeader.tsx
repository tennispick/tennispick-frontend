import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';

type Props = {
  title: string;
  link?: string;
};

const PageHeader = ({ title, link = '' }: Props) => {
  const pathName = usePathname();
  const detailPathName = pathName?.split('/')[2];

  return (
    <Container>
      {title}
      {detailPathName && (
        <Link
          href={link}
          className={css({
            top: '-8px',
            backgroundColor: 'var(--business-color)',
            color: 'var(--white100)',
            height: '36px',
            lineHeight: '36px',
            padding: '0 16px',
            borderRadius: '8px',
            fontSize: '1rem',
          })}
        >
          목록으로 가기
        </Link>
      )}
    </Container>
  );
};

const Container = styled('div', {
  base: {
    height: '40px',
    fontSize: '1.2rem',
    fontWeight: '600',
    borderBottom: '1px solid var(--grey100)',
    margin: '0 0 12px 0',
    display: 'flex',
  },
});

export default PageHeader;
