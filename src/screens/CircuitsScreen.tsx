import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Header, CircuitItem, ListSearch } from '@components';
import { getCircuits } from '@services/api';

const CircuitsScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await getCircuits();
    if (result.status === 200) {
      const _data = result?.data?.response ?? [];
      setData(_data);
    }
  };

  const renderItem = ({ item, index }) => {
    return <CircuitItem key={item.id} data={item} />;
  };

  const filterData = (searchText) => {
    return data.filter((item) =>
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
