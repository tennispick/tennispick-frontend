import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import CustomerDatail from '@features/customer/screen/CustomerDetail';

const CustomerDatailPage = ({ id }: { id: string }) => {
  return <CustomerDatail id={id} />;
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { query } = context;
  const id = query.id as unknown as string;

  try {
    return {
      props: {
        id: id,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default CustomerDatailPage;
