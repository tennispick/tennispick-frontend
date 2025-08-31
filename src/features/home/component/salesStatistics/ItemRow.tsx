import Image, { StaticImageData } from 'next/image';

type Props = {
  icon: string | StaticImageData;
  title: string;
  value: string;
};

const ItemRow = ({ icon, title, value }: Props) => {
  return (
    <li key={title} className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <Image src={icon} alt={title} />
        {title}
      </div>
      {value}
    </li>
  );
};

export default ItemRow;
