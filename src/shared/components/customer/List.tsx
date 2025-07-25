import Image from 'next/image';

import { NoResult, NormalList } from '@/shared/components/index';
import { ProfileManIcon, ProfileWomanIcon } from '@icons/index';
import { useRouter } from 'next/navigation';
import { CustomerListQueryData } from '@features/customer/type/customer.type';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

type Props = {
  data: CustomerListQueryData[];
  hasNextPage: boolean;
  handleFetchNextPage: () => void;
};

const CustomerList = ({ data, hasNextPage, handleFetchNextPage }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.25,
  });
  const router = useRouter();
  const intersectionItemIndex = data.length - 1;

  useEffect(() => {
    inView && handleFetchNextPage();
  }, [inView, handleFetchNextPage]);

  return (
    <>
      {data && data.length > 0 ? (
        <>
          <NormalList.UnOrderList height={'100%'}>
            {data.map(({ id, name, sex, age, phone, email }) => {
              return (
                <NormalList
                  key={id}
                  onClick={() => router.push(`/customer/${id}`)}
                >
                  <div className="relative px-2 text-center">
                    <Image
                      src={sex === 'man' ? ProfileManIcon : ProfileWomanIcon}
                      alt={'profile'}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="w-[70%] px-2">
                    <div className="font-semibold">
                      {name} &#40;{age}, {sex === 'man' ? '남' : '여'}&#41;
                    </div>
                    <div>미수금: - </div>
                  </div>
                  <div className="w-[25%] rounded-2xl bg-[var(--grey400)] py-3 text-center">
                    {phone} &#183; {email}
                  </div>
                </NormalList>
              );
            })}
            {intersectionItemIndex && (
              <div ref={hasNextPage ? ref : null} className="h-px"></div>
            )}
          </NormalList.UnOrderList>
        </>
      ) : (
        <div className="h-[20vh] rounded-3xl">
          <NoResult
            description={'아직 회원님이 존재하지 않아요.'}
            margin="16px 0 0 0"
          />
        </div>
      )}
    </>
  );
};

export default CustomerList;
