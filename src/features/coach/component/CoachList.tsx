import { CoachListData } from '@apis/coach/coach.type';
import { NoResult, NormalList } from '@/shared/components/index';
import { useRouter } from 'next/navigation';
import { ProfileManIcon, ProfileWomanIcon } from '@icons/index';
import Image from 'next/image';


type Props = {
  data: CoachListData[];
};

const CoachList = ({ data }: Props) => {
  const router = useRouter();

  const handleCoachDetailClick = (id: number) => router.push(`/coach/${id}`);

  return (
    <>
      {data && data.length > 0 ? (
        <NormalList.UnOrderList height={'100%'}>
          {data.map(({ id, name, position, sex, email, phone, age }) => {
            return (
              <NormalList key={id} onClick={() => handleCoachDetailClick(id)}>
                <div
                  className="relative w-[5%] min-h-[40px] text-center"
                >
                  <Image
                    src={sex === 'man' ? ProfileManIcon : ProfileWomanIcon}
                    alt={'profile'}
                    fill
                  />
                </div>
                <div
                  className={`w-[52px] h-[24px] leading-[24px] text-center mr-4 rounded-[4px] text-white ${
                    position === 'coach' ? 'bg-sky-400' : 'bg-green-600'
                  }`}
                >
                  {position === 'coach' ? '코치' : '헤드코치'}
                </div>
                <div className="w-[calc(60%-52px)]">
                  <div className="font-semibold">
                    {name} &#40;{age}, {sex === 'man' ? '남' : '여'}&#41;
                  </div>
                </div>
                <div className="w-[35%] bg-gray-50 rounded-[16px] py-3 text-center">
                  {phone} &#183; {email}
                </div>
              </NormalList>
            );
          })}
        </NormalList.UnOrderList>
      ) : (
        <div className="h-[20vh] rounded-[25px]">
          <NoResult
            description={'코치님이 존재하지 않아요.'}
            margin="16px 0 0 0"
          />
        </div>
      )}
    </>
  );
};

export default CoachList;
