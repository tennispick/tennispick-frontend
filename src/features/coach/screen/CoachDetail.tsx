import {
  PageHeader,
  BusinessPerformance,
  CoachCustomerList,
  PersonalData,
  Button,
} from '@components/index';
import { DeleteWhiteIcon, EditWhiteIcon } from '@icons/index';
import CoachDetailInfoContainer from '../component/detail/InfoContainer';
import { deleteCoach } from '@apis/coach/coach.api';
import { useQueryClient } from '@tanstack/react-query';
import { URL_FETCH_COACH_LIST } from '@apis/coach/coach.url';

type Props = {
  coachId: string;
};

const CoachDetailScreen = ({ coachId }: Props) => {
  const queryClient = useQueryClient();

  const onClickDeleteHandler = async () => {
    const { data } = await deleteCoach({ coachId });
    if (data.affectedRows > 0) {
      alert('코치님이 삭제되었습니다.');
      queryClient.invalidateQueries({
        queryKey: [URL_FETCH_COACH_LIST],
      });
    } else alert('코치님 삭제에 실패했습니다.\n관리자에게 문의해주세요.');

    window.location.href = '/coach';
  };

  return (
    <>
      <PageHeader title={'다니엘 코치님'} link="/coach" />
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
      <CoachDetailInfoContainer coachId={coachId} />
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
          onClick={onClickDeleteHandler}
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

export default CoachDetailScreen;
