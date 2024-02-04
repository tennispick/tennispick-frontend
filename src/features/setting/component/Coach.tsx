import ToggleInput from '@components/common/ToggleInput';
import { coachToggleList } from '../data/tabLists';

const SettingCoach = () => {
  const toggleList = coachToggleList;

  const onClickToggleHandler = (id: number) => {
    console.log(id);
  };

  return (
    <div css={{ margin: '24px 0 0 0' }}>
      {toggleList.map(({ id, label }) => {
        return (
          <ToggleInput
            key={id}
            id={id}
            label={label}
            css={{
              margin: '0 0 16px 0',
            }}
            onClick={onClickToggleHandler}
          />
        );
      })}
    </div>
  );
};

export default SettingCoach;
