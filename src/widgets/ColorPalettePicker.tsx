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
  const { isOpen, onShowModal, closeModal } = useModal({
    type: 'overlay',
    children: (
      <ColorPicker
        color={color}
        onChange={setColor}
        onChangeComplete={() => closeModal()}
      />
    ),
  });

  const handleClickPaletteContainer = () =>
    isOpen ? closeModal() : onShowModal();

  return (
    <div
      className={css({
        width: '100%',
        height: '100%',
        border: '1px solid var(--grey300)',
        borderRadius: '8px',
        cursor: 'pointer',
      })}
      onClick={handleClickPaletteContainer}
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
            width: 20,
            height: 20,
            backgroundColor: color.hex,
            borderRadius: '4px',
          })}
        />
        <div>{color.hex}</div>
      </div>
    </div>
  );
};

export default ColorPalettePicker;
