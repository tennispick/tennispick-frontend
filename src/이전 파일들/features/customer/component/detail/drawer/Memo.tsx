import DrawerInputContainer from './InputContainer';
import {
  DeleteWhiteIcon,
  EditWhiteIcon,
} from 'src/이전 파일들/assets/icons/index';
import { CustomerMemoListApiData } from 'src/이전 파일들/apis/customer/customer.type';
import { deleteCustomerMemo } from 'src/이전 파일들/apis/customer/customer.api';
import { css } from 'styled-system/css';
import IconButton from 'src/이전 파일들/components/button/IconButton';
import { flex } from 'styled-system/patterns';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Select } from 'src/이전 파일들/components/index';
import { FormError } from 'src/이전 파일들/components/FormError';
import { useUpdateMemoMutate } from '@/이전 파일들/features/customer/mutate/memo';

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
      className={css({ height: '100%' })}
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
      <div className={css({ margin: '0 0 12px 0' })}>
        <div
          className={css({
            fontWeight: 600,
            height: '1.5rem',
            fontSize: '0.875rem',
            padding: '0 0 0 4px',
          })}
        >
          유형
        </div>
        <Select
          {...register('type')}
          className={css({ margin: '8px 0 0 0' })}
          width="280px"
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
          className={css({
            padding: '8px',
            width: '100%',
            minHeight: errors.content?.message ? '176px' : '198px',
            lineHeight: '1.375',
            outline: 'none',
            resize: 'none',
            borderRadius: '8px',
            fontSize: '0.875rem',
            margin: '8px 0 0 0',
            backgroundColor: 'transparent',
            color: 'var(--grey700)',
            border: '1px solid var(--grey100)',
          })}
          defaultValue={content ?? '-'}
        />
        {errors.content?.message && (
          <FormError error={errors.content.message} />
        )}
      </DrawerInputContainer>
      <div
        className={flex({
          width: '100%',
          gap: '16px',
        })}
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
