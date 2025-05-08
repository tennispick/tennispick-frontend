import { css } from "styled-system/css";
import MenuIcon from '@/public/icons/icon_menu.svg'
import Image from "next/image";
import { Flex } from "styled-system/jsx";

const Header = () => {
  return (
    <header
      className={css({
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '60px',
        backgroundColor: 'var(--white)',
        padding: '0 24px',
        borderBottom: '1px solid var(--grey110)',
      })}
    >
      <Flex gap="5">
        <Image src={MenuIcon} alt="menu" width={20} height={20}/>
        테니스픽 고양시 지점
      </Flex>
      <div className={css({ backgroundColor: 'var(--grey450)', padding: '10px 12px', borderRadius: '8px' })}>admin@admin.com</div>
    </header>
  )
};

export default Header;