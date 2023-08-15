import { ReactNode } from "react";

interface CardListProps{
  list: Array<{ [key:string] : string | number }>;
  children: ReactNode;
}

const CardList = ({ list, children }: CardListProps) =>{

  return(
    <li
      css={{
        position: "relative",
        width: "calc((100% - 112px) / 6)",
        minHeight: "390px",
        filter: "drop-shadow(1px 1px 25px rgba(132, 132, 132, 0.08))",
        background: "linear-gradient(135deg, #ffffff, #ffffff)",
        borderRadius: "25px",
        margin: "12px 0 0 0",

        ":nth-of-type(2n)":{
          margin: "12px 16px 0 16px"
        },

        ":nth-of-type(6n+1)":{
          marginLeft: "16px"
        }
      }}
    >
      {children}
    </li>
  )
}

export default CardList;