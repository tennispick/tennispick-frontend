import { Button } from '@components/index';
import { PropsWithChildren } from 'react';
import { Portal } from '..';

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
        css={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          top: 0,
          backgroundColor: 'rgb(18, 18, 18, 0.7)',
          zIndex: 999,
        }}
      >
        <section
          css={{
            position: 'absolute',
            width: '400px',
            height: 'auto',
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            backgroundColor: 'var(--white100)',
            borderRadius: '12px',
          }}
        >
          <div css={{ fontWeight: 600, fontSize: '1.125rem' }}>{title}</div>
          {subTitle && <div css={{ margin: '8px 0 0 0' }}>{subTitle}</div>}
          {children && (
            <div
              css={{
                margin: '20px 0 0 0',
              }}
            >
              {children}
            </div>
          )}
          <div css={{ display: 'flex', gap: '8px', margin: '40px 0 0 0' }}>
            <Button
              type="reset"
              label="취소"
              onClick={onCancelHandler}
              css={{
                width: 'calc(50% - 4px)',
                fontSize: '1rem',
                padding: '16px 0',
                border: 0,
              }}
            />
            <Button
              form={formId}
              type="submit"
              label={onClickActionText}
              css={{
                width: 'calc(50% - 4px)',
                fontSize: '1rem',
                borderRadius: '12px',
                backgroundColor: 'var(--blue500)',
                color: 'var(--white100)',
                padding: '16px 0',
                border: 0,
              }}
              disabled={onClickDisabled}
            />
          </div>
        </section>
      </div>
    </Portal>
  );
};

export default LayerConfirmModal;
