export enum Sex {
  MALE = 'man',
  FEMALE = 'woman',
}

export type Customer = {
  id: number;
  centerId: number;
  name: string;
  age: string;
  birth: string;
  email: string;
  phone: string;
  sex: Sex;
  profileImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
};
