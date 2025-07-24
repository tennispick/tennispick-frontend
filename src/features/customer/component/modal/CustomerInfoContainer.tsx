import { useCustomerDetailQuery } from '@features/customer/query/CustomerQuery';
import { ProfileManIcon } from '@icons/index';
import { transferSexType } from 'src/shared/utils/switch';
import Image from 'next/image';

type Props = {
  customerId: string;
  isPayment: boolean;
};

const CustomerModalCustomerInfoContainer = ({
  customerId,
  isPayment,
}: Props) => {
  const { data } = useCustomerDetailQuery({ id: customerId });
  const { name, email, birth, phone, sex } = data;
  return (
    <div className="flex h-[130px]">
      <div className="flex w-[70%] h-[130px] border-b border-r border-gray-300 p-3 px-7">
        <div className="w-[20%]">
          <Image
            src={ProfileManIcon}
            alt="profile man"
            placeholder="empty"
            priority={true}
            className="w-full h-full"
          />
        </div>
        <div className="flex w-[40%] flex-col gap-1">
          <div className="flex items-center">
            <div className="w-24 font-semibold">이름</div>
            <div>{name}</div>
          </div>
          <div className="flex items-center">
            <div className="w-24 font-semibold">
              이메일
            </div>
            <div>{email}</div>
          </div>
          <div className="flex items-center">
            <div className="w-24 font-semibold">
              생년월일
            </div>
            <div>{birth}</div>
          </div>
          <div className="flex items-center">
            <div className="w-24 font-semibold">
              연락처
            </div>
            <div>{phone}</div>
          </div>
        </div>
        <div className="flex w-[40%] flex-col gap-1">
          <div className="flex items-center">
            <div className="w-24 font-semibold">성별</div>
            <div>{transferSexType(sex)}</div>
          </div>
          <div className="flex items-center">
            <div className="w-24 font-semibold">상태</div>
            <div>수강없음</div>
          </div>
        </div>
      </div>
      <div className="relative w-[30%] h-[130px] border-b border-gray-300 px-7">
        <span className={`absolute bottom-4 text-xl font-semibold ${
          isPayment ? 'text-slate-700' : 'text-red-400'
        }`}>
          {isPayment ? '결제 상세내역' : '환불 상세내역'}
        </span>
      </div>
    </div>
  );
};

export default CustomerModalCustomerInfoContainer;
