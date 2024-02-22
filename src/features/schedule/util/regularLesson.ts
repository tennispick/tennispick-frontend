import { SetStateAction } from "@/types/index";
import { CommonListKeyType, AllFormListKeyType, IndividualFormListKeyType, TDataCommonList } from "../type/data.type";

const transFormSelectList = <T>(setOriginData: SetStateAction<TDataCommonList[]>, type: CommonListKeyType | AllFormListKeyType | IndividualFormListKeyType, newData: T[] | undefined) =>{

  if (!newData || newData.length === 0) return;

  setOriginData((prev) => {
    return prev.map((item) => {
      if (item.type === type) {
        return {
          ...item,
          list: newData.map((item: any) => {
            return {
              value: type === 'lesson' ? item.lessonId : item.id,
              label: type === 'lesson' ? item.lessonName : item.name,
            }
          })
        }
      }
      return item;
    });
  });
};

export {
  transFormSelectList
}