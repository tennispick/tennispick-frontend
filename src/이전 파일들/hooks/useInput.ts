import { ChangeEvent, useCallback, useState } from 'react';

const useInput = (initData: any) => {
  const [data, setData] = useState(initData);

  const handler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      if (data[name] instanceof Object) {
        const prevData = data;

        if (prevData[name].isRequired !== undefined) {
          prevData[name] = {
            value: value,
            isRequired: value === '' ? true : false,
          };
        } else {
          prevData[name] = {
            value: value,
          };
        }
        setData({ ...prevData });
      } else {
        setData({
          ...data,
          [name]: value,
        });
      }
    },
    [data, setData],
  );

  return [data, handler, setData];
};

export default useInput;
