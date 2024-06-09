import { useState } from "react";
import CustomerSearch from "./CustomerSearch";
import { NoResult } from "@components/index";
import ScheduleContainer from "./ScheduleContainer";
import ScheduleModalRecentHistoryModal from "../recentHistoryModal/RecentHistoryModal";
import { CustomerLessonHistoryData } from "@apis/customer/customer.type";

const EMPTY_CUSTOMER_LESSON = { id: '', name: ''}

const ModalAdditionalLesson = () => {

  const [customerLesson, setCustomerLesson] = useState(EMPTY_CUSTOMER_LESSON);
  const [customerLessonData, setCustomerLessonData] = useState<CustomerLessonHistoryData['lessonHistory']>();

  const isSelectCustomer = customerLesson.id !== '';

  const onClickCloseModalHandler = () => setCustomerLesson(EMPTY_CUSTOMER_LESSON);

  const onClickSaveCustomerLessonHistoryHandler = (target: CustomerLessonHistoryData['lessonHistory'][]) =>{
    setCustomerLessonData(target[0]);
    onClickCloseModalHandler();
  }

  const isSelectCustomerLessonData = !!customerLessonData;

  return (
    <>
      <div css={{ minHeight: '420px' }}>
        <CustomerSearch
          setCustomerLesson={setCustomerLesson}
        />
        {(isSelectCustomerLessonData)? (
          <ScheduleContainer
            data={customerLessonData}
          />
        ):
        <div css={{ height: '420px' }}>
          <NoResult description="회원을 검색해주세요." />
        </div>}
      </div>
      {isSelectCustomer && (
        <ScheduleModalRecentHistoryModal
          customerId={customerLesson.id!}
          lessonType="private"
          onClickCloseModalHandler={onClickCloseModalHandler}
          onClickSaveCustomerLessonHistoryHandler={onClickSaveCustomerLessonHistoryHandler}
        />
      )}
    </>
  );
};

export default ModalAdditionalLesson;
