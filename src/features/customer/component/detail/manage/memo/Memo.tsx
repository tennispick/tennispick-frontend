import Loading from '@components/common/Loading';
import { NoResult, Select } from '@components/index';
import { useCustomerMemoListQuery } from '@features/customer/query/CustomerQuery';
import ManageMemoList from './MemoList';
import { FormEventHandler, useState } from 'react';
import LayerConfirmModal from '@components/layer/ConfirmModal';
import { Input } from '@components/index';
import useInput from '@hooks/useInput';
import { createCustomerMemo } from '@apis/customer/customer.api';

type Props = {
  customerId: string;
  showDrawer: boolean;
  onClickShowDrawerHandler: () => void;
  onCloseDrawerHandler: () => void;
};

const ManageMemo = ({
  customerId,
  showDrawer,
  onClickShowDrawerHandler,
  onCloseDrawerHandler,
}: Props) => {
  const { data, isLoading } = useCustomerMemoListQuery(customerId);

  const [showMemoModal, setShowMemoModal] = useState<boolean>(false);
  const [formData, onChangeFormData] = useInput({ title: '' });

  const onClickShowMemoModal = () => setShowMemoModal(true);

  const onClickCloseMemoModal = () => setShowMemoModal(false);

  const onClickSubmitMemo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    formData.append('customerId', customerId);

    const result = await createCustomerMemo(formData);

    if (result.data.affectedRows > 0) alert('메모가 등록되었어요.');
    else alert('메모 등록에 실패했어요.\n관리자에게 문의해주세요.');
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <div
        css={{
          height: '48px',
          lineHeight: '24px',
          backgroundColor: 'var(--white100)',
          margin: '0 0 12px 0',
          padding: '12px',
          borderRadius: '8px',
        }}
      >
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div css={{ margin: '0 12px 0 0' }}>
            총 <span>{data.length}</span>건
          </div>
          <div
            css={{
              color: 'var(--business-color)',
              fontWeight: 600,
              margin: '0 8px 0 0',
              cursor: 'pointer',
            }}
            onClick={onClickShowMemoModal}
          >
            등록하기
          </div>
        </div>
      </div>
      <div
        css={{
          backgroundColor: 'var(--white100)',
          borderRadius: '8px',
          height: 'calc(100% - 60px)',
          padding: '8px',
        }}
      >
        {data && data.length > 0 ? (
          <ManageMemoList
            data={data}
            showDrawer={showDrawer}
            onClickShowDrawerHandler={onClickShowDrawerHandler}
            onCloseDrawerHandler={onCloseDrawerHandler}
          />
        ) : (
          <NoResult description="메모 내역이 없어요." />
        )}
      </div>
      {showMemoModal && (
        <LayerConfirmModal
          formId="memoForm"
          title="메모 등록"
          subTitle="회원에게 전달할 메모를 남겨주세요."
          onCancelHandler={onClickCloseMemoModal}
          onClickDisabled={formData.title === ''}
        >
          <form id="memoForm" onSubmit={onClickSubmitMemo}>
            <div css={{ margin: '12px 0' }}>
              <div css={{ margin: '0 0 8px 0' }}>메모 유형</div>
              <Select
                name="type"
                css={{
                  width: '40%',
                  fontSize: '0.875rem',
                }}
              >
                <option value="normal">일반</option>
                <option value="payment">결제</option>
                <option value="etc">기타</option>
              </Select>
            </div>
            <div css={{ margin: '12px 0' }}>
              <div css={{ margin: '0 0 8px 0' }}>제목</div>
              <Input>
                <Input.TextField
                  name="title"
                  placeholder="제목을 입력해주세요."
                  css={{
                    padding: '16px',
                    fontSize: '0.875rem',
                  }}
                  onChange={onChangeFormData}
                />
              </Input>
            </div>
            <div css={{ margin: '12px 0' }}>
              <div css={{ margin: '0 0 8px 0' }}>내용</div>
              <textarea
                name="content"
                placeholder="메모 내용을 입력해주세요."
                css={{
                  minHeight: '120px',
                  padding: '16px',
                  width: '100%',
                  resize: 'none',
                  border: '1px solid var(--grey300)',
                  outline: 'none',
                  borderRadius: '8px',
                }}
              />
            </div>
          </form>
        </LayerConfirmModal>
      )}
    </>
  );
};

export default ManageMemo;
