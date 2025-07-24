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
import clsx from 'clsx';

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

type TabListProps = {
  handleActiveKeyClick?: () => void;
} & PanelProps;

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
    SingleTabPanel,
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
      className="flex h-[2.875rem] items-center border-b border-[var(--grey100)]"
      {...rest}
    >
      {Children.map(children, (child, index) => {
        return <Fragment key={index}>{child}</Fragment>;
      })}
    </ul>
  );
};

const TabList = ({
  handleActiveKeyClick,
  activeKey: panelKey,
  children,
}: TabListProps) => {
  const { activeKey, setActiveKey } = useContext(TabContext);

  const handleTabePanelClick = () => {
    if (handleActiveKeyClick) handleActiveKeyClick();
    setActiveKey(panelKey);
  };

  const isActive = activeKey === panelKey;

  return (
    <li
      key={panelKey}
      onClick={handleTabePanelClick}
      className={clsx(
        "h-[2.875rem] mr-6 py-2 pb-3 transition-all duration-100 cursor-pointer",
        isActive 
          ? "text-[var(--black100)] font-medium border-b-2 border-[var(--black100)]"
          : "text-[var(--deactive-color)]"
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

const SingleTabPanel = ({
  stateKey,
  children,
  ...props
}: PropsWithChildren<React.ComponentPropsWithoutRef<'div'>> & {
  stateKey: string;
}) => {
  const { className, ...rest } = props;

  return (
    <div className={className} role={'tabpanel'} data-tab={stateKey} {...rest}>
      {children}
    </div>
  );
};

export default Tab;
