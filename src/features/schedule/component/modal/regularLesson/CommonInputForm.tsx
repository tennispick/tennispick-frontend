import styled from '@emotion/styled';
import { commonInputList } from '@features/schedule/data/formdataInputList';
import Image from 'next/image';
import ScheduleModalRadioInput from '../RadioInput';
import ScheduleModalSelectBox from '../SelectBox';
import { getCustomerQuery } from '@queries/customer';
import { getLessonQuery } from '@queries/lesson';
import ScheduleModalSearchInput from '../SearchInput';
import { UseInputType } from 'src/types';
import { Dispatch, SetStateAction } from 'react';
import { FormCommonInputType } from '@features/schedule/type/schedule.type';
import { handleDuplicateDataCheck } from '@utils/dataCheck';

type Props = {
  commonData: FormCommonInputType;
  onChangeCommonData: UseInputType<HTMLInputElement | HTMLSelectElement>;
  setCommonData: Dispatch<SetStateAction<FormCommonInputType>>;
};

const ScheduleModalRegularLessonCommonInputFormList = ({
  commonData,
  onChangeCommonData,
  setCommonData,
}: Props) => {

  const { customer } = commonData;

  const { data: customerList } = getCustomerQuery();
  const { data: lessonList } = getLessonQuery({ id: customer[0]?.id });

  return (
    <div css={{ position: 'relative', width: '20%' }}>
      {commonInputList.map(
        ({ type, fieldType, list, title, icon, alt }) => {
          if (type === 'customer' && customerList)
            handleDuplicateDataCheck({
              prevList: list,
              list: customerList.data,
            });
          if (type === 'lesson' && lessonList)
            handleDuplicateDataCheck({ prevList: list, list: lessonList.data });

          return (
            <div css={{ margin: '0 0 24px 0' }} key={type}>
              <HeadContainer>
                <Image src={icon} alt={alt} width={20} height={20} />
                {title}
              </HeadContainer>
              <div css={{ margin: '12px 0 0 0' }}>
                {{
                  radio: (
                    <ScheduleModalRadioInput
                      lesson={''}
                      type={type}
                      radioList={list}
                      onChangeFormData={onChangeCommonData}
                    />
                  ),
                  select: (
                    <ScheduleModalSelectBox
                      type={type}
                      selectList={list}
                      onChangeFormData={onChangeCommonData}
                    />
                  ),
                  search: (
                    <ScheduleModalSearchInput
                      formData={commonData}
                      setFormData={setCommonData}
                    />
                  ),
                }[fieldType]}
              </div>
            </div>
          );
        },
      )}
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

export default ScheduleModalRegularLessonCommonInputFormList;
