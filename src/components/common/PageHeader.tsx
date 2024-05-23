import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
          css={{
            top: '-8px',
            backgroundColor: 'var(--business-color)',
            color: 'var(--white100)',
            height: '36px',
            lineHeight: '36px',
            padding: '0 16px',
            borderRadius: '8px',
            fontSize: '1rem',
          }}
        >
          목록으로 가기
        </Link>
      )}
    </Container>
  );
};

const Container = styled.div({
  height: '40px',
  fontSize: '1.2rem',
  fontWeight: '600',
  borderBottom: '1px solid var(--grey100)',
  margin: '0 0 12px 0',
  display: 'flex',
  alginItems: 'center',
  justifyContent: 'space-between',
});

export default React.memo(PageHeader);
