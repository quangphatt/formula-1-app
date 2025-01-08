import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
  const styles = useStyles();
  const navigation = useNavigation();

  const onBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <Pressable style={styles.container} onPress={onBack}>
      <Icon name="chevron-left" type="material-community" size={40} />
    </Pressable>
  );
};

export default BackButton;

const useStyles = () => {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      left: 10,
    },
  });
};
