import { Divider } from '@components/index';
import PaymentTypeRow from '../PaymentTypeRow';
import SearchPeriodRow from '../SearchPeriodRow';
import Image from 'next/image';
import SalesLists from './SalesLists';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import useModal from '@hooks/useModal';
import ModalBody from './modal/ModalBody';
import SalesSummary from './SalesSummary';

type Props = {
  coachId: string;
};

const SalesContainer = ({ coachId }: Props) => {
  const { handleShowModal } = useModal({
    type: 'full',
    title: '매출 상세내역',
    children: <ModalBody coachId={coachId} />,
  });

  const handleShowDetail = () => handleShowModal();

  return (
    <>
      <div className={css({ height: '8rem' })}>
        <SearchPeriodRow />
        <PaymentTypeRow />
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
      {/* <SalesSummary data={}/> */}
      <SalesLists />
    </>
  );
};

export default SalesContainer;
