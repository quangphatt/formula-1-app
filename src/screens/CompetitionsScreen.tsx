import React from 'react';
import { View } from 'react-native';
import { Header, CompetitionItem, ListSearch } from '@components';
import { useCompetition } from '@hooks';

const CompetitionsScreen = () => {
  const { competitions, isLoading } = useCompetition();

  const renderItem = ({ item, index }) => {
    return <CompetitionItem key={item.id} {...item} />;
  };

  const filterData = (searchText) => {
    if (!competitions?.length) return [];
    return competitions.filter((item) =>
      item.name.toUpperCase().includes(searchText.toUpperCase()),
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="Competitions" />
      <ListSearch filterData={filterData} renderItem={renderItem} />
    </View>
  );
};

export default CompetitionsScreen;
