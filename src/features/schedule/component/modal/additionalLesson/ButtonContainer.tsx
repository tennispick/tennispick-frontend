import { Button } from '@components/index';

type Props = {
  onClickCloseModalHandler: () => void;
  disabled: boolean;
};

const ButtonContainer = ({ onClickCloseModalHandler, disabled }: Props) => {
  return (
    <div css={{ width: 'fit-content', margin: '12px 0 0 auto' }}>
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
        onClick={onClickCloseModalHandler}
      />
      <Button
        type="submit"
        label="등록하기"
        css={{
          width: '160px',
          fontSize: '1rem',
          borderRadius: '12px',
          backgroundColor: 'var(--blue500)',
          color: 'var(--white100)',
          padding: '16px 0',
          border: 0,
        }}
        disabled={disabled}
      />
    </div>
  );
};

export default ButtonContainer;
