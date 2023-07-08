import { PropsWithChildren, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps extends PropsWithChildren{
  id: string;
};

const Portal = ({ id, children }: PortalProps) =>{

  const [mount, setMount] = useState<boolean>(false);
  const element = typeof window !== "undefined" && document.querySelector(id);

  useEffect(() => {
    setMount(true);

    return () => setMount(false);
  }, [])

  return (element && mount && children) ? createPortal(children, element) : null;
}

export default Portal;