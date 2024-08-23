import Loading from '@components/common/Loading';
import { useLessonDetailQuery } from '@features/lesson/query/LessonQuery';
import LessonDetail from '@features/lesson/screen/LessonDetail';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

type Props = {
  id: string;
};

const LessonDetailPage = ({ id }: Props) => {
  const { data, isLoading } = useLessonDetailQuery({ id: id });

  if (isLoading) return <Loading />;

  return data && <LessonDetail data={data.data} />;
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  try {
    return {
      props: {
        id: context.query.id as string,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default LessonDetailPage;
