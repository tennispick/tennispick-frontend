import { CSSObject } from '@emotion/react';
import {
  HTMLAttributes,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
  Children,
  Fragment,
} from 'react';
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

const Tab = () => {
  return {
    Tabs,
    TabLists,
    TabList,
    TabPanels,
    TabPanel,
  };
};

const Tabs = ({ defaultActiveKey, children }: TabsProps) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);

  return (
    <TabContext.Provider value={{ activeKey, setActiveKey }}>
      {children}
    </TabContext.Provider>
  );
};

const TabLists = ({
  children,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLUListElement>>) => {
  return (
    <ul
      css={{
        height: '2.875rem',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid var(--grey100)',
      }}
      {...rest}
    >
      {Children.map(children, (child, index) => {
        return <Fragment key={index}>{child}</Fragment>;
      })}
    </ul>
  );
};

const TabList = ({ activeKey: panelKey, children }: PanelProps) => {
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
          height: '2.875rem',
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

const TabPanels = ({ children, ...rest }: PropsWithChildren) => {
  return <div {...rest}>{children}</div>;
};

const TabPanel = ({
  activeKey: panelKey,
  children,
  ...rest
}: PropsWithChildren<PanelProps>) => {
  const { activeKey } = useContext(TabContext);
  const isActive = activeKey === panelKey;

  return (
    <>
      {isActive && (
        <div role={'tabpanel'} data-tab={panelKey} {...rest}>
          {children}
        </div>
      )}
    </>
  );
};

export default Tab;
