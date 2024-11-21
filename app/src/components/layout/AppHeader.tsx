'use client';

import MenuIcon from '@/public/icons/icon_menu_.svg'
import TenDropDownMenu from 'app/src/shared/ui/TenDropDownMenu';

type Props = {
  name: string;
  account: string;
}

const AppHeader = ({ name, account }: Props) => {
  const menus = [
    {
      label: "로그아웃",
      handleClick: () => {
        console.log("profile")
      }
    },
  ]
  return (
    <div className="relative w-full h-[60px] bg-white border-b border-#ECECEC2">
      <div className="h-full flex items-center justify-between py-3 px-6">
        <div className="flex items-center gap-6">
          <MenuIcon />
          <span>{name}</span>
        </div>
        <TenDropDownMenu
          triggerLabel={account}
          triggerClassName="px-6 py-2 bg-[#F5F5F5] rounded-lg min-w-[6rem]"
          menuTitle="계정 관리"
          menus={menus}
        />
      </div>
    </div>
  )
}

export default AppHeader;