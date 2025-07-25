import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { NoResult, NormalList } from '@/shared/components/index';
import { DefaultCourt } from '@images/index';
import { deleteCourtDetailInfo } from '@queries/index';
import Button from '@/shared/components/button/Button';

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
                <div className="w-[5%] min-h-10 text-center">
                  <Image
                    src={DefaultCourt}
                    alt={'court'}
                    className="w-10 h-10"
                  />
                </div>
                <div className="w-[5%] font-semibold">{name}</div>
                <div className="w-[5%] font-semibold">{floor}층</div>
                <div className="w-[60%] py-3">{description}</div>
                <div className="flex justify-end w-[25%] gap-2">
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
        <div className="h-[20vh] rounded-3xl">
          <NoResult description={'생성된 코트가 없어요.'} margin="16px 0 0 0" />
        </div>
      )}
    </>
  );
};

export default CourtList;
