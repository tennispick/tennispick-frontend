import {
  CustomerAdditionalLessonListData,
  CustomerAllLessonListQueryData,
} from '@features/customer/type/customer.type';
import DrawerInputContainer from './InputContainer';
import {
  transferLessonDateType,
  transferLessonType,
} from '@features/schedule/util/transfer';
import { Button } from '@components/index';
import { DeleteWhiteIcon } from '@icons/index';
import { FormEventHandler } from 'react';
import { useQueryClient } from '@tanstack/react-query';

type Props = {
  item: CustomerAdditionalLessonListData;
};

const DrawerAdditionalLesson = ({ item }: Props) => {
  const queryClient = useQueryClient();

  const {
    courtName,
    coachName,
    originDate,
    originStartTime,
    originEndTime,
    additionalDate,
    additionalStartTime,
    additionalEndTime,
  } = item;

  const onSubmitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <DrawerInputContainer label="코트명" value={courtName} />
      <DrawerInputContainer label="코치명" value={coachName} />
      <DrawerInputContainer label="기존 강습 예약날짜" value={originDate} />
      <DrawerInputContainer
        label="기존 강습 시작시간"
        value={originStartTime}
      />
      <DrawerInputContainer label="기존 강습 종료시간" value={originEndTime} />
      <DrawerInputContainer label="보강 예약날짜" value={additionalDate} />
      <DrawerInputContainer label="보강 시작시간" value={additionalStartTime} />
      <DrawerInputContainer label="보강 종료시간" value={additionalEndTime} />
      <div
        css={{
          position: 'fixed',
          bottom: '20px',
        }}
      >
        <Button
          type="submit"
          label="보강 취소하기"
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

export default DrawerAdditionalLesson;
