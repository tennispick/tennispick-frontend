import { Input, PageHeader } from '@components/index';
import styled from '@emotion/styled';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

const CommunityDetail = () => {
  // TODO id === string 일 때 구분

  return (
    <>
      <PageHeader title={'공지사항'} link="/community" />
      <div
        css={{
          position: 'relative',
          height: 'calc(100% - 52px)',
        }}
      >
        <div
          css={{
            position: 'relative',
          }}
        >
          <Row>
            <InputHead>제목</InputHead>
            <InputItem>
              <Input.TextField
                placeholder={'공지사항의 제목을 입력해주세요.'}
              />
            </InputItem>
          </Row>
          <Row>
            <InputHead>게시글 유형</InputHead>
            <InputItem
              label={'일반'}
              id={'normal'}
              css={{
                // backgroundColor: '#e4e4e4',
                backgroundColor: '#a5dc86',
                color: 'rgba(0, 0, 0, 0.6)',
                fontSize: '14px',
                lineHeight: 1,
                textAlign: 'center',
                padding: '8px 16px',
                marginRight: '-1px',
                border: '1px solid rgba(0, 0, 0, 0.2)',
                boxShadow:
                  'inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1)',
                transition: 'all 0.1s ease-in-out',

                ':hover': {
                  cursor: 'pointer',
                },
              }}
            >
              <Input.TextField
                type={'radio'}
                name={'noticeType'}
                css={{
                  position: 'absolute',
                  clip: 'rect(0, 0, 0, 0)',
                  width: '1px',
                  height: '1px',
                  border: 0,
                  overflow: 'hidden',

                  ':checked + label': {
                    backgroundColor: '#a5dc86',
                    boxShadow: 'none',
                  },
                }}
                defaultChecked
              />
            </InputItem>
            <InputItem label={'공지'} id={'notice'}>
              <Input.TextField type={'radio'} name={'noticeType'} />
            </InputItem>
          </Row>
          <Row>
            <InputHead>내용</InputHead>
            <InputItem>
              <Input.TextField
                placeholder={'공지사항의 제목을 입력해주세요.'}
              />
            </InputItem>
          </Row>
          <Row>
            <InputHead>첨부파일</InputHead>
            <InputItem>
              <Input.TextField type={'file'} />
            </InputItem>
          </Row>
        </div>
      </div>
    </>
  );
};

const Row = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: '46px',
  lineHeight: '38px',
  padding: '4px 12px',
  margin: '8px 0',
});
const InputHead = styled.div({
  fontSize: '1rem',
  fontWeight: '600',
  width: '10%',
  padding: '4px 0',
});
const InputItem = styled((props: any) => <Input {...props} />)(
  {
    position: 'relative',
    height: '100%',
  },
  (props) => ({
    width: props.width ? props.width : '30%',
  }),
);

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { query } = context;

  const id = query.id as unknown as string;

  try {
    return {
      props: {
        id: id,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default CommunityDetail;
