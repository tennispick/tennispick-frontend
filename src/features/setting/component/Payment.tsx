import ToggleInput from '@components/common/ToggleInput';
import { paymentToggleList } from '../data/tabLists';

const SettingPayment = () => {
  const toggleList = paymentToggleList;

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

export default SettingPayment;
