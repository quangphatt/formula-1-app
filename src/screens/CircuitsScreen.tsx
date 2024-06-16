import React from 'react';
import { View } from 'react-native';
import { Header, CircuitItem, ListSearch } from '@components';
import { useCircuit } from '@hooks';

const CircuitsScreen = () => {
  const { circuits, isLoading } = useCircuit();

  const renderItem = ({ item, index }) => {
    return <CircuitItem key={item.id} data={item} />;
  };

  const filterData = (searchText) => {
    if (!circuits?.length) return [];
    return circuits.filter((item) =>
      item.name.toUpperCase().includes(searchText.toUpperCase()),
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="Circuits" />
      <ListSearch filterData={filterData} renderItem={renderItem} />
    </View>
  );
};

export default CircuitsScreen;
