import { Input } from '@components/index';
import { ChangeEvent, useEffect, useState } from 'react';
import { getSearchCustomerListByKeyword } from '@apis/customer/customer.api';
import {
  CommonFormInputType,
  FormAllOnceCreateType,
} from '@features/schedule/type/schedule.type';
import { SetStateAction } from '@/types/index';
import AutoCompleteSearchDropdown from './AutoCompleteSearchDropdown';
import SelectedCustomerContainer from './SelectedCustomerContainer';
import { CoachListData } from '@apis/coach/coach.type';
import { CourtListData } from '@apis/court/court.type';
import { CustomerLessonListQueryData } from '@features/customer/type/customer.type';

type CommonInputType = Pick<
  CommonFormInputType,
  'customer' | 'lesson' | 'lessonType'
>;
type Props = {
  setFormData: SetStateAction<CommonFormInputType>;
  setAllOnceFormData: SetStateAction<FormAllOnceCreateType>;
  lessonList: CustomerLessonListQueryData[] | undefined;
  coachList: CoachListData[] | undefined;
  courtList: CourtListData[] | undefined;
} & CommonInputType;

const ScheduleModalSearchInput = ({
  customer,
  lesson,
  lessonType,
  setFormData,
}: Props) => {
  const [customerId, setCustomerId] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
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
    const searchDelay = setTimeout(async () => {
      await getSearchCustomerListByKeyword({
        lesson,
        lessonType,
        keyword,
        customer,
      }).then((res) => {
        setAutoSearchKeyword([...res]);
      });
    }, 100);
    return () => clearTimeout(searchDelay);
  }, [keyword]);

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
        <AutoCompleteSearchDropdown
          lesson={lesson}
          lessonType={lessonType}
          customer={customer}
          setFormData={setFormData}
          setKeyword={setKeyword}
          autoSearchKeyword={autoSearchKeyword}
          setCustomerId={setCustomerId}
          setShowModal={setShowModal}
        />
      )}
      {customer.length > 0 && (
        <SelectedCustomerContainer
          customer={customer}
          setFormData={setFormData}
        />
      )}
    </div>
  );
};

export default ScheduleModalSearchInput;
