import { PageHeader, Button, CourtList, } from "@components/index";
import { EditWhiteIcon } from "@icons/index";
import { getCourtQuery } from "@queries/court";

const CourtPage = () => {

  // lessonType={tabList[tabList.findIndex(e => e.id === currentTab)].value}

  const { data }: any = getCourtQuery();

  return (
    <>
      <PageHeader title={"코트 목록"} />
      <Button
        variant={'iconBtn'}
        label={'코트 생성하기'}
        src={EditWhiteIcon}
        css={{
          border: 0,
          backgroundColor: 'var(--business-sub-color)',
          color: 'var(--basic-white-color)',
          padding: '12px 16px',
          margin: '0 12px 0 auto',
        }}
        onClick={() => alert('hello')}
      />
      {
        data && <CourtList data={data.data} />
      }
    </>
  )
};

export default CourtPage;