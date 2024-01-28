import { v4 as uuidV4 } from 'uuid';

/** TabList Data */

const customer = [
  {
    id: uuidV4(),
    name: '전체',
    value: 'all',
  },
  {
    id: uuidV4(),
    name: '수강중',
    value: 'lesson',
  },
  {
    id: uuidV4(),
    name: '수강만료',
    value: 'unLesson',
  },
];

const comunity = [
  {
    id: uuidV4(),
    name: '전체',
    value: 'all',
  },
  {
    id: uuidV4(),
    name: '공지',
    value: 'notice',
  },
  {
    id: uuidV4(),
    name: '일반글',
    value: 'normal',
  },
];

export { customer as customerTabList, comunity as comunityTabList };
