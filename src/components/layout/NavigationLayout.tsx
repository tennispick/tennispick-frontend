import Link from "next/link";
import Image from 'next/image';
import styled from '@emotion/styled';
import { CSS_TYPE } from "@styles/styles";
import { NavigationList } from "src/mocks/navigation";

interface NavigationProps {
  firstPathName: string;
  isNavSpread: boolean;
}

const NavigationLayout = ({ firstPathName, isNavSpread }: NavigationProps) => {

  return (
    <NavContainer
      width={isNavSpread ? "10%" : "5%"}
      padding={isNavSpread ? "0 20px 0 0" : "0"}
    >
      <nav>
        <LogoWraaper>로고</LogoWraaper>
        <NavLists>
          {
            NavigationList && NavigationList.map((item) => {
              return (
                <Link key={item.id} href="" as={`/${item.path}`} passHref>
                  <NavList
                    isActive={isNavSpread}
                    flexDirection={isNavSpread ? "row" : "column"}
                    css={{
                      "::before": {
                        width: firstPathName === item.path ? "calc(100% + 20px)" : "0",
                      },
                    }}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={20}
                      height={20}
                    />
                    <span>{item.label}</span>
                  </NavList>
                </Link>
              )
            })
          }
        </NavLists>
      </nav>
    </NavContainer>
  )
}

const NavContainer = styled.div<CSS_TYPE>(
  {
    position: 'relative',
    height: 'calc(100vh - 48px)',
    transition: "all 0.35s ease-in-out",
    overflowY: 'scroll'
  },
  props => ({
    width: props.width,
    padding: props.padding
  })
);
const LogoWraaper = styled.div({
  minHeight: "8vh"
})
const NavLists = styled.ul({
  margin: "16px 0 0 0"
});
const NavList = styled.li<CSS_TYPE>(
  {
    display: 'flex',
    position: "relative",
    alignItems: 'center',
    fontSize: '16px',
    margin: "8px 0 8px 16px",
    cursor: "pointer",

    img: {
      zIndex: "2"
    },

    "::before": {
      transition: "width 0.25s",
      position: "absolute",
      content: "''",
      width: "0%",
      height: "100%",
      top: "0",
      left: "-12px",
      backgroundColor: "var(--business-sub-color)",
      borderRadius: "16px",
      zIndex: "1"
    },
  },
  props => ({
    flexDirection: props.flexDirection,
    padding: props.isActive ? "14px 12px 14px 0" : "16px 0",
    margin: props.isActive ? "8px 0 8px 16px" : "2px 0",

    span: {
      fontSize: props.isActive ? "16px" : "14px",
      margin: props.isActive ? "0 0 0 16px" : "4px 0 0 0",
      zIndex: "2"
    },

    "::before": {
      left: props.isActive ? "-16px" : "0",
      borderRadius: props.isActive ? "16px" : "0",
    },

    ":hover": {
      "::before": {
        width: props.isActive ? "calc(100% + 20px)" : "100%",
      },
    }
  })
);

export default NavigationLayout;