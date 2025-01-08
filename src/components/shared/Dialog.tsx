import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Dialog as RNEDialog, Button } from '@rneui/themed';
import { StringOmit } from '@rneui/base';

type DialogAction = {
  label: string;
  action: () => void;
  secondary?: boolean;
  color?: StringOmit<'primary' | 'secondary' | 'success' | 'error' | 'warning'>;
};

export type DialogData = {
  isOpen: boolean;
  title: string;
  content?: string;
  actions?: DialogAction[];
};

type DialogProps = {
  dialogData: DialogData;
  onClose: () => void;
};

const Dialog = ({ dialogData, onClose }: DialogProps) => {
  const styles = useStyles();

  return (
    <RNEDialog isVisible={dialogData.isOpen} onBackdropPress={onClose}>
      <RNEDialog.Title title={dialogData.title} titleStyle={styles.title} />
      {!!dialogData.content && (
        <Text style={styles.content}>{dialogData.content}</Text>
      )}
      {!!dialogData.actions?.length && (
        <View style={styles.actionWrapper}>
          {dialogData.actions.map((act, index) => (
            <Button
              key={index}
              title={act.label}
              onPress={act.action}
              type={act.secondary ? 'outline' : 'solid'}
              radius="md"
              color={
                act.color ? act.color : act.secondary ? 'secondary' : 'primary'
              }
            />
          ))}
        </View>
      )}
    </RNEDialog>
  );
};

export default Dialog;

const useStyles = () => {
  return StyleSheet.create({
    actionWrapper: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
      gap: 5,
      marginTop: 10,
    },
    title: {
      fontSize: 20,
    },
    content: {
      fontSize: 16,
    },
  });
};
