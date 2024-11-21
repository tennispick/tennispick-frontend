'use client';

import Loading from 'app/src/components/common/Loading';
import { useLessonDetailQuery } from 'app/src/features/lesson/query/LessonQuery';
import LessonDetail from 'app/src/features/lesson/screen/LessonDetail';

const LessonDetailPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const { data } = useLessonDetailQuery({ id: slug });
  if (!data) return <Loading />;

  return <LessonDetail data={data} />;
};

export default LessonDetailPage;
