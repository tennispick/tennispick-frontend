import { Select } from "@styles/styles";
import styled from "@emotion/styled";
import { FormIndividualCreateType } from "@features/schedule/type/schedule.type";
import Image from "next/image";
import { UseInputType } from "src/types";
import TimeRange from '@components/common/TimeRange';
import AddIcon from '@icons/add_circle.svg';
import RemoveIcon from '@icons/remove.svg';
import DatePicker from "react-datepicker";
import { Dispatch, SetStateAction } from "react";

type Props ={
  formData: FormIndividualCreateType[];
  onChangeFormData: UseInputType<FormIndividualCreateType>;
  setFormData: Dispatch<SetStateAction<FormIndividualCreateType[]>>;
};

const ScheduleModalRegularLessonIndividualCreateScheduleFormField = ({ formData, onChangeFormData, setFormData}: Props) =>{


  // TODO + 버튼 눌러서 늘어나는지 확인하고, 값 들어가는지 확인

  const handleAppendScheduleList = () =>{

    setFormData((prev: FormIndividualCreateType[]) => [...prev, {
      lessonDateType: 'date', // 강습날짜 유형
      lessonTime: '0', // 강습시간
      weeklyLessonCount: '1', // 주 강습횟수
      coach: '', // 강습코치
      court: '', // 코트(장소)
      date: '', // 스케줄 등록유형 (요일, 날짜)
      day: '', // 요일
      startTime: new Date(), // 강습시간
      endTime: new Date()
    }])
    
  };

  const handleRemoveScheduleList = (id: number) =>{

  };

  return(
    <>
    {formData?.map((item: FormIndividualCreateType, index: number) => {
      return(
        <div
          key={index}
          css={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            margin: '0 0 12px 0',
          }}>
          <div css={{ position: 'relative', width: '100%' }}>
            <InputContainer>
              <Select
                name={'coach'}
                width={'12%'}
                height={'40px'}
                padding={'0 0 0 8px'}
                margin={'0 6px 0 0'}
                defaultValue={'default'}
              >
                <option value={'default'}>날짜로 선택</option>
                <option value={'default'}>요일로 선택</option>
              </Select>
              <Select
                name={'coach'}
                width={'12%'}
                minWidth={'auto'}
                height={'40px'}
                padding={'0 0 0 8px'}
                margin={'0 6px 0 0'}
                defaultValue={'default'}
              >
                <option value={'default'}>20분</option>
                <option value={'default'}>30분</option>
                <option value={'default'}>40분</option>
                <option value={'default'}>수강권 시간</option>
              </Select>
              <Select
                name={'coach'}
                width={'12%'}
                minWidth={'auto'}
                height={'40px'}
                padding={'0 0 0 8px'}
                margin={'0 6px 0 0'}
                defaultValue={'default'}
              >
                <option value={'default'}>1회</option>
                <option value={'default'}>2회</option>
                <option value={'default'}>3회</option>
                <option value={'default'}>4회</option>
              </Select>
              <Select
                name={'coach'}
                width={'12%'}
                height={'40px'}
                padding={'0 0 0 8px'}
                margin={'0 6px 0 0'}
                defaultValue={'default'}
              >
                <option value={'default'}>코치 선택</option>
              </Select>
              <Select
                name={'coach'}
                width={'12%'}
                height={'40px'}
                padding={'0 0 0 8px'}
                margin={'0 6px 0 0'}
                defaultValue={'default'}
              >
                <option value={'default'}>코트 선택</option>
              </Select>
              <div 
                css={{
                  position: 'relative',
                  width: '15%'
                }}
              >
                <DatePicker
                  showIcon
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                      <path d="M2.16667 17.3334C1.70833 17.3334 1.31597 17.1702 0.989583 16.8438C0.663194 16.5174 0.5 16.1251 0.5 15.6667V4.00008C0.5 3.54175 0.663194 3.14939 0.989583 2.823C1.31597 2.49661 1.70833 2.33341 2.16667 2.33341H3V0.666748H4.66667V2.33341H11.3333V0.666748H13V2.33341H13.8333C14.2917 2.33341 14.684 2.49661 15.0104 2.823C15.3368 3.14939 15.5 3.54175 15.5 4.00008V15.6667C15.5 16.1251 15.3368 16.5174 15.0104 16.8438C14.684 17.1702 14.2917 17.3334 13.8333 17.3334H2.16667ZM2.16667 15.6667H13.8333V7.33341H2.16667V15.6667ZM2.16667 5.66675H13.8333V4.00008H2.16667V5.66675Z" fill="#626262"/>
                    </svg>}
                  css={{
                    width: '100%',
                    padding: '10px 0px 10px 32px !important',
                    border: '1px solid var(--grey300)',
                    borderRadius: '8px',
                    fontSize: '0.875rem'
                  }}
                  dateFormat="yyyy.MM.dd"
                  onChange={() => {}}
                />
              </div>
              <div css={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <TimeRange
                  css={{
                    margin: '0 0 0 12px'
                  }}
                />
                <div
                  css={{
                    width: '48px',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    margin: '0 0 0 8px'
                  }}
                >
                  <Image
                    src={AddIcon}
                    alt={'add iocn'}
                    width={24}
                    height={24}
                    css={{
                      cursor: 'pointer'
                    }}
                    onClick={handleAppendScheduleList}
                  />
                  <Image
                    src={RemoveIcon}
                    alt={'remove iocn'}
                    width={24}
                    height={24}
                    css={{
                      cursor: 'pointer',
                      margin: '0 0 0 4px'
                    }}
                    // onClick={() => handleRemoveScheduleList(item.id)}
                  />
                </div>
              </div>
            </InputContainer>
          </div>
        </div>
      )})}
    </>
  )
};

const InputContainer = styled.div({
  width: '100%',
  position: 'relative',
  margin: '0 0 16px 0',
  display: 'flex',
  alignItems: 'center',
});

export default ScheduleModalRegularLessonIndividualCreateScheduleFormField;