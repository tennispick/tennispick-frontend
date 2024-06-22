import { PageHeader } from '@components/index';
import { useCustomerDetailQuery } from '../query/CustomerQuery';
import Loading from '@components/common/Loading';
import CustomerInfo from '../component/CustomerInfo';
import CustomerPayment from '../component/Payment';
import ManageContainer from '../component/detail/manage/ManageContainer';
import { isEmptyObj } from '@utils/object';
// import ModalCustomer from '@components/layer/calendar/Customer';
// import ModalCalendar from '@components/layer/calendar/Calendar';

type Props = {
  id: string;
};

const CustomerDatail = ({ id }: Props) => {
  const { data, isLoading } = useCustomerDetailQuery({ id });

  if (isEmptyObj(data) || isLoading) return <Loading />;

  const customer = data;

  return (
    <div css={{ position: 'relative', height: '100%' }}>
      <PageHeader title={`${customer.name} 님`} link="/customer" />
      <CustomerInfo customerId={id} customer={customer} />
      <div
        css={{
          position: 'relative',
          height: 'calc(65% - 52px)',
          overflowY: 'scroll',
        }}
      >
        <div
          css={{
            height: '100%',
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <CustomerPayment id={id} />
          <ManageContainer customerId={id} />
        </div>
        {/* <div
          css={{
            margin: '16px 0 0 0',
            padding: '12px',
            backgroundColor: 'var(--grey400)',
            borderRadius: '16px',
          }}
        >
          <div
            css={{
              position: 'relative',
              height: '100%',
              backgroundColor: 'var(--white100)',
            }}
          >
            <div
              css={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              }}
            >
              <ModalCustomer customerInfo={customer} />
              <ModalCalendar day={new Date()} />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CustomerDatail;
