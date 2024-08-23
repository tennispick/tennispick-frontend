import { Button } from '@components/index';
import useInput from '@hooks/useInput';
import { EditWhiteIcon, DeleteWhiteIcon } from '@icons/index';
import ScheduleDrawerInputField from './drawer/InputField';
import { FormEvent } from 'react';
import {
  deleteScheduleLesson,
  updateScheduleLesson,
} from '@apis/schedule/schedule.api';
import { useRouter } from 'next/navigation';
import { flex } from 'styled-system/patterns';

type Props = {
  customer: any;
};

const ScheduleDrawer = ({ customer }: Props) => {
  const router = useRouter();

  // 개인이냐 그룹이냐에 따라 다름
  const {
    coachId,
    courtId,
    coachAttendance,
    customerAttendance,
    year,
    month,
    date,
    startTime,
    endTime,
    lessonId,
    lessonType,
    isRegularLesson,
  } = customer[0];

  const [formData, onChangeFormData, setFormData] = useInput({
    coach: {
      value: coachId,
    },
    lesson: {
      value: lessonId,
    },
    court: {
      value: courtId,
    },
    isRegularLesson: {
      value: isRegularLesson,
    },
    isAttendance: {
      value: coachAttendance || customerAttendance,
    },
    lessonType: {
      value: lessonType,
    },
    date: {
      value: `${year}-${month}-${date}`,
    },
    startTime: {
      value: startTime,
    },
    endTime: {
      value: endTime,
    },
  });

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();

    formData.id = customer.map((item: any) => item.id).join(', ');

    const data = await updateScheduleLesson(formData);
    if (data.affectedRows > 0) {
      alert('수정되었어요.');
      router.refresh();
    } else {
      alert('수정중 에러가 발생했어요.\n관리자에게 문의해주세요.');
      router.refresh();
    }
  };

  const onClickDeleteScheduleHandler = async () => {
    const id = customer.map((item: any) => item.id).join(', ');

    const data = await deleteScheduleLesson(id);
    if (data.affectedRows > 0) {
      alert('삭제되었어요.');
      router.refresh();
    } else {
      alert('삭제중 에러가 발생했어요.\n관리자에게 문의해주세요.');
      router.refresh();
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <ScheduleDrawerInputField
        formData={formData}
        onChangeFormData={onChangeFormData}
        setFormData={setFormData}
        customerName={customer.map((item: any) => item.customerName).join(', ')}
        lessonTime={customer[0].timeDiff}
      />
      <div className={flex({ bottom: '20px' })}>
        <Button
          type="submit"
          label={'스케줄 수정하기'}
          variant={'iconBtn'}
          src={EditWhiteIcon}
          css={{
            width: 'calc(40vw - 40px)',
            justifyContent: 'center',
            border: 0,
            backgroundColor: 'var(--business-active-color)',
            color: 'var(--white100)',
            padding: '12px 16px',
            margin: '0 0 12px 0',
          }}
        />
        <Button
          label={'스케줄 삭제하기'}
          variant={'iconBtn'}
          src={DeleteWhiteIcon}
          css={{
            width: 'calc(40vw - 40px)',
            justifyContent: 'center',
            border: 0,
            backgroundColor: 'var(--red200)',
            color: 'var(--white100)',
            padding: '12px 16px',
          }}
          onClick={onClickDeleteScheduleHandler}
        />
      </div>
    </form>
  );
};

export default ScheduleDrawer;
