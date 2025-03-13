import React, { useState, useRef } from 'react';
import { View } from 'react-native';
import { FlashList, ListRenderItem } from '@shopify/flash-list';
import { Input, Text, useTheme } from '@rneui/themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Icon } from '@rneui/base';

type ListSearchProps = {
  filterData: (searchText: string) => any;
  renderItem: ListRenderItem<any>;
  estimatedItemSize?: number;
  showsVerticalScrollIndicator?: boolean;
};

export const ListSearch = ({
  filterData,
  renderItem,
  estimatedItemSize = 60,
  showsVerticalScrollIndicator = false,
}: ListSearchProps) => {
  const [searchText, setSearchText] = useState('');
  const insets = useSafeAreaInsets();
  const listRef = useRef(null);
  const { theme } = useTheme();
  const data = filterData(searchText);

  return (
    <View style={{ flex: 1, paddingTop: 10 }}>
      <Input
        value={searchText}
        onChangeText={setSearchText}
        containerStyle={{ paddingHorizontal: 10 }}
        inputContainerStyle={{
          borderWidth: 1,
          borderRadius: 10,
          borderColor: theme.colors.grey4,
          paddingHorizontal: 10,
        }}
        placeholder="Search..."
        leftIcon={<Icon name="search" size={24} />}
      />
      <FlashList
        ref={listRef}
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingBottom: insets.bottom,
        }}
        estimatedItemSize={estimatedItemSize}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      />
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
