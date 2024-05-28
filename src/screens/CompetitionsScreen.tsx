import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Header, CompetitionItem, ListSearch } from '@components';
import { getCompetitions } from '@services/api';

const CompetitionsScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await getCompetitions();
    if (result.status === 200) {
      const _data = result?.data?.response ?? [];
      setData(_data);
    }
  };

  const renderItem = ({ item, index }) => {
    return <CompetitionItem key={item.id} {...item} />;
  };

  const filterData = (searchText) => {
    return data.filter((item) =>
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
