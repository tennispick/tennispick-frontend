import CustomerBlackIcon from '@icons/customer_black.svg';
import Image from 'next/image';
import ScheduleModalInput from '../Input';
import { useState, useEffect } from 'react';
import { getSearchCustomerListByKeyword } from '@apis/customer/customer.api';
import InputAutoComplete from '../regularLesson/commonSchedule/customerInput/AutoComplete';

type Props = {
  setCustomerLesson: any;
}

const CustomerSearch = ({ setCustomerLesson }: Props) => {

  const [keyword, setKeyword] = useState<string>('');
  const [searchedCustomerData, setSearchedCustomerData] = useState([
    {
      id: '',
      name: '',
    },
  ]);

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value);

  const onClickSearchedCustomerHandler = (id: string, name: string) => {
    setCustomerLesson({
      id: id,
      name: name,
    });
    setKeyword('');
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getSearchCustomerListByKeyword({
        lesson: '',
        lessonType: 'private',
        keyword: keyword,
        customer: [],
      });
      setSearchedCustomerData([ ...response ]);
    };

    fetchData();
  }, [keyword]);

  const isShowAutoComplete = keyword && searchedCustomerData.length > 0;

  return (
    <div css={{
      display: 'flex',
      alignItems: 'center',
      height: '48px',
      borderBottom: '1px solid var(--grey100)',
      padding: '0 0 12px 0',
      margin: '0 0 12px 0'
    }}>
      <div css={{
        display: 'flex',
        alignItems: 'center',
        width: '140px',
        height: '100%',
        margin: '0 12px 0 0'
      }}>
        <Image
          src={CustomerBlackIcon}
          alt="customer"
          width={20}
          height={20}
          css={{ margin: '0 8px 0 0' }}
        />
        회원 선택
      </div>
      <ScheduleModalInput
        id="customer"
        type="text"
        name="customer"
        value={keyword}
        onChange={onChangeInputHandler}
        placeholder="회원명으로 검색해주세요."
        css={{
          position: 'relative',
          width: '100%',
          height: '100%',
          padding: '8px 0 8px 12px',
          fontSize: '0.875rem',
          marginRight: 0,
          border: '1px solid var(--grey300)',
          borderRadius: '8px',
          zIndex: '1',
        }}
      >
        {isShowAutoComplete && (
          <InputAutoComplete
            data={searchedCustomerData}
            onClickCustomerHandler={onClickSearchedCustomerHandler}
          />
        )}
      </ScheduleModalInput>
    </div>
  )
};

export default CustomerSearch;