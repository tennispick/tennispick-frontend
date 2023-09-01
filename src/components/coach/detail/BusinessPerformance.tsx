import Divider from '@components/common/Divider';
import styled from '@emotion/styled';
import {
	AppGreenIcon,
	AppCreditCardBlueIcon,
	AppAtmPurpleIcon,
	AppDolorYellowIcon,
	BusinessSingleArrowRight,
} from '@icons/index';
import { CSS_TYPE } from '@styles/styles';
import Image from 'next/image';

const BusinessPerformance = () => {
	return (
		<>
			<SettlementContainer>
				<h4>결산내역</h4>
				<SettlementTableContainer>
					<SectionContainer width={'15%'} margin={'12px'}>
						<SettlementWrapper margin={'1.5rem 0 0 0'}>
							<div>
								<DescriptionIconWrapper backgroundColor={'#B1DDD2'}>
									<Image src={AppGreenIcon} alt={'total sales'} />
								</DescriptionIconWrapper>
							</div>
							<PayMoney>999,999,999 원</PayMoney>
							<div>전체 매출현황</div>
						</SettlementWrapper>
					</SectionContainer>
					<SectionContainer width={'70%'} margin={'12px 12px 12px 0'}>
						<div
							css={{
								position: 'relative',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								height: '100%',
							}}
						>
							<div
								css={{
									margin: '0 auto',
								}}
							>
								이번달 매출현황
							</div>
							<Divider type={'vertical'} height={'70%'} />
							<SettlementWrapper width={'25%'}>
								<div>
									<DescriptionIconWrapper backgroundColor={'#D0D9FF'}>
										<Image src={AppCreditCardBlueIcon} alt={'credit card'} />
									</DescriptionIconWrapper>
								</div>
								<PayMoney>999,999,999 원</PayMoney>
								<div>카드 결제</div>
							</SettlementWrapper>
							<SettlementWrapper width={'25%'}>
								<div>
									<DescriptionIconWrapper backgroundColor={'#EFD9EA'}>
										<Image src={AppAtmPurpleIcon} alt={'atm'} />
									</DescriptionIconWrapper>
								</div>
								<PayMoney>999,999,999 원</PayMoney>
								<div>계좌 이체</div>
							</SettlementWrapper>
							<SettlementWrapper width={'25%'}>
								<div>
									<DescriptionIconWrapper backgroundColor={'#FFF1DD'}>
										<Image src={AppDolorYellowIcon} alt={'dolor'} />
									</DescriptionIconWrapper>
								</div>
								<PayMoney>999,999,999 원</PayMoney>
								<div>현금 결제</div>
							</SettlementWrapper>
						</div>
					</SectionContainer>
					<section
						css={{
							position: 'relative',
							width: '15%',
						}}
					>
						<GoDetailSectionContainer>
							<span
								css={{
									color: 'var(--business-color)',
									fontWeight: '500',
									cursor: 'pointer',
								}}
								onClick={() => {}}
							>
								내역 상세보기
							</span>
							<Image src={BusinessSingleArrowRight} alt={'arrow right'} />
						</GoDetailSectionContainer>
					</section>
				</SettlementTableContainer>
			</SettlementContainer>
			<Divider width={'100%'} margin={'12px 0'} />
		</>
	);
};

const SettlementContainer = styled.section({
	position: 'relative',
	height: 'calc(28% - 12px)',
});
const SettlementTableContainer = styled.div({
	position: 'relative',
	display: 'flex',
	height: 'calc(85% - 12px)',
	margin: '12px 0 0 0',
	backgroundColor: 'var(--basic-grey4-color)',
	borderRadius: '25px',
});
const SectionContainer = styled.section<CSS_TYPE>(
	{
		position: 'relative',
		backgroundColor: 'var(--basic-white-color)',
		borderRadius: '16px',
		textAlign: 'center',
	},
	(props) => ({
		width: props.width,
		margin: props.margin,
	}),
);
const SettlementWrapper = styled.div<CSS_TYPE>({}, (props) => ({
	width: props.width,
	margin: props.margin ? props.margin : '0',
}));
const DescriptionIconWrapper = styled.label<CSS_TYPE>(
	{
		position: 'relative',
		display: 'inline-block',
		width: '40px',
		height: '40px',
		borderRadius: '50px',

		img: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
		},
	},
	(props) => ({
		backgroundColor: props.backgroundColor,
	}),
);
const PayMoney = styled.div({
	fontWeight: '500',
});
const GoDetailSectionContainer = styled.div({
	position: 'absolute',
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
});

export default BusinessPerformance;
