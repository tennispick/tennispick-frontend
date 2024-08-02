import { CSSObject } from "@emotion/react";
import { PropsWithChildren, createContext, useContext, useState } from "react";

const defaultTabContext = {
  activeKey: '',
  setActiveKey: (key: string) => {},
};

const TabContext = createContext(defaultTabContext);

type TabsProps = {
  defaultActiveKey: string;
} & PropsWithChildren;

type PanelProps = {
  activeKey: string;
} & PropsWithChildren;

const TabList = () => {
  console.log(TabContext);

  return {
    Tabs,
    Panel
  };
};

const Tabs = ({ defaultActiveKey, children }: TabsProps) => {

  const [activeKey, setActiveKey] = useState(defaultActiveKey);

  return (
    <TabContext.Provider
      value={{ activeKey, setActiveKey}}
    >
      <ul
        css={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {children}
      </ul>
    </TabContext.Provider>
  )
};

const Panel = ({ activeKey: panelKey, children }: PanelProps) => {

  const { activeKey, setActiveKey } = useContext(TabContext);

  const activeStyle: CSSObject = {
    color: 'var(--black100)',
    fontWeight: '500',
    borderBottom: '2px solid var(--black100)'
  }

  const deactiveStyle = {
    color: 'var(--deactive-color)'
  }

  const onClickTabPanelHandler = () => setActiveKey(panelKey);

  return (
    <li
      key={panelKey}
      onClick={onClickTabPanelHandler}
      css={activeKey === panelKey ? activeStyle : deactiveStyle}
    >{children}</li>
  )
}

export default TabList;