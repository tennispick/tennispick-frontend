import { NoResult } from '..';

type Props = {
  data?: Array<{ [key: string]: string | number }>;
};

const NoticeList = ({}: Props) => {
  return (
    <>
      <NoResult description={'작성된 공지사항이 없어요.'} margin="16px 0 0 0" />
    </>
  );
};

export default NoticeList;
