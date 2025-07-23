import DrawerInputContainer from './InputContainer';
import { DeleteWhiteIcon, EditWhiteIcon } from '@icons/index';
import { CustomerMemoListApiData } from '@apis/customer/customer.type';
import { deleteCustomerMemo } from '@apis/customer/customer.api';
import IconButton from '@/shared/components/button/IconButton';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Select } from '@/shared/components/index';
import { FormError } from '@/shared/components/FormError';
import { useUpdateMemoMutate } from '@features/customer/mutate/memo';

const schema = z.object({
  title: z.string().min(4, { message: '제목은 최소 4자 이상이어야 합니다.' }),
  type: z.enum(['normal', 'payment', 'etc']),
  content: z
    .string()
    .min(4, { message: '메모 내용은 최소 4자 이상이어야 합니다.' }),
});

type MemoFormSchema = z.infer<typeof schema>;

type Props = {
  item: CustomerMemoListApiData;
  handleHideDrawerClick: () => void;
};

const DrawerMemo = ({ item, handleHideDrawerClick }: Props) => {
  const {
    customerCommentId: id,
    customerId,
    title,
    content,
    type,
    name,
    position,
    createdAt,
    updatedAt,
  } = item;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MemoFormSchema>({
    resolver: async (data, context, options) => {
      return zodResolver(schema)(data, context, options);
    },
  });

  const { mutate } = useUpdateMemoMutate(
    `${id}`,
    `${customerId}`,
    handleHideDrawerClick,
  );

  const handleFormSubmit = (data: MemoFormSchema) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    mutate(formData);
  };

  const handleDeleteClick = async () => {
    const { data } = await deleteCustomerMemo(id, customerId);

    if (data.affectedRows > 0) {
      alert('메모가 삭제되었어요.');
    } else {
      alert('메모 삭제에 실패했어요.\n관리자에게 문의해주세요.');
    }
    window.location.reload();
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="h-full"
    >
      <DrawerInputContainer
        {...register('title')}
        label="제목"
        defaultValue={title}
        Error={
          errors.title?.message && <FormError error={errors.title.message} />
        }
      />
      <DrawerInputContainer label="작성자" value={name} disabled />
      <DrawerInputContainer
        label="권한"
        value={position ?? '관리자'}
        disabled
      />
      <div className="mb-3">
        <div
          className="font-semibold h-6 text-sm pl-1"
        >
          유형
        </div>
        <Select
          {...register('type')}
          className="mt-2 w-[280px]"
          defaultValue={type}
        >
          <option value="normal">일반</option>
          <option value="payment">결제</option>
          <option value="etc">기타</option>
        </Select>
      </div>
      <DrawerInputContainer label="작성시간" value={createdAt} disabled />
      <DrawerInputContainer label="최종 수정시간" value={updatedAt} disabled />
      <DrawerInputContainer label="내용">
        <textarea
          {...register('content')}
          name="content"
          placeholder="메모 내용을 입력해주세요."
          className={
            "p-2 w-full min-h-[198px] leading-tight outline-none resize-none rounded-lg text-sm mt-2 bg-transparent text-gray-600 border border-gray-200 " +
            (errors.content?.message ? "min-h-[176px]" : "")
          }
          defaultValue={content ?? '-'}
        />
        {errors.content?.message && (
          <FormError error={errors.content.message} />
        )}
      </DrawerInputContainer>
      <div
        className="flex w-full gap-4"
      >
        <IconButton
          type="button"
          iconSrc={DeleteWhiteIcon}
          iconAlt="delete"
          iconAlign="left"
          variant="negative"
          size="half"
          label="삭제하기"
          onClick={handleDeleteClick}
        />
        <IconButton
          type="submit"
          iconSrc={EditWhiteIcon}
          iconAlt="edit"
          iconAlign="left"
          variant="primary"
          size="half"
          label="수정하기"
        />
      </div>
    </form>
  );
};

export default DrawerMemo;