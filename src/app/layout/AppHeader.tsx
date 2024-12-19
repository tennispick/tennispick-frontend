import { TenDropDownMenu } from '@/shared/ui';
import Logo from '@icons/white_bg_logo.svg';

type Props = {
  name: string;
  account: string;
};

const AppHeader = ({ name, account }: Props) => {
  const menus = [
    {
      label: '로그아웃',
      handleClick: () => {
        console.log('profile');
      },
    },
  ];

  return (
    <div className="relative w-full h-[60px] border-b border-#ECECEC2 bg-primary-500">
      <div className="h-full flex items-center justify-between py-3 px-6">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="text-white font-bold">TenPick</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-white">{name}</span>
          <TenDropDownMenu
            triggerLabel={account}
            triggerClassName="px-6 py-2 bg-[#F5F5F5] rounded-lg min-w-[6rem] h-[38px]"
            menuTitle="계정 관리"
            menus={menus}
          />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
