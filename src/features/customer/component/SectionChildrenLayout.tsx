import styled from '@emotion/styled';

type Props = {
  titleChildren: React.ReactNode;
  contentChildren: React.ReactNode;
};

const SectionChildrenLayout = ({ titleChildren, contentChildren }: Props) => {
  return (
    <SectionContainer>
      <SectionTitleContainer>
        <span>{titleChildren}</span>
      </SectionTitleContainer>
      <SectionContentContainer>{contentChildren}</SectionContentContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.section({
  position: 'relative',
  height: '50vh',
  backgroundColor: 'var(--grey400)',
  borderRadius: '16px',
  padding: '12px',
});

const SectionTitleContainer = styled.div({
  position: 'relative',
  height: '48px',
  lineHeight: '24px',
  backgroundColor: 'var(--white100)',
  margin: '0 0 12px 0',
  padding: '12px',
  borderRadius: '8px',
});

const SectionContentContainer = styled.div({
  backgroundColor: 'var(--white100)',
  borderRadius: '8px',
  height: 'calc(100% - 60px)',
  padding: '12px',
});

export default SectionChildrenLayout;
