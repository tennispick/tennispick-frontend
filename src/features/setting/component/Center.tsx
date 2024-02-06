import ToggleInput from '@components/common/ToggleInput';
import { centerToggleList } from '../data/tabLists';

const SettingCenter = () => {
  const toggleList = centerToggleList;

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

export default SettingCenter;
