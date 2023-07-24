import styled from "@emotion/styled";
import { useState } from "react";
import Image from "next/image";
import { ProfileManIcon, ProfileWomanIcon } from "@icons/index";
import { CustomerList as mocksData } from "src/mocks/data";

const CustomerList = () =>{

  const [data, setData] = useState(mocksData);

  return(
    <CustomerContainer>
      <h4>수강생 목록 &#40; {data.length} 명 &#41;</h4>
      <ul
        css={{
          position: 'relative',
          height: '90%',
          margin: '12px 0 0 0',
          overflowY: 'scroll',
        }}
      >
        {
          (data && data.length > 0) && data.map((item) =>{
            return(
              <List
                key={item.id}
              >
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
              </List>
            )
          })
        }
      </ul>
    </CustomerContainer>
  )
}

const CustomerContainer = styled.section({
  position: 'relative',
  height: 'calc(72% - 12px)',
  borderBottom: '1px solid var(--basic-grey-color)',
})
const List = styled.li({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  margin: '8px 0',
  padding: '8px 12px 8px 0',
  fontSize: '0.9rem',
  cursor: 'pointer',

  ":hover": {
    backgroundColor: 'var(--basic-grey5-color)',
    borderRadius: '16px'
  }
})

export default CustomerList;