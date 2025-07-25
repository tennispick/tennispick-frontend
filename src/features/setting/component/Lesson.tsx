import ToggleInput from '@/shared/components/common/ToggleInput';
import { useSettingListQuery } from '../query/settingQuery';
import Loading from '@/shared/components/common/Loading';
import { SettingListData } from '@apis/setting/setting.type';

type Props = {
  handleToggleClick: (e: React.MouseEvent<HTMLInputElement>) => void;
};

const SettingLesson = ({ handleToggleClick }: Props) => {
  const { data, isLoading } = useSettingListQuery({ type: 'lesson' });

  if (isLoading) return <Loading />;
  if (!data) return <>준비중이에요.</>;

  return (
    <div className="mt-6">
      {data &&
        data.map((configuration: SettingListData) => {
          const { id, name_kr: name, is_active: isActive } = configuration;
          return (
            <ToggleInput
              key={id}
              id={`${id}`}
              label={name}
              checked={isActive === 'Y'}
              className="mb-4"
              onClick={handleToggleClick}
            />
          );
        })}
    </div>
  );
};

export default SettingLesson;
