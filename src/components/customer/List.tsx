import { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';

import { NoResult, NormalList } from '@components/index';
import { ProfileManIcon, ProfileWomanIcon } from "@icons/index";
import { useRouter } from 'next/navigation';

interface CustomerListProps {
  data: Array<{ [key: string]: string | number }>;
}

const CustomerList = ({ data }: CustomerListProps) => {

  const router = useRouter();
  const [list,] = useState<Array<{ [key: string]: string | number }>>(data);

  return (
    <>
      {
        (list && list.length > 0) ?
          <NormalList.UnOrderList height={'78%'} >
            {list.map((item) => {
              return (
                <NormalList
                  key={item.id}
                  onClick={() => router.push(`/customer/${item.id}`)}
                >
                  <div
                    css={{
                      position: 'relative',
                      width: '5%',
                      minHeight: '40px',
                      textAlign: 'center'
                    }}
                  >
                    <Image
                      src={item.sex === 'man' ? ProfileManIcon : ProfileWomanIcon}
                      alt={'profile'}
                      fill
                    />
                  </div>
                  <div
                    css={{
                      position: 'relative',
                      width: '70%'
                    }}
                  >
                    <div css={{ fontWeight: '600' }}>{item.name} &#40;{item.age}, {item.sex === 'man' ? '남' : '여'}&#41;</div>
                    <div>미수금: {item.outStandingMoney} </div>
                  </div>
                  <div
                    css={{
                      position: 'relative',
                      width: '25%',
                      backgroundColor: 'var(--basic-grey4-color)',
                      borderRadius: '16px',
                      padding: '12px 0',
                      textAlign: 'center'
                    }}
                  >{item.phone} &#183; {item.email}</div>
                </NormalList>
              )
            })
            }
          </NormalList.UnOrderList>
          :
          <div
            css={{
              position: "relative",
              height: "20vh",
              borderRadius: "25px",
            }}
          >
            <NoResult description={"아직 회원님이 존재하지 않아요."} margin="16px 0 0 0" />
          </div>
      }
    </>
  )
}

export default CustomerList;