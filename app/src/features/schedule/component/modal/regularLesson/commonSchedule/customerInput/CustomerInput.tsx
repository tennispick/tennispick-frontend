import CustomerBlackIcon from '@icons/customer_black.svg';
import Image from 'next/image';
import ScheduleModalInput from '../../../Input';
import { getSearchCustomerListByKeyword } from 'app/src/apis/customer/customer.api';
import { ChangeEvent, useEffect, useState } from 'react';
import { LessonType } from 'app/src/features/lesson/type/lesson.type';
import AutoComplete from './AutoComplete';
import { SetStateAction } from 'app/src/types/index';
import CheckedCustomer from './CheckedCustomer';
import { CommonDataProps } from 'app/src/features/schedule/type/regularLesson';
import { css } from 'styled-system/css';
import { Flex } from 'styled-system/jsx';

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
    <div className={css({ margin: '0 0 20px 0' })}>
      <Flex alignItems="center">
        <Image
          src={CustomerBlackIcon}
          alt="scheduleType"
          width={20}
          height={20}
          className={css({ margin: '0 6px 0 0' })}
        />
        회원 선택
      </Flex>
      <div
        className={css({
          width: ' 80%',
          margin: '12px 0 0 0',
          padding: '0 0 0 2px',
        })}
      >
        <ScheduleModalInput
          id="customer"
          type="text"
          name="customer"
          value={keyword}
          onChange={onChangeCustomerInputHandler}
          placeholder="회원명으로 검색해주세요."
          className={css({
            width: '100%',
            height: '100%',
            padding: '10px 0 10px 10px',
            fontSize: '0.95rem',
            marginRight: 0,
            border: '1px solid var(--grey300)',
            borderRadius: '8px',
            outline: 0,
            zIndex: 1,
          })}
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
