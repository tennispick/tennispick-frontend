import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import CoachDetailScreen from '@features/coach/screen/CoachDetail';

const CustomerDatailPage = ({ id }: { id: string }) => {
  return <CoachDetailScreen coachId={id} />;
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
