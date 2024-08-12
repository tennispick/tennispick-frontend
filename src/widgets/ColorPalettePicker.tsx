import useModal from '@hooks/useModal';
import { ColorPicker, IColor } from 'react-color-palette';
import 'react-color-palette/css';

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

  const onClickPaletteContainer = () => (isOpen ? closeModal() : onShowModal());

  return (
    <div
      css={{
        width: '100%',
        height: '100%',
        border: '1px solid var(--grey300)',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
      onClick={onClickPaletteContainer}
    >
      <div
        css={{
          display: 'flex',
          gap: '8px',
          height: '100%',
          alignItems: 'center',
          padding: '0 0 0 10px',
        }}
      >
        <div
          css={{
            width: 20,
            height: 20,
            backgroundColor: color.hex,
            borderRadius: '4px',
          }}
        />
        <div>{color.hex}</div>
      </div>
    </div>
  );
};

export default ColorPalettePicker;
