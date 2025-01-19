import { Customer, Sex } from "@/shared/types";
import ManImage from '@/public/images/profile_man.svg';
import WomanImage from '@/public/images/profile_woman.svg';
import Image from "next/image";
import { useState } from "react";
import CancelIcon from '@/public/icons/cancel_gray.svg';

interface Props {
  data: Customer[];
  handleRemoveCustomer: (id: number) => void;
}

const ProfileImage = ({ profileImageUrl, sex }: { profileImageUrl: string | null, sex: Sex }) => {
  const [imageError, setImageError] = useState(false);

  if (profileImageUrl && !imageError) {
    return <Image
      src={profileImageUrl}
      alt="프로필"
      width={32}
      height={32}
      className="rounded-full"
      onError={() => setImageError(true)}
    />
  }

  return sex === Sex.MALE ? <ManImage /> : <WomanImage />;
}

export const SelectedCustomers = ({ data, handleRemoveCustomer }: Props) => {
  return (
    <div className="py-3 max-h-[180px] overflow-y-auto mb-2">
      {data?.map(({ id, name, age, sex, phone, profileImageUrl }) => {
        return (
          <div
            key={id}
            className="flex items-center justify-between mb-3"
          >
            <div className="flex items-center gap-3">
              <ProfileImage profileImageUrl={profileImageUrl} sex={sex} />
              <div className="flex gap-2">
                <div className="flex gap-2.5">
                  <span>{name}</span>
                  <span>{phone}</span>
                </div>
                <div className="text-gray-400">{`(${age}세)`}</div>
              </div>
            </div>
            <CancelIcon className="cursor-pointer" onClick={() => handleRemoveCustomer(id)} />
          </div>
        )
      })}
    </div>
  )
};