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
import { flex } from 'styled-system/patterns';
import { css } from 'styled-system/css';

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
      className={flex({
        height: '2.875rem',
        alignItems: 'center',
        borderBottom: '1px solid var(--grey100)',
      })}
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

  const activeStyle = css.raw({
    color: 'var(--black100)',
    fontWeight: 500,
    borderBottom: '2px solid var(--black100)',
  });

  const deactiveStyle = css.raw({
    color: 'var(--deactive-color)',
    borderBottom: '2px solid var(--white100)',
  });

  const onClickTabPanelHandler = () => setActiveKey(panelKey);

  const style = activeKey === panelKey ? activeStyle : deactiveStyle;

  return (
    <li
      key={panelKey}
      onClick={onClickTabPanelHandler}
      className={css(
        {
          height: '2.875rem',
          margin: '0 24px 0 0',
          padding: '8px 0 12px 0',
          transition: 'all 0.1s',
          cursor: 'pointer',
        },
        style,
      )}
    >
      {children}
    </li>
  );
};

const TabPanels = ({
  children,
  ...props
}: PropsWithChildren & React.ComponentPropsWithoutRef<'div'>) => {
  const { className, ...rest } = props;

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

const TabPanel = ({
  activeKey: panelKey,
  children,
  ...props
}: PropsWithChildren<PanelProps> & React.ComponentPropsWithoutRef<'div'>) => {
  const { className, ...rest } = props;
  const { activeKey } = useContext(TabContext);
  const isActive = activeKey === panelKey;

  return (
    <>
      {isActive && (
        <div
          className={className}
          role={'tabpanel'}
          data-tab={panelKey}
          {...rest}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Tab;
