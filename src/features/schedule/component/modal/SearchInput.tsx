import { Input, NormalList as LI } from '@components/index';
import styled from '@emotion/styled';
import {
  ChangeEvent,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { getSearchCustomerListByKeyword } from '@apis/customer/customer.api';
import { FormCommonInputType } from '@features/schedule/type/schedule.type';

type Props = {
  formData: FormCommonInputType;
  setFormData: Dispatch<SetStateAction<FormCommonInputType>>;
};

const ScheduleModalSearchInput = ({ formData, setFormData }: Props) => {
  const { lessonType, customer } = formData;
  const [keyword, setKeyword] = useState<string>('');
  const [autoSearchKeyword, setAutoSearchKeyword] = useState<
    Array<{
      id: string;
      name: string;
    }>
  >([]);

  const handleSearchKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleCustomerSelect = (id: string, name: string) => {
    if (lessonType === 'private' && customer.length > 0) {
      alert('개인레슨은 한명의 회원만 선택할 수 있습니다.');
      setKeyword('');
      return false;
    }

    setFormData((prev: FormCommonInputType) => ({
      ...prev,
      customer: [...prev.customer, { id, name }],
    }));
    setKeyword('');
  };

  useEffect(() => {
    const searchDealy = setTimeout(() => {
      getSearchCustomerListByKeyword({ keyword, customer }).then((res) => {
        setAutoSearchKeyword([...res]);
      });
    }, 200);
    return () => clearTimeout(searchDealy);
  }, [keyword]);

  useEffect(() => {
    if (lessonType === 'private' && customer.length > 0) {
      alert('개인레슨은 1명만 선택가능해요.');
      setFormData((prev: FormCommonInputType) => ({
        ...prev,
        customer: [prev.customer[0]],
      }));
    }
  }, [lessonType]);

  return (
    <div css={{ position: 'relative', width: '100%' }}>
      <Input>
        <Input.TextField
          type={'text'}
          placeholder={'회원명을 입력해주세요.'}
          css={{ width: '80%', padding: '10px 0 10px 10px' }}
          onChange={(e) => handleSearchKeywordChange(e)}
          value={keyword}
        />
      </Input>
      {keyword && autoSearchKeyword.length > 0 && (
        <AutoCompleteSearch>
          <LI.UnOrderList css={{ margin: '0' }}>
            {autoSearchKeyword.map(({ id, name }) => {
              return (
                <LI
                  key={id}
                  css={{
                    padding: '8px 12px',
                    ':hover': {
                      borderRadius: '8px',
                    },
                  }}
                  onClick={() => handleCustomerSelect(id, name)}
                >
                  {name}
                </LI>
              );
            })}
          </LI.UnOrderList>
        </AutoCompleteSearch>
      )}
      {customer.length > 0 && (
        <ul
          css={{
            position: 'relative',
            display: 'flex',
            flexWrap: 'wrap',
            width: '80%',
            margin: '12px 0 0 0',
          }}
        >
          {customer.map(({ id, name }) => {
            return <Customer key={id}>{name}</Customer>;
          })}
        </ul>
      )}
    </div>
  );
};

const AutoCompleteSearch = styled.div({
  position: 'absolute',
  width: '80%',
  minHeight: '40px',
  top: '50px',
  left: 0,
  backgroundColor: 'var(--white100)',
  boxShadow: '0px 8px 12px 0px rgba(0, 0, 0, 0.25)',
  border: '1px solid var(--grey100)',
  borderRadius: '8px',
  zIndex: 1,
});

const Customer = styled.li({
  width: '40%',
  margin: '8px 12px 0 0',
  padding: '8px 0',
  textAlign: 'center',
  backgroundColor: 'var(--green100)',
  color: 'var(--white100)',
  borderRadius: '8px',
});

export default ScheduleModalSearchInput;
