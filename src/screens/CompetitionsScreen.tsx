import React from 'react';
import { View } from 'react-native';
import { useCompetition } from '@hooks';
import { CompetitionItem } from '@components/competition/CompetitionItem';
import Header from '@components/Header';
import { ListSearch } from '@components/ListSearch';

type CompetitionsScreenProps = {
  navigation: any;
};

const CompetitionsScreen = ({ navigation }: CompetitionsScreenProps) => {
  const { competitions } = useCompetition();

  const renderItem = ({ item }: { item: any }) => {
    return <CompetitionItem key={item.id} {...item} navigation={navigation} />;
  };

  const filterData = (searchText: string) => {
    if (!competitions?.length) {
      return [];
    }
    return competitions.filter((item: any) =>
      item.name.toUpperCase().includes(searchText.toUpperCase()),
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="Competitions" />
      <ListSearch
        filterData={filterData}
        renderItem={renderItem}
        estimatedItemSize={56}
      />
    </View>
  );
};

export default CompetitionsScreen;
