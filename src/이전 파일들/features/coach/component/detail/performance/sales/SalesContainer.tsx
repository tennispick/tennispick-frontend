import { Divider } from 'src/이전 파일들/components/index';
import PaymentTypeRow from '../PaymentTypeRow';
import SearchPeriodRow from '../SearchPeriodRow';
import Image from 'next/image';
import SalesLists from './SalesLists';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import useModal from 'src/이전 파일들/hooks/useModal';
import ModalBody from './modal/ModalBody';
import SalesSummary from './SalesSummary';
import {
  useCoachTotalSalesListQuery,
  useCoachTotalSalesQuery,
} from '@/이전 파일들/features/coach/query/coachQuery';
import { getDateToKoreanString } from 'src/이전 파일들/utils/date';
import { useState } from 'react';
import Loading from 'src/이전 파일들/components/common/Loading';

const checkList = [
  {
    id: 'accountTransfer',
    value: '계좌이체',
  },
  {
    id: 'card',
    value: '카드결제',
  },
  {
    id: 'cash',
    value: '현금결제',
  },
];

type Props = {
  coachId: string;
};

const SalesContainer = ({ coachId }: Props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [checkedItems, setCheckedItems] = useState<Array<string>>(
    checkList.map((item) => item.id),
  );

  const { handleShowModal } = useModal({
    type: 'full',
    title: '매출 상세내역',
    children: <ModalBody coachId={coachId} />,
  });

  const { isFetching: totalSalesFetching, data: totalSalesData } =
    useCoachTotalSalesQuery({
      page: 1,
      coachId,
      checkedItem: 'custom',
      startDate: getDateToKoreanString(startDate),
      endDate: getDateToKoreanString(endDate),
      searchCondition: 'name',
      keyword: '',
      paymentType: 'all',
    });

  const { isFetching: totalSalesListFetching, data: totalSalesListData } =
    useCoachTotalSalesListQuery({
      page: 1,
      coachId,
      checkedItem: 'custom',
      startDate: getDateToKoreanString(startDate),
      endDate: getDateToKoreanString(endDate),
      searchCondition: 'name',
      keyword: '',
      paymentType: 'all',
    });

  const handleShowDetail = () => handleShowModal();

  const handleChangeStartDate = (date: Date) => {
    if (date > endDate) setEndDate(date);

    setStartDate(date);
  };

  const handleChangeEndDate = (date: Date) => setEndDate(date);

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

  const isFetchSalesData = totalSalesFetching || !totalSalesData;
  const isFetchSalesList = totalSalesListFetching || !totalSalesListData;

  if (isFetchSalesList || isFetchSalesData) return <Loading />;

  return (
    <>
      <div className={css({ height: '8rem' })}>
        <SearchPeriodRow
          startDate={startDate}
          endDate={endDate}
          handleChangeStartDate={handleChangeStartDate}
          handleChangeEndDate={handleChangeEndDate}
        />
        <PaymentTypeRow
          checkList={checkList}
          checkedItems={checkedItems}
          handleAllCheckboxClick={handleAllCheckboxClick}
          handleCheckboxClick={handleCheckboxClick}
        />
      </div>
      <div
        className={flex({
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '1.25rem',
        })}
      >
        <div>매출 내역조회</div>
        <div
          className={flex({
            alignItems: 'center',
            cursor: 'pointer',
          })}
          onClick={handleShowDetail}
        >
          <div
            className={css({ color: 'var(--business-color)', fontWeight: 600 })}
          >
            내역 상세보기
          </div>
          <Image
            width={20}
            height={20}
            src={'/icons/arrow/business_color_right_arrow.svg'}
            alt={'arrow'}
          />
        </div>
      </div>
      <Divider margin="1rem 0" />
      <SalesSummary data={totalSalesData[0]} />
      <SalesLists data={totalSalesListData?.pages} />
    </>
  );
};

export default SalesContainer;
