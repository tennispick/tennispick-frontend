import useModal from '@hooks/useModal';
import { ColorPicker, IColor } from 'react-color-palette';
import 'react-color-palette/css';

type Props = {
  color: IColor;
  setColor: (color: IColor) => void;
};

const ColorPalettePicker = ({ color, setColor }: Props) => {
  const { isOpen, handleShowModal, handleCloseModal } = useModal({
    type: 'overlay',
    children: (
      <ColorPicker
        color={color}
        onChange={setColor}
        onChangeComplete={() => handleCloseModal()}
      />
    ),
  });

  const handlePaletteContainerClick = () =>
    isOpen ? handleCloseModal() : handleShowModal();

  return (
    <div
      className="h-full w-full cursor-pointer rounded-lg border border-[var(--grey300)]"
      onClick={handlePaletteContainerClick}
    >
      <div className="flex h-full items-center gap-2 pl-2.5">
        <div
          className="h-5 w-5 rounded"
          style={{ backgroundColor: color.hex }}
        />
        <div>{color.hex}</div>
      </div>
    </div>
  );
};

export default ColorPalettePicker;
