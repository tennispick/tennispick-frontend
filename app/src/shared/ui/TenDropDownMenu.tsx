import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "app/src/components/ui/dropdown-menu"

type Props = {
  triggerLabel: string;
  triggerClassName?: string;
  menuTitle?: string;
  menus: Array<{
    label: string;
    handleClick: () => void;
  }>
}

const TenDropDownMenu = ({ triggerLabel, triggerClassName, menuTitle, menus }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={triggerClassName}>{triggerLabel}</DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {menuTitle && <DropdownMenuLabel>{menuTitle}</DropdownMenuLabel>}
        <DropdownMenuSeparator />
        {menus.map((menu) => {
          return (
            <DropdownMenuItem key={menu.label} onClick={menu.handleClick}>{menu.label}</DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default TenDropDownMenu;