import React, { useEffect, useState, useRef } from 'react';
import { View, FlatList } from 'react-native';
import {
  Text,
  Header,
  ButtonScrollToTop,
  SearchTextInput,
  CompetitionItem,
} from '@components';
import theme from '@components/theme';
import { getCompetitions } from '@services/api';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CompetitionsScreen = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const insets = useSafeAreaInsets();
  const listRef = useRef(null);

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

  const filtedData = data.filter((item) =>
    item.name.toUpperCase().includes(searchText.toUpperCase()),
  );

  return (
    <View style={{ flex: 1 }}>
      <Header title="Competitions" />
      <SearchTextInput
        searchText={searchText}
        setSearchText={setSearchText}
        textInputProps={{
          placeholder: 'Search by Competition Name...',
        }}
      />
      <FlatList
        ref={listRef}
        data={filtedData}
        renderItem={renderItem}
        initialNumToRender={7}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={{
          padding: 10,
          paddingBottom: insets.bottom + 10,
          gap: 5,
        }}
      />
      {filtedData.length > 7 && <ButtonScrollToTop listRef={listRef} />}
    </View>
  );
};

export default CompetitionsScreen;

const ListEmptyComponent = () => {
  return (
    <Text
      style={{
        textAlign: 'center',
      }}
    >
      No Competitions Found!
    </Text>
  );
};
