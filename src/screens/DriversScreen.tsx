import React from 'react';
import { View } from 'react-native';
import { useDriver } from '@hooks';
import { DriverItem } from '@components/driver/DriverItem';
import { ListSearch } from '@components/ListSearch';
import Header from '@components/Header';

type DriversScreenProps = {
  navigation: any;
};

const DriversScreen = ({ navigation }: DriversScreenProps) => {
  const { drivers } = useDriver();

  const renderItem = ({ item }: { item: any }) => {
    return <DriverItem key={item.id} data={item} navigation={navigation} />;
  };

  const filterData = (searchText: string) => {
    if (!drivers?.length) {
      return [];
    }
    return drivers.filter((item: any) =>
      item.name.toUpperCase().includes(searchText.toUpperCase()),
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="Drivers" />
      <ListSearch
        filterData={filterData}
        renderItem={renderItem}
        estimatedItemSize={56}
      />
    </View>
  );
};

export default DriversScreen;
