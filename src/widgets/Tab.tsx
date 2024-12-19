import {
  HTMLAttributes,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
  Children,
  Fragment,
} from 'react';
import { SetStateAction } from '../이전 파일들/types';
import { cn } from '@/이전 파일들/lib/utils';

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
  setActiveKey: () => { },
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
    <ul className="flex h-12 items-center border-b border-gray-100" {...rest}>
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

  const activeStyle = 'text-black100 font-medium border-b-2 border-black100';

  const deactiveStyle = 'text-black100 font-medium border-b-2 border-black100';

  const handleTabePanelClick = () => {
    if (handleActiveKeyClick) handleActiveKeyClick();
    setActiveKey(panelKey);
  };

  const style = activeKey === panelKey ? activeStyle : deactiveStyle;

  return (
    <li
      key={panelKey}
      onClick={handleTabePanelClick}
      className={cn('h-12 px-0 pt-2 pb-3 transition-all cursor-pointer', style)}
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
