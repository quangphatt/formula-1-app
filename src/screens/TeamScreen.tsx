import React from 'react';
import { View, ScrollView, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LineInfo from '@components/shared/LineInfo';
import Header from '@components/Header';
import { Image } from '@rneui/themed';

type TeamScreenProps = {
  route: any;
  navigation: any;
};

const TeamScreen = ({ route, navigation }: TeamScreenProps) => {
  const { data } = route.params;
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const actionLeft = () => {
    navigation.navigate('Teams');
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title={data.name.replace('\n', '')} actionLeft={actionLeft} />
      <ScrollView
        contentContainerStyle={{
          padding: 10,
          paddingBottom: insets.bottom + 10,
          gap: 5,
        }}
      >
        <Image
          source={{ uri: data.logo }}
          width={width * 0.6}
          height={width * 0.4}
          style={{
            alignSelf: 'center',
            // backgroundColor: theme.colors.white_color,
          }}
          resizeMode="contain"
        />
        <LineInfo label="Name" value={data.name.replace('\n', '')} />
        <LineInfo label="Base" value={data.base} />
        <LineInfo label="First Team Entry" value={data.first_team_entry} />
        <LineInfo
          label="World Championships"
          value={data.world_championships}
        />
        {!!data.highest_race_finish.position && (
          <LineInfo
            label="Highest Race Finish"
            value={`At position ${data.highest_race_finish.position} by number ${data.highest_race_finish.number}`}
          />
        )}
        <LineInfo label="Pole Positions" value={data.pole_positions} />
        <LineInfo label="Fastest Laps" value={data.fastest_laps} />
        <LineInfo label="President" value={data.president} />
        <LineInfo label="Director" value={data.director} />
        <LineInfo label="Technical Manager" value={data.technical_manager} />
        <LineInfo label="Chassis" value={data.chassis} />
        <LineInfo label="Engine" value={data.engine} />
        <LineInfo label="Tyres" value={data.tyres} />
      </ScrollView>
    </View>
  );
};

export default TeamScreen;
