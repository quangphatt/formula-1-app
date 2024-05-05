import styled from 'styled-components/native';

export const Text = styled.Text`
  font-style: normal;
  color: ${(props) =>
    props.color ||
    (props.primary
      ? props.theme.text_colors.primary_text_color
      : props.theme.text_colors.secondary_text_color)};
  text-align: ${(props) => props.align || 'left'};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`;

export const TextH1 = styled(Text)`
  font-size: ${(props) => props.theme.font_size.xxx_large};
`;

export const TextH2 = styled(Text)`
  font-size: ${(props) => props.theme.font_size.xx_large};
`;

export const TextH3 = styled(Text)`
  font-size: ${(props) =>
    props.fontSize ? props.fontSize + 'px' : props.theme.font_size.x_large};
`;

export const TextH4 = styled(Text)`
  font-size: ${(props) =>
    props.fontSize ? props.fontSize + 'px' : props.theme.font_size.large};
`;

export const TextBody = styled(Text)`
  font-size: ${(props) =>
    props.fontSize ? props.fontSize + 'px' : props.theme.font_size.medium};
`;

export const TextSubBody = styled(Text)`
  font-size: ${(props) =>
    props.fontSize ? props.fontSize + 'px' : props.theme.font_size.x_small};
`;
