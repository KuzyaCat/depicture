import { FC } from 'react';
import { View, Text, Clipboard, Alert, TouchableOpacity } from 'react-native';

import { CopyIcon } from '../../icons';

import { styles } from './address.styles';

interface IAddressProps {
  value: string;
  iconWidth: number;
  iconHeight: number;
  marginBottom?: number | string;
}

export const Address: FC<IAddressProps> = (props) => {
  const { value, iconWidth, iconHeight, marginBottom } = props;

  const onCopyPress = (address: string) => {
    Clipboard.setString(address);
    Alert.alert(
      'Success',
      'Copied to clipboard',
      []
    );
  };

  return (
    <TouchableOpacity
      style={{
        ...styles.addressContainer,
        ...(marginBottom ? { marginBottom } : {})
      }}
      onPress={() => onCopyPress(props.value)}
    >
      <Text  style={styles.addressValue}>{value}</Text>
      <CopyIcon width={iconWidth} height={iconHeight} />
    </TouchableOpacity>
  );
};
