import CustomerBlackIcon from '@icons/customer_black.svg';
import Image from 'next/image';
import ScheduleModalInput from '../Input';
import { useState, useEffect } from 'react';
import { getSearchCustomerListByKeyword } from '@apis/customer/customer.api';
import InputAutoComplete from '../regularLesson/commonSchedule/customerInput/AutoComplete';

type Props = {
  setCustomerLesson: any;
  setCustomerIdHandler: (id: string) => void;
};

const CustomerSearch = ({ setCustomerLesson, setCustomerIdHandler }: Props) => {
  const [keyword, setKeyword] = useState<string>('');
  const [searchedCustomerData, setSearchedCustomerData] = useState([
    {
      id: '',
      name: '',
    },
  ]);

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const onClickSearchedCustomerHandler = (id: string, name: string) => {
    setCustomerIdHandler(id);
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
      setSearchedCustomerData([...response]);
    };

    fetchData();
  }, [keyword]);

  const isShowAutoComplete = keyword && searchedCustomerData.length > 0;

  return (
    <div className="flex items-center h-12 border-b border-gray-200 pb-3 mb-3">
      <div className="flex items-center w-[140px] h-full mr-3">
        <Image
          src={CustomerBlackIcon}
          alt="customer"
          width={20}
          height={20}
          className="mr-2"
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
        className="relative w-full h-full py-2 pl-3 text-sm mr-0 border border-gray-300 rounded-lg z-10"
      >
        {isShowAutoComplete && (
          <InputAutoComplete
            data={searchedCustomerData}
            onClickCustomerHandler={onClickSearchedCustomerHandler}
          />
        )}
      </ScheduleModalInput>
    </div>
  );
};

export default CustomerSearch;
