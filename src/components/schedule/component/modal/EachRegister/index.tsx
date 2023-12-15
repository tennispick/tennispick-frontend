import { ChangeEventHandler, FormEvent, useEffect, useState } from "react";
import styled from "@emotion/styled";
import Image from 'next/image';
import DatePicker from "react-datepicker";

import { getCoachQuery } from "@queries/coach";
import { getCourtQuery } from "@queries/court";

import CalendarBlackIcon from '@icons/calendar_black.svg';
import TalkBlackIcon from '@icons/talk_black.svg';
import { Select } from "@styles/styles";
import TimeRange from '@components/common/TimeRange';
import AddIcon from '@icons/add_circle.svg';
import RemoveIcon from '@icons/remove.svg';

type Props = {
  formData: any;
  onChangeFormData: ChangeEventHandler<any>;
  scheduleList: any;
  setScheduleList: any;
}

const ScheduleComponentModalEachRegister = ({ formData, onChangeFormData, scheduleList, setScheduleList }: Props) =>{

  // 코치 목록
  const coachList = getCoachQuery();

  // 코트 목록
  const courtList = getCourtQuery();

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  
  const handleAppendScheduleList = () =>{

    if(scheduleList.length >= 4){
      alert('수강횟수보다 많은 스케줄을 등록할 수 없어요.');
      return false;
    }
    
    setScheduleList((prev: any) => [...prev, {
      id: prev[prev.length-1].id + 1,
      date: '',
      day: '',
      startTime: '',
      endTime: '' 
    }]);
  }

  const handleRemoveScheduleList = (id: number) =>{

    if (scheduleList.length > 1)
      setScheduleList(scheduleList.filter((el: any) => (el.id !== id)));
  }

  return(
    <div css={{ position: 'relative', width: '85%' }}>
      <div css={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        margin: '0 0 16px 0'
      }}>
        <Image
          src={TalkBlackIcon}
          alt={'title icon'}
          width={20}
          height={20}
          css={{ margin: '0 4px 0 0'}}
        />스케줄 개별 등록
      </div>
      <div css={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        margin: '0 0 12px 0',

        'div': {
          textAlign: 'center'
        }
      }}>
        <div css={{ width: '10%', margin: '0 6px 0 0'}}>강습유형</div>
        <div css={{ width: '10%', margin: '0 6px 0 0'}}>강습날짜 유형</div>
        <div css={{ width: '10%', margin: '0 6px 0 0'}}>강습시간</div>
        <div css={{ width: '10%', margin: '0 6px 0 0'}}>주 강습횟수</div>
        <div css={{ width: '10%', margin: '0 6px 0 0'}}>강습코치</div>
        <div css={{ width: '10%', margin: '0 6px 0 0'}}>코트(장소)</div>
        <div css={{ width: '15%', margin: '0 6px 0 0'}}>스케줄 등록유형</div>
        <div css={{ width: '20%', }}>강습시간</div>
      </div>
      {scheduleList.map((item: any, index: number) => {
        return(
          <div
            key={index}
            css={{
              position: 'relative'
            }}
          >
            <InputContainer>
              <Select
                name={'coach'}
                width={'10%'}
                minWidth={'auto'}
                height={'40px'}
                padding={'0 0 0 8px'}
                margin={'0 6px 0 0'}
                defaultValue={'default'}
              >
                <option value={'default'}>정규레슨</option>
                <option value={'default'}>보강레슨</option>
              </Select>
              <Select
                name={'coach'}
                width={'10%'}
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
                width={'10%'}
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
                width={'10%'}
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
                width={'10%'}
                height={'40px'}
                padding={'0 0 0 8px'}
                margin={'0 6px 0 0'}
                defaultValue={'default'}
              >
                <option value={'default'}>코치 선택</option>
              </Select>
              <Select
                name={'coach'}
                width={'10%'}
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
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div css={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <TimeRange
                  setScheduleList={setScheduleList}
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
                  {index > 0 &&
                    <Image
                      src={RemoveIcon}
                      alt={'remove iocn'}
                      width={24}
                      height={24}
                      css={{
                        cursor: 'pointer',
                        margin: '0 0 0 4px'
                      }}
                      onClick={() => handleRemoveScheduleList(item.id)}
                    />
                  }
                </div>
              </div>
            </InputContainer>
          </div>
        )
      })}
    </div>
  )
}

const InputContainer = styled.div({
  position: 'relative',
  margin: '0 0 16px 0',
  display: 'flex',
  alignItems: 'center',
});

export default ScheduleComponentModalEachRegister;