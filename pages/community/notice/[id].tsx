import { Input, PageHeader } from '@components/index';
import styled from '@emotion/styled';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

const CommunityDetail = ({ id }: { id: string }) => {
	// TODO id === string 일 때 구분

	return (
		<>
			<PageHeader title={'공지사항'} />
			<div
				css={{
					position: 'relative',
					height: 'calc(100% - 52px)',
				}}
			>
				<div
					css={{
						position: 'relative',
					}}
				>
					<Row>
						<InputHead>제목</InputHead>
						<InputItem>
							<Input.TextField
								placeholder={'공지사항의 제목을 입력해주세요.'}
							/>
						</InputItem>
					</Row>
				</div>
			</div>
		</>
	);
};

const Row = styled.div({
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	height: '46px',
	lineHeight: '38px',
	padding: '4px 12px',
	margin: '8px 0',
});
const InputHead = styled.div({
	fontSize: '1rem',
	fontWeight: '600',
	width: '10%',
	padding: '4px 0',
});
const InputItem = styled((props: any) => <Input {...props} />)(
	{
		position: 'relative',
		height: '100%',
	},
	(props) => ({
		width: props.width ? props.width : '30%',
	}),
);

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

export default CommunityDetail;
