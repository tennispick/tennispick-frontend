import CommunityDetailScreen from '@features/community/screen/CommunityDetail';

const CommunityDetailPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  return <CommunityDetailScreen id={slug} />;
};

export default CommunityDetailPage;
