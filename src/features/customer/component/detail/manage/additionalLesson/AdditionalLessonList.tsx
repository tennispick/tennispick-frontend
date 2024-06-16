import ManageListRow from '../ListRow';
import { CustomerAdditionalLessonListData } from '@features/customer/type/customer.type';

type Props = {
  data: CustomerAdditionalLessonListData[];
};

const AdditionalLessonList = ({ data }: Props) => {
  return (
    <>
      <div
        css={{
          height: '28px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          fontSize: '0.9rem',
          padding: '6px 8px',
          gap: '2px',
        }}
      >
        <div css={{ width: '15%' }}>코트</div>
        <div css={{ width: '15%' }}>코치</div>
        <div css={{ width: '30%' }}>날짜</div>
        <div css={{ width: '20%' }}>시작시간</div>
        <div css={{ width: '20%' }}>종료시간</div>
      </div>
      <div
        css={{
          height: 'calc(100% - 28px)',
          padding: '8px 0',
          overflowY: 'auto',
          fontSize: '0.9rem',
        }}
      >
        {data.map((item, index) => {
          const {
            id,
            courtName,
            coachName,
            originDate,
            originStartTime,
            originEndTime,
            additionalDate,
            additionalStartTime,
            additionalEndTime,
          } = item;

          return (
            <ManageListRow key={`${index}-${id}`}>
              <div css={{ width: '15%' }}>{courtName}</div>
              <div css={{ width: '15%' }}>{coachName}</div>
              <div
                css={{ width: '30%' }}
              >{`${originDate} -> ${additionalDate}`}</div>
              <div
                css={{ width: '20%' }}
              >{`${originStartTime} -> ${additionalStartTime}`}</div>
              <div
                css={{ width: '20%' }}
              >{`${originEndTime} -> ${additionalEndTime}`}</div>
            </ManageListRow>
          );
        })}
      </div>
    </>
  );
};

export default AdditionalLessonList;
