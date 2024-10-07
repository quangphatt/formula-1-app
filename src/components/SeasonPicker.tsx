import React from 'react';
import { View, Text } from '@components';
import { Picker } from 'react-native-ui-lib';
import { SEASONS } from '@data';

const seasons = SEASONS.map((season) => ({
  label: season,
  value: season,
}));

type SeasonPickerProps = {
  currentSeason: number;
  onChangeSeason: () => void;
};

const SeasonPicker = ({
  currentSeason = SEASONS[0],
  onChangeSeason,
}: SeasonPickerProps) => {
  const renderItem = (item, index) => {
    return (
      <View key={item}>
        <Text>{item}</Text>
      </View>
    );
  };
  return (
    <View>
      <Picker
        // label="Season"
        placeholder="Pick a Season"
        value={currentSeason}
        placeholder={'Placeholder'}
        onChange={onChangeSeason}
        items={seasons}
      />
    </View>
  );
};

export { SeasonPicker };
