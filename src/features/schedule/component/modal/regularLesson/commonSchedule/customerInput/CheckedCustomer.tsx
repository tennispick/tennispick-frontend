import CancelWhiteBtn from '@icons/cancel_white_btn.svg';
import Image from 'next/image';

type Props = {
  customer: { id: string; name: string }[];
  onClickCancelCustomerHandler: (id: string) => void;
};

const ScheduleModalRegularLessonCommonScheduleCustomerInputCheckedCustomer = ({
  customer,
  onClickCancelCustomerHandler,
}: Props) => {
  return (
    <ul
      className="flex justify-between flex-wrap w-4/5 mt-3"
    >
      {customer.map(({ id, name }) => {
        return (
          <div
            key={id}
            className="flex items-center justify-center gap-1 w-[48%] mt-2 py-2 text-center bg-blue-200 text-white rounded-lg"
          >
            {name}
            <Image
              id={id}
              src={CancelWhiteBtn}
              alt="close"
              className="cursor-pointer"
              width={20}
              height={20}
              onClick={() => onClickCancelCustomerHandler(id)}
            />
          </div>
        );
      })}
    </ul>
  );
};

export default ScheduleModalRegularLessonCommonScheduleCustomerInputCheckedCustomer;