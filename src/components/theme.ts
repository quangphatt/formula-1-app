import { PixelRatio } from 'react-native';

const normalize_font_size = () => {
  let x_small = '12px';
  let small = '13px';
  let medium = '14px';
  let large = '16px';
  let x_large = '20px';
  let xx_large = '28px';
  let xxx_large = '36px';
  switch (PixelRatio.get()) {
    case 1:
      break;
    case 1.5:
      break;
    case 2:
      large = '16px';
      x_large = '18px';
      xx_large = '22px';
      xxx_large = '30px';
      break;
    case 3:
      break;
    case 4:
      break;
  }
  return {
    x_small,
    small,
    medium,
    large,
    x_large,
    xx_large,
    xxx_large,
  };
};

const theme = {
  colors: {
    primary_color: '#F55742',
    white_color: '#FFFFFF',
    dark_gray_color: '#999999',
    black_color: '#000000',
    success: '#21AE40',
    info: '#1C75BC',
    warning: '#FFBF30',
    danger: '#E04141',
    dark_gray_color_blur: '#99999950',
  },
  text_colors: {
    primary_text_color: '#F55742',
    secondary_text_color: '#1D232E',
    gray_text_color: '#7A7F9E',
  },
  border_colors: {
    primary_border_color: '#EEEEEE',
    secondary_border_color: '#CED4DA',
  },
  background_colors: {
    layout_background_color: '#F7F7FF',
    page_background_color: '#E5E5E5',
    box_background_color: '#00B14F0E',
    item_background_color: '#E3D8D8',
  },
  font_size: {
    x_small: normalize_font_size().x_small,
    small: normalize_font_size().small,
    medium: normalize_font_size().medium,
    large: normalize_font_size().large,
    x_large: normalize_font_size().x_large,
    xx_large: normalize_font_size().xx_large,
    xxx_large: normalize_font_size().xxx_large,
  },
};

export default theme;
