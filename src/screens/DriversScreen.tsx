import React from 'react';
import { View } from 'react-native';
import { Header, DriverItem, ListSearch } from '@components';
import { DRIVERS } from '../data';

const DriversScreen = () => {
  const renderItem = ({ item, index }) => {
    return <DriverItem key={item.id} data={item} />;
  };

  const filterData = (searchText) => {
    return DRIVERS.filter((item) =>
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
