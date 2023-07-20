import BusinessPerformance from "@components/coach/detail/BusinessPerformance";
import PersonalData from "@components/coach/detail/PersonalData";
import Button from "@components/common/Button";
import PageHeader from "@components/common/PageHeader";
import { DeleteWhiteIcon, EditWhiteIcon } from "@icons/index";

const CoachDetail = () => {

  console.log('상세 페이지');

  return (
    <>
      <PageHeader title={"다니엘 코치님"} />
      <div
        css={{
          position: 'relative',
          display: 'flex',
          height: 'calc(100% - 98px)',
        }}
      >
        <PersonalData
          css={{
            position: 'relative',
            width: '35%',
            height: '100%'
          }}
        />
        <BusinessPerformance
          css={{
            position: 'relative',
            width: '65%',
            height: '100%'
          }}
        />
      </div>
      <div
        css={{
          position: 'relative',
          display: 'flex',
          height: '46px',
          justifyContent: 'end',
          margin: '12px 0 0 0'
        }
        }>
        <Button
          label={'정보 삭제하기'}
          variant={'iconBtn'}
          src={DeleteWhiteIcon}
          css={{
            border: 0,
            backgroundColor: 'var(--basic-red2-color)',
            color: 'var(--basic-white-color)',
            padding: '12px 16px',
            margin: '0 12px 0 0'
          }}
        />
        <Button
          label={'정보 수정하기'}
          variant={'iconBtn'}
          src={EditWhiteIcon}
          css={{
            border: 0,
            backgroundColor: 'var(--business-active-color)',
            color: 'var(--basic-white-color)',
            padding: '12px 16px'
          }}
        />
      </div>
    </>
  )
}

export default CoachDetail;