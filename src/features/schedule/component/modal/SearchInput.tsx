import { Input, NormalList as LI } from "@components/index";
import styled from "@emotion/styled";
import { ChangeEvent, useEffect, useState } from "react";
import { getSearchCustomerListByKeyword } from "src/apis/customer/customer.api";

type Props ={

}

const ScheduleModalSearchInput = ({ }: Props) => {

  const [keyword, setKeyword] = useState<string>('');
  const [autoSearchKeyword, setAutoSearchKeyword] = useState<Array<{
    id: string,
    name: string;
  }>>([]);

  const handleSearchKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    const searchDealy = setTimeout(() => {
      getSearchCustomerListByKeyword({ keyword }).then((res) => {
        setAutoSearchKeyword([...res]);
      });
    }, 200);
    return () => clearTimeout(searchDealy);
  }, [keyword]);

  return(
    <div css={{ position: 'relative', width: '100%' }}>
      <Input>
        <Input.TextField
          type={'text'}
          placeholder={'회원명을 입력해주세요.'}
          css={{ width: '80%', padding: '10px 0 10px 10px' }}
          onChange={(e) => handleSearchKeywordChange(e)}
        />
      </Input>
      {(keyword && autoSearchKeyword.length > 0) && (
        <AutoCompleteSearch>
          <LI.UnOrderList css={{ margin: '0' }}>
            {autoSearchKeyword.map(({ id, name }) => {
              return(
                <LI
                  key={id}
                  css={{
                    padding: '8px 12px',
                    ':hover': {
                      borderRadius: '8px'
                    }
                  }}
                  onClick={() => { console.log(name) }}
                >{name}</LI>
              )
            })}
          </LI.UnOrderList>
        </AutoCompleteSearch>
      )}
    </div>
  )
};

const AutoCompleteSearch = styled.div({
  position: 'absolute',
  width: '80%',
  minHeight: '40px',
  top: '50px',
  left: 0,
  backgroundColor: 'var(--white100)',
  boxShadow: '0px 8px 12px 0px rgba(0, 0, 0, 0.25)',
  border: '1px solid var(--gray100)',
  borderRadius: '8px',
  zIndex: 1  
});

export default ScheduleModalSearchInput;