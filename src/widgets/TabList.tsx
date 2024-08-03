import { CSSObject } from '@emotion/react';
import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { SetStateAction } from '../types';

type TabContextType = {
  activeKey: string;
  setActiveKey: SetStateAction<string>;
};

type TabsProps = {
  defaultActiveKey: string;
} & PropsWithChildren;

type PanelProps = {
  activeKey: string;
} & PropsWithChildren;

const defaultTabContext = {
  activeKey: '',
  setActiveKey: () => {},
};

const TabContext = createContext<TabContextType>(defaultTabContext);

const TabList = () => {
  return {
    Tabs,
    Panel,
  };
};

const Tabs = ({ defaultActiveKey, children }: TabsProps) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);

  return (
    <TabContext.Provider value={{ activeKey, setActiveKey }}>
      <ul
        css={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid var(--grey100)',
        }}
      >
        {children}
      </ul>
    </TabContext.Provider>
  );
};

const Panel = ({ activeKey: panelKey, children }: PanelProps) => {
  const { activeKey, setActiveKey } = useContext(TabContext);

  const activeStyle: CSSObject = {
    color: 'var(--black100)',
    fontWeight: '500',
    borderBottom: '2px solid var(--black100)',
  };

  const deactiveStyle = {
    color: 'var(--deactive-color)',
    borderBottom: '2px solid var(--white100)',
  };

  const onClickTabPanelHandler = () => setActiveKey(panelKey);

  return (
    <li
      key={panelKey}
      onClick={onClickTabPanelHandler}
      css={[
        activeKey === panelKey ? activeStyle : deactiveStyle,
        {
          margin: '0 24px 0 0',
          padding: '8px 0 12px 0',
          transition: 'all 0.1s',
          cursor: 'pointer',
        },
      ]}
    >
      {children}
    </li>
  );
};

export default TabList;
