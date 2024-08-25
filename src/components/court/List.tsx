import { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { CardList, NoResult, Button } from '@components/index';
import { DefaultCourt } from '@images/index';
import { deleteCourtDetailInfo } from '@queries/index';
import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';

type Props = {
  data: Array<{ [key: string]: string | number }>;
  setCourtId: Dispatch<SetStateAction<string>>;
  setShowRightSide: Dispatch<SetStateAction<boolean>>;
};

const CourtList = ({ data, setCourtId, setShowRightSide }: Props) => {
  const router = useRouter();
  const [list] = useState<Array<{ [key: string]: string | number }>>(data);

  const handleCourtDetailClick = (id: string) => {
    setCourtId(id);
    setShowRightSide(true);
  };

  return (
    <>
      {list && list.length > 0 ? (
        <CardList.UnOrderList>
          {list.map((item) => {
            return (
              <CardList key={item.id} height={'360px'} minHeight={'360px'}>
                <div
                  className={css({
                    height: '60%',
                    borderTopLeftRadius: '25px',
                    borderTopRightRadius: '25px',
                  })}
                >
                  <Image
                    src={DefaultCourt}
                    alt={'default court image'}
                    loading={'eager'}
                    priority={true}
                    className={css({
                      width: '100%',
                      height: '100%',
                    })}
                  />
                </div>
                <div
                  className={css({
                    position: 'absolute',
                    top: '56.5%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    minWidth: '140px',
                    padding: '12px 0',
                    backgroundColor: 'var(--blue300)',
                    color: 'var(--white100)',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: '12px',
                    textAlign: 'center',
                    zIndex: 99,
                  })}
                >
                  {item.name}
                </div>
                <div
                  className={css({
                    height: '40%',
                    padding: '16px 24px 0 24px',
                  })}
                >
                  <CourtDetailInfo>&#45; {item.floor}층</CourtDetailInfo>
                  <CourtDetailInfo>
                    {item.description ? (
                      <>&#45; {item.description}</>
                    ) : (
                      <>&#160;</>
                    )}
                  </CourtDetailInfo>
                  <div
                    className={css({
                      display: 'flex',
                      justifyContent: 'center',
                      gap: '8px',
                      margin: '16px 0 0 0',
                    })}
                  >
                    <Button
                      label={'삭제하기'}
                      variant={'radiusBtn'}
                      className={css({
                        border: 0,
                        backgroundColor: 'var(--red200)',
                        color: 'var(--white100)',
                        padding: '8px 16px',
                        fontSize: '0.95rem',
                      })}
                      onClick={async () => {
                        const { data } = await deleteCourtDetailInfo(
                          item.id as string,
                        );

                        if (data.affectedRows > 0) {
                          alert('삭제 되었습니다.');
                          setShowRightSide(false);
                          router.refresh();
                        } else alert('다시 시도해주세요.');
                      }}
                    />
                    <Button
                      label={'상세보기'}
                      variant={'radiusBtn'}
                      className={css({
                        border: 0,
                        backgroundColor: 'var(--business-color)',
                        color: 'var(--white100)',
                        padding: '8px 16px',
                        fontSize: '0.95rem',
                      })}
                      onClick={() => {
                        handleCourtDetailClick(item.id as string);
                      }}
                    />
                  </div>
                </div>
              </CardList>
            );
          })}
        </CardList.UnOrderList>
      ) : (
        <div className={css({ height: '20vh', borderRadius: '25px' })}>
          <NoResult description={'생성된 코트가 없어요.'} margin="16px 0 0 0" />
        </div>
      )}
    </>
  );
};

const CourtDetailInfo = styled('div', {
  base: {
    fontWeight: 500,
    lineHeight: '32px',
  },
});

export default CourtList;
