import { Button } from '@/shared/components/index';

type Props = {
  onClickCloseModalHandler: () => void;
  disabled: boolean;
};

const ButtonContainer = ({ onClickCloseModalHandler, disabled }: Props) => {
  return (
    <div className="w-fit mt-3 ml-auto">
      <Button
        type="button"
        label="취소"
        variant="outline"
        size="lg"
        className="w-40 text-base rounded-xl py-4 border-0"
        onClick={onClickCloseModalHandler}
      />
      <Button
        type="submit"
        label="등록하기"
        variant="default"
        size="lg"
        className="w-40 text-base rounded-xl bg-blue-500 text-white py-4 border-0"
        disabled={disabled}
      />
    </div>
  );
};

export default ButtonContainer;