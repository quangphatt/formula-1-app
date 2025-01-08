import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, useTheme } from '@rneui/themed';
import { Dropdown as RNEDropdown } from 'react-native-element-dropdown';
import { DropdownProps as RNEDropdownProps } from 'react-native-element-dropdown/lib/typescript/components/Dropdown/model';

type DropdownProps = RNEDropdownProps<{ label: string; value: string }> & {
  label?: string;
};

const Dropdown = ({ label, ...dropdownProps }: DropdownProps) => {
  const styles = useStyles();
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <RNEDropdown
        {...dropdownProps}
        style={styles.dropdown}
        containerStyle={styles.containerStyle}
        itemTextStyle={styles.itemTextStyle}
        itemContainerStyle={styles.itemContainerStyle}
        selectedTextStyle={styles.selectedTextStyle}
        activeColor={theme.colors.grey5}
        maxHeight={300}
      />
    </View>
  );
};

export default Dropdown;

const useStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    container: {
      marginBottom: 10,
    },
    label: {
      color: theme.colors.grey3,
      fontWeight: 'bold',
      fontSize: 16,
    },
    dropdown: {
      height: 50,
      borderWidth: 1,
      borderColor: theme.colors.grey5,
      borderRadius: 16,
      paddingHorizontal: 8,
      color: theme.colors.black,
    },
    containerStyle: {
      borderWidth: 1,
      borderColor: theme.colors.grey5,
      borderRadius: 16,
      overflow: 'hidden',
      backgroundColor: theme.colors.background,
    },
    itemTextStyle: {
      color: theme.colors.black,
    },
    itemContainerStyle: {
      borderWidth: 0,
    },
    selectedTextStyle: {
      color: theme.colors.black,
      paddingHorizontal: 5,
    },
  });
};
