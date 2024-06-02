import { CustomerAllLessonListQueryData } from "@features/customer/type/customer.type";
import NewSchedule from "./NewSchedule";
import OriginSchedule from "./OriginSchedule";
import { FormEventHandler, useState } from "react";
import { CustomerLessonScheduleHistoryData } from "@apis/customer/customer.type";
import { Button } from "@components/index";
import { EditWhiteIcon } from "@icons/index";
import { isEmptyObj } from "@utils/object";

type CustomerLessonItem = Pick<CustomerAllLessonListQueryData, 'customerId' | 'id'>;

type Props = {
  customerId: CustomerLessonItem['customerId'];
  customerLessonId: CustomerLessonItem['id'];
};

const ScheduleChangeModal = ({ customerId, customerLessonId }: Props) => {

  console.log(customerId);
  console.log(customerLessonId);

  const [selectSchedule, setSelectSchedule] = useState({} as CustomerLessonScheduleHistoryData);

  const onClickSelectOriginScheduleHandler = (item: CustomerLessonScheduleHistoryData) =>
    setSelectSchedule(item);

  const onSubmitHandler: FormEventHandler = (e) => {
    e.preventDefault();

  };

  return (
    <form onSubmit={onSubmitHandler}>
      <OriginSchedule
        customerId={customerId}
        customerLessonId={customerLessonId}
        onClickSelectOriginScheduleHandler={onClickSelectOriginScheduleHandler}
        selectSchedule={selectSchedule}
      />
      <NewSchedule
        selectSchedule={selectSchedule}
      />
      <Button
        type="submit"
        label="수강 변경하기"
        variant="iconBtn"
        src={EditWhiteIcon}
        css={{
          width: '100%',
          border: 0,
          justifyContent: 'center',
          backgroundColor: 'var(--business-sub-color)',
          color: 'var(--white100)',
          padding: '12px 16px',
          margin: '36px 12px 0 0',
        }}
        disabled={isEmptyObj(selectSchedule)}
      />
    </form>
  )
};

export default ScheduleChangeModal;