import { PropsWithChildren } from 'react';
import { Portal } from '..';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';
import Button from 'app/src/components/button/Button';

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
        className={css({
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          top: 0,
          backgroundColor: 'rgb(18, 18, 18, 0.7)',
          zIndex: 999,
        })}
      >
        <section
          className={css({
            position: 'absolute',
            width: '400px',
            height: 'auto',
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            backgroundColor: 'var(--white100)',
            borderRadius: '12px',
          })}
        >
          <div className={css({ fontWeight: 600, fontSize: '1.125rem' })}>
            {title}
          </div>
          {subTitle && (
            <div className={css({ margin: '8px 0 0 0' })}>{subTitle}</div>
          )}
          {children && (
            <div className={css({ margin: '20px 0 0 0' })}>{children}</div>
          )}
          <div className={flex({ gap: '8px', margin: '40px 0 0 0' })}>
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
