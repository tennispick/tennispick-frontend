import { PropsWithChildren, createContext } from "react";

const defaultTabContext = { };

const TabContext = createContext(defaultTabContext);

const TabList = ({ children }: PropsWithChildren) => {
  console.log(TabContext);
  return (
    <TabContext.Provider value={defaultTabContext}>
      {children}
    </TabContext.Provider>
  );
};

const TabProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      provider
      {children}
    </>
  )
};

export default TabList;