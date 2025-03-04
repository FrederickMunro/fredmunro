import {
  ColorResult,
  HuePicker,
} from 'react-color';
import { useColor } from './Providers/ColorProvider';

interface Props {
  isMain: boolean;
  isOpen: boolean;
}

const ColorWheel = ({ isMain, isOpen }: Props) => {
  const { setPrimaryColor, setSecondaryColor } = useColor();

  const setColor = isMain ? setPrimaryColor : setSecondaryColor;

  const handleColorChange = (color: ColorResult) => {
    setColor(color);
  }

  return (
    <div className={`color-picker-container ${isOpen ? 'visible' : 'hidden'}`}>
      <HuePicker
        color={'white'}
        onChangeComplete={handleColorChange}
      />
    </div>
  )
}

export default ColorWheel;