import { LessonHistoryType } from 'app/src/types/lesson';

export type CustomerType = {
  id: string;
  center_id: string;
  name: string;
  birth: string;
  sex: string;
  phone: string;
  address?: string;
  address_detail?: string;
  email: string;
  height?: string;
  weight?: string;
  profile_image_url: string;
  login_at: string;
};

export type CustomerLessonType = CustomerType &
  Pick<
    LessonHistoryType,
    | 'customer_id'
    | 'is_forced_lesson_change'
    | 'start_time'
    | 'end_time'
    | 'coach_attendance'
    | 'customer_attendance'
  >;
