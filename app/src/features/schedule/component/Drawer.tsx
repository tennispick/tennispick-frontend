import useInput from 'app/src/hooks/useInput';
import { EditWhiteIcon, DeleteWhiteIcon } from 'app/src/assets/icons/index';
import ScheduleDrawerInputField from './drawer/InputField';
import { FormEvent } from 'react';
import {
  deleteScheduleLesson,
  updateScheduleLesson,
} from 'app/src/apis/schedule/schedule.api';
import { useRouter } from 'next/navigation';
import { flex } from 'styled-system/patterns';
import { css } from 'styled-system/css';
import IconButton from 'app/src/components/button/IconButton';

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

  const handleDeleteSchedule = async () => {
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
    <form
      onSubmit={onSubmitHandler}
      className={css({ height: 'calc(100% - 48px)' })}
    >
      <ScheduleDrawerInputField
        formData={formData}
        onChangeFormData={onChangeFormData}
        setFormData={setFormData}
        customerName={customer.map((item: any) => item.customerName).join(', ')}
        lessonTime={customer[0].timeDiff}
      />
      <div
        className={flex({
          width: '100%',
          position: 'relative',
          gap: '16px',
        })}
      >
        <IconButton
          type="submit"
          iconAlign="left"
          iconSrc={EditWhiteIcon}
          iconAlt="modify schedule"
          variant="primary"
          size="half"
          label={'스케줄 수정하기'}
        />
        <IconButton
          iconAlign="left"
          iconSrc={DeleteWhiteIcon}
          iconAlt="delete schedule"
          variant="negative"
          size="half"
          label={'스케줄 삭제하기'}
          onClick={handleDeleteSchedule}
        />
      </div>
    </form>
  );
};

export default ScheduleDrawer;
