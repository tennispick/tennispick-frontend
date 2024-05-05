import { ChangeEvent, useState, useEffect } from "react";
import ScheduleModalSelect from "../../Select";
import { CourtListData } from "@apis/court/court.type";
import { SetStateAction } from "@/types/index";
import { IndividualFormDataProps } from "@features/schedule/type/regularLesson";

type Props = {
  index: number;
  court: string;
  data: CourtListData[];
  setFormData: SetStateAction<IndividualFormDataProps[]>;
  disabled: boolean;
}

const ScheduleModalRegularLessonIndividualScheduleCourtSelect = ({ index, court, data, setFormData, disabled }: Props) => {

  const [courtId, setCourtId] = useState(court);

  const transferCourtListFormat = (data: CourtListData[]) =>
    data.map(({ id, name }) => ({ value: `${id}`, label: name }));

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    e.stopPropagation();
    const { value } = e.target;
    setCourtId(value);

    setFormData((prev) => {
      const newFormData = [...prev];
      newFormData[index] = {
        ...newFormData[index],
        court: value,
      };
      return newFormData;
    })
  };

  useEffect(() => {
    setCourtId(court);
  }, [court])

  useEffect(() => {
    if (data && data.length > 0) {
      setFormData((prev) => {
        const newFormData = [...prev];
        newFormData[index] = {
          ...newFormData[index],
          court: data[0].id.toString(),
        };
        return newFormData;
      });
    }
  }, [data, setFormData])

  return(
    <ScheduleModalSelect
      name='court'
      data={
        data!.length > 0
          ? transferCourtListFormat(data!)
          : [{ value: '', label: '코트 선택' }]
      }
      css={{
        width: 'calc(15% - 8px)',
        margin: '0 0 0 8px'
      }}
      selected={courtId}
      onChangeHandler={onChangeHandler}
      disabled={disabled}
    />
  )
};

export default ScheduleModalRegularLessonIndividualScheduleCourtSelect;