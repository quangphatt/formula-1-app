import React from 'react';
import { View } from 'react-native';
import { useCircuit } from '@hooks';
import { CircuitItem } from '@components/circuit/CircuitItem';
import Header from '@components/Header';
import { ListSearch } from '@components/ListSearch';

type CircuitsScreenProps = {
  navigation: any;
};

const CircuitsScreen = ({ navigation }: CircuitsScreenProps) => {
  const { circuits } = useCircuit();

  const renderItem = ({ item }: { item: any }) => {
    return <CircuitItem key={item.id} data={item} navigation={navigation} />;
  };

  const filterData = (searchText: string) => {
    if (!circuits?.length) {
      return [];
    }
    return circuits.filter((item: any) =>
      item.name.toUpperCase().includes(searchText.toUpperCase()),
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="Circuits" />
      <ListSearch
        filterData={filterData}
        renderItem={renderItem}
        estimatedItemSize={56}
      />
    </View>
  );
};

export default CircuitsScreen;
