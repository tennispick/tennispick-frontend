type Props ={
  dayYearList: {[key: string]: Array<number>};
  coach: any;
}

const ScheduleTableHeader = ({ dayYearList, coach } : Props) =>{

  return(
    <div>
      {Object.keys(dayYearList).map((year) => {

        const dayMonthList = dayYearList[year];
        console.log(dayMonthList);
        // return(
        //   <div key={year}>
        //     {dayYearList[year].map((day) => {
        //       return(
        //         <div key={day}>
        //           {day}
        //         </div>
        //       )
        //     })}
        //   </div>
        // )
        return <></>
      })};
    </div>
  )
};

export default ScheduleTableHeader