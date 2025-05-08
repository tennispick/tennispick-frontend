import { SetStateAction } from 'src/이전 파일들/types/index';
import { commonList } from '@/이전 파일들/features/schedule/data/commonList';
import {
  CommonListKeyType,
  AllFormListKeyType,
  IndividualFormListKeyType,
  TDataCommonList,
} from '../type/data.type';

const transFormSelectList = <T>(
  setOriginData: SetStateAction<TDataCommonList[]>,
  type: CommonListKeyType | AllFormListKeyType | IndividualFormListKeyType,
  newData: T[] | undefined,
) => {
  const targetTypeDefaultList = commonList.find((el) => el.type === type)?.list;

  if (!newData || newData.length === 0) {
    setOriginData((prev) =>
      prev.map((item) =>
        item.type === type ? { ...item, list: targetTypeDefaultList } : item,
      ),
    );
    return;
  }

  setOriginData((prev) =>
    prev.map((item) => {
      if (item.type === type) {
        const updatedList = newData.map((item: any) => ({
          value: type === 'lesson' ? (item as any).lessonId : item.id,
          label: type === 'lesson' ? (item as any).lessonName : item.name,
        }));
        return { ...item, list: updatedList };
      }
      return item;
    }),
  );
};

export { transFormSelectList };
