import { DeleteWhiteIcon, EditWhiteIcon } from '@icons/index';
import { deleteCoach } from '@apis/coach/coach.api';
import { URL_COACH } from '@apis/coach/coach.url';
import { useQueryClient } from '@tanstack/react-query';
import { flex } from 'styled-system/patterns';
import IconButton from '@components/button/IconButton';

type Props = {
  coachId: string;
};

const ButtonContainer = ({ coachId }: Props) => {
  const queryClient = useQueryClient();

  const handleDeleteClick = async () => {
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

  const handleModifyClick = () => {};

  return (
    <div
      className={flex({ height: '46px', justifyContent: 'end', gap: '8px' })}
    >
      <IconButton
        size="lg"
        variant="negative"
        label={'코치 삭제하기'}
        iconSrc={DeleteWhiteIcon}
        iconAlign="left"
        iconAlt="delete"
        onClick={handleDeleteClick}
      />
      <IconButton
        size="lg"
        variant="primary"
        label={'코치 수정하기'}
        iconSrc={EditWhiteIcon}
        iconAlign="left"
        iconAlt="modify"
        onClick={handleModifyClick}
      />
    </div>
  );
};

export default ButtonContainer;
