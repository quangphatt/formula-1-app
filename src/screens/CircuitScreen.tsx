import React from 'react';
import { View, ScrollView, useWindowDimensions } from 'react-native';
import { Header, Image, TextBody } from '@components';
import { navigate } from '@navigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CircuitScreen = ({ route }) => {
  const { data } = route.params;
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const actionLeft = () => {
    navigate('Circuits');
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title={data.name} actionLeft={actionLeft} />
      <ScrollView
        contentContainerStyle={{
          padding: 10,
          paddingBottom: insets.bottom + 10,
          gap: 5,
        }}
      >
        <Image
          source={{ uri: data.image }}
          width={'100%'}
          height={width * 0.5}
          style={{
            alignSelf: 'center',
          }}
          resizeMode="contain"
        />
        <LineInfo label="Name" value={data.name} />
        <LineInfo
          label="Competition"
          value={`${data.competition.name} (${data.competition.location.city}, ${data.competition.location.country})`}
        />
        <LineInfo label="First Grand Prix" value={data.first_grand_prix} />
        <LineInfo label="Laps" value={data.laps} />
        <LineInfo label="Length" value={data.length} />
        <LineInfo label="Race Distance" value={data.race_distance} />
        <LineInfo
          label="Lap Record"
          value={`${data.lap_record.time} by ${data.lap_record.driver} in ${data.lap_record.year}`}
        />
        <LineInfo label="Capacity" value={data.capacity} />
        <LineInfo label="Opened" value={data.opened} />
        <LineInfo label="Owner" value={data.onwer} />
      </ScrollView>
    </View>
  );
};

export default CircuitScreen;

const LineInfo = ({ label, value }) => {
  if (!value) return null;
  return (
    <TextBody fontSize={20}>
      <TextBody bold fontSize={20}>
        {label}:
      </TextBody>{' '}
      {value}
    </TextBody>
  );
};
