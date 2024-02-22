import styled from '@emotion/styled';
import { commonList } from '@features/schedule/data/commonList';

import Image from 'next/image';
import ScheduleModalRadioInput from '../RadioInput';
import ScheduleModalSelectBox from '../SelectBox';
import ScheduleModalSearchInput from '../SearchInput';
import { SetStateAction, UseInputType } from 'src/types';
import { CommonFormInputType } from '@features/schedule/type/schedule.type';
import { CustomerLessonListQueryData } from '@features/customer/type/customer.type';
import { transFormSelectList } from '@features/schedule/util/regularLesson';
import { useEffect, useState } from 'react';
import { TDataCommonList } from '@features/schedule/type/data.type';

type Props = {
  commonData: CommonFormInputType;
  onChangeCommonData: UseInputType<HTMLInputElement | HTMLSelectElement>;
  setCommonData: SetStateAction<CommonFormInputType>;
  lessonList: CustomerLessonListQueryData[] | undefined;
};

const ScheduleModalRegularLessonCommonForm = ({
  commonData,
  onChangeCommonData,
  setCommonData,
  lessonList
}: Props) => {

  const { customer, lessonType } = commonData;

  const [formList, setFormList] = useState<TDataCommonList[]>(commonList);

  console.log(lessonList);

  useEffect(() => {
    transFormSelectList(setFormList, 'lesson', lessonList);
    setCommonData((prev) => {
      return {
        ...prev,
        lesson: lessonList && lessonList.length > 0 ? lessonList[0].lessonId.toString() : ''
      }
    })
  }, [lessonList])

  return (
    <div css={{ position: 'relative', width: '20%' }}>
      {formList.map(({ type, fieldType, list, title, icon, alt }) => {
        return(
          <div css={{ margin: '0 0 24px 0' }} key={type}>
            <HeadContainer>
              <Image src={icon} alt={alt} width={20} height={20} />
              {title}
            </HeadContainer>
            <div css={{ margin: '12px 0 0 0' }}>
              {{
                radio: (
                  <ScheduleModalRadioInput
                    type={type}
                    radioList={list}
                    onChangeFormData={onChangeCommonData}
                  />
                ),
                select: (
                  <ScheduleModalSelectBox
                    type={type}
                    list={list}
                    onChangeFormData={onChangeCommonData}
                  />
                ),
                search: (
                  <ScheduleModalSearchInput
                    customer={customer}
                    lessonType={lessonType}
                    setFormData={setCommonData}
                  />
                ),
              }[fieldType]}
            </div>
          </div>
        )
      })}
    </div>
  );
};

const HeadContainer = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',

  img: {
    margin: '0 6px 0 0',
  },
});


export default ScheduleModalRegularLessonCommonForm;
