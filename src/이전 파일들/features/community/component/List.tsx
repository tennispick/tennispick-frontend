import { NoResult } from '../../../components';

type Props = {
  data?: Array<{ [key: string]: string | number }>;
};

const NoticeList = ({}: Props) => {
  return <NoResult description={'작성된 공지사항이 없어요.'} />;
};

export default NoticeList;
