import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Header, TeamItem, ListSearch } from '@components';
import { getTeams } from '@services/api';

const TeamsScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await getTeams();
    if (result.status === 200) {
      const _data = result?.data?.response ?? [];
      setData(_data);
    }
  };

  const renderItem = ({ item, index }) => {
    return <TeamItem key={item.id} data={item} />;
  };

  const filterData = (searchText) => {
    return data.filter((item) =>
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
