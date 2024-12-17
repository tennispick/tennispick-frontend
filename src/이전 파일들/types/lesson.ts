export type LessonType = {
  id: number;
  center_id: string;
  name: string;
  price: string;
  is_weekday: string;
  type: string;
  time: number;
  times_a_week: number;
  status: string;
  description: string;
  created_at: string;
  updated_at: string;
};

export type LessonHistoryType = {
  id: string;
  center_id: string;
  admin_id: string;
  court_id: string;
  center_coach_id: string;
  customer_id: string;
  lesson_id: string;
  date: string;
  start_time: string;
  end_time: string;
  is_forced_lesson_change: number;
  coach_attendance?: string;
  customer_attendance?: string;
};
