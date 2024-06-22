import { Button } from '@components/index';
import { DeleteWhiteIcon, EditWhiteIcon } from '@icons/index';
import { deleteCoach } from '@apis/coach/coach.api';
import { URL_COACH } from '@apis/coach/coach.url';
import { useQueryClient } from '@tanstack/react-query';

interface Props {
  coachId: string;
}

const ButtonContainer = ({ coachId }: Props) => {
  const queryClient = useQueryClient();

  const onClickDeleteHandler = async () => {
    if (!window.confirm('정말로 삭제하시겠습니까?')) return;

    const { data } = await deleteCoach({ coachId });
    if (data.affectedRows > 0) {
      alert('코치님이 삭제되었습니다.');
      queryClient.invalidateQueries({
        queryKey: [URL_COACH],
      });
    } else alert('코치님 삭제에 실패했습니다.\n관리자에게 문의해주세요.');

    window.location.href = '/coach';
  };

  return (
    <div
      css={{
        display: 'flex',
        height: '46px',
        justifyContent: 'end',
        margin: '12px 0 0 0',
      }}
    >
      <Button
        label="코치 삭제하기"
        variant="iconBtn"
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
        label="코치 수정하기"
        variant="iconBtn"
        src={EditWhiteIcon}
        css={{
          border: 0,
          backgroundColor: 'var(--business-active-color)',
          color: 'var(--white100)',
          padding: '12px 16px',
        }}
      />
    </div>
  );
};

export default ButtonContainer;
