import { Input, NormalList as LI } from '@components/index';
import styled from '@emotion/styled';
import { ChangeEvent, useEffect, useState } from 'react';
import { getSearchCustomerListByKeyword } from '@apis/customer/customer.api';
import { CommonFormInputType } from '@features/schedule/type/schedule.type';
import { SetStateAction } from '@/types/index';
import Image from 'next/image';
import CancelWhiteBtn from '@icons/cancel_white_btn.svg';

type CommonInputType = Pick<CommonFormInputType, 'customer' | 'lessonType'>;
type Props = {
  setFormData: SetStateAction<CommonFormInputType>;
} & CommonInputType;

const ScheduleModalSearchInput = ({
  customer,
  lessonType,
  setFormData,
}: Props) => {
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

  useEffect(() => {
    const searchDealy = setTimeout(async () => {
      await getSearchCustomerListByKeyword({ keyword, customer }).then(
        (res) => {
          setAutoSearchKeyword([...res]);
        },
      );
    }, 200);
    return () => clearTimeout(searchDealy);
  }, [keyword]);

  useEffect(() => {
    if (lessonType === 'private' && customer.length > 0) {
      alert('개인레슨은 1명만 선택가능해요.');
      setFormData((prev) => ({
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
        <ScheduleModalSearchInput.AutoCompleteSearchContainer
          lessonType={lessonType}
          customer={customer}
          setFormData={setFormData}
          setKeyword={setKeyword}
          autoSearchKeyword={autoSearchKeyword}
        />
      )}
      {customer.length > 0 && (
        <ScheduleModalSearchInput.SelectedCustomerContainer
          customer={customer}
          setFormData={setFormData}
        />
      )}
    </div>
  );
};

const AutoCompleteSearchContainer = ({
  lessonType,
  customer,
  setFormData,
  setKeyword,
  autoSearchKeyword,
}: Props & {
  setKeyword: SetStateAction<string>;
  autoSearchKeyword: Array<{
    id: string;
    name: string;
  }>;
}) => {
  const handleCustomerSelect = (id: string, name: string) => {
    // 개인레슨일 때, 이미 선택된 사람이 있으면 선택된 사람으로 변경
    if (lessonType === 'private' && customer.length > 0) {
      setFormData((prev) => ({
        ...prev,
        customer: [{ id, name }],
      }));
      setKeyword('');
      return false;
    }

    setFormData((prev) => ({
      ...prev,
      customer: [...prev.customer, { id, name }],
    }));
    setKeyword('');
  };

  return (
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
  );
};

const SelectedCustomerContainer = ({
  customer,
  setFormData,
}: Pick<Props, 'customer' | 'setFormData'>) => {
  const onCancelCustomer = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      customer: prev.customer.filter((el) => el.id !== id),
    }));
  };

  return (
    <ul
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '80%',
        margin: '12px 0 0 0',
      }}
    >
      {customer.map(({ id, name }) => {
        return (
          <Customer key={id}>
            {name}
            <Image
              src={CancelWhiteBtn}
              alt={'close'}
              css={{
                cursor: 'pointer',
              }}
              width={20}
              height={20}
              onClick={() => onCancelCustomer(id)}
            />
          </Customer>
        );
      })}
    </ul>
  );
};

const AutoCompleteSearch = styled.div({
  position: 'absolute',
  width: '80%',
  minHeight: '40px',
  maxHeight: '180px',
  top: '50px',
  left: 0,
  backgroundColor: 'var(--white100)',
  boxShadow: '0px 8px 12px 0px rgba(0, 0, 0, 0.25)',
  border: '1px solid var(--grey100)',
  borderRadius: '8px',
  overflowY: 'scroll',
  zIndex: 1,
});

const Customer = styled.li({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  width: '48%',
  margin: '8px 0 0 0',
  padding: '8px 0',
  textAlign: 'center',
  backgroundColor: 'var(--green100)',
  color: 'var(--white100)',
  borderRadius: '8px',
});

ScheduleModalSearchInput.AutoCompleteSearchContainer =
  AutoCompleteSearchContainer;
ScheduleModalSearchInput.SelectedCustomerContainer = SelectedCustomerContainer;

export default ScheduleModalSearchInput;
