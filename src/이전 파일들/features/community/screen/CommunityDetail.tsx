'use client';

import { Input, PageHeader } from 'src/이전 파일들/components/index';
import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';

type Props = {
  id: string;
};

const CommunityDetailScreen = ({}: Props) => {
  return (
    <>
      <PageHeader title={'공지사항'} link="/community" />
      <div className={css({ height: 'calc(100% - 52px)' })}>
        <div>
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
              className={css({
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

                '&::hover': {
                  cursor: 'pointer',
                },
              })}
            >
              <Input.TextField
                type={'radio'}
                name={'noticeType'}
                className={css({
                  position: 'absolute',
                  clip: 'rect(0, 0, 0, 0)',
                  width: '1px',
                  height: '1px',
                  border: 0,
                  overflow: 'hidden',

                  '&:checked + label': {
                    backgroundColor: '#a5dc86',
                    boxShadow: 'none',
                  },
                })}
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

const Row = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    height: '46px',
    lineHeight: '38px',
    padding: '4px 12px',
    margin: '8px 0',
  },
});

const InputHead = styled('div', {
  base: {
    fontSize: '16px',
    fontWeight: 600,
    width: '10%',
    padding: '4px 0',
  },
});

const InputItem = styled(Input, {
  base: { height: '100%' },
});

export default CommunityDetailScreen;
