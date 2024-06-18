import DrawerInputContainer from './InputContainer';
import { Button } from '@components/index';
import { DeleteWhiteIcon } from '@icons/index';
import { FormEventHandler } from 'react';
import { CustomerMemoListApiData } from '@apis/customer/customer.type';

type Props = {
  item: CustomerMemoListApiData;
};

const DrawerMemo = ({ item }: Props) => {
  const {
    customerCommentId: id,
    customerId,
    centerCoachId,
    title,
    content,
    type,
    name,
    position,
    createdAt,
    updatedAt,
  } = item;

  const onSubmitHandler: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    // const { data } = await deleteCustomerAdditionalLesson(id);

    // if (data.affectedRows > 0) {
    //   alert('보강이 취소되었어요.');
    // } else {
    //   alert('보강 취소에 실패했어요.\n관리자에게 문의해주세요.');
    // }
    // window.location.reload();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <DrawerInputContainer label="제목" value={title} />
      <DrawerInputContainer label="작성자" value={name} />
      <DrawerInputContainer label="권한" value={position ?? '관리자'} />
      <DrawerInputContainer label="유형" value={type} />
      <DrawerInputContainer label="작성시간" value={createdAt} />
      <DrawerInputContainer label="최종 수정시간" value={updatedAt} />
      <DrawerInputContainer label="내용">
        <textarea
          name="content"
          placeholder="메모 내용을 입력해주세요."
          css={{
            padding: '8px',
            width: '100%',
            minHeight: '320px',
            lineHeight: '1.375',
            outline: 'none',
            resize: 'none',
            borderRadius: '8px',
            fontSize: '0.875rem',
            margin: '8px 0 0 0',
            backgroundColor: 'transparent',
            color: 'var(--grey700)',
            borderColor: 'var(--grey100)',
          }}
          value={content ?? '-'}
          readOnly={true}
        />
      </DrawerInputContainer>
      <div
        css={{
          position: 'fixed',
          bottom: '20px',
        }}
      >
        <Button
          type="submit"
          label="메모 삭제하기"
          variant="iconBtn"
          src={DeleteWhiteIcon}
          css={{
            width: 'calc(40vw - 40px)',
            border: 0,
            justifyContent: 'center',
            backgroundColor: 'var(--red200)',
            color: 'var(--white100)',
            padding: '12px 16px',
            margin: '0 12px 0 0',
          }}
        />
      </div>
    </form>
  );
};

export default DrawerMemo;
