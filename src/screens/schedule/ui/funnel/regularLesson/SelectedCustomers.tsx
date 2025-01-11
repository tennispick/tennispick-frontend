import { Customer, Sex } from "@/shared/types";
import ManImage from '@/public/images/profile_man.svg';
import WomanImage from '@/public/images/profile_woman.svg';
import Image from "next/image";

interface Props {
  data: Customer[];
}

const getImage = (profileImageUrl: string | null, sex: Sex) => {
  if (profileImageUrl) {
    return <Image
      src={profileImageUrl}
      alt="회원 이미지"
      width={32}
      height={32}
      className="rounded-full"
    />
  }
  return sex === Sex.MALE ? <ManImage /> : <WomanImage />;
}

export const SelectedCustomers = ({ data }: Props) => {
  return (
    <div className="py-3">
      {data?.map(({ id, name, age, sex, phone, profileImageUrl }) => {
        return (
          <div
            key={id}
            className="flex items-center gap-3"
          >
            {getImage(profileImageUrl, sex)}
            <div>
              <div className="flex">
                <span>{name}</span>
                <span>{phone}</span>
              </div>
              <div className="text-gray-400">{age}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
};