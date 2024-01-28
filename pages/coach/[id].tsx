import {
  PageHeader,
  BusinessPerformance,
  CoachCustomerList,
  PersonalData,
  Button,
} from '@components/index';
import { DeleteWhiteIcon, EditWhiteIcon } from '@icons/index';

const CoachDetail = () => {
  return (
    <>
      <PageHeader title={'다니엘 코치님'} />
      <div
        css={{
          position: 'relative',
          display: 'flex',
          height: 'calc(90% - 24px)',
        }}
      >
        <PersonalData
          css={{
            position: 'relative',
            width: '30%',
            height: '100%',
            padding: '0 32px 0 0',
          }}
        />
        <div
          css={{
            position: 'relative',
            width: '70%',
            height: '100%',
          }}
        >
          <BusinessPerformance />
          <CoachCustomerList />
        </div>
      </div>
      <div
        css={{
          position: 'relative',
          display: 'flex',
          height: '46px',
          justifyContent: 'end',
          margin: '12px 0 0 0',
        }}
      >
        <Button
          label={'정보 삭제하기'}
          variant={'iconBtn'}
          src={DeleteWhiteIcon}
          css={{
            border: 0,
            backgroundColor: 'var(--red200)',
            color: 'var(--white100)',
            padding: '12px 16px',
            margin: '0 12px 0 0',
          }}
        />
        <Button
          label={'정보 수정하기'}
          variant={'iconBtn'}
          src={EditWhiteIcon}
          css={{
            border: 0,
            backgroundColor: 'var(--business-active-color)',
            color: 'var(--white100)',
            padding: '12px 16px',
          }}
        />
      </div>
    </>
  );
};

export default CoachDetail;
