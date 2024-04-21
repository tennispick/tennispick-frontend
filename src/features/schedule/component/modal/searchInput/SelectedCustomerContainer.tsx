import { CommonFormInputType } from '@features/schedule/type/schedule.type';
import { SetStateAction } from '@/types/index';
import styled from '@emotion/styled';
import Image from 'next/image';
import CancelWhiteBtn from '@icons/cancel_white_btn.svg';

type CommonInputType = Pick<CommonFormInputType,'customer' >;

type Props = {
  setFormData: SetStateAction<CommonFormInputType>;
} & CommonInputType;

const ScheduleModalSearchInputSelectedCustomerContainer = ({
  customer,
  setFormData,
}: Props) => {
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
}

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

export default ScheduleModalSearchInputSelectedCustomerContainer;