import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const useMobile = () => {
  const isDesktop = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isDesktop);
  }, [isDesktop]);

  return isMobile;
};

export default useMobile;
