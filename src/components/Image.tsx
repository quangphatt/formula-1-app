import React from 'react';
import {
  View,
  Image as RNImage,
  type ImageSourcePropType,
  type ViewStyle,
} from 'react-native';
import theme from '@components/theme';
import default_img from '@assets/images/img.jpg';

type ImageProps = {
  source: ImageSourcePropType;
  width?: number;
  height?: number;
  style?: ViewStyle;
  imageStyle?: ViewStyle;
  circle?: boolean;
  borderRadius?: number;
};

export const Image = ({
  source,
  width: imageWidth,
  height: imageHeight,
  style,
  imageStyle,
  circle,
  borderRadius,
}: ImageProps) => {
  const width = imageWidth || 24;
  const height = circle ? width : imageHeight || width;

  return (
    <View
      style={{
        width,
        height,
        borderRadius: circle ? width / 2 : borderRadius || 0,
        borderWidth: 0.75,
        borderColor: theme.border_colors.secondary_border_color,
        backgroundColor: theme.background_colors.item_background_color,
        overflow: 'hidden',
        ...style,
      }}
    >
      <RNImage
        source={source}
        defaultSource={default_img}
        style={{ flex: 1,width: '100%', height: '100%', ...imageStyle }}
      />
    </View>
  );
};
