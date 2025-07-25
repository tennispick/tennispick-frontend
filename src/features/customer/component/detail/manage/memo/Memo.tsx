import Loading from '@/shared/components/common/Loading';
import { NoResult, Select } from '@/shared/components/index';
import { useCustomerMemoListQuery } from '@features/customer/query/CustomerQuery';
import ManageMemoList from './MemoList';
import { FormEventHandler, useState } from 'react';
import LayerConfirmModal from '@/shared/components/layer/ConfirmModal';
import { Input } from '@/shared/components/index';
import useInput from '@hooks/useInput';
import { useCreateMemoMutate } from '@features/customer/mutate/memo';

type Props = {
  customerId: string;
  showDrawer: boolean;
  handleShowDrawerClick: () => void;
  handleHideDrawerClick: () => void;
};

const ManageMemo = ({
  customerId,
  showDrawer,
  handleShowDrawerClick,
  handleHideDrawerClick,
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
      <div className="h-12 leading-6 bg-white mt-0 mb-3 p-3 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="mr-3">
            총 <span>{data.length}</span>건
          </div>
          <div
            className="text-blue-600 font-semibold mr-2 cursor-pointer"
            onClick={onClickShowMemoModal}
          >
            등록하기
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg h-[calc(100%-60px)] p-2">
        {data && data.length > 0 ? (
          <ManageMemoList
            data={data}
            showDrawer={showDrawer}
            handleShowDrawerClick={handleShowDrawerClick}
            handleHideDrawerClick={handleHideDrawerClick}
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
            <div className="my-3">
              <div className="mb-2">메모 유형</div>
              <Select name="type" className="w-2/5 text-sm">
                <option value="normal">일반</option>
                <option value="payment">결제</option>
                <option value="etc">기타</option>
              </Select>
            </div>
            <div className="my-3">
              <div className="mb-2">제목</div>
              <Input className="h-11">
                <Input.TextField
                  name="title"
                  placeholder="제목을 입력해주세요."
                  className="p-4 text-sm"
                  onChange={onChangeFormData}
                />
              </Input>
            </div>
            <div className="my-3">
              <div className="mb-2">내용</div>
              <textarea
                name="content"
                placeholder="메모 내용을 입력해주세요."
                className="min-h-[120px] p-4 w-full resize-none border border-gray-300 outline-none rounded-lg"
              />
            </div>
          </form>
        </LayerConfirmModal>
      )}
    </>
  );
};

export default ManageMemo;
