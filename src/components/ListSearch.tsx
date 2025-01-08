import React, { useState, useRef, type FC } from 'react';
import { View } from 'react-native';
import { FlashList, ListRenderItem } from '@shopify/flash-list';
import { Input, Text } from '@rneui/themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type ListSearchProps = {
  filterData: (searchText: string) => any;
  renderItem: ListRenderItem<any>;
  initialNumToRender?: number;
};

export const ListSearch = ({
  filterData,
  renderItem,
  initialNumToRender = 7,
}: ListSearchProps) => {
  const [searchText, setSearchText] = useState('');
  const insets = useSafeAreaInsets();
  const listRef = useRef(null);

  const data = filterData(searchText);

  return (
    <View style={{ flex: 1 }}>
      <Input
        value={searchText}
        onChangeText={setSearchText}
        // textInputProps={{
        //   placeholder: 'Search by Name...',
        // }}∂
      />
      <FlashList
        ref={listRef}
        data={data}
        renderItem={renderItem}
        // initialNumToRender={initialNumToRender}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={{
          padding: 10,
          paddingBottom: insets.bottom + 10,
          // gap: 5,
        }}
      />
      {/* {data.length > initialNumToRender && (
        <ButtonScrollToTop listRef={listRef} />
      )} */}
    </View>
  );
};

const ListEmptyComponent = () => {
  return (
    <Text
      style={{
        textAlign: 'center',
      }}
    >
      List Empty!
    </Text>
  );
};
