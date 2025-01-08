import React from 'react';
import { Text } from '@rneui/themed';

type LineInfoProps = {
  label: string;
  value: string;
};

const LineInfo = ({ label, value }: LineInfoProps) => {
  if (!value) {
    return null;
  }

  return (
    <Text>
      <Text>{label}: </Text>
      {value}
    </Text>
  );
};

export default LineInfo;
