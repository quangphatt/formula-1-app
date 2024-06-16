import React from 'react';
import { View } from 'react-native';
import { Header, DriverItem, ListSearch } from '@components';
import { useDriver } from '@hooks';

const DriversScreen = () => {
  const { drivers, isLoading } = useDriver();

  const renderItem = ({ item, index }) => {
    return <DriverItem key={item.id} data={item} />;
  };

  const filterData = (searchText) => {
    if (!drivers?.length) return [];
    return drivers.filter((item) =>
      item.name.toUpperCase().includes(searchText.toUpperCase()),
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="Drivers" />
      <ListSearch filterData={filterData} renderItem={renderItem} />
    </View>
  );
};

export default DriversScreen;
