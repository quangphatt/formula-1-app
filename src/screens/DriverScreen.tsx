import React from 'react';
import { View, ScrollView, useWindowDimensions } from 'react-native';
import { Header, Image, TextBody } from '@components';
import { navigate } from '@navigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DriverScreen = ({ route }) => {
  const { data } = route.params;
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const actionLeft = () => {
    navigate('Drivers');
  };

  const getTeamsString = () => {
    if (!data.teams.length) return '';
    const groupedTeams = [{}, ...data.teams].reduce((group, _team) => {
      const { team } = _team;
      if (!team) return {};
      group[team.name] = group[team.name] ?? [];
      group[team.name].push(_team);
      return group;
    });
    delete groupedTeams.team;
    delete groupedTeams.season;
    let teamsString = '';
    Object.keys(groupedTeams).forEach((key) => {
      teamsString += `\n- ${key} (${
        groupedTeams[key].length === 1
          ? groupedTeams[key][0].season
          : `${groupedTeams[key][groupedTeams[key].length - 1].season} - ${
              groupedTeams[key][0].season
            }`
      })`;
    });
    return teamsString;
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
            backgroundColor: 'transparent',
            borderWidth: 0,
          }}
          resizeMode="contain"
        />
        <LineInfo label="Name" value={data.name} />
        <LineInfo label="Abbr" value={data.abbr} />
        <LineInfo label="Nationality" value={data.nationality} />
        {!!data.country.name && (
          <LineInfo
            label="Country"
            value={`${data.country.name} (${data.country.code})`}
          />
        )}
        <LineInfo label="Birthdate" value={data.birthdate} />
        <LineInfo label="Birthplace" value={data.birthplace} />
        <LineInfo label="Number" value={data.number} />
        <LineInfo
          label="Grands Prix Entered"
          value={data.grands_prix_entered}
        />
        <LineInfo
          label="World Championships"
          value={data.world_championships}
        />
        <LineInfo label="Podiums" value={data.podiums} />
        <LineInfo
          label="Highest Race Finish Position"
          value={data.highest_race_finish.position}
        />
        <LineInfo
          label="Highest Race Finish Number"
          value={data.highest_race_finish.number}
        />
        <LineInfo
          label="Highest Grid Position"
          value={data.highest_grid_position}
        />
        <LineInfo label="Career Points" value={data.career_points} />
        <LineInfo label="Teams" value={getTeamsString()} />
      </ScrollView>
    </View>
  );
};

export default DriverScreen;

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
