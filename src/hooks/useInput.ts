import { ChangeEvent, useCallback, useState } from "react";

const useInput = (initData: any) =>{

  const [data, setData] = useState(initData);

  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...(data),
      [name]: value,
    })
  }, [data, setData])

  return [data, handler, setData]
}

export default useInput;