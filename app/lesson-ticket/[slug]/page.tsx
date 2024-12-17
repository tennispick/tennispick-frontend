'use client';

import Loading from 'src/이전 파일들/components/common/Loading';
import { useLessonDetailQuery } from '@/이전 파일들/features/lesson/query/LessonQuery';
import LessonDetail from '@/이전 파일들/features/lesson/screen/LessonDetail';

const LessonDetailPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const { data } = useLessonDetailQuery({ id: slug });
  if (!data) return <Loading />;

  return <LessonDetail data={data} />;
};

export default LessonDetailPage;
