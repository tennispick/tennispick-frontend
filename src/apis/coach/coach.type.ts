export type CoachListData = {
  id: number;
  name: string;
  phone: string;
  email: string;
  sex: string;
  birth: string;
  age: string;
  coachColor: string;
  position: string;
  createdAt: string;
  updatedAt: string;
};

export type CoachLessonListData = {
  id: number;
  name: string;
  birth: string;
  phone: string;
  color: string;
  customerLessonCount: number;
  sex: string;
  position: string;
}

export type CoachDeleteApiPayload = {
  coachId: string;
};