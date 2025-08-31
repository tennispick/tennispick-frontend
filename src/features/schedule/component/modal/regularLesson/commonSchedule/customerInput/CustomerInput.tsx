import CustomerBlackIcon from '@icons/customer_black.svg';
import Image from 'next/image';
import ScheduleModalInput from '../../../Input';
import { getSearchCustomerListByKeyword } from '@apis/customer/customer.api';
import { ChangeEvent, useEffect, useState } from 'react';
import { LessonType } from '@features/lesson/type/lesson.type';
import AutoComplete from './AutoComplete';
import { SetStateAction } from '@/types/index';
import CheckedCustomer from './CheckedCustomer';
import { CommonDataProps } from '@features/schedule/type/regularLesson';

type Props = {
  lessonType: LessonType;
  customer: { id: string; name: string }[];
  lesson: string;
  setCommonData: SetStateAction<CommonDataProps>;
  setCustomerId: SetStateAction<string>;
};

const ScheduleModalRegularLessonCommonScheduleCustomerInput = ({
  lessonType,
  lesson,
  customer,
  setCommonData,
  setCustomerId,
}: Props) => {
  const [keyword, setKeyword] = useState<string>('');
  const [searchedCustomerData, setSearchedCustomerData] = useState([
    {
      id: '',
      name: '',
    },
  ]);

  const onChangeCustomerInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onClickSearchedCustomerHandler = (id: string, name: string) => {
    setCommonData((prev: CommonDataProps) => {
      const customerItem =
        lessonType === 'private' && customer.length > 0
          ? [{ id, name }]
          : [...prev.customer, { id, name }];

      return {
        ...prev,
        customer: customerItem,
      };
    });
    setKeyword('');
    setCustomerId(id);
  };

  const onClickCustomerCancelHandler = (id: string) => {
    setCommonData((prev) => ({
      ...prev,
      lesson: '',
      customer: prev.customer.filter((el) => el.id !== id),
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getSearchCustomerListByKeyword({
        lesson: lesson,
        lessonType: lessonType,
        keyword: keyword,
        customer: customer,
      });
      setSearchedCustomerData([...response]);
    };

    fetchData();
  }, [keyword]);

  const isShowAutoComplete = keyword && searchedCustomerData.length > 0;

  return (
    <div className="mb-5">
      <div className="flex items-center">
        <Image
          src={CustomerBlackIcon}
          alt="scheduleType"
          width={20}
          height={20}
          className="mr-1.5"
        />
        회원 선택
      </div>
      <div className="w-4/5 mt-3 pl-0.5">
        <ScheduleModalInput
          id="customer"
          type="text"
          name="customer"
          value={keyword}
          onChange={onChangeCustomerInputHandler}
          placeholder="회원명으로 검색해주세요."
          className="w-full h-full py-2.5 pl-2.5 text-base mr-0 border border-gray-300 rounded-lg outline-none z-10"
        >
          {isShowAutoComplete && (
            <AutoComplete
              data={searchedCustomerData}
              onClickCustomerHandler={onClickSearchedCustomerHandler}
            />
          )}
        </ScheduleModalInput>
      </div>
      {customer.length > 0 && (
        <CheckedCustomer
          customer={customer}
          onClickCancelCustomerHandler={onClickCustomerCancelHandler}
        />
      )}
    </div>
  );
};

export default ScheduleModalRegularLessonCommonScheduleCustomerInput;
