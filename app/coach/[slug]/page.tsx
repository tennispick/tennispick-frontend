import CoachDetailScreen from '@features/coach/screen/CoachDetail';

const CoachDetailPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  return <CoachDetailScreen id={slug} />;
};

export default CoachDetailPage;
