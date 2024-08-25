import Loading from '@components/common/Loading';
import { NoResult, Select } from '@components/index';
import { useCustomerMemoListQuery } from '@features/customer/query/CustomerQuery';
import ManageMemoList from './MemoList';
import { FormEventHandler, useState } from 'react';
import LayerConfirmModal from '@components/layer/ConfirmModal';
import { Input } from '@components/index';
import useInput from '@hooks/useInput';
import { useCreateMemoMutate } from '@features/customer/mutate/memo';
import { css } from 'styled-system/css';
import { Flex } from 'styled-system/jsx';

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
  const onClickShowMemoModal = () => setShowMemoModal(true);
  const onClickCloseMemoModal = () => setShowMemoModal(false);

  const { data, isLoading, refetch } = useCustomerMemoListQuery(customerId);

  const handleCreateMemoClick = () => {
    refetch();
    onClickCloseMemoModal();
  };
  const { mutate } = useCreateMemoMutate(customerId, handleCreateMemoClick);

  const [showMemoModal, setShowMemoModal] = useState<boolean>(false);
  const [formData, onChangeFormData] = useInput({ title: '' });

  const handleSubmitMemoClick: FormEventHandler<HTMLFormElement> = async (
    e,
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append('customerId', customerId);

    mutate(formData);
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <div
        className={css({
          height: '48px',
          lineHeight: '24px',
          backgroundColor: 'var(--white100)',
          margin: '0 0 12px 0',
          padding: '12px',
          borderRadius: '8px',
        })}
      >
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <div className={css({ margin: '0 12px 0 0' })}>
            총 <span>{data.length}</span>건
          </div>
          <div
            className={css({
              color: 'var(--business-color)',
              fontWeight: 600,
              margin: '0 8px 0 0',
              cursor: 'pointer',
            })}
            onClick={onClickShowMemoModal}
          >
            등록하기
          </div>
        </Flex>
      </div>
      <div
        className={css({
          backgroundColor: 'var(--white100)',
          borderRadius: '8px',
          height: 'calc(100% - 60px)',
          padding: '8px',
        })}
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
          <form id="memoForm" onSubmit={handleSubmitMemoClick}>
            <div className={css({ margin: '12px 0' })}>
              <div className={css({ margin: '0 0 8px 0' })}>메모 유형</div>
              <Select
                name="type"
                className={css({ width: '40%', fontSize: '0.875rem' })}
              >
                <option value="normal">일반</option>
                <option value="payment">결제</option>
                <option value="etc">기타</option>
              </Select>
            </div>
            <div className={css({ margin: '12px 0' })}>
              <div className={css({ margin: '0 0 8px 0' })}>제목</div>
              <Input css={{ height: '44px' }}>
                <Input.TextField
                  name="title"
                  placeholder="제목을 입력해주세요."
                  className={css({
                    padding: '16px',
                    fontSize: '0.875rem',
                  })}
                  onChange={onChangeFormData}
                />
              </Input>
            </div>
            <div className={css({ margin: '12px 0' })}>
              <div className={css({ margin: '0 0 8px 0' })}>내용</div>
              <textarea
                name="content"
                placeholder="메모 내용을 입력해주세요."
                className={css({
                  minHeight: '120px',
                  padding: '16px',
                  width: '100%',
                  resize: 'none',
                  border: '1px solid var(--grey300)',
                  outline: 'none',
                  borderRadius: '8px',
                })}
              />
            </div>
          </form>
        </LayerConfirmModal>
      )}
    </>
  );
};

export default ManageMemo;
