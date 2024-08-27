'use client';

import Loading from '@components/common/Loading';
import { useLessonDetailQuery } from '@features/lesson/query/LessonQuery';
import LessonDetail from '@features/lesson/screen/LessonDetail';

const LessonDetailPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const { data } = useLessonDetailQuery({ id: slug });
  if (!data) return <Loading />;

  return <LessonDetail data={data} />;
};

export default LessonDetailPage;
