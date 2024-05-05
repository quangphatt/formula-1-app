import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '@components/theme';

export type IconProps = {
  name: string;
  size: number;
  color: string;
  type:
    | 'AntDesign'
    | 'FontAwesome'
    | 'FontAwesome5'
    | 'FontAwesome6'
    | 'Ionicons'
    | 'MaterialCommunityIcons';
};

export const Icon = ({
  name,
  size = 14,
  color = theme.text_colors.secondary_text_color,
  type = 'FontAwesome6',
}: IconProps) => {
  const iconProps = { name, size, color };

  switch (type) {
    case 'AntDesign':
      return <AntDesign {...iconProps} />;
      break;
    case 'FontAwesome':
      return <FontAwesome {...iconProps} />;
      break;
    case 'FontAwesome5':
      return <FontAwesome5 {...iconProps} />;
      break;
    case 'Ionicons':
      return <Ionicons {...iconProps} />;
      break;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons {...iconProps} />;
      break;
    default:
      return <FontAwesome6 {...iconProps} />;
      break;
  }
};
