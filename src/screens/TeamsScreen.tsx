import React from 'react';
import { View } from 'react-native';
import { useTeam } from '@hooks';
import { ListSearch } from '@components/ListSearch';
import Header from '@components/Header';
import { TeamItem } from '@components/team/TeamItem';

type TeamsScreenProps = {
  navigation: any;
};

const TeamsScreen = ({ navigation }: TeamsScreenProps) => {
  const { teams } = useTeam();

  const renderItem = ({ item }: { item: any }) => {
    return <TeamItem key={item.id} data={item} navigation={navigation} />;
  };

  const filterData = (searchText: string) => {
    if (!teams?.length) {
      return [];
    }
    return teams.filter((item: any) =>
      item.name.toUpperCase().includes(searchText.toUpperCase()),
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="Teams" />
      <ListSearch
        filterData={filterData}
        renderItem={renderItem}
        estimatedItemSize={56}
      />
    </View>
  );
};

export default TeamsScreen;
