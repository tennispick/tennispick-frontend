import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { NoResult, NormalList } from 'app/src/components/index';
import { DefaultCourt } from 'app/src/assets/images/index';
import { deleteCourtDetailInfo } from 'app/src/queries/index';
import { css } from 'styled-system/css';
import Button from 'app/src/components/button/Button';
import { flex } from 'styled-system/patterns';

type Props = {
  data: Array<{ [key: string]: string | number }>;
  handleShowCourtDetailClick: (id: string) => void;
};

const CourtList = ({ data, handleShowCourtDetailClick }: Props) => {
  const router = useRouter();

  const handleDeleteCourtClick = async (id: string) => {
    const { data } = await deleteCourtDetailInfo(id as string);

    if (data.affectedRows > 0) {
      alert('삭제 되었습니다.');
    } else alert('다시 시도해주세요.');

    router.refresh();
  };

  return (
    <>
      {data && data.length > 0 ? (
        <NormalList.UnOrderList height={'100%'}>
          {data.map(({ id, name, floor, description }) => {
            return (
              <NormalList
                key={id}
                onClick={() => handleShowCourtDetailClick(`${id}`)}
              >
                <div
                  className={css({
                    width: '5%',
                    minHeight: '40px',
                    textAlign: 'center',
                  })}
                >
                  <Image
                    src={DefaultCourt}
                    alt={'court'}
                    className={css({
                      width: '40px',
                      height: '40px',
                    })}
                  />
                </div>
                <div className={css({ width: '5%', fontWeight: 600 })}>
                  {name}
                </div>
                <div className={css({ width: '5%', fontWeight: 600 })}>
                  {floor}층
                </div>
                <div
                  className={css({
                    width: '60%',
                    padding: '12px 0',
                  })}
                >
                  {description}
                </div>
                <div
                  className={flex({
                    justifyContent: 'flex-end',
                    width: '25%',
                    gap: '8px',
                  })}
                >
                  <Button
                    variant="primary"
                    size="md"
                    label={'상세보기'}
                    onClick={() => handleShowCourtDetailClick(`${id}`)}
                  />
                  <Button
                    variant="negative"
                    size="md"
                    label={'삭제하기'}
                    onClick={() => handleDeleteCourtClick(`${id}`)}
                  />
                </div>
              </NormalList>
            );
          })}
        </NormalList.UnOrderList>
      ) : (
        <div className={css({ height: '20vh', borderRadius: '25px' })}>
          <NoResult description={'생성된 코트가 없어요.'} margin="16px 0 0 0" />
        </div>
      )}
    </>
  );
};

export default CourtList;
