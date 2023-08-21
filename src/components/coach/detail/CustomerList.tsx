import { useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";

import { ProfileManIcon, ProfileWomanIcon } from "@icons/index";
import { CustomerList as mocksData } from "src/mocks/data";
import { NormalList } from "@components/index";

const CustomerList = () => {

  const [data, setData] = useState(mocksData);

  return (
    <CustomerContainer>
      <h4>수강생 목록 &#40; {data.length} 명 &#41;</h4>
      <NormalList.UnOrderList>
        {
          (data && data.length > 0) && data.map((item) => {
            return (
              <NormalList key={item.id}>
                <div
                  css={{
                    position: 'relative',
                    width: '7%',
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
                    width: '58%'
                  }}
                >
                  <div css={{ fontWeight: '600' }}>{item.name} &#40;{item.age}, {item.sex === 'man' ? '남' : '여'}&#41;</div>
                  <div>미수금: {item.outStandingMoney} </div>
                </div>
                <div
                  css={{
                    position: 'relative',
                    width: '35%',
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
    </CustomerContainer>
  )
}

const CustomerContainer = styled.section({
  position: 'relative',
  height: 'calc(72% - 12px)',
  borderBottom: '1px solid var(--basic-grey-color)',
})

export default CustomerList;