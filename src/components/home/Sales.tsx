import DashBoardItem from '@components/common/DashBoardItem';
import styled from '@emotion/styled';
import NoResult from '@components/common/NoResult';
import { useState } from 'react';

const Sales = () => {
  const [data] = useState([]);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  return (
    <DashBoardItem
      title={`${year}.${month}.${date} 까지의 매출현황이에요!`}
      width={'calc(60% - 12px)'}
      height={'0'}
      minHeight={'65vh'}
    >
      {data.length > 0 ? (
        <DataContainer>목록이 있을 때</DataContainer>
      ) : (
        <NoResult description={'아직 매출이 발생하지 않았어요.'} />
      )}
    </DashBoardItem>
  );
};

const DataContainer = styled.div({});

export default Sales;
