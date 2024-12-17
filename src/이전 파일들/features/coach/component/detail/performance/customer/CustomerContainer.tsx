import LessonStatusTypeRow from './LessonStatusTypeRow';
import SearchRow from './SearchRow';
import { useState } from 'react';
import { searchConditions } from '@/이전 파일들/features/coach/data/customersData';
import CustomerLists from './CustomerLists';

const checkList = [
  {
    id: 'inProgress',
    value: '수강중',
  },
  {
    id: 'expired',
    value: '수강만료',
  },
];

type Props = {
  coachId: string;
};

const CustomerContainer = ({ coachId }: Props) => {
  const [checkedItems, setCheckedItems] = useState<Array<string>>(
    checkList.map((item) => item.id),
  );

  const [keyword, setKeyword] = useState<string>('');
  const [searchCondition, setSearchCondition] = useState<string>(
    searchConditions[0].value,
  );

  const handleAllCheckboxClick = () => {
    if (checkedItems.length === checkList.length) setCheckedItems([]);
    else setCheckedItems(checkList.map((item) => item.id));
  };

  const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const checked = target.checked;
    const id = target.id;

    if (checked) setCheckedItems((prev) => [...prev, id]);
    else setCheckedItems((prev) => prev.filter((item) => item !== id));
  };

  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const handleSearchOption = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchCondition(e.target.value);

  return (
    <>
      <LessonStatusTypeRow
        checkList={checkList}
        checkedItems={checkedItems}
        handleAllCheckboxClick={handleAllCheckboxClick}
        handleCheckboxClick={handleCheckboxClick}
      />
      <SearchRow
        searchCondition={searchCondition}
        searchConditions={searchConditions}
        handleChangeKeyword={handleChangeKeyword}
        handleSearchOption={handleSearchOption}
      />
      <CustomerLists
        coachId={coachId}
        checkedItems={checkedItems}
        keyword={keyword}
        searchCondition={searchCondition}
      />
    </>
  );
};

export default CustomerContainer;
