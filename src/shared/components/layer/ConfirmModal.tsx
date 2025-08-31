import { PropsWithChildren } from 'react';
import { Portal } from '../';
import Button from '@/shared/components/button/Button';

type Props = {
  formId?: string;
  title: string;
  subTitle?: string;
  onCancelHandler: () => void;
  onClickActionText?: string;
  onClickDisabled?: boolean;
} & PropsWithChildren;

const LayerConfirmModal = ({
  formId,
  title,
  subTitle,
  onCancelHandler,
  onClickActionText = '확인',
  onClickDisabled = false,
  children,
}: Props) => {
  return (
    <Portal id="confirmModal">
      <div
        className="fixed top-0 h-screen w-screen bg-[rgb(18,18,18,0.7)]"
        style={{ zIndex: 999 }}
      >
        <section className="absolute left-1/2 top-[45%] h-auto w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[var(--white100)] p-5">
          <div className="text-lg font-semibold">{title}</div>
          {subTitle && <div className="mt-2">{subTitle}</div>}
          {children && <div className="mt-5">{children}</div>}
          <div className="mt-10 flex gap-2">
            <Button
              type="reset"
              variant="ghost"
              size="half"
              label="취소"
              onClick={onCancelHandler}
            />
            <Button
              type="submit"
              form={formId}
              variant="positive"
              size="half"
              label={onClickActionText}
              disabled={onClickDisabled}
            />
          </div>
        </section>
      </div>
    </Portal>
  );
};

export default LayerConfirmModal;
