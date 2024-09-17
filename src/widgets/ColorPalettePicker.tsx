import useModal from '@hooks/useModal';
import { ColorPicker, IColor } from 'react-color-palette';
import 'react-color-palette/css';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

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
      className={css({
        width: '100%',
        height: '100%',
        border: '1px solid var(--grey300)',
        borderRadius: '8px',
        cursor: 'pointer',
      })}
      onClick={handlePaletteContainerClick}
    >
      <div
        className={flex({
          gap: '8px',
          height: '100%',
          alignItems: 'center',
          padding: '0 0 0 10px',
        })}
      >
        <div
          className={css({
            width: '20px',
            height: '20px',
            borderRadius: '4px',
          })}
          style={{ backgroundColor: color.hex }}
        />
        <div>{color.hex}</div>
      </div>
    </div>
  );
};

export default ColorPalettePicker;
