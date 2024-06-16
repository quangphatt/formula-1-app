import React from 'react';
import { View } from 'react-native';
import { Header, TeamItem, ListSearch } from '@components';
import { useTeam } from '@hooks';

const TeamsScreen = () => {
  const { teams, isLoading } = useTeam();

  const renderItem = ({ item, index }) => {
    return <TeamItem key={item.id} data={item} />;
  };

  const filterData = (searchText) => {
    if (!teams?.length) return [];
    return teams.filter((item) =>
      item.name.toUpperCase().includes(searchText.toUpperCase()),
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="Teams" />
      <ListSearch filterData={filterData} renderItem={renderItem} />
    </View>
  );
};

export default TeamsScreen;
