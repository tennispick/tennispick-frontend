import { useState } from "react";
import { NoResult } from '@components/index';

const CourtList = () =>{

  // TODO Mocks Data
  const [data, setData] = useState<Array<{ [key:string] : string | number }>>([]);

  return (
    <>
      {(data && data.length) === 0 &&
        <div
          css={{
            position: "relative",
            height: "20vh",
            borderRadius: "25px",
          }}
        ><NoResult description={"생성된 코트가 없어요."} margin="16px 0 0 0"/>
        </div>
      }
    </>
  )
}

export default CourtList;