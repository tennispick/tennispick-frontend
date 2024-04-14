import { CoachLessonListData } from '@apis/coach/coach.type';
import { transferCoachPositionType } from '@utils/switch';

type Props = {
  item: CoachLessonListData;
};

const HomeCoachCard = ({ item }: Props) => {
  const { id, name, birth, color, phone, customerLessonCount, position } = item;

  const onClickCoachHandler = () => (window.location.href = `/coach/${id}`);

  return (
    <div
      css={{
        width: 'calc(50% - 8px)',
        margin: '0 0 0px 0',
        padding: '24px 16px',
        border: '1px solid var(--grey500)',
        borderRadius: '8px',
        cursor: 'pointer',

        ':hover': {
          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        },
      }}
      onClick={onClickCoachHandler}
    >
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <div
          css={{
            width: '28px',
            height: '28px',
            lineHeight: '28px',
            borderRadius: '50%',
            backgroundColor: `var(--${color})`,
            color: 'var(--white100)',
            textAlign: 'center',
            margin: '0 12px 0 0',
            fontSize: '0.9rem',
          }}
        >
          {name.charAt(0)}
        </div>
        <span css={{ fontWeight: 600, margin: '0 8px 0 0' }}>{name}</span>
        <div
          css={{
            backgroundColor: 'var(--green200)',
            color: 'var(--white100)',
            borderRadius: '4px',
            padding: '2px 10px',
          }}
        >
          {transferCoachPositionType(position)}
        </div>
      </div>
      <div css={{ margin: '16px 0 0 0', textAlign: 'right' }}>
        <span css={{ color: 'var(--blue200)' }}>{customerLessonCount}</span>{' '}
        명의 수강생을 강습중이에요!
      </div>
    </div>
  );
};

export default HomeCoachCard;
