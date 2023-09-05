import { GetServerSideProps, GetServerSidePropsContext } from 'next';

const CommunityDetail = ({ id }: { id: string }) =>{

	// TODO id === string 일 때 구분

  return(
    <>
      커뮤니티 상세 페이지
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async(context: GetServerSidePropsContext) =>{

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

export default CommunityDetail;