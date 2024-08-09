import Image, { StaticImageData } from "next/image";

type Props = {
  icon: string | StaticImageData;
  title: string;
  value: string;
}

const ItemRow = ({ icon, title, value }: Props) => {
  return (
    <li
      key={title}
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '0 0 24px 0'
      }}
    >
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <Image
          src={icon}
          alt={title}
        />
        {title}
      </div>
      {value}
    </li>
  )
};

export default ItemRow;