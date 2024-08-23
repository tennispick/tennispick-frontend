import Image, { StaticImageData } from 'next/image';
import { flex } from 'styled-system/patterns';

type Props = {
  icon: string | StaticImageData;
  title: string;
  value: string;
};

const ItemRow = ({ icon, title, value }: Props) => {
  return (
    <li
      key={title}
      className={flex({
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '0 0 24px 0',
      })}
    >
      <div
        className={flex({
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        })}
      >
        <Image src={icon} alt={title} />
        {title}
      </div>
      {value}
    </li>
  );
};

export default ItemRow;
