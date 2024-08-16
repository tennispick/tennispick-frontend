import { NoResult } from '@components/index';

const SalesLists = () => {
  // TODO
  const data = [];

  return (
    <div
      css={{
        height: 'calc(100% - 14.25rem)',
        backgroundColor: 'var(--grey400)',
        borderRadius: '1.25rem',
        padding: '1rem',
      }}
    >
      {data.length === 0 ? (
        <NoResult description={'매출내역이 아직 존재하지 않아요.'} />
      ) : (
        <>데이터</>
      )}
    </div>
  );
};

export default SalesLists;
