import NormalList from '@components/common/NormalList';
import styled from '@emotion/styled';

const CustomerLessonList = () => {
	return (
		<section
			css={{
				position: 'relative',
				width: '22.5%',
				height: '100%',
				margin: '0 12px',
			}}
		>
			<div css={{ height: '24px', fontWeight: '600', margin: '0 0 12px 0' }}>
				수강목록
			</div>
			<div
				css={{
					position: 'relative',
					height: 'calc(100% - 36px)',
					backgroundColor: 'var(--basic-grey4-color)',
					borderRadius: '16px',
					padding: '8px',
				}}
			>
				<div
					css={{
						height: '48px',
						lineHeight: '48px',
						backgroundColor: 'var(--basic-white-color)',
						borderRadius: '16px',
						boxShadow: '1px 1px 25px 0px rgba(132, 132, 132, 0.10)',
						padding: '0 16px',
						fontWeight: '400',
					}}
				>
					총 5건
				</div>
				<div
					css={{
						height: 'calc(100% - 56px)',
						backgroundColor: 'var(--basic-white-color)',
						borderRadius: '16px',
						boxShadow: '1px 1px 25px 0px rgba(132, 132, 132, 0.10)',
						padding: '12px 16px',
						margin: '8px 0 0 0',
					}}
				>
					<div
						css={{
							position: 'relative',
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<ListHeader css={{ width: '20%' }}>상태</ListHeader>
						<ListHeader css={{ width: '40%' }}>강습유형</ListHeader>
						<ListHeader css={{ width: '40%' }}>담당코치</ListHeader>
					</div>
					<NormalList.UnOrderList>
						<NormalList css={{ padding: '8px 0' }}>
							<ListData css={{ width: '20%' }}>수강중</ListData>
							<ListData css={{ width: '40%' }}>개인레슨(20분)</ListData>
							<ListData css={{ width: '40%' }}>다니엘 코치</ListData>
						</NormalList>
						<NormalList css={{ padding: '8px 0', opacity: '0.3' }}>
							<ListData css={{ width: '20%' }}>수강종료</ListData>
							<ListData css={{ width: '40%' }}>개인레슨(20분)</ListData>
							<ListData css={{ width: '40%' }}>다니엘 코치</ListData>
						</NormalList>
						<NormalList css={{ padding: '8px 0', opacity: '0.3' }}>
							<ListData css={{ width: '20%' }}>수강종료</ListData>
							<ListData css={{ width: '40%' }}>개인레슨(20분)</ListData>
							<ListData css={{ width: '40%' }}>다니엘 코치</ListData>
						</NormalList>
						<NormalList css={{ padding: '8px 0', opacity: '0.3' }}>
							<ListData css={{ width: '20%' }}>수강종료</ListData>
							<ListData css={{ width: '40%' }}>개인레슨(20분)</ListData>
							<ListData css={{ width: '40%' }}>다니엘 코치</ListData>
						</NormalList>
						<NormalList css={{ padding: '8px 0', opacity: '0.3' }}>
							<ListData css={{ width: '20%' }}>수강종료</ListData>
							<ListData css={{ width: '40%' }}>개인레슨(20분)</ListData>
							<ListData css={{ width: '40%' }}>다니엘 코치</ListData>
						</NormalList>
					</NormalList.UnOrderList>
				</div>
			</div>
		</section>
	);
};

const ListHeader = styled.div({
	textAlign: 'center',
	fontWeight: '600',
});

const ListData = styled.div({
	textAlign: 'center',
	fontWeight: '600',
});

export default CustomerLessonList;
