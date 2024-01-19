import React from "react";
import { STRING_WEEK_LIST, STRING_WEEK_LIST_KR } from "@features/schedule/constants/schedule";
import { WeekListToUnionType } from "@features/layer/scheduleByDate/type/schedule";
import styled from "@emotion/styled";
import { TABLE_FIRST_BLOCK_WIDTH } from "@features/constant/schedule";
import { CSS_TYPE } from "@styles/styles";
import ScheduleTableHeader from "./table/Header";
import ScheduleTableBody from "./table/Body";

type Props = {
  weekListCount: number;
  lists: WeekListToUnionType<Array<number>>;
  coach: any;
}

const ScheduleDate = ({ weekListCount, lists, coach } : Props) =>{

  const coachCount = coach.length;

  return(
    <section>
      {Object.keys(lists).map((weekDayEn) => {

        const yearLists = lists[weekDayEn];

        // const weekKrIndex = STRING_WEEK_LIST.findIndex((week) => week === weekDayEn);

        return (
          <div key={weekDayEn}>
            <ScheduleTableHeader
              dayYearList={yearLists}
              coach={coach}
            />
            <ScheduleTableBody />
          </div>
        );

        // return (
        //   <div key={`${weekDayEn}`}>
        //     <div css={{ position: 'relative', height: '32px' }}>{STRING_WEEK_LIST_KR[weekKrIndex]}요일</div>
        //     <ScheduleContainer>
        //       <thead>
        //         <tr>
        //           <th>코치</th>
        //           {Array.from({ length: weekListCount }, (_, i) => i + 1).map((week) => {
        //             return (
        //               <td
        //                 key={`${weekDayEn}-${week}`}
        //                 css={{ width: `calc((100% / ${weekListCount}) - 44px)`}}
        //               >
        //                 {coach.map((el: any) => (
        //                   <Coach
        //                     key={`${weekDayEn}-${week}-${el.id}`}
        //                     width={`calc(100% / ${coachCount})`}
        //                     backgroundColor={el.color}
        //                   >{el.name.charAt(0)}
        //                   </Coach>
        //                 ))}
        //               </td>
        //             )
        //           })}
        //         </tr>
        //         <tr key={weekDayEn}>
        //           <th>{STRING_WEEK_LIST_KR[weekKrIndex]}</th>
        //           {Object.keys(dayMonths).map((month) => {
        //             return (
        //               <React.Fragment key={`${weekDayEn}-${month}`}>
        //                 {dayMonths[Number(month)].map((day) => {
        //                   return <td key={`${weekDayEn}-${month}-${day}`} css={{ width: `calc((100% / ${weekListCount}) - 44px)` }}>{month}/{day}</td>
        //                 })}
        //               </React.Fragment>
        //             )})}
        //         </tr>
        //       </thead>
        //       <tbody>
        //         <tr>
        //           <th>야호2</th>
        //           <td>야호</td>
        //         </tr>
        //       </tbody>
        //     </ScheduleContainer>
        //   </div>
        // )
      })}
    </section>
  )
}

const ScheduleContainer = styled.table({
  position: 'relative',
  width: '100%',
  border: '1px solid var(--black100)',
  margin: '0 0 16px 0',
  fontSize: '0.9rem',
  borderSpacing: '0',

  '& th':{
    width: TABLE_FIRST_BLOCK_WIDTH,
    textAlign: 'center',
  },

  '& td':{
    textAlign: 'center'
  },

  'thead > tr > :is(th, td)':{
    borderBottom: '1px solid var(--black100)',
  }
});

const Coach = styled.div<CSS_TYPE>(
  {
    display: 'inline-block',
    color: 'var(--white100)',
    padding: '3px 2px',
    fontSize: '0.75rem',
    fontWeight: '100'
  },
  props => ({
    backgroundColor: props.backgroundColor,
    width: props.width
  })
)

export default ScheduleDate;