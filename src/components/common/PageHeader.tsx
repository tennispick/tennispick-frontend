import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { styled } from 'styled-system/jsx';
import Button from '@components/button/Button';

type Props = {
  title: string;
  link?: string;
};

const PageHeader = ({ title, link = '' }: Props) => {
  const router = useRouter();
  const pathName = usePathname();
  const detailPathName = pathName?.split('/')[2];

  const handleGoBack = () => router.push(link);

  return (
    <Container>
      {title}
      {detailPathName && (
        <Button
          variant="primary"
          size="sm"
          label={'목록으로 가기'}
          onClick={handleGoBack}
        />
      )}
    </Container>
  );
};

const Container = styled('div', {
  base: {
    display: 'flex',
    height: '40px',
    fontSize: '1.2rem',
    fontWeight: 600,
    borderBottom: '1px solid var(--grey100)',
    margin: '0 0 12px 0',
    justifyContent: 'space-between',
  },
});

export default PageHeader;
