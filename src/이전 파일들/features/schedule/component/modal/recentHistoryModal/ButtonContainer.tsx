import { Button } from 'src/이전 파일들/components/index';
import { css } from 'styled-system/css';

type Props = {
  checkHistoryId: string;
  handleCloseModal: () => void;
  handleSaveClick: () => void;
};

const ScheduleModalRecentHistoryModalButtonContainer = ({
  checkHistoryId,
  handleCloseModal,
  handleSaveClick,
}: Props) => {
  return (
    <div className={css({ width: 'fit-content', margin: '12px 0 0 auto' })}>
      <Button
        type="button"
        label="취소"
        css={{
          width: '160px',
          fontSize: '1rem',
          borderRadius: '12px',
          padding: '16px 0',
          border: 0,
        }}
        onClick={handleCloseModal}
      />
      <Button
        type="button"
        label="불러오기"
        css={{
          width: '160px',
          fontSize: '1rem',
          borderRadius: '12px',
          backgroundColor: 'var(--blue500)',
          color: 'var(--white100)',
          padding: '16px 0',
          border: 0,
        }}
        onClick={handleSaveClick}
        disabled={checkHistoryId === ''}
      />
    </div>
  );
};

export default ScheduleModalRecentHistoryModalButtonContainer;
