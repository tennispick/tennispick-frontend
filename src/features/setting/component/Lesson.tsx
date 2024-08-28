import ToggleInput from '@components/common/ToggleInput';
import { useSettingListQuery } from '../query/settingQuery';
import Loading from '@components/common/Loading';
import { SettingListData } from '@apis/setting/setting.type';
import { css } from 'styled-system/css';

type Props = {
  handleToggleClick: (e: React.MouseEvent<HTMLInputElement>) => void;
};

const SettingLesson = ({ handleToggleClick }: Props) => {
  const { data, isLoading } = useSettingListQuery({ type: 'lesson' });

  if (isLoading) return <Loading />;
  if (!data) return <>준비중이에요.</>;

  return (
    <div className={css({ margin: '24px 0 0 0' })}>
      {data &&
        data.map((configuration: SettingListData) => {
          const { id, name_kr: name, is_active: isActive } = configuration;
          return (
            <ToggleInput
              key={id}
              id={`${id}`}
              label={name}
              checked={isActive === 'Y'}
              className={css({ margin: '0 0 16px 0' })}
              onClick={handleToggleClick}
            />
          );
        })}
    </div>
  );
};

export default SettingLesson;
