import Divider from "@components/common/Divider";
import styled from "@emotion/styled";
import { AppGreenIcon, BusinessSingleArrowRight } from "@icons/index";
import { CSS_TYPE } from "@styles/styles";
import Image from "next/image";

const BusinessPerformance = ({ ...props }) => {
  return (
    <section {...props}>
      <SettlementContainer>
        <h4>결산내역</h4>
        <SettlementTableContainer>
          <SettlementSectionContainer
            width={'15%'}
            margin={'12px'}
          >
            <SettlementWrapper>
              <div>
                <DescriptionIconWrapper>
                  <Image
                    src={AppGreenIcon}
                    alt={'total sales'}
                  />
                </DescriptionIconWrapper>
              </div>
              <div>999,999,999 원</div>
              <div>전체 매출현황</div>
            </SettlementWrapper>
          </SettlementSectionContainer>
          <SettlementSectionContainer
            width={'70%'}
            margin={'12px 12px 12px 0'}
          >이번달 매출현황</SettlementSectionContainer>
          <section
            css={{
              position: 'relative',
              width: '15%'
            }}
          >
            <GoDetailSectionContainer>
              <span css={{ color: 'var(--business-color)', fontWeight: '500' }}>내역 상세보기</span>
              <Image
                src={BusinessSingleArrowRight}
                alt={"arrow right"}
              />
            </GoDetailSectionContainer>
          </section>
        </SettlementTableContainer>
      </SettlementContainer>
      <Divider width={"100%"} margin={'12px 0'} />
      <CustomerContainer>
        <h4>수강생 목록</h4>
        <ul>
          <li>수강생 한명씩</li>
        </ul>
      </CustomerContainer>
    </section>
  )
}

const SettlementContainer = styled.div({
  position: 'relative',
  height: 'calc(28% - 12px)'
})
const SettlementTableContainer = styled.div({
  position: 'relative',
  display: 'flex',
  height: 'calc(85% - 12px)',
  margin: '12px 0 0 0',
  backgroundColor: 'var(--basic-grey4-color)',
  borderRadius: '25px'
})
const SettlementSectionContainer = styled.section<CSS_TYPE>(
  {
    position: 'relative',
    backgroundColor: 'var(--basic-white-color)',
    borderRadius: '16px',
    textAlign: 'center'
  },
  props => ({
    width: props.width,
    margin: props.margin
  })
)
const SettlementWrapper = styled.div({
  margin: '1.5rem 0 0 0'
})
const DescriptionIconWrapper = styled.label({
  position: 'relative',
  display: 'inline-block',
  width: '40px',
  height: '40px',
  backgroundColor: '#B1DDD2',
  borderRadius: '50px',

  'img': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
})
const GoDetailSectionContainer = styled.div({
  position: 'absolute',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
})
const CustomerContainer = styled.div({
  position: 'relative',
  height: 'calc(72% - 12px)',
  borderBottom: '1px solid var(--basic-grey-color)'
})

export default BusinessPerformance;